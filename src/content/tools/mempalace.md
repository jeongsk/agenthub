---
title: "MemPalace"
description: "로컬 우선 AI 메모리 시스템입니다. 대화와 프로젝트를 원문 그대로 저장하고 semantic search, 구조화된 palace 인덱스, MCP 서버, Claude Code·Codex·Cursor auto-save hooks를 제공합니다."
category: "agent-infrastructure"
tags: ["ai-memory", "agent-memory", "persistent-memory", "mcp", "rag", "semantic-search", "knowledge-graph", "chromadb", "local-first", "claude-code", "codex", "cursor", "python"]
githubUrl: "https://github.com/MemPalace/mempalace"
websiteUrl: "https://mempalaceofficial.com/"
githubStars: 56589
author: "MemPalace"
installCommand: "uv tool install mempalace"
compatibleAgents: ["Claude Code", "Codex", "Cursor", "Claude Desktop", "Hermes Agent", "OpenCode"]
featured: false
icon: "BrainCircuit"
---

# MemPalace

MemPalace는 AI 에이전트와 개발 워크플로를 위한 로컬 우선 메모리 시스템입니다. 대화 기록과 프로젝트 파일을 요약하거나 재작성하지 않고 원문 그대로 저장한 뒤 semantic search로 검색합니다. 사람과 프로젝트는 *wings*, 주제는 *rooms*, 원문 콘텐츠는 *drawers*로 구성되는 palace 구조를 사용해, 평면 벡터 DB보다 범위를 좁힌 검색을 할 수 있게 설계되었습니다.

## 언제 쓰나

- Claude Code, Codex, Cursor 같은 코딩 에이전트가 30일 또는 컨텍스트 압축 이후에도 이전 대화와 결정을 회수해야 할 때
- 프로젝트 파일, JSONL transcript, 세션 기록을 로컬에 보관하면서 검색 가능한 장기 메모리로 만들고 싶을 때
- MCP 클라이언트에서 메모리 읽기·쓰기, knowledge graph, agent diary, cross-wing navigation을 도구로 노출하고 싶을 때
- 클라우드 API 없이 로컬 ChromaDB 기반 semantic search와 embedding model로 재현 가능한 메모리 검색을 운영하고 싶을 때
- Qdrant, pgvector, SQLite exact 등 다른 backend로 저장 계층을 실험하고 싶을 때

## 핵심 특징

- **원문 보존 메모리**: 대화와 프로젝트 내용을 요약하지 않고 verbatim drawer로 저장합니다.
- **구조화된 palace 인덱스**: people/projects → wings, topics → rooms, original content → drawers 구조로 검색 범위를 좁힙니다.
- **플러그형 backend**: 기본 ChromaDB 외에 `sqlite_exact`, Qdrant, pgvector backend를 지원합니다.
- **MCP 서버**: palace read/write, knowledge graph, drawer management, agent diaries 등을 위한 MCP tool set을 제공합니다.
- **Auto-save hooks**: Claude Code, Codex CLI, Cursor IDE의 세션을 주기적으로 저장하고 context compaction 전에 snapshot을 남기는 hook 흐름을 제공합니다.
- **Knowledge graph**: local SQLite 기반 temporal entity-relationship graph로 add, query, invalidate, timeline 작업을 지원합니다.
- **벤치마크 공개**: LongMemEval raw semantic search R@5 96.6%, hybrid held-out R@5 98.4% 등 재현 가능한 benchmark 경로를 문서화합니다.

## 설치와 실행

권장 설치 방식은 `uv tool install`입니다. Homebrew/Debian 계열 Python의 PEP 668 문제와 전역 dependency 충돌을 피하기 위해 격리된 환경에 CLI를 설치합니다.

```bash
uv tool install mempalace
mempalace init ~/projects/myapp
```

`pipx`도 사용할 수 있습니다.

```bash
pipx install mempalace
```

프로젝트를 채굴하고 검색하는 기본 흐름은 다음과 같습니다.

```bash
mempalace mine ~/projects/myapp
mempalace search "why GraphQL"
```

Docker로 MCP 서버를 stdio 모드로 실행할 수도 있습니다.

```bash
docker build -t mempalace .
docker run -i --rm -v mempalace-data:/data mempalace
```

## 주의사항

- README 기준 공식 출처는 GitHub repository, PyPI package, `mempalaceofficial.com`뿐입니다. 다른 유사 도메인은 impostor로 안내되어 있습니다.
- 기본 경로에는 API key가 필요 없지만, embedding model 캐시용으로 약 300MB 디스크 공간이 필요합니다.
- Python 3.9+가 필요하며, `extract` extra의 일부 문서 변환 기능은 Python 3.10+ 환경에서 더 넓게 동작합니다.
- PyPI metadata 기준 개발 상태는 Beta입니다. 장기 보존용으로 쓰려면 Claude Code retention checklist와 auto-save hooks를 함께 설정하는 것이 중요합니다.
