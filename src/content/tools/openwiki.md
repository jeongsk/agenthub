---
title: "OpenWiki"
description: "코드베이스를 에이전트가 읽기 좋은 openwiki/ 문서로 생성·유지하는 LangChain의 TypeScript CLI입니다. AGENTS.md/CLAUDE.md에 참조 지침을 추가하고 GitHub Actions로 문서 업데이트 PR을 자동화할 수 있습니다."
category: "cli-utility"
tags: ["documentation", "wiki", "codebase-documentation", "agents-md", "claude", "deepagents", "langchain", "langsmith", "typescript", "cli", "github-actions"]
githubUrl: "https://github.com/langchain-ai/openwiki"
githubStars: 1571
author: "langchain-ai"
installCommand: "npm install -g openwiki"
compatibleAgents: ["Claude Code", "Codex", "Gemini", "Cursor", "OpenCode", "Hermes Agent"]
featured: false
icon: "BookOpen"
---

# OpenWiki

OpenWiki는 코드베이스 문서를 에이전트가 찾아 읽기 쉬운 형태로 생성하고 유지하는 LangChain의 오픈소스 CLI입니다. 저장소를 분석해 `openwiki/` 디렉터리에 문서를 만들고, 이미 문서가 있으면 변경 사항을 반영해 갱신합니다. 또한 `AGENTS.md` 또는 `CLAUDE.md`에 OpenWiki를 컨텍스트 소스로 참조하라는 프롬프트를 자동으로 추가하거나 파일이 없으면 생성합니다.

## 언제 쓰나

- 큰 저장소에 대해 코딩 에이전트가 참조할 구조화된 위키 문서를 만들고 싶을 때
- `AGENTS.md`, `CLAUDE.md`만으로 부족한 코드베이스 지식과 설계 맥락을 별도 문서 트리로 유지하고 싶을 때
- 문서가 코드 변경을 따라가도록 `openwiki --update`를 정기 실행하고 싶을 때
- GitHub Actions로 매일 문서 업데이트 PR을 자동 생성하고 싶을 때
- OpenRouter, Fireworks, Baseten, OpenAI, Anthropic 모델을 선택해 문서화 에이전트를 실행하고 싶을 때
- LangSmith로 문서 생성·갱신 실행을 추적하고 디버깅하고 싶을 때

## 핵심 기능

- **문서 생성과 갱신**: `openwiki --init`으로 초기 설정 후 `openwiki` 또는 `openwiki --update`로 `openwiki/` 문서를 생성·갱신합니다.
- **에이전트 전용 컨텍스트**: 생성된 위키를 코딩 에이전트가 참고하도록 `AGENTS.md`/`CLAUDE.md`에 안내 프롬프트를 추가합니다.
- **대화형 CLI와 일회성 실행**: `openwiki`로 대화형 세션을 열거나 `openwiki -p "..."`로 단일 명령을 실행하고 종료할 수 있습니다.
- **초기 요청 지원**: `openwiki "Please generate documentation for this repository"`처럼 시작 요청을 바로 전달할 수 있습니다.
- **모델·프로바이더 선택**: OpenRouter, Fireworks, Baseten, OpenAI, Anthropic을 기본 지원하며, provider별 커스텀 model ID도 지정할 수 있습니다.
- **로컬 설정 저장**: 최초 실행 시 inference provider, API key, LLM, 선택적 LangSmith API key를 설정하고 `~/.openwiki/.env`에 저장합니다.
- **CI 자동화 예시**: `examples/openwiki-update.yml`은 매일 `openwiki --update --print`를 실행하고 `peter-evans/create-pull-request`로 문서 업데이트 PR을 여는 GitHub Actions 예시를 제공합니다.

## 빠른 시작

Node.js 20 이상 환경에서 npm으로 설치합니다.

```bash
npm install -g openwiki
```

저장소 루트에서 초기 설정을 실행합니다.

```bash
openwiki --init
```

대화형 CLI를 시작하거나, 첫 요청과 함께 실행할 수 있습니다.

```bash
openwiki
openwiki "Please generate documentation for this repository"
```

일회성 비대화형 실행은 `-p` 또는 `--print`를 사용합니다.

```bash
openwiki -p "Summarize what you can do"
```

기존 문서를 갱신하려면 다음 명령을 사용합니다.

```bash
openwiki --update
```

## GitHub Actions 자동 갱신

저장소에 `.github/workflows/openwiki-update.yml`을 추가하면 매일 OpenWiki 문서를 갱신하고 PR을 열 수 있습니다. 공식 예시는 `examples/openwiki-update.yml`에 있으며, Node.js 22에서 `npm install --global openwiki` 후 다음처럼 실행합니다.

```bash
openwiki --update --print
```

CI에서는 선택한 provider의 API key와 모델 설정이 필요합니다. 예시 워크플로는 `OPENROUTER_API_KEY`, `OPENWIKI_MODEL_ID`, `LANGSMITH_API_KEY`, `LANGCHAIN_PROJECT=openwiki`, `LANGCHAIN_TRACING_V2=true`를 사용합니다.

## 참고

OpenWiki는 문서를 생성할 뿐 아니라 `AGENTS.md` 또는 `CLAUDE.md`를 수정하거나 새로 만들 수 있습니다. 기존 에이전트 지침을 관리 중인 저장소에서는 실행 후 diff를 확인하는 것이 좋습니다. API 키와 모델 설정은 로컬의 `~/.openwiki/.env`에 저장되며, CI에서는 GitHub Secrets로 별도 주입해야 합니다.
