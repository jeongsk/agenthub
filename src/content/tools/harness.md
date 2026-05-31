---
title: "Harness"
description: "도메인 설명만으로 전문 에이전트 팀과 그들이 사용할 스킬을 자동 설계·생성해 주는 메타 스킬형 Claude Code 플러그인입니다."
category: "agent-framework"
tags: ["claude-code", "claude-code-plugin", "agent-teams", "multi-agent", "meta-skill"]
githubUrl: "https://github.com/revfactory/harness"
githubStars: 4473
author: "revfactory"
installCommand: "claude /plugin marketplace add revfactory/harness && /plugin install harness@harness-marketplace"
compatibleAgents: ["Claude Code"]
featured: false
icon: "Network"
---

# Harness

Harness는 도메인을 설명하면 그에 맞는 전문 에이전트 팀과 각 에이전트가 사용할 스킬을 자동으로 설계·생성해 주는 메타 스킬형 Claude Code 플러그인입니다. 멀티 에이전트 시스템을 직접 손으로 아키텍처링하지 않아도, 검증된 패턴을 기반으로 바로 쓸 수 있는 에이전트 정의와 스킬을 만들어 줍니다.

## 언제 쓰나

- 특정 도메인을 위한 멀티 에이전트 팀을 빠르게 구성하고 싶을 때
- 에이전트 간 협업 구조(파이프라인, 팬아웃 등)를 직접 설계하기 부담스러울 때
- 에이전트와 함께 쓸 스킬까지 일관된 형태로 같이 만들고 싶을 때
- 일회성 작업용 서브에이전트부터 상시 운영 팀까지 한 도구로 다루고 싶을 때

## 특징

- **6가지 아키텍처 패턴**: Pipeline, Fan-out/Fan-in, Expert Pool, Producer-Reviewer, Supervisor, Hierarchical Delegation을 제공합니다.
- **스킬 자동 생성**: 점진적 공개(progressive disclosure) 방식으로 컨텍스트를 효율적으로 관리하는 스킬을 만들어 줍니다.
- **에이전트 팀 오케스트레이션**: 에이전트 간 통신, 에러 처리, 협업 흐름을 함께 구성합니다.
- **검증·테스트 지원**: 드라이런 테스트와 비교 분석으로 생성 결과를 점검할 수 있습니다.
- "harness 만들어줘", "이 도메인용 에이전트 팀 설계해줘" 같은 자연어 한 줄로 트리거됩니다.
- Agent Teams 모드(기본, 2개 이상 에이전트)와 Subagents 모드(일회성 작업)를 지원합니다.

> 에이전트 팀 기능은 Claude Code의 실험적 기능이라 `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` 환경 변수가 필요합니다.
