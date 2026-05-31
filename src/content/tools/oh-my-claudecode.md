---
title: "oh-my-claudecode"
description: "Claude Code를 위한 팀 중심 멀티 에이전트 오케스트레이션 도구입니다. 'Claude Code를 배우지 말고 그냥 OMC를 쓰라'는 컨셉으로 autopilot·팀 모드로 작업을 자동 분담·실행합니다."
category: "agent-harness"
tags: ["multi-agent", "orchestration", "claude-code", "team-mode", "autopilot", "cli", "plugin"]
githubUrl: "https://github.com/yeachan-heo/oh-my-claudecode"
websiteUrl: "https://oh-my-claudecode.dev"
githubStars: 35412
author: "Yeachan-Heo"
installCommand: "npm i -g oh-my-claude-sisyphus@latest"
compatibleAgents: ["Claude Code", "Codex", "Gemini"]
featured: false
icon: "Users"
---

# oh-my-claudecode

oh-my-claudecode(OMC)는 Claude Code를 위한 **팀 중심 멀티 에이전트 오케스트레이션** 도구입니다. "Claude Code를 배우지 말고 그냥 OMC를 쓰라"는 컨셉으로, 스킬·에이전트가 자동으로 동작해 별도 학습 없이 멀티 에이전트 작업을 굴릴 수 있습니다. `/autopilot`에 목표를 주면 팀 모드로 작업을 분담·실행하고, 설계 검토나 코드 교차 검증에는 Gemini CLI·Codex CLI를 함께 활용합니다.

## 언제 쓰나

- Claude Code를 깊이 익히지 않고도 멀티 에이전트 워크플로를 바로 쓰고 싶을 때
- 하나의 목표를 여러 에이전트가 팀으로 나눠 자동으로 처리하게 하고 싶을 때
- autopilot으로 계획-실행을 자율적으로 길게 돌리고 싶을 때
- Claude Code를 중심으로 Gemini·Codex를 교차 검증에 끌어와 품질을 높이고 싶을 때

## 주요 기능

- 팀 모드(Team Mode) 기반 멀티 에이전트 오케스트레이션
- `/autopilot` 자연어 목표 → 자동 계획·분담·실행
- Claude Code 플러그인 마켓플레이스 또는 npm CLI(`oh-my-claude-sisyphus`)로 설치
- 세션 내 슬래시 커맨드와 터미널 CLI(`omc`) 두 가지 사용 표면 제공
- Gemini CLI·Codex CLI 연동으로 설계 검토·코드 교차 검증

## 참고

- 이 저장소는 단일 스킬이 아니라 **Claude Code를 감싸 작업을 분담·병렬화·구동하는 멀티 에이전트 오케스트레이터**입니다.
- 그래서 이 레지스트리에서는 `agent-harness`로 분류하는 편이 자연스럽습니다.
