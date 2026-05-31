---
title: "Claude Code Harness"
description: "Claude Code에 계획·작업·리뷰·출시의 검증 루프를 붙여, 에이전트 작업을 더 안정적으로 진행하게 해 주는 하네스입니다."
category: "agent-harness"
tags: ["claude-code", "workflow", "plan-review", "autonomy", "shell"]
githubUrl: "https://github.com/Chachamaru127/claude-code-harness"
githubStars: 2322
author: "Chachamaru127"
installCommand: "claude /plugin marketplace add Chachamaru127/claude-code-harness && /plugin install claude-code-harness@claude-code-harness-marketplace && /harness-setup"
compatibleAgents: ["Claude Code", "Codex", "OpenCode"]
featured: true
icon: "Workflow"
---

# Claude Code Harness

Claude Code Harness는 Claude Code를 단순한 코드 실행 도구가 아니라, 계획→작업→리뷰→출시의 검증 루프로 묶어 주는 하네스입니다. 작은 작업부터 릴리스 준비까지 같은 흐름으로 관리할 수 있게 해 줍니다.

![Claude Code Harness plan→work→review→release 운영 루프 다이어그램](/tool-screenshots/claude-code-harness-loop.webp)

## 언제 쓰나

- Claude Code 작업을 더 구조적으로 진행하고 싶을 때
- 계획과 구현을 분리하고, 승인된 범위만 작업하게 하고 싶을 때
- 독립적인 리뷰와 검증 단계를 두고 싶을 때
- PR이나 릴리스용 증빙을 정리된 형태로 남기고 싶을 때
- Codex나 OpenCode 쪽으로도 비슷한 운영 흐름을 맞추고 싶을 때

## 특징

- `plan → work → review → release`의 명확한 흐름을 제공합니다.
- `spec.md`와 `Plans.md`를 기준 문서로 삼아 작업 범위를 고정합니다.
- 설치 후 바로 사용할 수 있는 슬래시 커맨드 중심 구조입니다.
- Claude Code뿐 아니라 Codex, OpenCode 쪽 호환 경로도 함께 다룹니다.
- 하네스 자체가 에이전트 운영의 표준 절차를 강제하는 쪽에 가깝습니다.
