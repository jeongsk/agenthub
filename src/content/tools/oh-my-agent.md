---
title: "oh-my-agent"
description: "프로젝트별 전문화된 에이전트 팀을 구성할 수 있는 포터블 멀티 에이전트 하네스입니다. 프론트엔드, 백엔드, 아키텍처, QA, PM, DB, 데브옵스 등 도메인별 에이전트가 각자의 스킬과 체크리스트로 협업하며, 모든 주요 AI IDE에서 동일한 설정을 공유할 수 있습니다."
category: "agent-harness"
tags: ["ai-agents", "agent-harness", "multi-agent", "orchestration", "claude-code", "codex", "cursor", "opencode", "serena", "workflow", "cli"]
githubUrl: "https://github.com/first-fluke/oh-my-agent"
githubStars: 1038
author: "first-fluke"
installCommand: "curl -fsSL https://raw.githubusercontent.com/first-fluke/oh-my-agent/main/cli/install.sh | bash"
compatibleAgents: ["Claude Code", "Codex", "Cursor", "Gemini CLI", "OpenCode", "GitHub Copilot", "Antigravity", "Serena"]
featured: true
icon: "Bot"
---

# oh-my-agent

oh-my-agent는 하나의 에이전트가 모든 것을 처리하는 대신, 전문화된 에이전트들이 팀을 이뤄 협업할 수 있게 해주는 멀티 에이전트 하네스입니다. 프론트엔드, 백엔드, 아키텍처, QA, PM, DB, 모바일, 인프라, 디버그, 디자인 등 각 도메인별로 특화된 에이전트를 구성하고, `.agents/` 디렉토리를 단일 진실 공급원으로 삼아 모든 AI IDE에서 동일한 스킬과 규칙을 공유합니다.

## 언제 쓰나

- 하나의 에이전트가 모든 걸 처리하다 중간에 혼란에 빠지는 상황을 피하고 싶을 때
- 프론트엔드, 백엔드, DB 등 도메인별로 전문화된 에이전트 팀을 구성하고 싶을 때
- Claude Code, Cursor, Codex CLI 등 여러 AI IDE에서 동일한 스킬과 워크플로를 공유하고 싶을 때
- 프로젝트 컨벤션에 맞춰 에이전트 행동을 정밀하게 제어하고 싶을 때

## 특징

- 프론트엔드, 백엔드, 아키텍처, QA, PM, DB, 모바일, 데브옵스 등 도메인별 전문화된 에이전트
- `.agents/`를 단일 진실 공급원으로 모든 AI IDE(Claude Code, Cursor, Codex CLI, Gemini CLI 등)에 동일 설정 투영
- `oma agent:spawn` CLI로 필요할 때 전문화 에이전트 즉시 생성
- `curl | bash` 한 줄 설치, bun/uv/serena 자동 설치
- 사전 구성된 프리셋 제공 (all, backend, frontend, fullstack, devops, research 등)
- Windows, macOS, Linux 모두 지원
