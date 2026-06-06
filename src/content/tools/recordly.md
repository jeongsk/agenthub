---
title: "Recordly"
description: "OpenScreen에서 포크된 오픈소스 스크린 레코더 겸 편집기입니다. 데모 영상·워크스루·제품 영상 제작에 특화되어 있으며, 오토줌·커서 폴리싱·타임라인 편집·웹캠 오버레이·프레임 스타일링을 제공합니다. 커뮤니티 익스텐션 마켓플레이스를 통해 기능을 확장할 수 있습니다."
category: "desktop-utility"
tags: ["screen-recording", "demo", "screen-capture", "video-editing", "electron", "pixijs", "screen-studio-alternative", "extensions", "marketplace", "cross-platform", "macos", "windows", "linux"]
githubUrl: "https://github.com/webadderallorg/Recordly"
githubStars: 16400
author: "webadderallorg"
installCommand: "yay -S recordly-bin"
compatibleAgents: []
featured: false
icon: "Video"
---

# Recordly

Recordly는 OpenScreen에서 포크되어 80% 이상의 코드가 변경된 오픈소스 스크린 레코더 겸 편집기입니다. 워크스루, 데모, 제품 영상을 위한 모션 기반 프레젠테이션 도구를 한 곳에서 처리합니다. 커뮤니티 익스텐션 시스템을 통해 기능을 확장할 수 있는 것이 가장 큰 특징입니다.

## 언제 쓰나

- Screen Studio 수준의 기능이 필요하지만 무료 오픈소스를 원할 때
- 데모 영상 제작에 줌·커서 이펙트·웹캠 오버레이를 자주 활용할 때
- 익스텐션 마켓플레이스로 기능을 확장하고 싶을 때
- OpenScreen보다 더 많은 편집 기능이 필요할 때
- macOS/Windows/Linux를 모두 지원하는 도구가 필요할 때

## 주요 기능

- **🎥 녹화** — 전체 디스플레이 또는 단일 앱 창 녹화, 마이크+시스템 오디오 동시 캡처
- **✂️ 타임라인 편집** — 드래그 앤 드롭, 트림, 줌 영역, 속도 조절, 주석, 오디오 영역 추가
- **🔍 오토줌** — 커서 활동 기반 자동 줌 제안 + 수동 줌
- **🖱️ 커서 컨트롤** — 크기/부드러움/모션블러/클릭바운스/sway/loop 모드 + macOS 스타일 커서 에셋
- **📹 웹캠 오버레이** — PIP 위치/크기/라운드/그림자 조절, 줌 반응형 스케일링
- **🎨 프레임 스타일링** — 배경화면/그라디언트/블러/패딩/모서리/그림자, 종횡비 프리셋
- **🧩 익스텐션 & 마켓플레이스** — 커서 클릭음, 디바이스 프레임, 브라우저 목업, 렌더 훅 등 커뮤니티 확장
- **📤 내보내기** — MP4, GIF (화질/FPS/루프/크기 프리셋)
- **💾 프로젝트 저장** — `.recordly` 파일로 편집 상태 보존 후 재개

## 설치

**macOS 14.0+ / Windows 10+ / Linux:**

[GitHub Releases](https://github.com/webadderallorg/Recordly/releases)에서 최신 빌드 다운로드

**Arch Linux (AUR):**
```bash
yay -S recordly-bin
```

**직접 빌드:**
```bash
git clone https://github.com/webadderallorg/Recordly.git
cd Recordly
npm install
npm run dev
```

## 플랫폼 참고사항

- **macOS**: ScreenCaptureKit 기반 네이티브 캡처
- **Windows**: WGC(Windows Graphics Capture) + WASAPI 오디오
- **Linux**: Electron 캡처 API 기반, PipeWire 필요, 커서 숨김 미지원

## 라이선스

AGPL 3.0
