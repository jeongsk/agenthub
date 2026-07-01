---
title: "Contained"
description: "Apple의 container CLI를 Mac 네이티브 UI로 다루는 SwiftUI 기반 macOS 앱입니다. Apple Silicon에서 Linux 컨테이너를 실행·관리·검사하고 Docker Desktop에 가까운 일상 워크플로를 macOS 스타일로 제공할 때 유용합니다."
category: "desktop-utility"
tags: ["macos", "swiftui", "apple-silicon", "container", "containers", "docker-alternative", "devtools", "desktop-app", "swift", "swiftpm", "sparkle", "liquid-glass"]
githubUrl: "https://github.com/tdeverx/contained-app"
websiteUrl: "https://github.com/tdeverx/contained-app/wiki"
githubStars: 305
author: "tdeverx"
installCommand: "Download the latest .dmg from https://github.com/tdeverx/contained-app/releases"
compatibleAgents: ["Hermes Agent", "Claude Code", "Codex", "Gemini", "OpenCode"]
featured: false
icon: "Boxes"
---

# Contained

Contained는 Apple의 [`container`](https://github.com/apple/container) CLI를 위한 Mac 네이티브 컨트롤 앱입니다. SwiftUI와 Liquid Glass 스타일 UI로 Linux 컨테이너를 실행, 커스터마이즈, 검사하며, Docker Desktop에서 자주 쓰는 컨테이너 관리 흐름과 `container` CLI의 더 넓은 명령 표면을 GUI로 다룹니다.

## 언제 쓰나

- Apple Silicon Mac에서 Apple `container` CLI를 터미널 대신 네이티브 GUI로 관리하고 싶을 때
- 컨테이너 실행, 정지, 재시작, 로그, 터미널, 통계, 파일, inspect 정보를 한 앱에서 확인하고 싶을 때
- 이미지 pull/build/tag/push/save/load, 볼륨·네트워크·레지스트리 관리, prune 같은 Docker Desktop 유사 워크플로가 필요할 때
- `container run` 플래그를 GUI 폼으로 편집하면서 실제 CLI 명령을 확인하고 싶을 때
- 로컬 개발용 컨테이너 템플릿과 compose.yaml import를 Mac 앱에서 다루고 싶을 때

## 핵심 특징

- **컨테이너 카드 그리드**: 각 컨테이너를 Liquid Glass 카드로 표시하고 tint, gradient, icon, nickname, health badge, CPU/memory/network/disk sparkline을 보여줍니다.
- **라이프사이클과 상세 탭**: start/stop/restart와 Overview, Logs, Terminal, Stats, History, Files, Inspect 탭을 제공합니다.
- **이미지·빌드·볼륨·네트워크 관리**: Docker Hub search를 포함한 pull, BuildKit log streaming, tag/push/save/load, filesystem export, volume/network CRUD, registry login, system prune을 지원합니다.
- **Templates & Compose import**: 저장된 run recipe와 built-in starter를 제공하고, compose.yaml을 가져와 서비스별 실행 폼으로 편집할 수 있습니다.
- **앱 관리 restart/healthcheck**: Apple `container` CLI에 없는 restart policy와 healthcheck를 앱 레벨에서 관리합니다.
- **Mac-native UX**: `NavigationSplitView`, 시스템 검색 필드, 명령 팔레트(⌘K), menu-bar extra, 키보드 단축키, VoiceOver/Reduce Transparency/Reduce Motion 접근성 흐름을 제공합니다.

## 빠른 시작

릴리스 페이지에서 최신 `.dmg`를 다운로드해 설치합니다.

```text
https://github.com/tdeverx/contained-app/releases
```

소스에서 빌드하려면 Swift Package를 Xcode에서 열거나 CLI로 빌드합니다.

```bash
open Package.swift
# 또는
swift build
swift test
./scripts/bundle.sh
open Contained.app
```

## 요구사항과 제한

- macOS 26 이상, Apple Silicon Mac이 필요합니다.
- Xcode 26 / Swift 6.2 이상이 필요합니다.
- Apple `container` CLI 1.0.0이 설치되어 있고 `PATH`에 있어야 합니다.
- README 기준 1.0 안정 릴리스 전 polishing 단계의 work-in-progress 앱입니다.
- 라이선스는 PolyForm Noncommercial License 1.0.0입니다. 소스는 공개되어 있지만 상업적 사용은 허용되지 않으므로, 회사·상업 프로젝트에서 쓰기 전 라이선스를 반드시 확인해야 합니다.
