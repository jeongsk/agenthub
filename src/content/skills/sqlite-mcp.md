---
title: "SQLite MCP Server"
description: "AI 에이전트가 SQLite 스키마를 살펴보고 읽기 전용 쿼리를 실행할 수 있게 하는 MCP 서버입니다."
category: "mcp-server"
tags: ["mcp", "sqlite", "database", "sql", "data-analysis"]
githubUrl: "https://github.com/modelcontextprotocol/servers"
author: "modelcontextprotocol"
installCommand: "npx -y @modelcontextprotocol/server-sqlite --db /path/to/my-database.sqlite"
compatibleAgents: ["Claude", "Gemini", "Cursor"]
featured: true
icon: "Database"
---

# SQLite MCP Server

SQLite MCP Server는 Claude Desktop, Gemini Code Assist, Cursor 같은 AI 에이전트가 로컬 SQLite 데이터베이스를 안전하게 읽고 분석할 수 있게 합니다.

## 핵심 기능

- **스키마 확인**: 테이블, 인덱스, 컬럼, 외래 키 정보를 확인합니다.
- **SQL 분석**: 읽기 전용 SELECT 쿼리로 데이터를 집계하고 탐색합니다.
- **안전한 실행 환경**: INSERT, UPDATE, DELETE, DROP 같은 변경 쿼리를 차단합니다.
- **메타데이터 탐색**: 데이터베이스 구조를 빠르게 파악합니다.

## Claude Desktop 설정

```json
{
  "mcpServers": {
    "sqlite": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-sqlite", "--db", "/Users/username/data.sqlite"]
    }
  }
}
```
