---
title: "agentic-stack"
description: "Claude Code, Cursor, Windsurf, OpenCode, Hermes, Codex 등 여러 코딩 에이전트 사이에서 `.agent/` 기반 메모리, 스킬, 프로토콜을 공유하는 portable agent stack입니다."
category: "agent-infrastructure"
tags: ["agent-infrastructure", "agent-memory", "agent-skills", "multi-harness", "claude-code", "cursor", "windsurf", "opencode", "hermes", "codex", "gemini-cli", "copilot-cli", "python"]
githubUrl: "https://github.com/codejunkie99/agentic-stack"
githubStars: 2130
author: "codejunkie99"
installCommand: "brew tap codejunkie99/agentic-stack https://github.com/codejunkie99/agentic-stack && brew install agentic-stack"
compatibleAgents: ["Claude Code", "Cursor", "Windsurf", "OpenCode", "OpenClaw", "GitHub Copilot CLI", "Gemini CLI", "Hermes Agent", "Pi Coding Agent", "Codex", "Antigravity", "Standalone Python"]
featured: false
icon: "Layers"
---

# agentic-stack

agentic-stack은 코딩 에이전트 도구를 바꿀 때마다 메모리와 스킬이 초기화되는 문제를 줄이기 위한 portable `.agent/` 스택입니다. 하나의 프로젝트 안에 메모리, 스킬, 프로토콜, 훅, 데이터 레이어를 두고 Claude Code, Cursor, Windsurf, OpenCode, OpenClaw, GitHub Copilot CLI, Gemini CLI, Hermes, Pi Coding Agent, Codex, Antigravity, standalone Python 루프에서 같은 지식과 운영 규칙을 재사용하게 합니다.

## 언제 쓰나

- 여러 코딩 에이전트/IDE를 번갈아 쓰면서 프로젝트 지식과 선호를 유지하고 싶을 때
- `.agent/` 폴더 하나로 memory, skills, protocols, permissions를 프로젝트에 심고 싶을 때
- Claude Code에서 쌓인 운영 지식이나 lessons를 Cursor, Codex, Gemini CLI, Hermes 등으로 옮기고 싶을 때
- 팀 또는 개인의 에이전트 사용 내역, cron run, token/cost 추정, KPI를 로컬 대시보드로 보고 싶을 때
- 승인·redaction된 실행 기록을 trace, context card, eval case, training-ready JSONL 같은 data flywheel 산출물로 만들고 싶을 때

## 핵심 특징

- **Portable `.agent/` brain**: `working`, `episodic`, `semantic`, `personal` 메모리 레이어와 스킬, 프로토콜, 훅을 프로젝트 안에 설치합니다.
- **다중 harness adapter**: Claude Code, Cursor, Windsurf, OpenCode, OpenClaw, Copilot CLI, Gemini CLI, Hermes, Pi, Codex, Antigravity, standalone Python용 adapter를 제공합니다.
- **Harness manager**: `agentic-stack dashboard`, `add`, `remove`, `doctor`, `manage`, `upgrade`, `sync-manifest`, `transfer` 같은 명령으로 설치 상태를 관리합니다.
- **Reviewable memory loop**: `auto_dream.py`가 후보 lesson을 staging하고, host agent가 `graduate.py`, `reject.py`, `reopen.py`, `retract_lesson.py`로 명시적으로 검토합니다.
- **Data layer**: 여러 harness의 이벤트, cron timeline, KPI, token/cost 추정, category, `dashboard.html`, `daily-report.md`를 로컬에서 생성합니다.
- **Data flywheel**: 승인된 실행 기록을 trace records, context cards, eval cases, training examples, readiness metrics로 내보냅니다. 외부 telemetry나 모델 학습은 하지 않습니다.
- **Optional Brain integration**: `codejunkie99/brain`과 연결해 git-backed long-term memory CLI/TUI/MCP를 외부 메모리 계층으로 사용할 수 있습니다.

## 빠른 시작

macOS/Linux에서는 Homebrew tap으로 설치합니다.

```bash
brew tap codejunkie99/agentic-stack https://github.com/codejunkie99/agentic-stack
brew install agentic-stack
```

프로젝트 디렉터리에서 원하는 adapter를 선택해 `.agent/` 스택을 설치합니다.

```bash
cd your-project
agentic-stack claude-code
# or: cursor | windsurf | opencode | openclaw | copilot-cli | gemini | hermes | pi | codex | standalone-python | antigravity
```

저장소를 직접 clone해서 설치할 수도 있습니다.

```bash
git clone https://github.com/codejunkie99/agentic-stack.git
cd agentic-stack && ./install.sh claude-code
```

Windows PowerShell에서는 native installer를 사용합니다.

```powershell
git clone https://github.com/codejunkie99/agentic-stack.git
cd agentic-stack
.\install.ps1 claude-code C:\path\to\your-project
```

## 주요 명령

```bash
agentic-stack dashboard
agentic-stack add cursor
agentic-stack status
agentic-stack doctor
agentic-stack manage
agentic-stack transfer
agentic-stack upgrade --dry-run
agentic-stack upgrade --yes
agentic-stack sync-manifest
agentic-stack remove cursor
```

Optional Brain integration을 쓰려면 Brain을 별도로 설치한 뒤 bridge 명령을 실행합니다.

```bash
brew install codejunkie99/tap/brain
agentic-stack brain status
agentic-stack brain onboard --agents codex,cursor --yes
agentic-stack brain ask "auth decisions"
agentic-stack brain note "Use PKCE for local OAuth flows."
agentic-stack brain mcp-command
```

## 포함된 seed skills

- `skillforge` — 반복 패턴에서 새 스킬 생성
- `memory-manager` — reflection cycle과 candidate lesson 관리
- `git-proxy` — 안전 제약이 포함된 git 작업
- `debug-investigator` — reproduce → isolate → hypothesize → verify 디버깅
- `deploy-checklist` — staging과 production 사이의 배포 체크리스트
- `design-md` — root `DESIGN.md`를 UI/design-system context로 활용
- `data-layer` — harness dashboard, cron timeline, KPI, daily report export
- `data-flywheel` — 승인된 실행 기록을 eval/training/context artifact로 변환
- `tldraw` — opt-in beta live canvas/diagram skill

## 참고

- 기본 브랜치는 `master`입니다.
- 라이선스는 Apache-2.0입니다.
- 프로젝트는 local-first 성격입니다. README 기준으로 data layer와 data flywheel은 로컬 산출물을 만들며, 외부 telemetry 전송이나 모델 학습은 하지 않습니다.
