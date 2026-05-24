---
title: "LightRAG"
description: "[EMNLP2025] 간단하고 빠른 검색 증강 생성(RAG) 프레임워크입니다. 기존 GraphRAG 대비 1% 미만의 토큰 비용으로 동등하거나 더 나은 성능을 제공하며, 지식 그래프 기반 검색을 지원합니다."
category: "agent-skill"
tags: ["rag", "retrieval-augmented-generation", "knowledge-graph", "llm", "graphrag", "genai"]
githubUrl: "https://github.com/HKUDS/LightRAG"
githubStars: 35643
author: "HKUDS"
installCommand: "pip install lightrag-hku"
compatibleAgents: ["Claude", "Gemini", "OpenAI"]
featured: true
icon: "Lightbulb"
---

# LightRAG

LightRAG는 EMNLP 2025에 발표된 간단하고 빠른 검색 증강 생성(RAG) 프레임워크입니다. 기존 GraphRAG 접근법 대비 1% 미만의 토큰 비용으로 동등하거나 더 나은 검색 성능을 제공합니다. 지식 그래프 기반으로 문서 간 관계를 학습하고 검색합니다.

## 언제 쓰나

- AI 에이전트에 RAG 기반 지식 검색 능력을 추가하고 싶을 때
- GraphRAG보다 가볍고 빠른 대안이 필요할 때
- 토큰 비용을 최소화하면서도 정확한 문서 검색이 필요할 때
- 지식 그래프 기반 검색을 에이전트 워크플로에 통합하고 싶을 때

## 특징

- EMNLP 2025 게재 학술 연구 기반
- GraphRAG 대비 1% 미만 토큰 비용
- 지식 그래프 기반 검색으로 관계 추론 가능
- 간단한 API, Python 패키지로 즉시 사용 가능
- 증분 업데이트 지원 (이미 인덱싱된 데이터에 추가 문서 병합)
