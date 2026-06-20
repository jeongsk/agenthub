---
title: "Trellis"
description: "팀 단위 AI 코딩 하네스입니다. Claude Code, Cursor, Codex 같은 에이전트에 스펙·태스크·메모리·검증 루프를 붙여서, 반복적인 개발 워크플로를 팀 표준으로 운영하고 싶을 때 유용합니다."
category: "agent-harness"
tags: ["agent-harness", "claude-code", "cursor", "codex", "workflow", "memory", "specs", "multi-agent"]
githubUrl: "https://github.com/mindfold-ai/Trellis"
websiteUrl: "https://docs.trytrellis.app"
githubStars: 9096
author: "mindfold-ai"
installCommand: "npm install -g @mindfoldhq/trellis@latest"
compatibleAgents: ["Claude Code", "Cursor", "Codex", "OpenCode", "Gemini CLI", "Windsurf", "GitHub Copilot"]
icon: "Workflow"
---

# Trellis

Trellis는 에이전트 코딩을 팀 규모에서 안정적으로 굴리기 위한 하네스입니다. `.trellis/spec/`, `.trellis/tasks/`, `.trellis/workspace/`를 중심으로 PRD, 작업 상태, 프로젝트 메모리, 검증 과정을 정리해 줍니다.

<video src="/tool-screenshots/trellis-demo.mp4" autoplay loop muted playsinline controls aria-label="Trellis 데모 워크플로"></video>

## 언제 쓰나

- Claude Code, Cursor, Codex 같은 도구에 공통 작업 규칙을 붙이고 싶을 때
- PRD, 구현 컨텍스트, 리뷰 컨텍스트, 작업 상태를 프로젝트 안에서 체계적으로 관리하고 싶을 때
- 여러 에이전트 플랫폼을 같은 워크플로로 맞추고 싶을 때
- 팀 단위로 검증 가능한 에이전트 개발 루프를 만들고 싶을 때

## 핵심 특징

- **스펙 주입**: `.trellis/spec/`에 규칙을 모아두고 세션마다 필요한 맥락을 자동으로 넣습니다.
- **태스크 중심 흐름**: `.trellis/tasks/`에 PRD, 구현, 리뷰, 상태를 분리해 관리합니다.
- **프로젝트 메모리**: `.trellis/workspace/`로 이전 작업의 학습 내용을 이어갑니다.
- **멀티 플랫폼 지원**: 여러 AI 코딩 플랫폼에 같은 구조를 적용할 수 있습니다.
- **검증 루프 포함**: lint, type-check, test 결과를 기준으로 구현을 점검합니다.
