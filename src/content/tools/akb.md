---
title: "AKB"
description: "에이전트 조직 지식베이스(Agent Knowledgebase)입니다. 보관함(vault) 단위로 문서, 테이블, 파일을 URI 그래프로 연결하고 MCP로 제공하는 에이전트 메모리/지식 인프라입니다."
category: "mcp-server"
tags: ["mcp", "knowledge-base", "knowledge-graph", "agent-memory", "vector-search", "rag", "multi-tenant"]
githubUrl: "https://github.com/dnotitia/AKB"
githubStars: 21
author: "dnotitia"
installCommand: "git clone https://github.com/dnotitia/AKB.git && cd AKB && pip install -r requirements.txt"
compatibleAgents: ["Claude Code", "Claude", "Gemini", "OpenAI"]
featured: false
icon: "Database"
---

# AKB (Agent Knowledgebase)

AKB는 AI 에이전트를 위한 조직 지식베이스(Agent Knowledgebase)입니다. 보관함(vault) 단위로 문서, 테이블, 파일을 URI 그래프로 연결하고, MCP(Model Context Protocol)로 제공합니다. 다중 테넌트(multi-tenant)를 지원하며 PostgreSQL + pgvector 기반의 벡터 검색을 내장하고 있습니다.

## 언제 쓰나

- AI 에이전트가 조직의 문서/데이터를 구조화된 지식 그래프로 조회하게 하고 싶을 때
- 여러 팀/프로젝트(vault)별로 격리된 지식베이스가 필요할 때
- MCP를 통해 에이전트에 지식 인프라를 연결하고 싶을 때
- 벡터 검색 + 그래프 관계를 함께 활용하는 RAG가 필요할 때

## 특징

- 보관함(vault) 단위 지식 격리 (multi-tenant)
- 문서, 테이블, 파일을 URI 그래프로 연결
- MCP 프로토콜로 제공 (어떤 MCP 클라이언트에서든 접근 가능)
- PostgreSQL + pgvector 기반 벡터 검색
- FastAPI + React 웹 UI
- Python 기반, pip 설치
