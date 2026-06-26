---
title: "Knowledge Work Plugins"
description: "Claude Cowork와 Claude Code에서 역할·팀·회사별 전문 워크플로를 플러그인으로 설치할 수 있는 Anthropic 공식 오픈소스 컬렉션입니다. 스킬, slash command, sub-agent, MCP connector를 함께 묶어 배포합니다."
category: "plugin"
tags: ["claude-code", "claude-cowork", "plugins", "anthropic", "marketplace", "skills", "slash-commands", "mcp", "connectors", "knowledge-work"]
githubUrl: "https://github.com/anthropics/knowledge-work-plugins"
githubStars: 21989
author: "anthropics"
installCommand: "claude plugin marketplace add anthropics/knowledge-work-plugins"
compatibleAgents: ["Claude Cowork", "Claude Code"]
icon: "Puzzle"
---

# Knowledge Work Plugins

Knowledge Work Plugins는 Anthropic이 공개한 공식 오픈소스 플러그인 컬렉션입니다. Claude Cowork와 Claude Code에서 역할별 전문 워크플로를 설치하고, 팀의 도구·용어·프로세스에 맞춰 스킬, slash command, sub-agent, MCP connector를 함께 커스터마이즈할 수 있습니다.

## 언제 쓰나

- Claude Cowork 또는 Claude Code에 역할별 플러그인을 추가하고 싶을 때
- 팀 공통 업무 흐름을 플러그인 형태로 표준화하고 싶을 때
- 스킬, slash command, sub-agent, MCP 연결을 한 묶음으로 배포하고 싶을 때
- 회사 도구 스택과 업무 프로세스에 맞춰 Claude의 동작 방식을 커스터마이즈하고 싶을 때
- 공식 저장소를 기준으로 Claude plugin 구조를 학습하거나 새 플러그인을 만들고 싶을 때

## 포함된 플러그인

README 기준으로 생산성, 영업, 고객지원, 제품관리, 마케팅, 법무, 재무, 데이터, 엔터프라이즈 검색, 바이오 리서치, 플러그인 관리용 플러그인을 제공합니다. 각 플러그인은 역할별 워크플로와 함께 Slack, Notion, Jira, Linear, Microsoft 365, HubSpot, Figma, Snowflake, BigQuery 같은 도구 연결 예시를 포함합니다.

## 빠른 시작

Claude Code에서는 먼저 marketplace를 추가한 뒤 필요한 플러그인을 설치합니다.

```bash
claude plugin marketplace add anthropics/knowledge-work-plugins
claude plugin install sales@knowledge-work-plugins
```

Cowork에서는 `claude.com/plugins`에서 플러그인을 설치합니다.

## 핵심 특징

- **Anthropic 공식 저장소**: Claude Cowork용으로 만든 플러그인을 GitHub에서 확인하고 fork/customize할 수 있습니다.
- **역할 기반 구성**: sales, data, product-management, marketing 등 업무 역할별 시작점을 제공합니다.
- **파일 기반 플러그인**: `.claude-plugin/plugin.json`, `.mcp.json`, `commands/`, `skills/` 구조로 구성되며 별도 빌드나 인프라가 필요 없습니다.
- **MCP connector 포함**: 업무 도구 연결을 `.mcp.json`으로 정의해 Claude가 외부 시스템 맥락을 가져오게 할 수 있습니다.
- **Claude Cowork/Claude Code 대응**: Cowork에서 직접 설치하거나 Claude Code plugin marketplace로 추가할 수 있습니다.

## 참고

- 플러그인은 범용 템플릿이므로 실제 팀에서 쓰려면 회사 용어, 도구, 승인 절차, 보안 정책에 맞게 커스터마이즈하는 것이 중요합니다.
- connector를 활성화할 때는 각 SaaS/MCP 서버의 권한 범위와 민감 데이터 접근 정책을 먼저 검토해야 합니다.
