---
title: "Matt Pocock Skills"
description: "Matt Pocock이 실제 엔지니어링 작업에 쓰는 에이전트 스킬 모음입니다. 계획을 날카롭게 다듬는 grilling, TDD, 버그 진단, 도메인 모델링, PRD·이슈 분해 같은 소프트웨어 개발 워크플로를 작은 스킬 단위로 제공합니다."
category: "agent-skill"
tags: ["agent-skills", "skills-pack", "engineering", "claude-code", "codex", "tdd", "debugging", "planning", "domain-modeling"]
githubUrl: "https://github.com/mattpocock/skills"
githubStars: 144356
author: "mattpocock"
installCommand: "npx skills@latest add mattpocock/skills"
compatibleAgents: ["Claude Code", "Codex", "Cursor", "Gemini", "OpenCode"]
featured: true
icon: "BookOpenCheck"
---

# Matt Pocock Skills

Matt Pocock Skills는 "vibe coding"보다 실제 엔지니어링 품질을 중시하는 에이전트 스킬 모음입니다. 하나의 거대한 프레임워크가 프로세스를 모두 소유하게 하기보다, 작고 조합 가능한 스킬을 Claude Code, Codex 같은 코딩 에이전트에 붙여서 계획 수립, 구현, 테스트, 디버깅, 문서화를 더 안정적으로 수행하게 만드는 데 초점을 둡니다.

## 언제 쓰나

- 기능 구현 전에 요구사항과 의사결정 트리를 깊게 검증하고 싶을 때
- 코딩 에이전트가 테스트 없이 큰 변경을 밀어붙이는 것을 막고 싶을 때
- 버그를 바로 고치기보다 재현, 축소, 가설, 계측, 회귀 테스트 순서로 진단하게 만들고 싶을 때
- 프로젝트 고유 용어와 도메인 모델을 문서화해 에이전트의 장황함과 오해를 줄이고 싶을 때
- PRD, 이슈, triage, handoff 같은 개발 운영 흐름을 에이전트 스킬로 표준화하고 싶을 때

## 핵심 특징

- **Grilling 기반 정렬**: `/grill-me`, `/grill-with-docs`로 구현 전에 사용자를 집요하게 인터뷰해 모호한 결정을 줄입니다.
- **엔지니어링 품질 루프**: `/tdd`, `/diagnosing-bugs`, `/codebase-design`으로 테스트 우선 개발, 체계적 디버깅, 깊은 모듈 설계를 강조합니다.
- **문서와 도메인 모델**: `/grill-with-docs`, `/domain-modeling`, `/to-prd`, `/to-issues`가 `CONTEXT.md`, ADR, PRD, 이슈 분해 같은 산출물을 만듭니다.
- **작고 조합 가능한 구조**: user-invoked 스킬과 model-invoked 스킬을 나누어, 사용자가 직접 호출하는 오케스트레이션과 자동으로 적용되는 개발 원칙을 분리합니다.
- **폭넓은 스킬 구성**: engineering, productivity, misc 영역에 30개 이상의 SKILL.md가 포함되어 있습니다.

## 설치

skills.sh 기반 설치를 권장합니다.

```bash
npx skills@latest add mattpocock/skills
```

설치 과정에서 원하는 스킬과 대상 코딩 에이전트를 고른 뒤, 초기 설정용 `/setup-matt-pocock-skills`를 선택하는 것이 README의 권장 흐름입니다.

## 참고

- 초기 설정 스킬인 `/setup-matt-pocock-skills`는 이슈 트래커, triage 라벨, 문서 저장 위치를 묻습니다.
- 이 저장소에는 active skill 외에도 `deprecated`, `in-progress`, `personal` 디렉터리가 있으므로, 실제 프로젝트에 도입할 때는 필요한 스킬만 선별하는 편이 좋습니다.
- 라이선스는 MIT입니다.
