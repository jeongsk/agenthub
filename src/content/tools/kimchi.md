---
title: "kimchi"
description: "멀티모델 오케스트레이션과 Ferment 프로젝트 모드를 제공하는 터미널 코딩 에이전트입니다. 작업을 단계별로 계획·실행·리뷰하면서 장기 세션을 이어 가고 싶을 때 유용합니다."
category: "agent-harness"
tags: ["ai-agent", "cli", "terminal", "multi-agent", "orchestration", "coding-agent", "workflow", "ferment", "typescript"]
githubUrl: "https://github.com/getkimchi/kimchi"
githubStars: 586
author: "getkimchi"
websiteUrl: "https://kimchi.dev"
installCommand: "brew install getkimchi/tap/kimchi"
compatibleAgents: ["Claude Code", "Codex", "Cursor", "OpenCode", "Hermes Agent"]
icon: "Terminal"
---

# kimchi

kimchi는 터미널에서 동작하는 코딩 에이전트 CLI입니다. 멀티모델 오케스트레이션, 태그 기반 추적, Ferment라는 교차 세션 프로젝트 모드를 제공해서, 복잡한 작업을 계획·분해·실행·리뷰 흐름으로 안정적으로 굴리고 싶을 때 유용합니다.

## 언제 쓰나

- 터미널 안에서 코딩 에이전트를 직접 돌리고 싶을 때
- 작업 유형별로 서로 다른 모델을 배정해 오케스트레이션하고 싶을 때
- 긴 작업을 세션을 넘겨 이어 가는 프로젝트 모드가 필요할 때
- 태그와 phase 추적으로 비용/진행 상황을 관리하고 싶을 때

## 핵심 특징

- `multi-model` 모드로 역할별 모델 풀을 운영합니다.
- `Ferment` 모드로 계획, 단계, 상태를 세션 간에 유지합니다.
- `tags`와 `phase`로 요청을 추적하고 기록합니다.
- 로컬 CLI 기반이라 에이전트 워크플로를 직접 통제하기 좋습니다.
