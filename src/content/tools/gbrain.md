---
title: "gbrain"
description: "AI 에이전트에게 영속적인 지식과 검색 능력을 부여하는 브레인 시스템입니다. 146,646페이지, 24,585명, 5,339개 기업을 기억하며 하이브리드 검색과 자기-배선 지식 그래프로 정확한 답변을 찾아줍니다."
category: "agent-infrastructure"
tags: ["ai-agents", "knowledge-graph", "memory", "rag", "vector-search", "hermes-agent", "openclaw"]
githubUrl: "https://github.com/garrytan/gbrain"
githubStars: 19992
author: "garrytan"
installCommand: "bun install -g github:garrytan/gbrain && gbrain init --pglite"
compatibleAgents: ["Claude Code", "OpenClaw", "Hermes Agent", "Cursor"]
featured: true
icon: "BrainCircuit"
---

# gbrain

gbrain은 Y Combinator CEO Garry Tan이 자신의 AI 에이전트를 위해 만든 지식 베이스 시스템입니다. 에이전트가 대화를 잊어버려도 gbrain이 기억합니다. 하이브리드 검색, 자기-배선 지식 그래프, 구조화된 타임라인을 통해 정확한 답변을 찾아줍니다.

## 언제 쓰나

- AI 에이전트가 이전 대화나 문서를 잊어버리는 문제를 해결하고 싶을 때
- 미팅 내용, 이메일, 트윗, 음성 통화 등을 에이전트가 자동으로 수집하고 정리하게 하고 싶을 때
- "누가 Acme AI에서 일하나요?" 같은 관계 기반 질문에 정확한 답변을 받고 싶을 때
- 대규모 지식(수만 페이지)을 에이전트가 활용할 수 있게 하고 싶을 때

## 특징

- 하이브리드 검색(벡터 + 지식 그래프)으로 P@5 49.1%, R@5 97.9% 달성
- 146,646페이지, 24,585명, 5,339개 기업 규모로 검증됨
- ZeroEntropy 임베딩으로 OpenAI 대비 2.2배 빠름
- PGLite로 2초 만에 DB 구축, 서버 불필요
- 43개 스킬로 OpenClaw/Hermes Agent와 통합 가능
- 자기-배선 지식 그래프: 페이지 작성 시 엔티티 관계를 자동 추출
