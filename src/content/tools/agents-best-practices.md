---
title: "agents-best-practices"
description: "에이전트 하네스 설계·감사·리팩터링을 돕는 프로바이더 중립 스킬입니다. Codex, Claude Code 같은 에이전트의 계획, 권한, 실행, 관찰 루프를 정리하고 싶을 때 유용합니다."
category: "agent-skill"
tags: ["agent-skills", "harness", "orchestration", "claude-code", "codex", "workflow", "agent-architecture"]
githubUrl: "https://github.com/DenisSergeevitch/agents-best-practices"
githubStars: 1432
author: "DenisSergeevitch"
installCommand: "npx skills add DenisSergeevitch/agents-best-practices -g"
compatibleAgents: ["Claude Code", "Codex"]
icon: "Sparkles"
---

# agents-best-practices

`agents-best-practices`는 에이전트 하네스와 실행 규율을 정리해 주는 스킬입니다. 모델이 제안한 행동을 하네스가 검증·승인·실행·기록·관찰하는 흐름을 설계할 때 참고하기 좋습니다.

![agents-best-practices 아이콘](/tool-screenshots/agents-best-practices.jpeg)

## 언제 쓰나

- Codex, Claude Code 같은 에이전트의 실행 구조를 설계하거나 점검할 때
- 계획/권한/도구 호출/관찰 루프를 더 엄격하게 만들고 싶을 때
- 에이전트 워크플로를 MVP 수준에서 정의하고, 운영 가능하게 다듬고 싶을 때
- 기존 에이전트 프롬프트나 하네스를 감사(audit)·리팩터링하고 싶을 때

## 핵심 특징

- **프로바이더 중립**: 특정 모델이나 제품에 묶이지 않고 공통 원칙을 다룹니다.
- **하네스 중심**: 에이전트의 행동보다 실행 프레임과 제어 루프에 초점을 둡니다.
- **실무형 스킬**: 설계, 생성, 감사, 설명까지 한 번에 다룹니다.
- **설치가 간단함**: `skills` CLI로 바로 추가할 수 있습니다.
