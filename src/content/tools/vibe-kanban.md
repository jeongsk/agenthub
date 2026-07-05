---
title: "Vibe Kanban"
description: "코딩 에이전트의 작업을 칸반 보드로 계획·실행·리뷰하는 오픈소스 하네스입니다. Claude Code, Codex, Gemini CLI처럼 여러 에이전트와 함께 워크스페이스, 브랜치, PR 흐름을 관리할 때 유용합니다."
category: "agent-harness"
tags: ["kanban", "task-management", "code-review", "workspaces", "agents", "github", "rust"]
githubUrl: "https://github.com/BloopAI/vibe-kanban"
websiteUrl: "https://www.vibekanban.com/"
githubStars: 27265
author: "BloopAI"
installCommand: "npx vibe-kanban"
compatibleAgents: ["Claude Code", "Codex", "Gemini CLI", "Amp", "Cursor", "OpenCode", "GitHub Copilot"]
featured: false
icon: "Blocks"
---

# Vibe Kanban

Vibe Kanban은 칸반 이슈로 작업을 계획하고, 에이전트가 실행할 워크스페이스를 열어 코드 변경을 검토·반영할 수 있게 해 주는 오픈소스 하네스입니다. 여러 코딩 에이전트를 오가며 작업을 맡기고, diff와 인라인 코멘트로 피드백한 뒤 PR까지 이어가는 흐름에 적합합니다.

## 언제 쓰나

- 코딩 에이전트의 작업을 칸반 보드로 분해해 관리하고 싶을 때
- 에이전트별 워크스페이스, 브랜치, dev server를 한곳에서 다루고 싶을 때
- diff 리뷰와 인라인 코멘트로 에이전트 결과를 빠르게 검토하고 싶을 때
- Claude Code, Codex, Gemini CLI 등 여러 에이전트를 번갈아 쓰는 팀 작업을 정리하고 싶을 때
- 에이전트가 만든 변경을 PR 생성과 머지까지 연결하고 싶을 때

## 핵심 특징

- **칸반 기반 계획**: 이슈 생성, 우선순위 지정, 할당을 보드에서 바로 처리합니다.
- **워크스페이스 실행**: 각 작업에 브랜치와 터미널, dev server를 붙여 에이전트 실행을 분리합니다.
- **리뷰 도구**: diff 확인, 인라인 코멘트, 브라우저 미리보기를 한 흐름에 묶습니다.
- **다중 에이전트 지원**: 여러 코딩 에이전트를 전환하며 같은 작업을 진행할 수 있습니다.
- **PR 흐름**: AI가 작성한 설명으로 pull request를 열고 GitHub에서 이어서 검토할 수 있습니다.
- **중요 참고**: 프로젝트는 현재 sunset 공지를 올린 상태라, 새 도입보다는 기존 설치나 레퍼런스 확인용으로 보는 편이 좋습니다.

## 설치

```bash
npx vibe-kanban
```

공식 README에는 Rust, Node.js 20+, pnpm 8+가 개발/빌드 전제 조건으로 안내되어 있으며, 자체 호스팅과 원격 SSH 편집 연동도 지원합니다.
