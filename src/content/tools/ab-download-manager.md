---
title: "AB Download Manager"
description: "Kotlin/Compose Multiplatform으로 만든 크로스플랫폼 데스크톱 다운로드 매니저입니다. 다운로드 속도를 높여주고, 큐/스케줄러/브라우저 확장과 연동되며 Windows·Linux·macOS를 모두 지원합니다. 웹에서 파일을 자주 받는 사용자에게 유용합니다."
category: "desktop-utility"
tags: ["download-manager", "downloader", "kotlin", "compose-desktop", "cross-platform", "desktop-app", "browser-extension", "windows", "linux", "macos"]
githubUrl: "https://github.com/amir1376/ab-download-manager"
websiteUrl: "https://abdownloadmanager.com"
githubStars: 15678
author: "amir1376"
installCommand: "brew tap amir1376/tap && brew install --cask ab-download-manager"
compatibleAgents: []
featured: false
icon: "Download"
---

# AB Download Manager

AB Download Manager는 Kotlin과 Compose Multiplatform으로 제작된 오픈소스 데스크톱 다운로드 매니저입니다. 다운로드 속도 최적화, 큐 관리, 스케줄러, 브라우저 확장 연동까지 제공하며, Windows·Linux·macOS에서 동일한 UI로 사용할 수 있습니다.

## 언제 쓰나

- 브라우저 내장 다운로더보다 빠른 속도로 파일을 받고 싶을 때
- 여러 다운로드를 큐에 넣고 순서대로/예약 시간에 받고 싶을 때
- 브라우저 확장(Chrome/Firefox)과 연동해 원클릭으로 다운로드를 앱으로 넘기고 싶을 때
- 다크/라이트/블랙 등 다양한 테마로 현대적인 UI를 쓰고 싶을 때
- 광고나 제한 없는 무료 오픈소스 다운로드 매니저가 필요할 때

## 주요 기능

- **⚡ 더 빠른 다운로드 속도** — 멀티스레드 다운로드로 속도 최적화
- **⏰ 큐와 스케줄러** — 다운로드 순서 지정, 예약 시간에 자동 시작
- **🌐 브라우저 확장** — Chrome/Chromium 및 Firefox 확장으로 원클릭 연동
- **💻 크로스플랫폼** — Windows, Linux, macOS 동일한 UI
- **🌙 다양한 테마** — 다크/라이트/블랙 외 여러 테마 지원
- **❤️ 완전 무료 오픈소스** — Apache 2.0 라이선스

## 설치

**macOS / Linux (Homebrew):**
```bash
brew tap amir1376/tap && brew install --cask ab-download-manager
```

**Windows (winget):**
```bash
winget install amir1376.ABDownloadManager
```

**Windows (scoop):**
```bash
scoop install extras/abdownloadmanager
```

**Linux (설치 스크립트):**
```bash
bash <(curl -fsSL https://raw.githubusercontent.com/amir1376/ab-download-manager/master/scripts/install.sh)
```

또는 [공식 사이트](https://abdownloadmanager.com) / [GitHub Releases](https://github.com/amir1376/ab-download-manager/releases/latest)에서 설치 파일 다운로드.

### 브라우저 확장
- [Chrome Web Store](https://chromewebstore.google.com/detail/bbobopahenonfdgjgaleledndnnfhooj)
- [Firefox Add-ons](https://addons.mozilla.org/firefox/addon/ab-download-manager/)
