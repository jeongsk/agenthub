---
title: "OpenScreen"
description: "Screen Studio의 무료 오픈소스 대안입니다. 화면 녹화와 간단한 데모 영상 편집을 한 곳에서 처리하며, 자동/수동 줌, 웹캠 오버레이, 타임라인 편집, MP4/GIF 내보내기를 지원합니다. 상업적 용도로도 무료(MIT)이며 11개국어 번역이 제공됩니다."
category: "desktop-utility"
tags: ["screen-recording", "demo", "screen-capture", "video-editing", "electron", "pixijs", "screen-studio-alternative", "cross-platform", "macos", "windows", "linux"]
githubUrl: "https://github.com/siddharthvaddem/openscreen"
githubStars: 38300
author: "siddharthvaddem"
installCommand: "brew install --cask siddharthvaddem/openscreen/openscreen"
compatibleAgents: []
featured: false
icon: "MonitorPlay"
---

# OpenScreen

OpenScreen은 Screen Studio의 오픈소스 대안으로, 화면 녹화와 데모 영상 편집 기능을 제공하는 크로스플랫폼 데스크톱 앱입니다. X나 Reddit에 올릴 깔끔한 제품 데모/워크스루 영상을 빠르게 만들고 싶을 때 적합합니다. 100% 무료이며 상업적 용도도 제한이 없습니다(MIT).

## 언제 쓰나

- Screen Studio를 대체할 무료 오픈소스 솔루션이 필요할 때
- 제품 데모 영상이나 워크스루를 빠르게 녹화/편집해야 할 때
- 줌 인/아웃, 웹캠 오버레이, 타임라인 트리밍이 필요한 깔끔한 영상이 필요할 때
- 소프트웨어 사용법 시연 영상을 자주 만들어야 할 때
- 구독료 없이 영구적으로 사용할 수 있는 도구를 찾을 때

## 주요 기능

- **🎥 화면 녹화** — 특정 창, 영역, 또는 전체 화면 녹화
- **🎙️ 오디오 캡처** — 마이크 + 시스템 오디오 동시 녹음
- **📹 웹캠 오버레이** — PIP 형태, 드래그 위치 조절, 모양 옵션
- **🔍 자동/수동 줌** — 깊이/지속시간/이징/픽셀 단위 위치 조절
- **🎨 배경 스타일링** — 배경화면, 단색, 그라디언트, 커스텀 배경
- **💫 모션 블러** — 부드러운 팬/줌 전환
- **✂️ 타임라인 편집** — 크롭, 트림, 구간별 속도 제어
- **🔲 블러 효과** — 민감한 화면 영역 가리기
- **🖱️ 커서 강조** — 커서 및 클릭 하이라이트
- **🏷️ 주석** — 텍스트, 화살표, 이미지 주석
- **💾 프로젝트 저장** — 재녹화 없이 이어서 편집
- **📤 내보내기** — MP4/GIF, 여러 비율/해상도 지원
- **🌐 다국어** — 한국어 포함 11개국어 번역
- **📦 다양한 설치 방식** — Homebrew, winget, apt, pacman, AppImage, Nix flake

## 설치

**macOS (Homebrew):**
```bash
brew install --cask siddharthvaddem/openscreen/openscreen
```

**Windows (winget):**
```bash
winget install SiddharthVaddem.OpenScreen
```

**Linux (Debian/Ubuntu):**
```bash
sudo apt install ./Openscreen-Linux-latest.deb
```

**Linux (Arch):**
```bash
sudo pacman -U Openscreen-Linux-latest.pacman
```

**모든 플랫폼 (AppImage):**
```bash
chmod +x Openscreen-Linux-*.AppImage
./Openscreen-Linux-*.AppImage
```

**NixOS (flake):**
```bash
nix run github:siddharthvaddem/openscreen
```

또는 [GitHub Releases](https://github.com/siddharthvaddem/openscreen/releases)에서 직접 다운로드할 수 있습니다.

## 라이선스

MIT — 개인/상업 용도 모두 무료, 수정/배포 자유
