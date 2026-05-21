---
title: "Registry Content Submitter"
description: "스킬, 플러그인, MCP 서버, 브라우저 확장 등록 요청을 조사해 AgentHub 콘텐츠 컬렉션에 검증된 항목을 추가하는 에이전트 스킬입니다."
category: "agent-skill"
tags: ["agenthub", "registry", "content", "gitops", "research", "submission"]
githubUrl: "https://github.com/jeongsk/agenthub/tree/main/.codex/skills/registry-content-submitter"
author: "jeongsk"
installCommand: "npx skills add jeongsk/agenthub --skill registry-content-submitter"
compatibleAgents: ["Claude", "Gemini", "OpenAI", "Codex"]
featured: false
icon: "ListPlus"
---

# Registry Content Submitter

사용자가 AgentHub에 스킬, 플러그인, MCP 서버, 브라우저 확장을 등록해 달라고 요청하면 공식 저장소와 문서를 조사해 `src/content/skills/*.md`에 검증된 레지스트리 항목을 추가합니다.

## 주요 기능

- **등록 대상 분류**: 요청 항목을 `mcp-server`, `agent-skill`, `plugin`, `browser-extension` 중 하나로 매핑합니다.
- **중복 방지**: 기존 slug, 제목, GitHub URL, 별칭을 확인해 같은 항목이 두 번 등록되지 않게 합니다.
- **출처 기반 보강**: GitHub README, 공식 문서, 마켓플레이스 정보 등 1차 출처를 우선해 설치 명령, 지원 에이전트, 작성자 정보를 채웁니다.
- **콘텐츠 검증**: 기존 항목을 보존하면서 새 Markdown 파일을 추가하고 콘텐츠 검증과 사이트 빌드를 확인합니다.

## 사용 방법

등록할 프로젝트 이름이나 URL을 전달하면 스킬이 조사, Markdown 콘텐츠 작성, `src/content/skills/` 업데이트, 검증 순서로 진행합니다.
