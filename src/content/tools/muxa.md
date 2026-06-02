---
title: "muxa"
description: "tmux 안에서 돌아가는 AI 코딩 에이전트의 상태를 감시하고, 대기·막힘·작업 중 여부를 라이브 TUI, 상태줄, 데스크톱 알림, 로컬 리포트로 보여 주는 관측·오케스트레이션 레이어입니다."
category: "agent-harness"
tags: ["tmux", "observability", "agent-runtime", "status-line", "notifications", "claude-code", "codex", "gemini-cli", "orchestration"]
githubUrl: "https://github.com/Open330/muxa"
websiteUrl: "https://muxa.dev"
githubStars: 14
author: "Open330"
installCommand: "curl -fsSL https://raw.githubusercontent.com/Open330/muxa/main/scripts/install.sh | sh"
compatibleAgents: ["Claude Code", "Codex", "Gemini CLI"]
featured: false
icon: "Activity"
---

# muxa

muxa는 tmux 안에서 실행 중인 AI 코딩 에이전트를 관찰하고 운영하기 위한 레이어입니다. 에이전트가 지금 무엇을 하고 있는지, 어디서 막혔는지, 사용자의 입력이 필요한지를 상태줄과 TUI로 빠르게 확인할 수 있습니다.

## 언제 쓰나

- tmux pane 안에서 돌아가는 에이전트들을 한 번에 보고 싶을 때
- Claude Code, Codex, Gemini CLI의 상태를 수집해 정리하고 싶을 때
- 막힌 에이전트를 빠르게 찾고 거기로 점프하고 싶을 때
- 상태줄, 알림, 리포트로 로컬 관측을 붙이고 싶을 때

## 핵심 특징

- **tmux 중심 관측**: 현재 pane과 session 상태를 추적합니다.
- **라이브 TUI**: 에이전트와 pane을 한 화면에서 탐색합니다.
- **상태줄/알림/리포트**: 요약, 알림, 통계를 로컬에서 제공합니다.
- **다중 에이전트 지원**: Claude Code, Codex, Gemini CLI를 공식 지원합니다.
- **로컬 우선**: 외부 클라우드 릴레이 없이 머신 내부에서 동작합니다.
