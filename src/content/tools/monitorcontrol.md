---
title: "MonitorControl"
description: "맥에서 외장 모니터의 밝기와 볼륨을 Apple 기본 디스플레이처럼 제어하게 해주는 데스크톱 앱입니다. DDC/CI, 소프트웨어 디밍, Apple 네이티브 프로토콜을 함께 지원해서, Apple 키보드의 밝기/미디어 키로 외장 모니터까지 조절하고 싶거나 소프트 디밍으로 최저 밝기 이하로도 어둡게 하고 싶을 때 유용합니다."
category: "desktop-utility"
tags: ["macos", "monitor", "brightness", "volume", "ddc", "display", "hardware-control", "osd", "desktop-app", "swift"]
githubUrl: "https://github.com/MonitorControl/MonitorControl"
websiteUrl: "https://monitorcontrol.app"
githubStars: 33310
author: "MonitorControl"
installCommand: "brew install --cask monitorcontrol"
compatibleAgents: []
featured: false
icon: "Monitor"
---

# MonitorControl

MonitorControl은 macOS에서 외장 모니터의 밝기·볼륨을 기본 내장 디스플레이처럼 제어할 수 있게 해주는 오픈소스 데스크톱 앱입니다. Apple 키보드의 밝기/미디어 키를 그대로 쓸 수 있고, 메뉴바 슬라이더나 커스텀 단축키로도 조절할 수 있습니다.

## 언제 쓰나

- Apple 키보드의 밝기 키가 외장 모니터에 먹히지 않아서 답답할 때
- DDC/CI를 지원하는 모니터의 밝기·볼륨·대비를 하드웨어 레벨에서 조절하고 싶을 때
- 모니터의 최저 밝기보다 더 어둡게 (소프트 디밍) 만들고 싶을 때
- Apple 내장 디스플레이의 밝기 변화를 외장 모니터와 동기화하고 싶을 때
- AirPlay, Sidecar, DisplayLink 등 가상 화면의 밝기를 shade(오버레이) 방식으로 조절하고 싶을 때

## 주요 기능

- **DDC/CI 하드웨어 제어** — USB-C, DP, HDMI로 연결된 외장 모니터의 밝기·볼륨·대비를 네이티브 수준으로 조절
- **소프트웨어 디밍** — 하드웨어 최저 밝기 이하로도 부드럽게 어둡게 (감마 테이블)
- **Apple 네이티브 프로토콜** — Apple 디스플레이와 내장 디스플레이 지원
- **Shade 제어** — AirPlay, Sidecar, DisplayLink 등 가상 화면 오버레이
- **밝기 동기화** — 내장 디스플레이 밝기 변화를 외장 모니터에 자동 반영
- **네이티브 OSD** — macOS 기본 밝기/볼륨 OSD 표시
- **Apple 키보드 키** — 표준 밝기/미디어 키 및 커스텀 단축키
- **메뉴바 슬라이더** — 메뉴바 아이콘에서 바로 밝기/볼륨 조절
- **완전 무료** — 기부 기반, 모든 기능 무료

## 설치

```bash
brew install --cask monitorcontrol
```

또는 [GitHub Releases](https://github.com/MonitorControl/MonitorControl/releases)에서 `.dmg` 다운로드.

macOS 11 Big Sur 이상에서 동작합니다.
