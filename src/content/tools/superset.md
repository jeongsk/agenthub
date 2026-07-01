---
title: "Superset"
description: "AI 에이전트를 위한 오픈소스 코드 에디터/플랫폼입니다. Claude Code, Codex, Gemini CLI 등 CLI 기반 코딩 에이전트를 여러 개 동시에 실행하고, 각 작업을 독립된 git worktree에 격리하며, 내장 diff 뷰어·터미널·MCP 서버·CLI로 변경을 검토하고 병합할 수 있습니다."
category: "agent-harness"
tags: ["ai-agents", "claude-code", "codex", "gemini-cli", "opencode", "cursor", "orchestration", "parallel-agents", "desktop-app", "git-worktree", "mcp", "cli", "macos"]
githubUrl: "https://github.com/superset-sh/superset"
websiteUrl: "https://superset.sh/"
githubStars: 12121
author: "superset-sh"
installCommand: "brew install superset-sh/tap/superset"
compatibleAgents: ["Claude Code", "Codex", "Gemini CLI", "OpenCode", "Cursor", "GitHub Copilot", "Amp Code", "Pi"]
featured: true
icon: "Workflow"
---

# Superset

Superset은 AI 코딩 에이전트를 병렬로 실행하고 관리하기 위한 오픈소스 AI coding platform입니다. 데스크톱 IDE, CLI, MCP 서버 형태로 제공되며, 터미널에서 실행되는 CLI 에이전트를 각기 독립된 git worktree에 격리해 충돌 없이 동시에 진행할 수 있게 합니다.

![Superset AI 에이전트 오케스트레이션 데스크톱 앱 메인 화면](/tool-screenshots/superset-ui.webp)

## 언제 쓰나

- 여러 코딩 에이전트(Claude Code, Codex, Gemini CLI 등)를 한 프로젝트에서 동시에 운영하고 싶을 때
- 각 작업을 별도 git branch/worktree로 격리해 `git stash`나 checkout 충돌을 피하고 싶을 때
- 에이전트 진행 상황을 한눈에 모니터링하고, 완료·승인 대기 상태를 빠르게 확인하고 싶을 때
- 내장 diff viewer에서 stage/commit 전 변경 사항을 검토하고 싶을 때
- 에이전트 workspace를 Cursor, VS Code 등 외부 IDE로 열어 추가 편집하고 싶을 때
- 로컬 우선으로 동작하면서 필요할 때 cloud/remote workspace와 sync되는 환경이 필요할 때
- Superset CLI나 MCP server로 workspace, task, automation을 스크립트·CI·다른 에이전트에서 제어하고 싶을 때

## 핵심 특징

- **Parallel agents**: Claude Code, Codex, Gemini CLI, Cursor, OpenCode 등 CLI 기반 에이전트를 동시에 실행합니다.
- **Git worktree isolation**: 각 작업이 독립 branch와 worktree에서 실행되어 변경 충돌을 줄입니다.
- **Built-in diff viewer**: 변경 사항을 리뷰하고 stage/commit 흐름까지 한 앱 안에서 처리할 수 있습니다.
- **Persistent terminals**: workspace별 terminal session을 유지하고, 작업별 context를 분리합니다.
- **Port management & browser**: workspace별 dev server port를 추적하고 앱 안에서 바로 확인할 수 있습니다.
- **MCP server**: 다른 AI 도구가 Superset workspace/task 상태를 읽고 제어할 수 있는 MCP 통합을 제공합니다.
- **CLI & SDK**: `superset` CLI와 TypeScript SDK로 project, workspace, task, automation을 자동화할 수 있습니다.
- **Local-first**: 오프라인에서도 로컬 host를 중심으로 동작하고, 연결 시 cloud와 sync할 수 있습니다.

## 빠른 시작

macOS Apple Silicon 또는 Intel 환경에서 데스크톱 앱을 다운로드해 시작할 수 있습니다. CLI만 별도로 설치하려면 Homebrew 또는 standalone installer를 사용할 수 있습니다.

```bash
# Homebrew
brew install superset-sh/tap/superset

# Standalone installer
curl -fsSL https://superset.sh/cli/install.sh | sh
```

데스크톱 앱에는 Superset CLI가 포함되어 있으며, 앱 실행 시 `~/.superset/bin/superset` shim을 생성합니다. 일반 shell에서 bundled CLI를 쓰려면 다음 경로를 shell profile에 추가합니다.

```bash
export PATH="$HOME/.superset/bin:$PATH"
```

인증 후 첫 명령을 실행합니다.

```bash
superset auth login
superset projects list
```

## 참고와 주의사항

- 현재 데스크톱 앱 요구사항은 macOS(Apple Silicon 또는 Intel)이며 Windows/Linux는 예정입니다.
- CLI standalone installer는 macOS Apple Silicon 또는 Linux x86_64를 자동 감지한다고 문서에 명시되어 있습니다.
- Git과 GitHub CLI 인증(`gh auth status`)이 사전 요구사항에 포함됩니다.
- CLI는 beta 상태라 command/flag가 변경될 수 있습니다.
- GitHub 라이선스 메타데이터는 SPDX로 식별되지 않는 `NOASSERTION` 상태입니다.
