---
title: "Filesystem MCP Server"
description: "로컬 작업 폴더의 파일을 안전하게 읽고 쓰는 공식 MCP 서버입니다."
category: "mcp-server"
tags: ["filesystem", "local-files", "mcp", "productivity", "official"]
githubUrl: "https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem"
author: "modelcontextprotocol"
installCommand: "npx -y @modelcontextprotocol/server-filesystem /path/to/allowed/root"
compatibleAgents: ["Claude", "Cursor", "Continue", "Cline"]
featured: true
icon: "FolderOpen"
---

# Filesystem MCP Server

Filesystem MCP Server는 에이전트가 허용된 로컬 디렉터리 안에서 파일을 읽고 쓸 수 있게 해 줍니다.

## 핵심 용도

- 프로젝트 소스 읽기
- 설정 파일 점검
- 에이전트가 만든 산출물 저장
- 로컬 작업공간의 구조 탐색
