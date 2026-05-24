---
title: "Codebuff"
description: "터미널에서 자연어로 코드베이스를 수정하게 해 주는 멀티 에이전트 코딩 어시스턴트입니다. 계획, 편집, 검토를 나눠 더 정교한 변경이 필요할 때 유용합니다."
category: "agent-framework"
tags: ["cli", "coding-assistant", "multi-agent", "typescript", "openrouter", "workflow"]
githubUrl: "https://github.com/CodebuffAI/codebuff"
githubStars: 5783
author: "CodebuffAI"
installCommand: "npm install -g codebuff"
compatibleAgents: ["Claude Code", "Cursor", "Codex", "OpenCode"]
featured: true
icon: "TerminalSquare"
---

# Codebuff

Codebuff는 터미널에서 자연어 지시로 코드베이스를 수정하는 멀티 에이전트 코딩 어시스턴트입니다. 파일 탐색, 계획, 편집, 검토를 나눠 처리해 더 정확한 변경을 목표로 합니다.

## 언제 쓰나

- 터미널에서 바로 코드 변경 작업을 맡기고 싶을 때
- 하나의 모델보다 역할 분담된 에이전트 흐름이 더 잘 맞을 때
- 파일 찾기, 계획, 편집, 리뷰를 한 흐름으로 묶고 싶을 때
- OpenRouter 기반으로 다양한 모델을 바꿔 쓰고 싶을 때

## 특징

- 멀티 에이전트 구조로 작업 단계를 나눕니다.
- `npm install -g codebuff` 로 설치할 수 있습니다.
- CLI뿐 아니라 SDK도 제공해 프로덕션 워크플로에 붙이기 쉽습니다.
- 커스텀 에이전트와 커스텀 워크플로 구성이 가능합니다.

## 참고

- 이 저장소는 단일 기능 도구보다 **에이전트 오케스트레이션과 코드 편집 흐름**에 가깝습니다.
- 그래서 이 레지스트리에서는 `agent-harness`로 분류하는 편이 자연스럽습니다.
