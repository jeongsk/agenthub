---
title: "Supermemory"
description: "AI 시대를 위한 메모리 API이자 컨텍스트 엔진으로, 대화 사이에 잊지 않도록 사실 추출·사용자 프로필·하이브리드 검색을 제공합니다."
category: "agent-infrastructure"
tags: ["ai-memory", "agent-memory", "rag", "mcp", "context-engine"]
githubUrl: "https://github.com/supermemoryai/supermemory"
websiteUrl: "https://supermemory.ai/docs"
githubStars: 23136
author: "supermemoryai"
installCommand: "npx -y install-mcp@latest https://mcp.supermemory.ai/mcp --client claude"
compatibleAgents: ["Claude Code", "Cursor", "Windsurf", "OpenCode"]
featured: true
icon: "BrainCircuit"
---

# Supermemory

Supermemory는 "AI 시대를 위한 메모리 API"를 표방하는 빠르고 확장 가능한 메모리·컨텍스트 엔진입니다. AI가 대화 사이에 모든 것을 잊어버리는 문제를 해결하기 위해, 상호작용에서 자동으로 사실을 추출하고 사용자 프로필을 구축하며, 지식 업데이트와 모순을 처리하고 만료 정보를 잊어버린 뒤 필요할 때 맥락 정보를 제공합니다.

## 언제 쓰나

- AI 앱에 세션을 넘나드는 지속적 메모리를 붙이고 싶을 때
- RAG와 개인화된 메모리를 한 번의 쿼리로 함께 활용하고 싶을 때
- PDF·이미지·영상·코드 등 멀티모달 문서를 컨텍스트로 다루고 싶을 때
- Google Drive·Gmail·Notion·GitHub 등의 데이터를 실시간 동기화하고 싶을 때

## 특징

- **메모리 엔진**: 사실 추출, 업데이트 추적, 모순 해소, 만료 정보 자동 망각을 수행합니다.
- **사용자 프로필**: 안정적 사실과 최근 활동을 결합한 컨텍스트를 약 50ms 내 검색합니다.
- **하이브리드 검색**: RAG와 개인화 메모리를 단일 쿼리로 결합합니다.
- **멀티모달 처리**: PDF, 이미지(OCR), 영상(전사), 코드(AST 인식 청킹)를 처리합니다.
- **폭넓은 연동**: Vercel AI SDK, LangChain/LangGraph, OpenAI Agents SDK, Mastra와 Claude Code·Cursor·Windsurf 등 클라이언트, 그리고 오픈소스 MCP 서버를 제공합니다.

> AI 메모리 평가 벤치마크인 LongMemEval(81.6%), LoCoMo, ConvoMem에서 1위를 기록했습니다. npm/pip SDK와 MCP 서버를 모두 제공합니다.
