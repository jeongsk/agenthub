---
title: "Agent Toolkit for AWS"
description: "AI coding agent가 AWS 애플리케이션을 빌드·배포·운영하도록 돕는 AWS 공식 MCP 서버, 스킬, 플러그인 툴킷입니다."
category: "agent-infrastructure"
tags: ["aws", "mcp-server", "agent-skills", "plugins", "claude-code", "codex", "cursor", "kiro", "cloud", "devops"]
githubUrl: "https://github.com/aws/agent-toolkit-for-aws"
websiteUrl: "https://docs.aws.amazon.com/agent-toolkit/latest/userguide/"
githubStars: 1271
author: "aws"
installCommand: "Claude Code: /plugin install aws-core@claude-plugins-official\nCodex: codex plugin marketplace add aws/agent-toolkit-for-aws\nKiro/Other agents: npx skills add aws/agent-toolkit-for-aws/skills"
compatibleAgents: ["Claude Code", "Codex", "Cursor", "Kiro", "MCP-compatible agents"]
featured: false
icon: "Cloud"
---

# Agent Toolkit for AWS

Agent Toolkit for AWS는 AI coding agent가 AWS 서비스 위에서 애플리케이션을 빌드, 배포, 운영할 수 있도록 AWS가 공식 지원하는 도구 모음입니다. Claude Code, Codex, Cursor, Kiro 같은 에이전트 환경에서 사용할 수 있는 플러그인, agent skills, rules 파일, 그리고 AWS MCP Server 구성을 함께 제공합니다.

## 언제 쓰나

- 에이전트에게 AWS 서비스 선택, CDK/CloudFormation, 서버리스, 컨테이너, 스토리지, 관측성, 비용, SDK 사용, 배포 작업을 맡기고 싶을 때
- Amazon Bedrock, AgentCore 등 AWS 기반 AI agent 개발 워크플로를 에이전트에 연결하고 싶을 때
- S3 Tables, AWS Glue, Athena 기반 데이터 레이크·분석·ETL 작업을 코딩 에이전트와 함께 처리하고 싶을 때
- AWS DevOps Agent와 AWS Security Agent를 이용해 incident investigation, code review, UAT, vulnerability scan, penetration test 흐름을 구성하고 싶을 때
- 기존 AWS Labs MCP/skill/plugin 도구보다 AWS가 공식 지원하는 GA 상태의 통합 툴킷을 우선 사용하고 싶을 때

## 구성 요소

| 구성 | 설명 |
|------|------|
| `aws-core` plugin | AWS 기본 작업용 핵심 플러그인. 서비스 선택, IaC, 서버리스, 컨테이너, 스토리지, 관측성, 빌링, SDK, 배포를 다룹니다. |
| `aws-agents` plugin | Amazon Bedrock과 AgentCore로 AWS 위의 AI agent를 만드는 작업을 지원합니다. |
| `aws-data-analytics` plugin | S3 Tables, AWS Glue, Athena 기반 데이터 레이크·분석·ETL 워크플로를 지원합니다. |
| `aws-agents-for-devsecops` plugin | incident 조사, 릴리스 readiness UAT, 보안 취약점 스캔, penetration test를 지원합니다. |
| `skills/` | AWS 작업별 curated agent skills. 필요한 작업에 맞춰 에이전트가 지침과 reference material을 로드합니다. |
| `rules/` | 프로젝트 레벨에서 AWS MCP Server, skill discovery, documentation search 등을 사용하도록 안내하는 rules 파일입니다. |
| AWS MCP Server | 300개 이상의 AWS 서비스 API 접근, sandboxed Python script 실행, 실시간 AWS 문서 검색, CloudWatch metrics, CloudTrail audit logging, IAM condition key 기반 enterprise control을 제공합니다. |

## 설치 예시

Claude Code에서는 공식 Anthropic marketplace인 `claude-plugins-official`에서 주요 플러그인을 바로 설치할 수 있습니다.

```text
/plugin install aws-core@claude-plugins-official
/plugin install aws-agents@claude-plugins-official
/plugin install aws-data-analytics@claude-plugins-official
```

Codex에서는 repository를 plugin marketplace로 추가한 뒤 `/plugins`에서 `aws-core` 등을 설치합니다.

```bash
codex plugin marketplace add aws/agent-toolkit-for-aws
```

Kiro나 기타 MCP-compatible agent에서는 AWS MCP Server를 설정하고 skills를 추가합니다.

```bash
npx skills add aws/agent-toolkit-for-aws/skills
```

## 주의사항

- AWS API 호출과 script execution에는 로컬에 구성된 AWS credentials와 AWS account가 필요합니다. 문서 검색과 skill discovery에는 인증이 필요하지 않을 수 있습니다.
- Kiro MCP 설정 예시는 `mcp-proxy-for-aws@1.6.2`처럼 버전을 pinning하도록 권장합니다. 재현성과 supply-chain risk 관리를 위해 안정 버전을 확인해 업데이트하는 방식이 좋습니다.
- AWS Labs에서 공개된 기존 MCP servers, skills, plugins는 계속 동작하지만, AWS는 Agent Toolkit for AWS를 공식 후속 툴킷으로 권장합니다.

## 관련 링크

- [GitHub 저장소](https://github.com/aws/agent-toolkit-for-aws)
- [User guide](https://docs.aws.amazon.com/agent-toolkit/latest/userguide/)
- [AWS MCP Server tools](https://docs.aws.amazon.com/agent-toolkit/latest/userguide/understanding-mcp-server-tools.html)
- 라이선스: Apache-2.0
