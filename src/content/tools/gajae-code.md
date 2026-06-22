---
title: "Gajae-Code"
description: "인터뷰, 검토된 계획, tmux 기반 실행, 지속 가능한 검증을 중심으로 코딩 에이전트 작업을 구조화하는 외부 실행형 에이전트 하네스입니다."
category: "agent-harness"
tags: ["coding-agent", "agent-harness", "tmux", "planning", "verification", "typescript"]
githubUrl: "https://github.com/Yeachan-Heo/gajae-code"
websiteUrl: "https://gajae-code.com"
githubStars: 1023
author: "Yeachan-Heo"
installCommand: "bun install -g gajae-code"
compatibleAgents: ["Claude Code", "Codex", "OpenCode", "Claw Code"]
featured: false
icon: "TerminalSquare"
---

# Gajae-Code

Gajae-Code(`gjc`)는 기존 코딩 에이전트를 대체하거나 숨은 플러그인으로 들어가는 대신, 원하는 저장소나 worktree 옆에서 실행하는 **외부 코딩 에이전트 하네스**입니다. 모호한 요청을 먼저 인터뷰하고, 계획을 검토한 뒤, tmux 기반 실행과 검증 증거를 남기는 흐름에 초점을 둡니다.

## 언제 쓰나

- 코딩 에이전트에게 바로 수정을 맡기기 전에 요구사항을 명확히 인터뷰하고 싶을 때
- 구현 전에 계획을 만들고 비판적으로 검토하는 절차가 필요할 때
- tmux 기반 leader/worker 세션으로 큰 작업을 병렬화하고 싶을 때
- 작업 목표, 수정 이력, 검증 결과를 `.gjc` 기반 증거로 남기고 싶을 때
- Codex CLI, Claude Code, OpenCode, Claw Code 옆에서 독립 실행형 하네스를 붙이고 싶을 때

## 핵심 워크플로

```text
deep-interview -> ralplan -> ultragoal
                         └─ optional team execution
```

- **deep-interview**: 애매한 요구사항을 구체적인 조건으로 바꿉니다.
- **ralplan**: 코드 변경 전에 구현 계획을 만들고 검토합니다.
- **ultragoal**: 목표, 수정, 검증, 완료 증거를 추적합니다.
- **team**: 병렬 실행이 의미 있을 때 tmux-backed worker를 조율합니다.

## 주요 기능

- 저장소나 worktree에서 직접 실행하는 외부 runner 방식
- `gjc --tmux`, `gjc --tmux --worktree <name>` 기반 실행 표면
- 기본 workflow skill과 role agent 제공
- 연구/REPL 모드(`gjc rlm`)와 선택적 computer-use 실험 기능
- RPC, Bridge/HTTPS, standalone MCP 관련 문서와 외부 컨트롤러 연동 경계 제공

## 빠른 시작

```sh
bun install -g gajae-code

gjc
# 또는 tmux-backed leader session
gjc --tmux
# 격리 worktree에서 위험하거나 리뷰 가능한 작업 수행
gjc --tmux --worktree my-task-branch
```

## 참고

- README 기준 실험적 beta-stage 프로젝트이므로 중요한 작업에는 결과 검증이 필요합니다.
- 사전 빌드 바이너리는 Linux, Windows, macOS Apple Silicon 중심으로 제공됩니다.
- Intel macOS에서는 Bun/npm 패키지 경로나 소스 빌드를 사용하는 것이 권장됩니다.
- 라이선스는 MIT입니다.
