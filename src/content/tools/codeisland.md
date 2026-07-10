---
title: "CodeIsland"
description: "MacBook 노치에서 Claude Code, Codex, Gemini CLI 등 AI 코딩 에이전트의 세션 상태와 권한 요청을 실시간으로 확인하는 macOS 앱입니다."
category: "desktop-utility"
tags: ["macos", "coding-agent", "claude-code", "codex", "gemini-cli", "notch", "developer-tools"]
githubUrl: "https://github.com/wxtsky/CodeIsland"
githubStars: 2080
author: "wxtsky"
installCommand: "brew tap wxtsky/tap && brew install --cask codeisland"
compatibleAgents: ["Claude Code", "Codex", "Gemini CLI", "Cursor", "GitHub Copilot", "OpenCode"]
featured: false
icon: "MonitorSmartphone"
---

# CodeIsland

CodeIsland는 MacBook의 노치(Notch) 영역에 상주하면서 AI 코딩 에이전트의 작업 상태를 보여주는 Swift 기반 macOS 앱입니다. 여러 에이전트를 동시에 실행할 때 창을 오가지 않고 세션 상태, 도구 호출, AI 응답, 권한 요청을 한 곳에서 확인할 수 있습니다.

## 언제 쓰나

- Claude Code, Codex, Gemini CLI 등 여러 코딩 에이전트를 동시에 모니터링할 때
- 에이전트가 권한 승인을 기다리는지 빠르게 확인하고 패널에서 승인·거부할 때
- 현재 작업 중인 앱을 떠나지 않고 에이전트 질문에 답하거나 해당 터미널·IDE 창으로 이동할 때
- 외부 서버 없이 Mac과 iPhone·Apple Watch에서 로컬로 세션 상태를 확인할 때

## 핵심 기능

- **노치 네이티브 패널**: 유휴 상태에서는 접혀 있다가 필요할 때 펼쳐지는 픽셀 아트 스타일 UI
- **실시간 세션 추적**: 활성 세션, 도구 호출, AI 응답, 권한 요청 표시
- **권한 관리**: 패널에서 도구 권한을 바로 승인하거나 거부
- **13개 AI 도구 지원**: Claude Code, Codex, Gemini CLI, Cursor, Copilot, TraeCli, Qoder, Factory, CodeBuddy, OpenCode, Kimi Code CLI, Cline, Pi/Oh My Pi
- **자동 훅 설치**: 감지된 CLI 도구에 훅을 자동 설치하고 복구·버전 추적 지원
- **스마트 알림 억제**: 터미널 앱 전체가 아니라 실제 세션 탭을 보고 있을 때만 알림 억제
- **멀티 디스플레이**: 노치 디스플레이를 자동 감지
- **Code Island Buddy**: 별도 iPhone 앱으로 Dynamic Island, 잠금 화면, StandBy, Apple Watch에 세션 상태 미러링

## 빠른 시작

```bash
brew tap wxtsky/tap
brew install --cask codeisland
```

또는 [Releases](https://github.com/wxtsky/CodeIsland/releases)에서 `CodeIsland.dmg`를 내려받아 응용 프로그램 폴더에 설치할 수 있습니다. 첫 실행 시 감지된 AI 도구의 훅이 자동으로 설치됩니다. iPhone·Apple Watch 동반 앱은 [App Store](https://apps.apple.com/us/app/code-island-buddy/id6773881129)에서 받을 수 있습니다.

## 동작 방식

각 AI 도구의 훅이 세션 시작, 도구 호출, 권한 요청 등의 이벤트를 JSON 메시지로 만들고, 네이티브 Swift 브리지와 Unix 소켓을 통해 CodeIsland 앱으로 전달합니다. OpenCode는 브리지 바이너리 대신 JavaScript 플러그인이 소켓에 직접 연결합니다.

## 참고

- macOS 14(Sonoma) 이상이 필요합니다. 노치가 없는 외장 디스플레이에서도 사용할 수 있지만 MacBook 노치 환경에 최적화되어 있습니다.
- 소스 빌드에는 Swift 5.9 이상이 필요합니다.
- MIT 라이선스의 오픈소스 프로젝트입니다.
- 첫 실행 시 macOS 보안 경고가 표시되면 시스템 설정의 **개인정보 보호 및 보안**에서 앱 실행을 허용해야 할 수 있습니다.
