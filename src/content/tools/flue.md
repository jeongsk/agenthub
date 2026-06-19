---
title: "Flue"
description: "Astro 팀(withastro)이 만든 샌드박스 에이전트 하네스 프레임워크입니다. TypeScript 기반으로 자율 에이전트와 AI 워크플로를 구축하며, 가상/로컬/원격 샌드박스에서 안전하게 실행합니다."
category: "agent-harness"
tags: ["agent-harness", "typescript", "sandbox", "withastro", "framework", "workflow", "autonomous"]
githubUrl: "https://github.com/withastro/flue"
githubStars: 5815
author: "withastro"
websiteUrl: "https://www.flueframework.com"
compatibleAgents: []
featured: false
icon: "Zap"
---

# Flue

Flue는 Astro 팀(withastro)이 만든 TypeScript 기반 에이전트 하네스 프레임워크입니다. 자율 에이전트와 강력한 AI 워크플로를 구축하기 위해 설계되었으며, 가상·로컬·원격 컨테이너 샌드박스에서 에이전트를 안전하게 실행합니다.

## 언제 쓰나

- 자율 에이전트를 TypeScript로 직접 구축하고 싶을 때
- 에이전트를 샌드박스(가상/로컬/원격) 안에서 안전하게 실행하고 싶을 때
- HTTP 라우팅 가능한 에이전트를 만들고 싶을 때
- Astro/withastro 생태계에 익숙한 팀이 에이전트 프레임워크를 선택할 때

## 핵심 특징

- TypeScript 기반의 `createAgent()` DSL로 에이전트 정의.
- 스킬 파일(`SKILL.md`)을 임포트하는 정적 분석 기반 시스템.
- 가상·로컬·원격 샌드박스 실행 환경 지원.
- HTTP 라우트로 에이전트 노출 및 보호.
- `@flue/runtime`, `@flue/skills`, `@flue/tools` 등 모듈형 패키지.
- Apache 2.0 라이선스.
