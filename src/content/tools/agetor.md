---
title: "Agetor"
description: "Claude Code와 Codex 같은 CLI 에이전트를 칸반 보드와 작업별 git worktree로 오케스트레이션하는 로컬 우선 하네스입니다. 여러 저장소의 작업을 병렬로 굴리고, 승인과 후속 메시지를 카드 단위로 관리할 때 유용합니다."
category: "agent-harness"
tags: ["kanban", "worktree", "parallel-agents", "claude-code", "codex", "electrobun", "bun", "local-first"]
githubUrl: "https://github.com/alamops/agetor"
websiteUrl: "https://agetor.dev"
githubStars: 17
author: "alamops"
installCommand: "git clone https://github.com/alamops/agetor.git && cd agetor && bun install && bun run build"
compatibleAgents: ["Claude Code", "Codex"]
featured: false
icon: "KanbanSquare"
---

# Agetor

Agetor는 CLI 코딩 에이전트를 칸반 보드에서 관리하는 로컬 우선 오케스트레이션 도구입니다. 각 카드에 프롬프트, 작업 디렉터리, 에이전트를 묶고, 작업별 git worktree와 child process로 분리해 여러 리포지토리를 동시에 돌릴 때 유용합니다.

## 언제 쓰나

- Claude Code나 Codex를 여러 작업에 병렬로 붙이고 싶을 때
- 작업마다 별도 git worktree를 써서 충돌 없이 진행하고 싶을 때
- 승인, 확인 질문, 후속 메시지를 카드 단위로 정리하고 싶을 때
- 로컬 머신 안에서만 에이전트 오케스트레이션을 돌리고 싶을 때

## 핵심 특징

- **칸반 기반 제어판**: 작업을 카드로 두고 상태를 흐름으로 관리합니다.
- **작업별 worktree 분리**: 각 태스크를 독립된 브랜치와 worktree에서 실행합니다.
- **Claude Code + Codex 지원**: 여러 CLI 에이전트를 하나의 UI에서 운영합니다.
- **로컬 전용**: 네트워크 릴레이 없이 자기 머신에서 직접 실행합니다.
- **Electrobun 앱**: Bun 메인 프로세스와 네이티브 웹뷰로 동작합니다.
