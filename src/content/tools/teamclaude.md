---
title: "TeamClaude"
description: "Claude Code 앞단에서 여러 Claude 계정과 API 키를 자동 전환하는 로컬 Anthropic API 프록시. 세션·주간 quota 사용량을 추적해 소진 직전 계정을 우회합니다."
category: "agent-infrastructure"
tags: ["claude-code", "anthropic", "proxy", "multi-account", "quota", "load-balancer", "oauth", "nodejs"]
githubUrl: "https://github.com/jung-wan-kim/teamclaude"
websiteUrl: "https://github.com/jung-wan-kim/teamclaude"
githubStars: 59
author: "jung-wan-kim"
installCommand: "npm install -g github:jung-wan-kim/teamclaude"
compatibleAgents: ["Claude Code"]
featured: false
icon: "Blocks"
---

**TeamClaude**는 Claude Code와 Anthropic API 사이에 놓는 로컬 HTTP 프록시입니다. 여러 Claude Max/Pro OAuth 계정이나 Anthropic API 키 계정을 등록해 두면, 각 계정의 세션(5시간)·주간(7일) quota 상태를 추적하고 임계치에 도달한 계정을 자동으로 건너뜁니다.

## 언제 쓰나

- Claude Code를 여러 Claude 계정으로 운용하면서 quota 소진에 따라 수동으로 로그인 계정을 바꾸고 싶지 않을 때
- 한 계정이 429 또는 사용량 제한에 걸려도 가능한 다른 계정으로 즉시 failover하고 싶을 때
- 계정별 quota, reset 시간, 활성 계정 상태를 터미널 UI에서 확인하고 싶을 때

## 주요 기능

- **Quota 기반 자동 전환** — 시작 시 계정별 사용량을 측정하고, 주간 quota reset이 임박한 계정을 우선 사용합니다.
- **429 failover** — token quota 소진 또는 rate/concurrency 429를 감지해 가능한 다른 계정으로 요청을 재시도합니다.
- **대화형 TUI** — 계정별 세션/주간 quota 막대, reset 카운트다운, 요청 로그, 활성/비활성 전환, 우선순위 조정 기능을 제공합니다.
- **OAuth 및 API 키 계정 지원** — `teamclaude login`으로 Claude OAuth 계정을 추가하거나 `teamclaude login --api`로 API 키 계정을 등록할 수 있습니다.
- **Claude Code 연동 명령** — `teamclaude run` 또는 `eval $(teamclaude env)`로 Claude Code 트래픽을 프록시로 보냅니다.
- **상태 보존** — quota snapshot을 설정 파일 옆에 저장해 재시작 후에도 계정 순서와 대시보드가 초기화되지 않도록 합니다.

## 설치 및 빠른 시작

```bash
npm install -g github:jung-wan-kim/teamclaude
teamclaude login
teamclaude login
teamclaude server

# 다른 터미널에서 Claude Code 실행
teamclaude run
```

기존 Claude Code 로그인 정보를 가져올 수도 있습니다.

```bash
claude /login
teamclaude import
```

## 주의사항

- Node.js 18 이상이 필요합니다.
- 설정은 기본적으로 `~/.config/teamclaude.json` 또는 `$XDG_CONFIG_HOME/teamclaude.json`에 저장됩니다.
- 이 항목은 사용자가 제공한 `jung-wan-kim/teamclaude` 저장소를 기준으로 등록했습니다. `package.json`의 npm 패키지명은 `@karpeleslab/teamclaude`이고 repository 메타데이터는 업스트림 `KarpelesLab/teamclaude`를 가리킵니다.
- `teamclaude stop`을 프록시를 통해 연결된 Claude Code 세션 안에서 실행하면 그 세션의 API 연결도 함께 끊길 수 있으므로 별도 터미널에서 중지/재시작하는 편이 안전합니다.
