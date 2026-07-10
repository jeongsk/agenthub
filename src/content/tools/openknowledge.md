---
title: "OpenKnowledge"
description: "Claude, Codex 등 AI 에이전트와 함께 사용하는 로컬 우선 마크다운 IDE이자 LLM 위키입니다."
category: "desktop-utility"
tags: ["markdown", "llm-wiki", "knowledge-base", "second-brain", "mcp", "agent-skills", "claude", "codex", "open-source"]
githubUrl: "https://github.com/inkeep/open-knowledge"
websiteUrl: "https://openknowledge.ai"
githubStars: 2249
author: "inkeep"
installCommand: "npm install -g @inkeep/open-knowledge && ok init && ok start --open"
compatibleAgents: ["Claude", "Codex", "Cursor", "OpenCode", "OpenClaw", "Pi", "Antigravity"]
featured: false
icon: "BookOpen"
---

# OpenKnowledge

OpenKnowledge는 마크다운 파일을 기반으로 지식 베이스, LLM 위키, 프로젝트 문서와 노트를 관리하는 로컬 우선 오픈소스 편집기입니다. 사람을 위한 WYSIWYG 에디터와 에이전트를 위한 MCP·스킬·에이전틱 검색 계층을 함께 제공해, 기존 폴더·코드베이스·Obsidian vault를 AI 에이전트와 공동 편집할 수 있게 합니다.

## 언제 쓰나

- 마크다운 기반의 개인 지식 베이스나 LLM 위키를 만들고 싶을 때
- Claude, Codex, Cursor, OpenCode 등과 문서·스펙·노트를 함께 편집하고 싶을 때
- 에이전트가 로컬 문서를 검색하고 링크된 지식을 탐색하도록 만들고 싶을 때
- Git/GitHub 기반 동기화와 팀 공유를 선택적으로 사용하고 싶을 때
- Mermaid, LaTeX, HTML/JS 컴포넌트 등을 포함한 풍부한 기술 문서를 작성할 때

## 주요 기능

- 마크다운 파일을 Google Docs나 Notion처럼 편집하는 WYSIWYG 에디터
- 파일 탐색기, 검색, 탭, 그래프 기반 위키 링크 뷰어
- Claude, Codex, Cursor, OpenCode 등과의 AI 편집 연동
- MCP, skills, agentic search를 통한 에이전트용 지식 탐색
- GitHub 기반 자동 동기화와 팀 공유
- Mermaid 다이어그램, LaTeX, 영상, PDF, 임베디드 HTML/JS 지원
- macOS 앱과 로컬 웹 앱·CLI 제공

## 설치

macOS에서는 [다운로드 페이지](https://openknowledge.ai/download/stable)에서 앱을 내려받아 설치할 수 있습니다. Linux, Windows, Intel Mac에서는 Node.js 24+와 Git이 필요하며 다음처럼 로컬 웹 앱을 실행합니다.

```bash
npm install -g @inkeep/open-knowledge
cd your-project
ok init
ok start --open
```

## 참고

- 저장소는 GPL-3.0-or-later 라이선스의 오픈소스 프로젝트입니다.
- macOS 앱 또는 Linux·Windows·Intel Mac용 로컬 웹 앱/CLI 형태로 사용할 수 있습니다.
- `ok init`은 감지된 에이전트 하네스에 MCP와 스킬 설정을 초기화하므로, 실제 프로젝트 폴더에서 실행하기 전에 생성·변경되는 설정 파일을 확인하는 것이 좋습니다.
