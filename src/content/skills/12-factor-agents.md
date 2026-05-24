---
title: "12-Factor Agents"
description: "프로덕션용 LLM 에이전트를 만들 때 필요한 원칙을 정리한 가이드 저장소입니다. 스펙, 프롬프트, 컨텍스트, 도구, 실행 상태를 분리해 더 안정적인 에이전트 설계를 돕습니다."
category: "agent-harness"
tags: ["agent-harness", "framework", "context-engineering", "tdd", "llm"]
githubUrl: "https://github.com/humanlayer/12-factor-agents"
author: "humanlayer"
installCommand: "git clone https://github.com/humanlayer/12-factor-agents.git"
compatibleAgents: ["Claude Code", "Codex", "Cursor", "Gemini", "OpenCode"]
featured: true
icon: "BookOpen"
---

# 12-Factor Agents

12-Factor Agents는 LLM 에이전트를 제품 수준으로 다루기 위한 설계 원칙을 모아 둔 저장소입니다. 단순히 프롬프트를 잘 쓰는 수준이 아니라, 에이전트가 어떤 상태를 갖고, 어디에 저장하고, 어떤 입력과 출력을 책임져야 하는지까지 구조적으로 정리합니다.

## 핵심 포인트

- **컨텍스트를 소유하라**: 작업에 필요한 맥락을 에이전트가 분명하게 다루도록 만듭니다.
- **프롬프트와 실행 상태를 분리하라**: 바뀌는 것과 고정되는 것을 섞지 않게 해 줍니다.
- **도구 호출을 구조화하라**: 모델의 자유 서술보다 검증 가능한 인터페이스를 우선합니다.
- **작고 분리된 에이전트로 나누라**: 하나의 거대한 에이전트보다 역할이 분명한 단위가 유지보수에 유리합니다.

## 이런 경우에 유용합니다

- LLM 기능을 데모가 아니라 실제 제품으로 만들고 싶을 때
- 에이전트 설계 원칙을 팀 기준으로 정리하고 싶을 때
- 컨텍스트, 상태, 도구 사용 방식을 다시 설계해야 할 때
- 기존 에이전트가 너무 즉흥적으로 움직여 신뢰도가 떨어질 때

## 참고

- 이 저장소는 특정 런타임용 플러그인이라기보다, 에이전트 설계를 다루는 *방법론*에 가깝습니다.
- 그래서 이 레지스트리에서는 `agent-harness`로 분류하는 편이 더 자연스럽습니다.
