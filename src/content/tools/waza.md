---
title: "Waza"
description: "일상적인 엔지니어링 습관(설계·검토·디버깅·러닝)을 AI 에이전트가 실행할 수 있는 스킬로 만든 컬렉션입니다. Claude Code와 Codex에서 8가지 슬래시 커맨드(/think, /design, /check, /hunt, /write, /learn, /read, /health)로 바로 쓸 수 있습니다."
category: "agent-skill"
tags: ["claude-code", "codex", "engineering-habits", "code-review", "debugging", "design", "learning", "skills"]
githubUrl: "https://github.com/tw93/Waza"
githubStars: 5362
author: "tw93"
installCommand: "npx skills add tw93/Waza -a claude-code -g -y"
compatibleAgents: ["Claude Code", "Codex", "OpenCode"]
icon: "BrainCircuit"
---

# Waza

Waza(技, わざ)는 엔지니어가 일상적으로 하는 사고 과정(요구사항 분석, 코드 리뷰, 버그 추적, 설계, 학습)을 AI 에이전트의 슬래시 커맨드로 만들어 놓은 스킬 모음입니다. Kaku(코드) · Waza(습관) · Kami(문서) 3부작 중 Waza가 두 번째입니다.

## 언제 쓰나

- AI가 코드만 작성하는 게 아니라, 설계→검토→출시까지 체계적으로 작업하게 하고 싶을 때
- 디버깅을 AI에게 맡길 때 감으로 때우지 않고 체계적인 원인 분석을 시키고 싶을 때
- 프론트엔드 UI를 AI에게 맡길 때 '그냥 예쁘게'가 아니라 구체적인 방향을 주고 싶을 때
- 새로운 도메인을 학습할 때 AI가 능동적으로 자료 수집→정리→초안→검토까지 하게 하고 싶을 때

## 8가지 스킬

| 커맨드 | 언제 | 무엇을 하나 |
|--------|------|------------|
| `/think` | 무언가 만들기 전 | 요구사항을 압박 테스트하고, 결정이 완료된 계획을 산출 |
| `/design` | 프론트엔드 UI 구축 시 | 독창적인 UI 제작, 스크린샷 기반 미적 반복, 일반적인 기본값 회피 |
| `/check` | 작업 후 머지/릴리스 전 | 변경 검토, 프로젝트별 제약 추출, 릴리스/퍼블리시 처리, 증빙 확인 |
| `/hunt` | 버그/회귀/이상 동작 발견 시 | 체계적 디버깅, 원인 확정 후에만 수정 적용 |
| `/write` | 글쓰기/편집 시 | 자연스러운 중국어/영어 문장으로 재작성, 딱딱한 표현 제거 |
| `/learn` | 낯선 도메인 학습 시 | 수집→정리→개요→작성→다듬기→검토의 6단계 리서치 워크플로 |
| `/read` | URL/PDF 확인 시 | 플랫폼별 라우팅으로 요약 또는 마크다운 변환 |
| `/health` | 에이전트 상태 점검 시 | Codex, Claude Code, 프로젝트 설정, 검증기 출력을 예산 인식 방식으로 감사 |
