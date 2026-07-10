---
title: "Awesome LLM Apps"
description: "복제하고 바로 실행할 수 있는 AI 에이전트·RAG·멀티에이전트 앱 템플릿과 튜토리얼 모음입니다."
category: "agent-framework"
tags: ["llm", "ai-agents", "rag", "multi-agent", "mcp", "voice-ai", "python", "streamlit"]
githubUrl: "https://github.com/Shubhamsaboo/awesome-llm-apps"
websiteUrl: "https://www.theunwindai.com"
githubStars: 117060
author: "Shubhamsaboo"
installCommand: "git clone https://github.com/Shubhamsaboo/awesome-llm-apps.git"
compatibleAgents: ["Claude", "Gemini", "OpenAI", "xAI", "Qwen", "Llama"]
featured: false
icon: "Blocks"
---

**Awesome LLM Apps**는 직접 복제하고 실행할 수 있는 AI 애플리케이션 템플릿 모음입니다. 단일 에이전트부터 멀티에이전트 팀, MCP 에이전트, 음성 에이전트, RAG, 메모리 기반 LLM 앱, 에이전트 스킬과 파인튜닝 예제까지 현대적인 LLM 애플리케이션 패턴을 Python 중심의 독립 실행형 프로젝트로 제공합니다.

## 언제 쓰나

- AI 에이전트나 RAG 애플리케이션의 출발점이 필요할 때
- 여러 모델 제공자와 에이전트 프레임워크를 비교하며 학습할 때
- MCP, 음성 인터페이스, 멀티에이전트, 장기 메모리 등의 구현 예제를 찾을 때
- 튜토리얼과 함께 실제로 실행 가능한 작은 프로젝트를 빠르게 실험할 때

## 주요 기능

- **다양한 에이전트 예제** — 스타터 에이전트, 고급 에이전트, 상시 실행 에이전트, 멀티에이전트 팀을 제공합니다.
- **RAG 템플릿** — 기본 RAG부터 Agentic RAG, Corrective RAG, 멀티모달·지식 그래프 RAG까지 다룹니다.
- **MCP 및 에이전트 스킬** — Browser, GitHub, Notion 등 MCP 연동 예제와 Claude Code·Codex·Cursor 등에서 활용할 수 있는 스킬 예제를 포함합니다.
- **모델 제공자 선택** — Claude, Gemini, OpenAI, xAI, Qwen, Llama 등 여러 모델을 사용하는 예제가 있습니다.
- **Apache-2.0 라이선스** — 저장소의 라이선스 범위 안에서 예제를 포크하고 수정할 수 있습니다.

## 설치 및 빠른 시작

```bash
git clone https://github.com/Shubhamsaboo/awesome-llm-apps.git
cd awesome-llm-apps/starter_ai_agents/ai_travel_agent
pip install -r requirements.txt
streamlit run travel_agent.py
```

각 템플릿은 별도의 디렉터리에 있으며, 필요한 API 키와 실행 방법은 해당 프로젝트의 README 또는 환경 설정 파일을 확인해야 합니다.

## 주의사항

- 저장소는 여러 독립 프로젝트를 모아 둔 형태이므로 템플릿마다 필요한 Python 버전, API 키, 프레임워크와 실행 명령이 다를 수 있습니다.
- 일부 예제는 외부 API나 유료 모델 서비스에 의존합니다. 실행 전에 각 예제의 `README.md`와 환경 변수 요구사항을 확인하세요.
- GitHub 스타 수는 2026년 7월 10일 조회 기준 스냅샷입니다.
