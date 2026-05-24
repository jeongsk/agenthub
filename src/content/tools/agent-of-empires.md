---
title: "Agent of Empires"
description: "여러 AI 코딩 에이전트를 TUI와 웹 대시보드에서 관리하는 세션 매니저입니다. tmux, git worktree, Docker 샌드박스로 병렬 에이전트 운영을 정리할 때 유용합니다."
category: "agent-framework"
tags: ["orchestrator", "tui", "web-dashboard", "tmux", "worktree", "multi-agent"]
githubUrl: "https://github.com/njbrake/agent-of-empires"
githubStars: 2387
author: "njbrake"
installCommand: "brew install aoe"
compatibleAgents: ["Claude Code", "Codex", "OpenCode", "Gemini", "Copilot"]
featured: true
icon: "Layers3"
---

# Agent of Empires

Agent of Empires는 여러 AI 코딩 에이전트를 세션 단위로 관리하는 오케스트레이션 도구입니다. TUI와 웹 대시보드로 병렬 작업과 장기 세션을 다루기 쉽게 해 줍니다.

## 언제 쓰나

- 여러 에이전트를 서로 다른 브랜치에서 동시에 돌리고 싶을 때
- 작업 중인 에이전트의 상태를 한눈에 보고 싶을 때
- 터미널을 닫아도 세션이 계속 유지되게 하고 싶을 때
- 모바일이나 브라우저에서 에이전트 상태를 원격으로 확인하고 싶을 때

## 특징

- tmux 기반 세션 관리로 장시간 작업을 유지합니다.
- git worktree와 Docker 샌드박스를 함께 다룹니다.
- TUI, 웹 대시보드, HTTP API까지 제공합니다.
- Claude Code, Codex CLI, Gemini CLI, OpenCode, Copilot CLI 등 여러 에이전트를 지원합니다.

## 참고

- 이 저장소는 단일 기능 스킬보다 **에이전트 운영 인프라**에 가깝습니다.
- 그래서 이 레지스트리에서는 `agent-harness`로 분류하는 편이 자연스럽습니다.
