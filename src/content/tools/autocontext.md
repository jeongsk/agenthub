---
title: "Autocontext"
description: "에이전트가 여러 번의 실행과 평가를 거치며 스스로 개선하도록 돕는 재귀형 하니스입니다. 반복 실험, 평가 루프, playbook 축적, MCP 연동이 필요한 작업에 유용합니다."
category: "agent-harness"
tags: ["harness", "self-improvement", "evaluation", "mcp", "agent-workflow"]
githubUrl: "https://github.com/greyhaven-ai/autocontext"
githubStars: 1167
author: "greyhaven-ai"
installCommand: "uv tool install autocontext==0.5.0"
compatibleAgents: ["Claude Code", "Cursor", "Codex", "OpenCode", "Hermes Agent"]
---

# Autocontext

Autocontext는 에이전트가 단 한 번의 실행으로 끝나지 않고, 여러 세대의 실행과 평가를 거치며 점점 나아지도록 설계된 하니스입니다. 목표를 자연어로 주면 전략을 반복적으로 실험하고, 성공한 패턴은 playbook으로 축적해 다음 실행에 이어 붙입니다.

## 언제 쓰나

- 에이전트가 반복 실행을 통해 점점 더 잘하게 만들고 싶을 때
- 평가 루프와 점수 기준을 함께 운영하고 싶을 때
- 성공한 전략, 힌트, 도구 구성을 다음 실행에 재사용하고 싶을 때
- MCP나 CLI를 통해 에이전트 워크플로에 개선 루프를 붙이고 싶을 때

## 핵심 포인트

- **재귀형 개선 루프**: 실행 → 평가 → 학습 → 재실행 흐름을 반복합니다.
- **playbook 축적**: 유효했던 패턴을 다음 세대가 그대로 이어받습니다.
- **다중 런타임 연동**: Python CLI, TypeScript, Pi, MCP surface를 함께 지원합니다.
- **에이전트 친화적**: Hermes Agent를 포함한 터미널 중심 에이전트와 연결하기 좋습니다.

## 참고

- 이 프로젝트는 단순한 도구 묶음이 아니라, *에이전트 개선용 하니스*에 가깝습니다.
- 그래서 이 레지스트리에서는 `agent-harness`로 분류하는 편이 자연스럽습니다.
