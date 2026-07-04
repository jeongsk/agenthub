---
title: "Mission Control"
description: "여러 AI 에이전트 작업을 지시·추적·관측하는 셀프호스트형 오케스트레이션 대시보드입니다. 태스크 디스패치, 멀티에이전트 워크플로, 비용 모니터링, 운영 가시화가 필요할 때 유용합니다."
category: "agent-harness"
tags: ["agent-orchestration", "dashboard", "task-management", "multi-agent", "self-hosted", "monitoring", "typescript", "nextjs", "sqlite", "mcp"]
githubUrl: "https://github.com/builderz-labs/mission-control"
websiteUrl: "https://mc.builderz.dev"
githubStars: 5511
author: "builderz-labs"
installCommand: "git clone https://github.com/builderz-labs/mission-control.git"
compatibleAgents: ["Claude Code", "Codex", "Gemini", "Cursor", "OpenCode", "Hermes Agent"]
featured: false
icon: "MonitorSmartphone"
---

# Mission Control

Mission Control은 에이전트 작업을 중앙에서 오케스트레이션하는 셀프호스트형 대시보드입니다. 작업을 디스패치하고, 멀티에이전트 워크플로를 추적하며, 사용량과 운영 상태를 한 화면에서 관리하는 용도에 맞습니다.

## 언제 쓰나

- 여러 에이전트에게 태스크를 나눠 주고 진행 상황을 추적하고 싶을 때
- 에이전트 작업량, 비용, 운영 상태를 함께 모니터링하고 싶을 때
- 팀이나 개인용 AI 운영 콘솔을 셀프호스트로 두고 싶을 때
- MCP와 연동되는 에이전트 운영 레이어를 실험하거나 붙이고 싶을 때

## 핵심 특징

- **태스크 디스패치**: 에이전트 작업을 분배하고 상태를 추적합니다.
- **멀티에이전트 워크플로**: 여러 에이전트가 협업하는 흐름을 관리합니다.
- **운영 가시성**: 작업, 사용량, 시스템 상태를 대시보드에서 확인합니다.
- **셀프호스트**: 자체 인프라에 올려 내부 정책에 맞게 운영할 수 있습니다.

## 참고

프로젝트는 Next.js와 SQLite 기반의 오픈소스 대시보드입니다. 운영용으로 쓸 경우 인증, 배포 방식, 연동 대상 에이전트와 모니터링 범위를 먼저 확인하는 것이 좋습니다.
