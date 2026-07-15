---
title: "GitNexus"
description: "코드베이스를 지식 그래프로 인덱싱해 MCP 도구·에이전트 스킬·훅으로 AI 코딩 에이전트에 호출 관계, 영향 범위와 실행 흐름을 제공하는 로컬 우선 코드 인텔리전스 엔진입니다."
category: "agent-infrastructure"
tags: ["code-intelligence", "knowledge-graph", "graph-rag", "mcp", "codebase-analysis", "tree-sitter", "local-first", "claude-code", "codex"]
githubUrl: "https://github.com/abhigyanpatwari/GitNexus"
websiteUrl: "https://gitnexus.vercel.app"
githubStars: 44174
author: "abhigyanpatwari"
installCommand: "npx gitnexus analyze && npx gitnexus setup"
compatibleAgents: ["Claude Code", "Cursor", "Antigravity", "Codex", "OpenCode", "Windsurf"]
featured: false
icon: "GitBranch"
---

## 개요

GitNexus는 저장소를 코드 지식 그래프로 변환하는 **zero-server 코드 인텔리전스 엔진**입니다. Tree-sitter로 코드를 파싱하고 심볼·호출 관계·의존성·클러스터·실행 흐름을 미리 계산한 뒤, MCP 도구와 에이전트 스킬로 제공합니다.

브라우저에서 GitHub·GitLab·Azure 저장소나 ZIP을 분석하는 Web UI를 제공하며, 일상적인 개발에는 로컬 CLI + MCP 구성이 권장됩니다.

## 핵심 기능

- 저장소의 심볼, 관계, 호출 체인, 실행 프로세스, 기능 클러스터 인덱싱
- BM25·semantic·RRF를 결합한 하이브리드 코드 검색
- 특정 심볼의 360도 컨텍스트 조회
- upstream/downstream 영향 범위와 blast radius 분석
- 두 심볼 사이의 최단 호출 경로 추적
- Git diff 기반 변경 영향 분석
- API route·MCP tool map과 소비자 response shape 검사
- 그래프의 Cypher 직접 조회
- taint flow 설명과 PDG 기반 control/data-dependence 조회
- MCP resources와 guided prompts 제공
- Claude Code·Codex 등에 6개 기본 스킬 자동 설치
- 기능 영역을 분석해 프로젝트 전용 `.claude/skills/gitnexus-area-*` 스킬 생성

## 빠른 시작

저장소 루트에서 다음 명령을 실행합니다.

```bash
npx gitnexus analyze
npx gitnexus setup
```

`analyze`는 저장소를 인덱싱하고 에이전트 스킬·컨텍스트 파일을 준비합니다. `setup`은 감지된 편집기의 MCP 설정을 작성합니다. 특정 클라이언트만 설정하려면 다음처럼 실행할 수 있습니다.

```bash
gitnexus setup -c cursor,codex
```

전역 설치 후 MCP를 구성하면 cold `npx` 실행에 따른 초기 지연을 줄일 수 있습니다.

```bash
npm install -g gitnexus
gitnexus analyze
gitnexus setup
```

## 에이전트 연동

Claude Code와 Codex는 MCP 도구·스킬·PreToolUse/PostToolUse 훅을 함께 지원하는 가장 깊은 통합을 제공합니다. 훅은 검색 시 그래프 컨텍스트를 자동으로 보강하고, commit·merge·rebase·pull 이후 인덱스가 오래되었는지 알려줍니다.

OpenCode와 CodeBuddy·Qoder는 MCP와 Skills를 사용할 수 있고, Windsurf는 MCP를 사용할 수 있습니다. Cursor와 Antigravity도 MCP·Skills 및 각 클라이언트에 맞는 훅 연동을 제공합니다.

## CLI + MCP와 Web UI 비교

| 구분 | CLI + MCP | Web UI |
|---|---|---|
| 대상 | 일상적인 저장소 개발·에이전트 작업 | 빠른 탐색·데모·일회성 분석 |
| 저장소 | 로컬 저장소, 규모 제한이 작음 | 브라우저 메모리 기준 약 5천 파일, backend mode로 확장 가능 |
| 저장소 계층 | 로컬 LadybugDB native, 영속적 | LadybugDB WASM, 세션 메모리 기반 |
| 프라이버시 | 로컬 처리, 네트워크 전송 없음 | 브라우저 내부 처리, 서버 없음 |
| 연결 | `gitnexus serve`로 Web UI가 로컬 인덱스에 연결 가능 | 로컬 서버를 자동 감지해 재업로드·재인덱싱 없이 사용 가능 |

## 주의사항

- 라이선스는 **PolyForm Noncommercial 1.0.0**입니다. 상업적 사용·배포 전 라이선스 범위를 확인해야 합니다.
- npm 11.x에서 `npx` 설치가 Arborist 오류로 실패할 수 있습니다. 이 경우 pnpm 또는 전역 설치를 사용합니다.
- 일부 네이티브 grammar나 선택적 embedding runtime 설치에는 Node 버전·플랫폼·C/C++ toolchain 조건이 영향을 줄 수 있습니다.
- 브라우저 Web UI는 저장소 크기와 브라우저 메모리의 영향을 받습니다. 전체 규모 저장소와 지속적인 개발에는 CLI + MCP가 더 적합합니다.
- 인덱스가 오래되면 에이전트가 낡은 관계를 볼 수 있으므로 코드 변경 후 `gitnexus analyze` 또는 제공되는 stale-index 안내를 따라 재인덱싱해야 합니다.

## 언제 사용하는가

- AI 코딩 에이전트가 코드베이스의 호출 관계와 영향 범위를 놓치는 경우
- 대규모 저장소를 처음 탐색하거나 기능 영역을 파악해야 하는 경우
- refactor·rename 전에 blast radius와 실행 흐름을 확인해야 하는 경우
- 여러 저장소의 API contract와 cross-repo dependency를 분석해야 하는 경우
- 작은 모델에도 미리 구조화된 코드 컨텍스트를 제공해 도구 호출 횟수와 토큰 낭비를 줄이고 싶은 경우
