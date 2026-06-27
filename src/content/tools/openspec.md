---
title: "OpenSpec"
description: "AI 코딩 어시스턴트를 위한 spec-driven development 프레임워크입니다. 변경마다 proposal, specs, design, tasks를 만들고 `/opsx:*` slash command와 tool-specific skill/command 파일로 구현 전 합의를 돕습니다."
category: "agent-framework"
tags: ["spec-driven-development", "sdd", "specification", "planning", "prd", "context-engineering", "sdlc", "agent-skills", "slash-commands", "claude-code", "codex", "cursor", "gemini-cli", "opencode", "windsurf", "typescript"]
githubUrl: "https://github.com/Fission-AI/OpenSpec"
websiteUrl: "https://openspec.dev/"
githubStars: 56944
author: "Fission-AI"
installCommand: "npm install -g @fission-ai/openspec@latest"
compatibleAgents: ["Claude Code", "Codex", "Cursor", "Gemini CLI", "GitHub Copilot", "OpenCode", "Windsurf", "Kiro", "Qwen Code"]
featured: false
icon: "FileText"
---

# OpenSpec

OpenSpec은 AI 코딩 어시스턴트와 사람이 **코드를 쓰기 전에 무엇을 만들지 먼저 합의**하도록 돕는 spec-driven development 프레임워크입니다. 요구사항이 채팅 기록에만 남아 AI가 엉뚱한 구현을 하는 문제를 줄이기 위해, 변경 단위마다 proposal, specs, design, tasks 같은 artifact를 만들고 slash command 기반 워크플로로 탐색 → 제안 → 구현 → 보관을 진행합니다.

## 언제 쓰나

- AI coding assistant에게 바로 구현을 맡기기 전에 요구사항, 범위, 시나리오, 작업 목록을 명시하고 싶을 때
- brownfield codebase에서 새 기능·버그 수정·리팩터링을 가볍게 spec화하고 싶을 때
- Claude Code, Codex, Cursor, Gemini CLI, OpenCode 등 여러 에이전트 도구에 같은 spec workflow를 배포하고 싶을 때
- PRD, proposal, task checklist를 채팅 밖의 파일 artifact로 남겨 팀 또는 후속 세션과 공유하고 싶을 때
- Kiro나 GitHub Spec Kit보다 더 유연하고 가벼운 SDD 흐름을 원할 때

## 핵심 특징

- **OPSX artifact-guided workflow**: `/opsx:explore`, `/opsx:propose`, `/opsx:apply`, `/opsx:sync`, `/opsx:archive`를 기본 core profile로 제공합니다.
- **탐색 우선 흐름**: 무엇을 만들지 확실하지 않을 때 `/opsx:explore`로 코드베이스를 읽고 선택지를 좁힌 뒤 proposal을 만들 수 있습니다.
- **변경 단위 구조화**: `openspec/changes/<change-name>/` 아래에 proposal, specs, design, tasks를 모아 구현 전후 맥락을 보존합니다.
- **다중 에이전트 통합**: Claude Code, Codex, Cursor, Gemini CLI, GitHub Copilot, OpenCode, Windsurf, Kiro, Qwen Code 등 25개 이상의 도구에 skill/command 파일을 생성합니다.
- **프로필 기반 확장**: 기본 core profile 외에 `new`, `continue`, `ff`, `verify`, `bulk-archive`, `onboard` 같은 확장 워크플로를 선택할 수 있습니다.
- **기존 프로젝트 친화**: greenfield뿐 아니라 큰 brownfield 프로젝트에서도 전체 문서화를 강제하지 않고 현재 변경부터 점진적으로 도입하는 것을 전제로 합니다.
- **커뮤니티 스키마**: third-party schema bundle로 팀별·도메인별 workflow를 확장할 수 있습니다.

## 빠른 시작

Node.js 20.19.0 이상이 필요합니다.

```bash
npm install -g @fission-ai/openspec@latest
cd your-project
openspec init
```

초기화 후에는 터미널이 아니라 AI assistant chat에서 slash command를 사용합니다.

```text
/opsx:explore
/opsx:propose add-dark-mode
/opsx:apply
/opsx:archive
```

특정 도구만 구성하거나 모든 지원 도구를 한 번에 구성할 수 있습니다.

```bash
openspec init --tools claude,cursor,codex
openspec init --tools all
openspec update
```

## 참고와 주의사항

- OpenSpec은 CLI와 slash command/skill layer가 분리되어 있습니다. `openspec init`과 `openspec update`는 터미널에서 실행하고, `/opsx:*` 명령은 AI assistant chat에서 실행합니다.
- 기본 profile은 `propose`, `explore`, `apply`, `sync`, `archive`를 포함합니다. 확장 workflow는 `openspec config profile` 후 `openspec update`로 반영합니다.
- README 기준 OpenSpec은 anonymous usage stats를 수집합니다. 비활성화하려면 `OPENSPEC_TELEMETRY=0` 또는 `DO_NOT_TRACK=1`을 설정합니다.
- 모델 선택과 context hygiene이 중요합니다. OpenSpec 문서는 planning과 implementation 모두에 high-reasoning model 사용을 권장합니다.
