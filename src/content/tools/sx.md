---
title: "sx"
description: "AI 코딩 도우미용 스킬, MCP 설정, 명령어를 팀 단위로 패키징하고 배포하는 도구입니다. 여러 클라이언트에 같은 AI 자산을 공유하고 싶을 때 유용합니다."
category: "agent-harness"
tags: ["skills", "mcp", "commands", "distribution", "vault", "cli"]
githubUrl: "https://github.com/sleuth-io/sx"
githubStars: 208
author: "sleuth-io"
installCommand: "brew install sx"
compatibleAgents: ["Claude Code", "Cursor", "GitHub Copilot", "Gemini", "OpenCode"]
featured: true
icon: "Package"
---

# sx

sx는 AI 코딩 도우미용 자산을 패키징하고 배포하는 도구입니다. 스킬, MCP 설정, 명령어, 룰, 플러그인을 한 vault로 묶어 팀과 프로젝트에 맞게 배포할 수 있습니다.

## 언제 쓰나

- 팀의 AI 스킬과 프롬프트 자산을 중앙에서 관리하고 싶을 때
- Claude Code, Cursor, Copilot 등 여러 클라이언트에 같은 자산을 배포하고 싶을 때
- 프로젝트별, 팀별, 사용자별로 설치 범위를 나누고 싶을 때
- `.claude` 같은 기존 자산을 버전 관리와 동기화 대상으로 옮기고 싶을 때

## 특징

- 스킬, MCP, commands, rules, plugins 등을 vault로 묶습니다.
- org, repo, path, team, user, bot 단위로 설치 범위를 나눌 수 있습니다.
- 로컬 vault, git vault, Skills.new 연동 흐름을 지원합니다.
- 설치 결과를 lockfile로 고정해 재현성을 높입니다.

## 참고

- 이 저장소는 단순한 스킬 모음집보다 **AI 자산 배포/동기화 하네스**에 가깝습니다.
- 그래서 이 레지스트리에서는 `agent-harness`로 분류하는 편이 자연스럽습니다.
