---
title: "Claude Code Workflow"
description: "JSON 기반의 멀티 에이전트 개발 프레임워크입니다. Claude Code를 중심으로 Gemini, Codex, OpenCode 같은 CLI를 함께 묶어 계획, 실행, 검토, 세션 관리까지 한 워크플로로 운영하고 싶을 때 유용합니다."
category: "agent-harness"
tags: ["claude-code", "multi-agent", "workflow", "orchestration", "task-orchestration", "gemini-cli", "codex", "opencode", "context-management"]
githubUrl: "https://github.com/catlog22/Claude-Code-Workflow"
websiteUrl: "https://ccw-command-explorer.vercel.app/"
githubStars: 2077
author: "catlog22"
installCommand: "npm install -g claude-code-workflow && ccw install -m Global"
compatibleAgents: ["Claude Code", "Codex", "Gemini", "OpenCode"]
featured: false
icon: "Workflow"
---

# Claude Code Workflow

Claude Code Workflow는 JSON 기반의 멀티 에이전트 개발 프레임워크입니다. Claude Code를 중심으로 Gemini, Codex, OpenCode 같은 CLI 도구를 함께 엮어 계획, 실행, 리뷰, 세션 관리까지 하나의 운영 흐름으로 다룰 수 있게 해 줍니다.

## 언제 쓰나

- Claude Code를 중심으로 여러 CLI 에이전트를 함께 운영하고 싶을 때
- 계획과 실행을 분리한 팀형 워크플로가 필요할 때
- 세션 상태를 유지하면서 반복 작업을 체계화하고 싶을 때
- 병렬 분석, 리뷰, 후속 실행 같은 멀티 에이전트 패턴을 만들고 싶을 때
- JSON 기반 설정으로 워크플로를 재현 가능하게 관리하고 싶을 때

## 특징

- JSON-driven 멀티 에이전트 워크플로
- Skill-based workflow 시스템
- Gemini, Codex, OpenCode, Claude를 묶는 CLI 오케스트레이션
- 세션 라이프사이클 start/resume/complete/sync 지원
- 큐 스케줄러와 멀티 터미널 대시보드 제공
- `/workflow/*`와 `workflow-*` 트리거를 함께 제공

## 참고

- 이 저장소는 단순한 스킬 묶음이 아니라, 여러 CLI와 세션 상태를 관리하는 *워크플로 프레임워크*에 가깝습니다.
- 그래서 레지스트리에서는 `agent-harness`로 분류하는 편이 자연스럽습니다.
