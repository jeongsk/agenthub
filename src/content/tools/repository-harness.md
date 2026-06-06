---
title: "repository-harness"
description: "리포지토리를 Claude Code, Codex, Cursor 같은 에이전트가 바로 작업할 수 있는 하네스 구조로 바꾸는 도구입니다. AGENTS.md, 제품 계약, 스토리 패킷, 검증 기준, 의사결정 기록을 함께 깔고 싶을 때 유용합니다."
category: "agent-harness"
tags: ["harness", "agents", "claude-code", "codex", "cursor", "agents-md", "validation", "product-contract", "story-packets"]
githubUrl: "https://github.com/hoangnb24/repository-harness"
githubStars: 528
author: "hoangnb24"
installCommand: "curl -fsSL \"https://raw.githubusercontent.com/hoangnb24/repository-harness/main/scripts/install-harness.sh?$(date +%s)\" | bash -s -- --yes"
compatibleAgents: ["Claude Code", "Codex", "Cursor"]
featured: false
icon: "FolderGit2"
---

# repository-harness

`repository-harness`는 리포지토리를 에이전트 친화적인 작업 공간으로 바꾸는 하네스입니다. 코드만 던져 주는 대신, 어디서 읽고 무엇을 먼저 이해해야 하는지, 어떤 계약을 지켜야 하는지, 어떤 검증이 필요한지까지 리포지토리 안에 함께 담아 줍니다.

## 언제 쓰나

- Claude Code, Codex, Cursor 같은 코딩 에이전트에 프로젝트 컨텍스트를 미리 심고 싶을 때
- AGENTS.md, 제품 계약, 스토리, 검증 기준을 한 세트로 정리하고 싶을 때
- 변경 범위와 위험도를 작업 시작 전에 명확히 하고 싶을 때
- 인간과 에이전트가 같은 저장소 규칙을 공유해야 할 때
- 새 프로젝트를 에이전트 친화적인 구조로 초기화하고 싶을 때

## 핵심 특징

- **AGENTS.md 기반 셋업**: 에이전트가 먼저 읽을 로컬 안내를 둡니다.
- **제품 계약과 스토리 분리**: 큰 요구를 검토 가능한 단위로 나눕니다.
- **검증 기준 내장**: 작업 완료 조건을 테스트/증거 중심으로 정리합니다.
- **의사결정 기록**: 앞으로의 에이전트가 이어받을 수 있게 결정을 남깁니다.
- **크로스 에이전트 지원**: Claude Code, Codex, Cursor 등 여러 코딩 에이전트를 대상으로 합니다.
