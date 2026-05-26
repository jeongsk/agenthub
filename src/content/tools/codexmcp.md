---
title: "CodexMCP"
description: "Claude Code와 Codex를 MCP로 연결해 함께 쓰게 해주는 브리지입니다. 세션 유지, 병렬 작업, 추론 추적을 붙여 다중 에이전트 협업 흐름을 만들고 싶을 때 유용합니다."
category: "mcp-server"
tags: ["mcp", "codex", "claude-code", "multi-agent", "collaboration", "agent-tools"]
githubUrl: "https://github.com/GuDaStudio/codexmcp"
websiteUrl: "https://code.guda.studio"
githubStars: 1964
author: "GuDaStudio"
installCommand: "claude mcp add codex -s user --transport stdio -- uvx --from git+https://github.com/GuDaStudio/codexmcp.git codexmcp"
compatibleAgents: ["Claude Code", "Codex"]
icon: "Plug"
---

# CodexMCP

CodexMCP는 Claude Code와 Codex를 MCP로 이어 주는 협업 브리지입니다. Claude Code가 전체 설계와 흐름을 잡고, Codex가 코드 생성·세부 수정·검토를 맡는 식으로 여러 에이전트를 함께 운영할 때 쓰기 좋습니다.

## 언제 쓰나

- Claude Code와 Codex를 하나의 협업 흐름으로 묶고 싶을 때
- Codex를 MCP 도구처럼 붙여서 외부 에이전트와 같이 쓰고 싶을 때
- 세션 유지나 병렬 작업이 필요한 다중 에이전트 워크플로가 필요할 때
- 에이전트 간 역할 분담을 명확히 하고 싶을 때

## 특징

- MCP 기반의 Claude Code ↔ Codex 연결
- 세션 지속 및 다중 턴 협업 지원
- 병렬 작업과 추론 추적 기능 제공
- 공식 Codex MCP보다 협업 운영에 초점을 둔 구현
- WSL/Linux/macOS/Windows 환경을 염두에 둔 설치 안내
