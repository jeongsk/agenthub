---
title: "Meta Harness"
description: "도메인별 워크플로와 전문 에이전트 스킬, 결정적 핸드오프 산출물을 설계하는 Codex 네이티브 메타 스킬입니다."
category: "agent-framework"
tags: ["codex", "meta-skill", "multi-agent", "workflow", "standards-first"]
githubUrl: "https://github.com/SaehwanPark/meta-harness"
githubStars: 66
author: "SaehwanPark"
installCommand: "git clone https://github.com/SaehwanPark/meta-harness && python3 meta-harness/scripts/install_harness.py --scope project --layout standard"
compatibleAgents: ["Codex", "Aider", "OpenHands", "Claude Code"]
featured: false
icon: "Boxes"
---

# Meta Harness

Meta Harness는 도메인별 워크플로와 재사용 가능한 전문 에이전트 스킬, 그리고 에이전트 간 결정적 핸드오프 산출물을 설계하는 Codex 네이티브 메타 스킬입니다. revfactory/harness를 포크해 표준 우선(standards-first) 레포 레이아웃과 런타임 중립 산출물 규약을 더한 버전으로, 여러 AI 플랫폼에 이식 가능하도록 설계됐습니다.

## 언제 쓰나

- Codex 환경에서 도메인 전용 멀티 에이전트 워크플로를 설계하고 싶을 때
- 에이전트 간 산출물 교환을 결정적인 규약으로 고정하고 싶을 때
- ForgeCode·Droid·OpenHands·Aider·Codex 등 여러 런타임에 같은 구조를 이식하고 싶을 때
- 표준화된 레포 레이아웃(`AGENTS.md`, `.agents/skills/`)으로 멀티 에이전트 시스템을 정리하고 싶을 때

## 특징

- **6단계 워크플로**: 분석 → 아키텍처 → 생성 → 통합 → 검증 → 테스트 흐름을 제공합니다.
- **6가지 아키텍처 패턴**: Pipeline, Fan-out/Fan-in, Expert Pool, Producer-Reviewer, Supervisor, Hierarchical Delegation을 지원합니다.
- **표준 우선 레포 구조**: `AGENTS.md`, `.agents/skills/`, `docs/harness/` 중심으로 구성됩니다.
- **결정적 핸드오프**: `_workspace/` 규약으로 에이전트 간 산출물을 주고받습니다.
- **부트스트랩 설치기**: 프로젝트 단위·사용자 단위 설치를 모두 지원하며 `forgecode`, `droid`, `openhands`, `aider`, `codex` 레이아웃을 선택할 수 있습니다.

> [Harness](https://github.com/revfactory/harness)에서 포크된 프로젝트로, Apache 2.0 라이선스를 유지하면서 런타임 중립적인 표준 레이아웃과 산출물 계약을 보강했습니다.
