---
name: image-optimizer
description: 저장소의 이미지를 웹용으로 최적화한다(WebP 변환·해상도 축소·GIF 처리). PNG/JPG/대형 WebP를 WebP로 재인코딩하고, 화면 캡처형 대형 GIF는 정적 프레임으로, 짧은 데모 GIF는 애니메이션 WebP로 줄인 뒤 본문의 이미지 참조까지 실제 파일명과 맞춘다. 사용자가 "이미지 최적화/용량 줄여/스크린샷 최적화/optimize images"를 요청하거나, public/tool-screenshots 같은 정적 이미지 디렉터리가 커졌을 때 사용한다.
allowed-tools: [Bash, Read, Edit, Glob, Grep]
---

# Image Optimizer

저장소의 정적 이미지를 **WebP 중심으로 최적화**하는 워크플로우. 카탈로그·문서용 스크린샷처럼 "웹에 그대로 서빙되는 이미지"를 대상으로, 화질 손실을 최소화하면서 용량을 크게 줄이고, Markdown 본문의 이미지 참조가 깨지지 않도록 정리한다.

## 언제 쓰는가

- "이미지 최적화해줘", "용량 줄여줘", "스크린샷 최적화" 같은 요청
- `public/` 등 정적 이미지 디렉터리 용량이 커졌을 때
- 새 스크린샷을 다운로드해 추가한 직후 정리 단계

단순히 이미지 1장을 잠깐 줄이는 게 아니라, 디렉터리 전체를 규약에 맞춰 정돈할 때 쓴다.

## 최적화 정책 (기본값)

- **포맷**: 정적 이미지는 WebP(`-q 82`). 짧은 데모 GIF는 애니메이션 WebP. SVG는 그대로 둔다(벡터).
- **해상도**: 가로 최대 **1600px** (그 이하는 유지, 절대 업스케일 금지 — `-resize_mode down_only`).
- **용량 목표**: 한 장당 대략 ≤ 850KB. 화면 캡처/평면 UI는 보통 수십~수백 KB로 떨어진다.
- **GIF**:
  - 프레임 수백 개짜리 **화면 녹화형 대형 GIF**는 대표 정적 프레임 1장(WebP)으로 대체하는 게 용량상 최선이다. 애니메이션 가치가 큰지 사용자에게 확인하면 좋다.
  - **짧은 데모 GIF**(작고 프레임 적음)는 애니메이션을 살려 `gif2webp`로 변환한다.

## 환경 함정 (이 저장소에서 검증됨)

- **셸**: 기본 셸이 zsh면 `cmd $opts` 형태로 옵션을 변수에 담아 넘길 때 단어 분리가 안 돼 한 토큰으로 들어간다. 스크립트는 `bash -c '...'`로 실행하거나 옵션을 직접 나열하라.
- **`sips`로 PNG 리샘플 금지**: sips는 PNG 압축이 나빠 오히려 용량이 폭증한다(예: 423K→2.5M). 압축/리사이즈는 `cwebp`로 한다.
- **`ffmpeg`에 libwebp 인코더가 없을 수 있다**: 이 환경에선 ffmpeg로 webp 인코딩/애니webp 디코딩이 안 된다. ffmpeg는 **GIF에서 프레임 추출**용으로만 쓰고, webp 인코딩은 `cwebp`/`gif2webp`를 쓴다.
- **`gif2webp`는 `-resize`를 지원하지 않을 수 있다**. 리사이즈가 필요하면 정적 프레임 경로(ffmpeg→cwebp)를 택한다.
- **GIF를 ffmpeg로 스케일 후 재인코딩하면** 프레임 간 델타 압축이 깨져 오히려 커진다. GIF 자체를 줄이려 하지 말고 정적 프레임으로 가거나 원본을 `gif2webp`에 바로 넣는다.

## 전체 흐름

1. **대상 파악** — 디렉터리의 파일 목록·포맷·치수·용량을 본다.
   ```bash
   find <dir> -type f | while read f; do
     printf "%s %s %s\n" "$(ls -lh "$f"|awk '{print $5}')" \
       "$(sips -g pixelWidth -g pixelHeight "$f" 2>/dev/null|awk '/pixelWidth/{w=$2}/pixelHeight/{h=$2}END{print w"x"h}')" "$f"; done
   ```
2. **정적 이미지(PNG/JPG/대형 WebP) → WebP** — `scripts/optimize-static.sh <dir>` 실행. 원본은 webp로 대체되고, 더 커지면 원본 유지.
3. **GIF 처리** — 큰 화면녹화형은 정적 프레임으로, 짧은 데모는 애니webp로. 아래 "GIF 레시피" 참고. 추출한 정적 프레임은 **반드시 Read로 직접 확인**(빈/전환 프레임이 아닌 의미 있는 화면인지).
4. **참조 정합성(reconcile)** — 확장자가 바뀌었으니 Markdown 본문의 이미지 참조를 실제 파일명과 맞춘다.
   ```bash
   bash scripts/reconcile-refs.sh <image-dir> <content-glob-dir>
   ```
5. **검증** — 깨진 참조 0 / 고아 파일 0 확인, 프로젝트 검증 스크립트(`node scripts/validate-content.mjs` 등) 통과 확인.

## GIF 레시피

**(A) 대형 화면녹화형 → 정적 프레임(WebP)**
```bash
dur=$(ffprobe -v error -show_entries format=duration -of csv=p=0 in.gif)
mid=$(awk -v d="$dur" 'BEGIN{printf "%.2f", (d>0?d*0.55:1)}')
ffmpeg -loglevel error -y -ss "$mid" -i in.gif -frames:v 1 \
  -vf "scale='min(1600,iw)':-1" /tmp/frame.png
cwebp -quiet -q 82 /tmp/frame.png -o out.webp
# out.webp를 Read로 확인(의미 있는 화면인지). 빈 프레임이면 -ss 시점을 바꿔 재추출.
```

**(B) 짧은 데모 → 애니메이션 WebP**
```bash
gif2webp -quiet -mixed -q 60 -m 6 in.gif -o out.webp
# 결과가 원본 gif보다 크면 원본 gif를 유지(드물게 발생).
```

## 도구 가용성 확인
시작 전 `cwebp -version`, `gif2webp -version`, `ffmpeg -version`, `webpmux -version` 존재를 확인한다. 없으면 `brew install webp ffmpeg`를 안내한다.

## 주의

- 최적화 결과가 원본보다 커지면 채택하지 말고 원본을 유지한다(평면/이미 최적화된 PNG에서 흔함 — 무손실 비교 권장).
- 절대 업스케일하지 않는다.
- 작업 후 `git status`로 의도한 파일만 바뀌었는지 본다.
