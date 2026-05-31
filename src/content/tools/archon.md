---
title: "Archon"
description: "AI 코딩을 결정적이고 재현 가능하게 만드는 오픈소스 하네스 빌더로, 개발 프로세스를 YAML 워크플로로 정의해 실행합니다."
category: "agent-harness"
tags: ["claude-code", "workflow-engine", "yaml", "automation", "deterministic"]
githubUrl: "https://github.com/coleam00/Archon"
websiteUrl: "https://archon.diy"
githubStars: 22033
author: "coleam00"
installCommand: "curl -fsSL https://archon.diy/install | bash"
compatibleAgents: ["Claude Code"]
featured: true
icon: "Workflow"
---

# Archon

Archon은 AI 코딩을 결정적이고 재현 가능하게 만들어 주는 오픈소스 하네스 빌더입니다. 개발 프로세스를 YAML 워크플로로 정의해, 지능적인 AI 단계와 테스트·git 작업 같은 결정적 단계를 한 흐름에 엮습니다. 프로세스의 순서는 고정하고, 정해진 지점에서만 AI가 작업을 채우게 해 결과의 일관성을 높입니다.

## 언제 쓰나

- AI 코딩 에이전트의 결과가 매번 달라 일관성을 확보하고 싶을 때
- 계획·테스트·PR 템플릿 같은 단계를 빠뜨리지 않게 강제하고 싶을 때
- 여러 작업을 격리된 환경에서 병렬로 돌리고 싶을 때
- CLI뿐 아니라 Slack·Telegram·Discord·GitHub 웹훅으로도 워크플로를 트리거하고 싶을 때

## 특징

- **격리 실행**: 워크플로 실행마다 전용 git worktree를 사용해 충돌 없이 병렬 실행합니다.
- **조합형 아키텍처**: AI 노드(계획, 코드 생성)와 결정적 노드(bash 스크립트, 테스트)를 자유롭게 섞습니다.
- **17개 기본 워크플로**: `fix-github-issue`, `idea-to-pr`, `comprehensive-pr-review`, `feature-development` 등을 내장합니다.
- **멀티 플랫폼**: CLI, Web UI, Slack, Telegram, Discord, GitHub 웹훅을 지원합니다.
- **비주얼 워크플로 빌더**: 드래그 앤 드롭 DAG 에디터로 커스텀 워크플로를 만듭니다.
- **루프 노드**: 종료 조건과 사람 승인 게이트를 갖춘 반복 AI 프로세스를 구성합니다.

> Bun 런타임 기반(TypeScript)이며 Homebrew(`brew install coleam00/archon/archon`)로도 설치할 수 있습니다. MCP 서버가 아니라 워크플로 오케스트레이터입니다.
