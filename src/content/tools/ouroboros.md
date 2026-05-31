---
title: "Ouroboros"
description: "AI 코딩을 위한 'Agent OS'입니다. 즉흥 프롬프트 대신 명세 우선 워크플로(interview→crystallize→execute→evaluate→evolve)로 에이전트 작업을 재현·관찰·정책 통제 가능하게 구동합니다."
category: "agent-harness"
tags: ["agent-os", "spec-first", "orchestration", "python", "cli", "replayable", "multi-agent"]
githubUrl: "https://github.com/Q00/ouroboros"
githubStars: 4368
author: "Q00"
installCommand: "pip install 'ouroboros-ai[claude]'"
compatibleAgents: ["Claude Code", "Codex", "OpenCode", "Hermes"]
featured: false
icon: "Infinity"
---

# Ouroboros

Ouroboros는 AI 코딩을 위한 **Agent OS**입니다. 비결정적인 에이전트 작업을 재현 가능하고 관찰 가능하며 정책에 묶인 실행 계약으로 바꾸는 로컬 우선 런타임 레이어입니다. 막연한 아이디어를 즉흥적으로 프롬프트하는 대신, 인터뷰로 의도를 끌어내 명세로 굳히고(crystallize) 실행·평가·진화시키는 명세 우선 워크플로를 제공합니다. Claude Code, Codex CLI, OpenCode, Hermes 등 여러 코딩 에이전트 위에서 동작합니다.

## 언제 쓰나

- 에이전트 작업을 재현 가능한 실행 계약으로 만들어 같은 결과를 다시 돌려보고 싶을 때
- 즉흥 프롬프트 대신 명세를 먼저 확정하고 그에 따라 에이전트를 구동하고 싶을 때
- 여러 코딩 에이전트(Claude Code·Codex·OpenCode·Hermes)를 하나의 워크플로로 묶어 운영하고 싶을 때
- 에이전트 실행을 관찰·정책 통제하면서 자율 작업을 길게 돌리고 싶을 때

## 주요 기능

- 명세 우선 루프: interview → crystallize → execute → evaluate → evolve
- 재현 가능·관찰 가능한 실행 계약으로 에이전트 작업을 기록
- 로컬 우선 런타임 레이어 (PyPI `ouroboros-ai` 패키지)
- Claude Code·LiteLLM·MCP·Textual TUI 등 선택적 확장(extras) 제공
- 여러 코딩 에이전트를 가로지르는 워크플로 구동

## 참고

- 이 저장소는 단일 스킬이 아니라 **기존 코딩 에이전트를 감싸 명세 기반으로 구동·관찰하는 오케스트레이터(Agent OS)**입니다.
- 그래서 이 레지스트리에서는 `agent-harness`로 분류하는 편이 자연스럽습니다.
