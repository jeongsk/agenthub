---
title: "PilotDeck"
description: "팀 단위 장기 실행형 AI 에이전트 운영체제입니다. 작업공간 분리, 화이트박스 메모리, 스마트 라우팅, 항상 켜진 실행 흐름으로 여러 프로젝트를 동시에 굴리고 싶을 때 유용합니다."
category: "agent-framework"
tags: ["agent-os", "workspace", "memory", "routing", "mcp", "productivity", "automation", "multi-task"]
githubUrl: "https://github.com/OpenBMB/PilotDeck"
websiteUrl: "https://pilotdeck.openbmb.cn"
githubStars: 2691
author: "OpenBMB"
installCommand: "curl -fsSL https://raw.githubusercontent.com/OpenBMB/PilotDeck/main/install.sh | bash"
compatibleAgents: ["Claude Code", "Cursor", "Codex", "OpenCode", "Gemini CLI", "Kiro", "Windsurf", "GitHub Copilot"]
icon: "Layers3"
---

# PilotDeck

PilotDeck는 WorkSpace 단위로 파일, 메모리, 스킬을 분리하는 에이전트 운영체제입니다. 여러 프로젝트를 병렬로 관리하면서, 메모리 추적과 작업별 라우팅을 갖춘 장기 실행형 AI 작업 환경을 만들고 싶을 때 유용합니다.

![PilotDeck 배너](/tool-screenshots/pilotdeck-banner.png)

## 언제 쓰나

- 여러 프로젝트를 동시에 돌리는 AI 작업 공간이 필요할 때
- 작업별 메모리와 비용을 추적하며 에이전트를 운영하고 싶을 때
- 다양한 모델을 난이도에 따라 자동으로 라우팅하고 싶을 때
- Web / CLI / IM 전면에서 같은 에이전트 운영 구조를 유지하고 싶을 때

## 핵심 특징

- **WorkSpace 격리**: 프로젝트별 파일, 메모리, 스킬을 분리합니다.
- **화이트박스 메모리**: 생성·저장·검색 과정을 추적할 수 있습니다.
- **스마트 라우팅**: 작업 난이도에 따라 모델을 자동 배치합니다.
- **항상 켜진 실행**: 사용자가 자리를 비워도 작업이 계속 진행됩니다.
- **MCP 네이티브**: Model Context Protocol을 기본적으로 지원합니다.
