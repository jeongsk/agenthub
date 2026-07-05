---
title: "Emdash"
description: "여러 코딩 에이전트를 병렬로 돌려 개발 작업을 분해·조율하는 오픈소스 개발 환경입니다. 에이전트별 터미널, 워크트리, 작업 흐름을 함께 관리하고 싶을 때 유용합니다."
category: "agent-harness"
tags: ["agentic-development", "parallel-agents", "coding-agents", "git-worktrees", "cli", "docker", "typescript"]
githubUrl: "https://github.com/generalaction/emdash"
websiteUrl: "https://emdash.sh"
githubStars: 5067
author: "generalaction"
installCommand: "npx emdash"
compatibleAgents: ["Claude Code", "Codex", "Gemini CLI", "Cursor", "OpenCode"]
featured: false
icon: "Blocks"
---

# Emdash

Emdash는 여러 코딩 에이전트를 병렬로 실행해 개발 작업을 나누고, 각 에이전트의 실행 환경과 결과를 한 흐름에서 관리할 수 있게 해 주는 오픈소스 개발 환경입니다. 에이전트 중심의 기능 개발, 리팩터링, 탐색 작업을 동시에 굴리면서도 작업 단위를 분리해 보고 싶을 때 적합합니다.

## 언제 쓰나

- 여러 에이전트에게 같은 저장소의 서로 다른 작업을 동시에 맡기고 싶을 때
- 워크트리와 터미널을 묶어 에이전트별 실행 환경을 분리하고 싶을 때
- CLI 기반 에이전트 운영을 한 화면에서 정리하고 싶을 때
- 병렬 탐색, 코드 수정, 검토를 이어서 처리하는 개발 흐름이 필요할 때

## 핵심 특징

- **병렬 에이전트 실행**: 여러 에이전트를 동시에 돌려 작업 속도를 높입니다.
- **개발 환경 조율**: 작업별 터미널과 워크트리를 분리해 충돌을 줄입니다.
- **에이전트 중립적**: 특정 모델이나 공급자에 묶이지 않고 여러 도구와 함께 쓸 수 있습니다.
- **오픈소스**: GitHub에서 소스와 업데이트를 확인할 수 있습니다.
- **참고**: 에이전트 중심 도구라서, 실제 사용감은 연결한 모델과 로컬 개발 환경에 따라 달라질 수 있습니다.

## 설치

```bash
npx emdash
```

GitHub 저장소 기준으로 확인한 현재 정보이며, 공식 사이트와 저장소의 안내를 함께 보는 것이 좋습니다.
