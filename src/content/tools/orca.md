---
title: "Orca"
description: "Codex, Claude Code, OpenCode, Pi 등 CLI 코딩 에이전트를 여러 git worktree에서 병렬 실행하고 데스크톱·모바일에서 추적·개입할 수 있게 해주는 오픈소스 agentic development environment입니다."
category: "agent-harness"
tags: ["agent-harness", "agent-ide", "parallel-agents", "worktrees", "terminal", "claude-code", "codex", "opencode", "mobile-app", "github", "linear", "ssh"]
githubUrl: "https://github.com/stablyai/orca"
websiteUrl: "https://onorca.dev"
githubStars: 7445
author: "stablyai"
installCommand: "brew install --cask stablyai/orca/orca"
compatibleAgents: ["Claude Code", "Codex", "OpenCode", "Cursor Agent", "GitHub Copilot CLI", "Hermes Agent", "Pi", "Goose", "Any CLI Agent"]
featured: false
icon: "Workflow"
---

# Orca

Orca는 여러 CLI 기반 코딩 에이전트를 한곳에서 운영하기 위한 오픈소스 **agentic development environment(ADE)**입니다. Codex, Claude Code, OpenCode, Pi 같은 에이전트를 각각 독립된 git worktree에서 실행하고, 터미널·파일·diff·브라우저·GitHub/Linear 작업을 한 화면에서 묶어 관리합니다. 데스크톱 앱은 macOS, Windows, Linux를 지원하고, 모바일 companion 앱으로 실행 중인 에이전트를 원격에서 확인하거나 후속 지시를 보낼 수 있습니다.

## 언제 쓰나

- 하나의 요청을 여러 코딩 에이전트에 동시에 보내고 결과를 비교하고 싶을 때
- 각 에이전트를 별도 git worktree에 격리해 충돌 없이 병렬 작업시키고 싶을 때
- Claude Code, Codex, OpenCode, Cursor Agent 등 여러 CLI agent를 한 workspace에서 운영하고 싶을 때
- 에이전트가 끝났는지 모바일에서 알림을 받고, 외부에서도 follow-up을 보내고 싶을 때
- GitHub PR, Linear 이슈, 파일 편집, diff review, 터미널 세션을 하나의 agent IDE 안에서 다루고 싶을 때

## 핵심 특징

- **Parallel worktrees**: 하나의 prompt를 여러 에이전트에 fan-out하고, 각 에이전트가 독립 worktree에서 작업하게 합니다.
- **Any CLI agent**: 터미널에서 실행되는 agent라면 Orca 안에서 사용할 수 있습니다. README 기준으로 Claude Code, Codex, Grok, Cursor, Copilot CLI, OpenCode, Pi, Hermes Agent, Goose 등 폭넓은 agent를 지원합니다.
- **모바일 companion**: iOS/Android 앱으로 agent 완료 알림을 받고, 휴대폰에서 follow-up을 보내 진행을 조정할 수 있습니다.
- **Ghostty급 terminal splits**: WebGL 렌더링, 무한 split, restart 후에도 남는 scrollback 등 agent terminal 운영에 필요한 기능을 제공합니다.
- **Design Mode**: 내장 Chromium 창에서 UI 요소를 클릭하면 HTML, CSS, cropped screenshot을 agent prompt로 보낼 수 있습니다.
- **GitHub & Linear 통합**: PR, 이슈, 프로젝트 보드를 앱 안에서 보고 작업별 worktree를 열 수 있습니다.
- **SSH worktrees**: 원격 머신에서 agent를 실행하면서 파일 편집, git, terminal, port forwarding을 함께 사용할 수 있습니다.
- **Diff review loop**: AI가 만든 diff 라인에 comment를 남기고 agent에게 다시 전달해 review → 수정 → commit 흐름을 이어갈 수 있습니다.
- **Orca CLI**: `orca worktree create`, `snapshot`, `click`, `fill` 같은 명령으로 Orca workflow를 스크립트화할 수 있습니다.

## 빠른 시작

데스크톱 앱은 공식 사이트나 GitHub Releases에서 받을 수 있습니다. macOS에서는 Homebrew cask로 설치할 수 있습니다.

```bash
brew install --cask stablyai/orca/orca
```

Arch Linux에서는 AUR 패키지도 제공합니다.

```bash
yay -S stably-orca-bin
```

모바일 companion은 iOS App Store/TestFlight 또는 Android APK로 설치한 뒤 데스크톱 앱과 pair해서 사용합니다.

## 참고

- Orca는 자체 모델 provider가 아니라, 사용자가 가진 Claude Code·Codex·OpenCode 등 CLI agent 구독/로그인을 활용하는 orchestration layer입니다.
- Electron/TypeScript 기반 데스크톱 앱이며, 저장소의 `package.json` 기준 Node.js 24와 pnpm 10 계열 개발 환경을 사용합니다.
- anonymous usage telemetry 관련 내용은 공식 telemetry/privacy 문서를 확인해야 합니다.
- 라이선스는 MIT입니다.
