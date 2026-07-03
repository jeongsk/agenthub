---
title: "Deep Agents Code"
description: "LangChain의 Deep Agents SDK 위에 만든 오픈소스 터미널 코딩 에이전트입니다. 모델 교체, 영속 메모리, 스킬, 서브에이전트, 승인 기반 코드 실행을 지원합니다."
category: "agent-harness"
tags: ["coding-agent", "terminal", "deepagents", "langchain", "langgraph", "subagents", "memory", "skills", "mcp", "langsmith"]
githubUrl: "https://github.com/langchain-ai/deepagents"
websiteUrl: "https://docs.langchain.com/oss/python/deepagents/code/overview"
githubStars: 25644
author: "langchain-ai"
installCommand: "curl -LsSf https://langch.in/dcode | bash"
compatibleAgents: ["Deep Agents Code", "LangChain", "LangGraph", "LangSmith"]
featured: false
icon: "Terminal"
---

# Deep Agents Code

Deep Agents Code(`dcode`)는 LangChain의 Deep Agents SDK로 만든 오픈소스 터미널 코딩 에이전트입니다. Claude Code나 Cursor처럼 터미널에서 자연어 작업을 받아 파일을 읽고, 수정 diff를 제안하고, 필요하면 shell 명령으로 테스트나 빌드를 실행합니다.

## 언제 쓰나

- LangChain/LangGraph 기반의 코딩 에이전트를 터미널에서 바로 사용하고 싶을 때
- 특정 LLM 벤더에 묶이지 않고 OpenAI, Anthropic, Google, Fireworks, Baseten 등 tool-calling 모델을 바꿔가며 쓰고 싶을 때
- 장기 작업에서 프로젝트 규칙과 학습 내용을 영속 메모리와 스킬로 유지하고 싶을 때
- 복잡한 구현을 planning, todo, subagent delegation으로 나누어 진행하고 싶을 때
- LangSmith tracing으로 에이전트의 tool call, 판단, 실행 과정을 관찰하고 디버깅하고 싶을 때

## 핵심 기능

- **모델 독립 실행**: `dcode --model provider:model` 또는 세션 안의 `/model`로 모델을 선택·전환합니다.
- **파일 및 shell 도구**: 파일 읽기·쓰기·편집, glob/grep 검색, 로컬 또는 원격 sandbox shell 실행을 제공합니다.
- **승인 기반 작업**: 파일 변경, 삭제, shell 실행, 웹 검색, URL fetch, task delegation 같은 민감한 작업은 기본적으로 사람 승인 후 실행합니다.
- **서브에이전트와 작업 계획**: 큰 작업을 단계로 쪼개 todo로 추적하고, 필요하면 task-specific subagent에 위임합니다.
- **메모리와 스킬**: 세션을 넘어 유지되는 메모리와 커스텀 스킬로 프로젝트 관례나 반복 작업 방식을 재사용합니다.
- **MCP와 웹 검색**: MCP 서버의 외부 도구를 불러올 수 있고, Tavily API 키가 있으면 최신 문서와 웹 자료를 검색합니다.
- **컨텍스트 관리**: 긴 대화는 모델별 threshold에 맞춰 compaction/offloading하여 오래된 내용을 요약하고 원문을 저장소로 옮깁니다.
- **LangSmith 관측성**: `LANGSMITH_TRACING=true`와 API 키를 설정하면 에이전트 작업을 LangSmith 프로젝트로 추적합니다.

## 빠른 시작

macOS 또는 Linux에서 설치 스크립트로 `dcode`를 설치합니다.

```bash
curl -LsSf https://langch.in/dcode | bash
```

설치 후 `/auth`로 OpenAI, Anthropic, Google 등 provider credential을 연결하고, 필요하면 모델을 지정해 실행합니다.

```bash
dcode --model anthropic:claude-opus-4-8
dcode --model openai:gpt-5.5
dcode --model fireworks:accounts/fireworks/models/deepseek-v4-pro
```

비대화형 실행도 지원하지만, non-interactive mode에서는 shell이 기본 비활성화됩니다. shell 실행이 필요한 자동화에서는 `--shell-allow-list` 또는 `DEEPAGENTS_CODE_SHELL_ALLOW_LIST`로 허용 범위를 명시해야 합니다.

## 참고

Deep Agents Code는 Windows를 공식 지원하지 않습니다. Windows 사용자는 WSL에서 실행을 시도할 수 있습니다. 또한 웹 검색은 Tavily API 키가 필요하며, auto-approve(`dcode -y`)를 켜면 승인 프롬프트를 건너뛰므로 신뢰할 수 있는 작업 디렉터리와 sandbox에서만 사용하는 것이 좋습니다.
