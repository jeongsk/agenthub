---
title: "Pi Subagents"
description: "Pi가 코드 리뷰·구현·리서치·병렬 감사 등을 전문 하위 에이전트에 위임하도록 해 주는 비동기 서브에이전트 확장입니다."
category: "plugin"
tags: ["pi", "subagents", "delegation", "orchestration", "parallel"]
githubUrl: "https://github.com/nicobailon/pi-subagents"
githubStars: 1761
author: "nicobailon"
installCommand: "pi install npm:pi-subagents"
compatibleAgents: ["Pi"]
featured: false
icon: "Users"
---

# Pi Subagents

Pi Subagents는 Pi가 작업을 집중된 하위 에이전트(subagent)에 위임할 수 있게 해 주는 확장입니다. 코드 리뷰, 구현, 리서치, 병렬 감사 같은 작업을 전문 에이전트에 분배하고, 잘림 처리·산출물·세션 공유와 함께 비동기로 실행할 수 있습니다.

## 언제 쓰나

- 한 작업을 여러 전문 하위 에이전트로 나눠 처리하고 싶을 때
- 코드 리뷰를 정확성·테스트·복잡도 등 여러 관점으로 병렬 실행하고 싶을 때
- 메인 흐름과 분리된 백그라운드/비동기 작업을 돌리고 싶을 때
- 계획에 대한 제2의 의견(오라클)을 받고 싶을 때

## 특징

- **내장 에이전트**: `scout`(코드베이스 정찰), `reviewer`(리뷰), `worker`(구현), `planner`(계획), `oracle`(제2 의견·리스크), `researcher`(리서치), `context-builder`(핸드오프 준비)를 제공합니다.
- **다양한 실행 모드**: 포그라운드 스트리밍, 백그라운드/비동기, 순차 체인, 병렬 실행, 구조화 데이터 기반 동적 팬아웃을 지원합니다.
- **슬래시 커맨드**: `/run`, `/chain`, `/parallel`, `/run-chain`, `/subagents-doctor`로 위임을 제어합니다.
- **자연어 트리거**: "이 diff를 reviewer로 리뷰해줘", "oracle에게 계획 의견 받아줘"처럼 자연어로 호출됩니다.

> Pi용 확장으로 `pi install npm:pi-subagents`로 설치하며, 인터컴 기능은 `pi install npm:pi-intercom`을 함께 설치합니다.
