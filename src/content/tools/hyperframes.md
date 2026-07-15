---
title: "HyperFrames"
description: "HTML·CSS·미디어·seekable animation을 결정론적인 MP4 영상으로 렌더링하는 에이전트 네이티브 오픈소스 프레임워크입니다."
category: "agent-framework"
tags: ["video", "html", "typescript", "ai-agents", "motion-graphics", "animation", "rendering", "ffmpeg", "puppeteer", "gsap", "mcp", "codex", "claude-code"]
githubUrl: "https://github.com/heygen-com/hyperframes"
websiteUrl: "https://hyperframes.heygen.com/introduction"
githubStars: 35337
author: "heygen-com"
installCommand: "npx skills add heygen-com/hyperframes --full-depth --yes"
compatibleAgents: ["Claude Code", "Cursor", "Gemini CLI", "Codex", "OpenCode"]
featured: false
icon: "Video"
---

# HyperFrames

HyperFrames는 **HTML을 작성하고 영상을 렌더링하는 에이전트 네이티브 오픈소스 프레임워크**입니다. HTML, CSS, 미디어 파일과 seekable animation을 조합해 결정론적인 MP4를 만들 수 있으며, 로컬 CLI·AI 코딩 에이전트·호스팅된 authoring workflow에서 사용할 수 있습니다.

## 언제 쓰나

- AI 에이전트로 제품 소개·기능 발표 영상을 만들고 싶을 때
- HTML/CSS 기반의 모션 그래픽과 데이터 시각화를 MP4로 렌더링할 때
- GitHub PR 변경사항을 코드 애니메이션 영상으로 설명할 때
- 기존 Remotion composition을 HTML 기반 HyperFrames composition으로 포팅할 때
- 자막·오버레이·차트·음악·사이트 캡처를 포함한 영상 제작 파이프라인이 필요할 때

## 주요 기능

- **HTML → MP4 렌더링** — HTML 요소에 타이밍과 트랙 정보를 선언하고 headless Chrome과 FFmpeg로 프레임을 캡처·인코딩합니다.
- **결정론적 재생** — GSAP, CSS, Lottie, Three.js, Anime.js, WAAPI, TypeGPU 등 seekable animation runtime을 지원해 같은 입력에서 일관된 결과를 만듭니다.
- **AI 에이전트 스킬** — `/hyperframes` 라우터와 19개 스킬을 제공해 영상·프레젠테이션·모션 그래픽 제작 과정을 에이전트가 선택하고 실행합니다.
- **전용 제작 workflow** — 제품 launch video, faceless explainer, PR-to-video, embedded captions, talking-head recut, motion graphics, music-to-video, slideshow, general video 등을 지원합니다.
- **브라우저 미리보기와 CLI** — live reload 미리보기, lint·check·snapshot·render·publish·doctor 명령을 제공합니다.
- **재사용 가능한 registry** — 영상 블록과 컴포넌트를 설치해 composition에 재사용할 수 있습니다.
- **확장 가능한 렌더링** — 로컬·Docker 렌더링과 함께 AWS Lambda, Google Cloud Run 등 배포 경로를 제공합니다.

## 설치 및 빠른 시작

AI 에이전트에 스킬을 설치합니다.

```bash
npx skills add heygen-com/hyperframes --full-depth --yes
```

`--full-depth` 옵션은 skills.sh에 지연 반영된 복사본 대신 저장소의 현재 `main` 브랜치 스킬을 설치하기 위해 사용합니다.

CLI로 직접 프로젝트를 시작할 수도 있습니다.

```bash
npx hyperframes init my-video
cd my-video
npx hyperframes preview
npx hyperframes render
```

기본 요구사항은 **Node.js 22 이상과 FFmpeg**입니다. 저장소 자체를 개발할 때는 Bun workspace를 사용합니다.

## 제작 workflow

- `/product-launch-video` — 웹사이트 기반 제품 소개·launch 영상
- `/faceless-explainer` — 임의의 주제를 설명하는 영상
- `/pr-to-video` — GitHub PR 변경사항 설명 영상
- `/embedded-captions` — 기존 영상에 자막 추가
- `/talking-head-recut` — 인터뷰·팟캐스트에 그래픽 오버레이 추가
- `/motion-graphics` — 짧은 디자인 중심 모션 그래픽
- `/music-to-video` — 음악 기반 beat-synced 영상
- `/slideshow` — 탐색 가능한 프레젠테이션·피치덱
- `/general-video` — 기타 장면 구성과 장편 영상
- `/remotion-to-hyperframes` — Remotion composition을 HyperFrames HTML로 포팅

## 주의사항

- 렌더링 결과의 일관성을 위해 `Date.now()`나 시드 없는 `Math.random()`처럼 비결정적인 로직과 render-time 네트워크 fetch를 피해야 합니다.
- composition은 HTML의 `data-*` 타이밍 속성과 `class="clip"` 계약을 따라야 하며, GSAP timeline은 paused 상태로 등록해야 합니다.
- 영상 제작 전용 프레임워크이므로 일반적인 웹 UI 렌더링이나 비디오 편집기 대신 HTML 기반 자동화 파이프라인에 적합합니다.
- 렌더링에는 CPU·디스크·FFmpeg 자원이 필요하며, 영상 길이와 해상도에 따라 실행 시간이 달라집니다.

Apache License 2.0으로 배포됩니다.
