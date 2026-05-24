---
title: "Conductor"
description: "Mac에서 Claude Code와 Codex 같은 코딩 에이전트를 병렬로 실행해 격리된 작업공간에서 관리하고, 변경 검토와 병합까지 이어주는 독립 데스크톱 앱입니다. 오픈소스로 공개되어 있지 않습니다."
category: "agent-harness"
tags: ["ai-agent", "macos", "parallel-agents", "workspaces", "claude-code", "codex", "desktop-app"]
githubUrl: "https://www.conductor.build/"
githubStars: 0
author: "meltylabs"
compatibleAgents: ["Claude Code", "Codex"]
featured: true
icon: "Workflow"
---

# Conductor

Conductor는 Mac에서 Claude Code, Codex 같은 코딩 에이전트를 병렬로 돌리기 위한 독립 데스크톱 앱입니다. 이 앱 자체의 핵심 코드는 오픈소스로 공개되어 있지 않으나, 에이전트마다 격리된 작업공간을 만들고 진행 상황을 한눈에 보면서 마지막에는 변경 사항을 검토하고 병합할 수 있게 해줍니다.

## 언제 쓰나

- 여러 코딩 에이전트를 한 프로젝트에서 동시에 운영하고 싶을 때
- 작업공간을 분리해 충돌 없이 병렬 작업을 돌리고 싶을 때
- 에이전트가 만든 변경을 마지막에 검토하고 PR/병합 흐름으로 넘기고 싶을 때
- Mac에서 에이전트 오케스트레이션 도구를 찾고 있을 때

## 특징

- Claude Code와 Codex를 병렬로 실행할 수 있습니다.
- 각 에이전트를 격리된 워크스페이스에서 관리합니다.
- 진행 상황, 체크포인트, diff 검토 흐름을 함께 제공합니다.
- GitHub PR 중심으로 변경을 마무리하는 흐름을 지원합니다.
- macOS 전용 데스크톱 앱으로 제공됩니다.
