---
title: "OpenAlice"
description: "연구부터 포지션 진입, 운용, 청산까지를 한 흐름으로 묶은 AI 트레이딩 에이전트 프레임워크입니다. Trading-as-Git과 Unified Trading Account(UTA)로 브로커를 추상화하고, 이벤트 로그·MCP·워크스페이스를 함께 써서 실제 매매 워크플로를 운영하고 싶을 때 유용합니다."
category: "agent-framework"
tags: ["trading-agent", "finance", "ai-trading", "gitops", "uta", "mcp", "workspace", "market-research", "automation"]
githubUrl: "https://github.com/TraderAlice/OpenAlice"
websiteUrl: "https://openalice.ai"
githubStars: 4628
author: "TraderAlice"
featured: false
icon: "CandlestickChart"
compatibleAgents: ["Claude Code", "Codex", "Cursor", "OpenCode", "Hermes Agent"]
---

# OpenAlice

OpenAlice는 주식, 크립토, 원자재, 외환, 매크로를 아우르는 AI 트레이딩 에이전트 프레임워크입니다. 단순히 신호만 뽑는 도구가 아니라, 리서치부터 포지션 진입, 지속적 관리, 청산까지 전 과정을 하나의 워크플로로 묶는 점이 핵심입니다.

## 언제 쓰나

- 리서치 → 주문 → 관리 → 청산을 하나의 에이전트 루프로 운영하고 싶을 때
- 브로커를 직접 다루기보다 UTA(Unified Trading Account)로 추상화된 거래 계층이 필요할 때
- 주문을 Git처럼 stage/commit/push 하며 변경 이력을 남기고 싶을 때
- 계정 스냅샷, 이벤트 로그, 가드 레일을 포함한 감사 가능한 거래 흐름이 필요할 때
- 워크스페이스 기반 실행과 MCP 도구를 함께 쓰는 TradingOps 구조를 참고하고 싶을 때

## 주요 기능

- **Trading-as-Git** — 주문을 stage하고 commit/push로 실행하는 git-like 거래 흐름
- **UTA(Unified Trading Account)** — CCXT, Alpaca, Interactive Brokers 등을 하나의 통합 계층으로 묶음
- **가드 파이프라인** — 최대 포지션, 쿨다운, 심볼 화이트리스트 같은 사전 안전 검사
- **계정 스냅샷** — 주기적/이벤트 기반 상태 저장과 equity curve 시각화
- **멀티에셋 리서치** — equities, crypto, commodities, forex, macro 전반의 데이터와 분석
- **워크스페이스 실행** — `claude` / `codex` / `shell` 세션을 붙여 장기 작업 수행
- **MCP 서버** — 외부 에이전트가 도구를 호출할 수 있는 인터페이스
- **웹 UI + Telegram** — 대시보드, 채팅, 모바일 접근까지 포함한 운영 화면

## 설치

프로젝트는 빠르게 진화 중인 실험적 소프트웨어입니다. 최신 설치/실행 방법은 [공식 문서](https://openalice.ai/docs)와 GitHub README를 따르세요.

> 실거래에 쓰기 전에는 반드시 충분히 검증해야 합니다.
