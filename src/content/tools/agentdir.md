---
title: "agentdir"
description: "원본 파일은 그대로 두고 AI 에이전트가 탐색하기 좋은 읽기 전용 가상 파일 트리를 만드는 Rust 기반 인프라입니다. 문서·이미지·미디어·데이터셋 등 일반 파일을 task-specific layout으로 재구성하고, CoW reflink와 watcher로 가벼운 동기화 workspace를 운영할 때 유용합니다."
category: "agent-infrastructure"
tags: ["agent-infrastructure", "virtual-filesystem", "file-layout", "workspace", "rust", "python", "nodejs", "cli", "reflink", "cow", "cross-platform"]
githubUrl: "https://github.com/NomaDamas/agentdir"
githubStars: 46
author: "NomaDamas"
installCommand: "cargo install agentdir-cli"
compatibleAgents: ["Claude Code", "Codex", "Gemini", "Hermes Agent", "OpenCode"]
featured: false
icon: "FolderTree"
---

# agentdir

agentdir는 AI 에이전트가 작업하기 좋은 파일 배치를 원본 파일 이동 없이 제공하는 가상 파일 트리 인프라입니다. 사람에게 익숙한 원본 디렉터리 구조는 그대로 두고, 에이전트·스크립트·사람이 목적별로 재구성된 읽기 전용 workspace를 탐색하게 만들 수 있습니다.

Rust로 작성되어 macOS, Linux, Windows에서 동작하며 CLI, Rust library, Python binding, Node.js binding을 제공합니다.

## 언제 쓰나

- 오래된 프로젝트나 문서 저장소의 실제 폴더 구조는 건드리지 않고, 에이전트에게 더 좋은 탐색 구조를 주고 싶을 때
- 문서, PDF, 이미지, 미디어, 데이터셋, 생성 산출물 등 일반 OS 파일을 목적별 workspace로 재배치하고 싶을 때
- 큰 파일을 여러 layout에 노출해야 하지만 중복 복사 비용을 줄이고 싶을 때
- 원본 디렉터리 변경을 watcher나 `refresh`로 감지해 agent workspace에 반영하고 싶을 때
- 여러 에이전트나 작업이 같은 파일 세트를 서로 다른 가상 구조로 소비해야 할 때

## 핵심 특징

- **Virtual namespace**: source directory를 `/files`, `/reports` 같은 가상 경로에 map하고, virtual tree 안에서 `mv`, `cp`, `mkdir`, `rmdir`로 재배치합니다.
- **원본 보존**: virtual namespace 조작은 원본 파일 위치를 이동하지 않습니다.
- **CoW materialization**: APFS, Btrfs, XFS 같은 CoW 지원 파일시스템에서는 reflink로 큰 파일 중복을 줄이고, 지원하지 않으면 byte-copy로 fallback합니다.
- **동기화 watcher**: `watch`가 filesystem event와 주기적 rescan을 함께 사용해 원본 변경을 workspace에 반영합니다.
- **다중 전략**: `reflink`, `symlink`, `virtual` materialization strategy를 지원합니다.
- **Snapshot support**: CoW workspace fork로 동시 작업용 isolated copy를 만들 수 있습니다.
- **Cross-platform bindings**: Rust, Python, Node.js 환경에서 사용할 수 있습니다.

## 빠른 시작

CLI는 `agentdir-cli` crate로 설치하며, 설치 후 binary 이름은 `agentdir`입니다.

```bash
cargo install agentdir-cli
```

기본 CLI 흐름은 다음과 같습니다.

```bash
# workspace 초기화
agentdir init ./workspace

# 원본 디렉터리를 가상 tree에 매핑
agentdir -w ./workspace map ./team-files /files

# 에이전트가 workspace를 쓰는 동안 변경사항 동기화
agentdir -w ./workspace watch --interval 60

# 상태 확인
agentdir -w ./workspace status

# virtual namespace 안에서 재배치 — 원본 파일은 그대로 둠
agentdir -w ./workspace mv /files/q1-report.pdf /reports/q1-report.pdf
```

Python과 Node.js에서도 설치할 수 있습니다.

```bash
pip install agentdir
npm install @nomadamas/agentdir
```

## 참고

- `watch`는 foreground 프로세스로 실행되므로 장시간 유지하려면 process manager, terminal multiplexer, service supervisor, task runner 등으로 관리해야 합니다.
- README의 Non-goals 기준, agentdir 자체는 LLM integration, semantic routing, file content parsing, full-text indexing/search, format conversion, access control을 제공하지 않습니다. 에이전트가 쓰기 좋은 파일 layout을 제공하는 좁은 인프라 도구로 보는 것이 맞습니다.
