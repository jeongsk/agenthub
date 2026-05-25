---
title: "DeepSeek Reasonix"
description: "DeepSeek 기반 터미널 코딩 에이전트입니다. prefix-cache 안정성을 중심으로 긴 세션에서도 비용을 낮게 유지하며, 코드 작업을 계속 이어서 돌릴 때 유용합니다."
category: "agent-framework"
tags: ["deepseek", "coding-agent", "cli", "terminal", "prefix-cache", "tui"]
githubUrl: "https://github.com/esengine/DeepSeek-Reasonix"
githubStars: 6870
author: "esengine"
installCommand: "npm install -g reasonix"
compatibleAgents: ["Claude Code", "Codex", "Cursor", "OpenCode"]
icon: "TerminalSquare"
---

# DeepSeek Reasonix

DeepSeek Reasonix는 DeepSeek 모델에 맞춰 설계된 터미널 코딩 에이전트입니다. 긴 세션에서 prefix-cache를 안정적으로 유지하는 흐름을 강조해, 비용을 낮게 유지하면서 코드 수정과 반복 작업을 이어가기에 좋습니다.

## 언제 쓰나

- 터미널에서 바로 코드 작업을 맡길 DeepSeek 전용 에이전트가 필요할 때
- 긴 세션에서도 캐시 안정성과 토큰 효율을 중요하게 볼 때
- `plan → edit → verify` 같은 반복적인 개발 루프를 계속 돌리고 싶을 때
- `reasonix code`, `reasonix chat`, `reasonix run` 같은 모드를 나눠 쓰고 싶을 때

## 특징

- DeepSeek에 최적화된 CLI 코딩 에이전트입니다.
- `reasonix` / `reasonix code`로 작업을 시작할 수 있습니다.
- `npm install -g reasonix` 또는 `npx reasonix code`로 사용할 수 있습니다.
- 장기 실행 세션에서 prefix-cache 안정성을 핵심 가치로 둡니다.
- 코드 편집, 챗, 원샷 실행, 진단 도구를 함께 제공합니다.
