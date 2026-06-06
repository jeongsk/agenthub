---
title: "ROACH PI"
description: "pi 코딩 에이전트를 위한 엄격한 엔지니어링 하네스와 확장 묶음입니다. 명확한 목표 수립, 검증 가능한 실행, 서브에이전트 오케스트레이션, 리뷰, 검색, LSP, 메모리를 한 흐름으로 운영하고 싶을 때 유용합니다."
category: "agent-harness"
tags: ["pi", "harness", "orchestration", "subagents", "review", "search", "lsp", "memory", "mcp", "workflow"]
githubUrl: "https://github.com/tmdgusya/roach-pi"
websiteUrl: "https://tmdgusya.github.io/roach-pi/"
githubStars: 229
author: "tmdgusya"
installCommand: "pi install git:github.com/tmdgusya/roach-pi"
compatibleAgents: ["Pi"]
featured: false
icon: "Workflow"
---

# ROACH PI

ROACH PI는 pi 코딩 에이전트를 위한 확장 묶음입니다. 작업을 애매한 대화로 끝내지 않고, **명확한 목표 설정 → 검증 가능한 실행 → 리뷰 → 기억/검색** 순서로 다루게 해 주는 하네스 성격의 레포입니다.

## 언제 쓰나

- pi 세션을 더 엄격한 엔지니어링 루프로 운영하고 싶을 때
- `/clarify`로 요구를 정리한 뒤 `/goal`로 지속 실행하고 싶을 때
- 서브에이전트를 병렬로 돌려 조사, 구현, 검토를 분리하고 싶을 때
- LSP, MCP, 메모리, 빠른 검색을 한 번에 묶어 쓰고 싶을 때
- 실행 결과를 사람이 읽기 쉬운 형태로 검토하고 다시 이어가고 싶을 때

## 특징

- **Clarify → Goal 루프**: 모호한 요청을 먼저 정리하고, 검증 가능한 목표로 전환합니다.
- **서브에이전트 오케스트레이션**: 단일, 병렬, 체인, 비동기 패턴을 지원합니다.
- **리뷰 흐름**: PR이나 로컬 diff를 빠르게 점검하는 `/review`를 제공합니다.
- **FFF 검색**: git-aware 파일/내용 검색을 강화합니다.
- **LSP 도구**: 정의 이동, 참조 찾기, 심볼 검색, rename 지원을 제공합니다.
- **워크스페이스 메모리**: 중요한 결정을 저장하고 이후 세션에서 다시 불러옵니다.
- **MCP 어댑터**: 외부 서버 도구를 필요할 때만 로드하는 방식으로 연결합니다.
- **중첩 AGENTS.md**: 하위 디렉토리 규칙을 자동으로 반영합니다.

## 참고

- 이 저장소는 `pi` 에이전트용 작업 하네스이므로 `agent-harness`로 분류하는 편이 자연스럽습니다.
- GitHub 저장소 기준으로 검증한 레지스트리 항목입니다.
