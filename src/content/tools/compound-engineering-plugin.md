---
title: "Compound Engineering Plugin"
description: "계획·실행·리뷰·학습 축적을 하나의 흐름으로 묶는 공식 컴파운드 엔지니어링 플러그인으로, 37개 스킬과 51개 에이전트를 제공합니다."
category: "agent-harness"
tags: ["compound-engineering", "plan-review", "skills", "agents", "workflow"]
githubUrl: "https://github.com/EveryInc/compound-engineering-plugin"
websiteUrl: "https://every.to/guides/compound-engineering"
githubStars: 18596
author: "EveryInc"
installCommand: "claude /plugin marketplace add EveryInc/compound-engineering-plugin && /plugin install compound-engineering"
compatibleAgents: ["Claude Code", "Codex", "Cursor", "GitHub Copilot"]
featured: true
icon: "Layers"
---

# Compound Engineering Plugin

Compound Engineering Plugin은 Claude Code, Codex, Cursor 등 여러 AI 코드 에디터를 위한 공식 컴파운드 엔지니어링 플러그인입니다. "각 작업이 다음 작업을 더 쉽게 만들어야 한다"는 원칙 아래, 계획·실행·리뷰·학습 축적을 하나의 구조화된 흐름으로 묶어 줍니다. 계획과 리뷰에 80%, 실행에 20%의 노력을 들여 기술 부채 누적을 막는 것을 지향합니다.

## 언제 쓰나

- 코딩 에이전트 작업을 계획→실행→리뷰→학습의 일관된 루프로 운영하고 싶을 때
- 매 작업에서 얻은 학습을 문서로 축적해 다음 작업을 더 쉽게 만들고 싶을 때
- 멀티 에이전트 기반의 병합 전 코드 리뷰를 자동화하고 싶을 때
- Claude Code·Codex·Cursor 등 여러 에디터에서 동일한 엔지니어링 워크플로를 쓰고 싶을 때

## 특징

- **37개 스킬 + 51개 에이전트**: 전략 수립부터 실행·리뷰·학습 축적까지 폭넓게 커버합니다.
- **전략·기획 커맨드**: `/ce-strategy`, `/ce-ideate`, `/ce-brainstorm`, `/ce-plan`로 아이디어를 구체적 계획으로 만듭니다.
- **실행·품질 커맨드**: `/ce-work`(작업 추적), `/ce-debug`(체계적 디버깅), `/ce-code-review`(멀티 에이전트 리뷰), `/ce-compound`(학습 문서화)를 제공합니다.
- **모니터링**: `/ce-product-pulse`로 기간별 사용량·성능 리포트를 확인합니다.
- **폭넓은 호환**: Claude Code, Codex, Cursor, GitHub Copilot 외에 OpenCode, Gemini, Qwen Code 등도 지원합니다.

> 마켓플레이스 설치 외에 Cursor·Copilot은 각 마켓플레이스/명령 팔레트에서, Codex 등은 Bun 기반 설치기로 설정합니다.
