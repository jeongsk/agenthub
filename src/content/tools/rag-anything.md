---
title: "RAG-Anything"
description: "올인원 RAG 프레임워크입니다. 멀티 모달(텍스트, 이미지, 코드 등) 검색 증강 생성을 하나의 통합 인터페이스로 제공합니다."
category: "agent-framework"
tags: ["rag", "retrieval-augmented-generation", "multi-modal-rag", "llm", "genai"]
githubUrl: "https://github.com/HKUDS/RAG-Anything"
githubStars: 20795
author: "HKUDS"
installCommand: "pip install rag-anything"
compatibleAgents: ["Claude", "Gemini", "OpenAI"]
featured: true
icon: "Search"
---

# RAG-Anything

RAG-Anything은 올인원 RAG(Retrieval-Augmented Generation) 프레임워크입니다. 텍스트, 이미지, 코드 등 여러 모달리티에 걸친 검색 증강 생성을 하나의 통합 인터페이스로 제공합니다.

![RAG-Anything 멀티모달 RAG 아키텍처 다이어그램](/tool-screenshots/rag-anything-framework.webp)

## 언제 쓰나

- AI 에이전트에 멀티 모달 RAG 기능을 추가하고 싶을 때 (텍스트 + 이미지 + 코드)
- 복잡한 RAG 파이프라인을 직접 구축하지 않고 바로 사용하고 싶을 때
- 통합된 인터페이스로 다양한 검색 전략을 실험하고 싶을 때

## 특징

- 텍스트, 이미지, 코드 등 멀티 모달 검색 지원
- 올인원 통합 인터페이스
- Python 기반, pip 한 줄 설치
- 다양한 검색 전략 및 임베딩 모델 지원
- 확장 가능한 아키텍처
