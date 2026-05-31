---
title: "Superset"
description: "AI 에이전트를 위한 코드 에디터입니다. Claude Code, Codex, Gemini CLI 등 어떤 CLI 기반 코딩 에이전트든 여러 개를 동시에 실행하고, 격리된 git worktree에서 관리하며, 내장 diff 뷰어와 IDE 연동으로 변경을 검토하고 병합할 수 있는 데스크톱 앱입니다."
category: "agent-harness"
tags: ["ai-agents", "claude-code", "codex", "gemini-cli", "opencode", "cursor", "orchestration", "parallel-agents", "desktop-app", "git-worktree", "macos"]
githubUrl: "https://github.com/superset-sh/superset"
githubStars: 11456
author: "superset-sh"
compatibleAgents: ["Claude Code", "Codex", "Gemini CLI", "OpenCode", "Cursor", "GitHub Copilot", "Amp Code", "Pi"]
featured: true
icon: "Workflow"
---

# Superset

Superset은 AI 코딩 에이전트를 병렬로 실행하고 관리하기 위한 데스크톱 앱입니다. 터미널에서 실행되는 어떤 CLI 에이전트든 지원하며, 각 작업을 독립된 git worktree에 격리해 충돌 없이 동시에 진행할 수 있습니다.

## 언제 쓰나

- 여러 코딩 에이전트(Claude Code, Codex, Gemini CLI 등)를 한 프로젝트에서 동시에 운영하고 싶을 때
- 각 작업을 격리된 워크스페이스에서 관리해 충돌을 방지하고 싶을 때
- 에이전트 진행 상황을 한눈에 모니터링하고, 작업 완료 시 알림을 받고 싶을 때
- 내장 diff 뷰어로 변경 사항을 빠르게 검토하고 편집기로 열어서 수정하고 싶을 때
- Mac에서 에이전트 오케스트레이션 도구를 찾고 있을 때

## 특징

- Claude Code, Codex, Gemini CLI, Cursor, OpenCode 등 주요 CLI 에이전트 모두 지원
- 10개 이상의 에이전트를 동시에 병렬 실행 가능
- 각 작업을 독립된 git worktree에서 격리 관리
- 실시간 에이전트 모니터링 및 작업 완료 알림
- 내장 diff 뷰어로 변경 사항 검토
- 한 번의 클릭으로 에디터/터미널로 워크스페이스 열기
