---
title: "oh-my-pi"
description: "터미널에서 쓰는 에이전트 하네스로, IDE·LSP·브라우저·서브에이전트를 한데 묶어 코드 편집과 실행 흐름을 더 강하게 지원합니다."
category: "agent-harness"
tags: ["agent-harness", "terminal", "lsp", "browser", "subagents"]
githubUrl: "https://github.com/can1357/oh-my-pi"
githubStars: 8951
author: "can1357"
installCommand: "curl -fsSL https://omp.sh/install | sh"
compatibleAgents: ["Claude Code", "Cursor", "Codex", "OpenCode", "Hermes Agent"]
featured: true
icon: "Terminal"
---

# oh-my-pi

oh-my-pi는 터미널 기반 코드 에이전트 하네스입니다. 단순한 프롬프트 모음이 아니라, 편집·검색·LSP·브라우저·서브에이전트 같은 작업 도구를 묶어서 에이전트가 실제 개발 흐름에 더 가깝게 움직이도록 설계되어 있습니다.

## 핵심 포인트

- **IDE 결합형**: LSP와 편집 흐름을 에이전트 작업에 직접 연결합니다.
- **도구가 풍부함**: 검색, 읽기, 실행, 브라우저, 서브에이전트까지 폭넓게 다룹니다.
- **터미널 우선**: 로컬 개발 환경 안에서 자연스럽게 붙여 쓰기 좋습니다.
- **하네스 성격이 강함**: 단일 기능보다 에이전트 운영 방식 전체를 잡아 줍니다.

## 이런 경우에 유용합니다

- 터미널에서 작업하는 에이전트의 기능을 확장하고 싶을 때
- LSP나 IDE 맥락을 에이전트에 더 잘 반영하고 싶을 때
- 브라우저, 검색, 코드 편집, 서브에이전트를 한 흐름으로 묶고 싶을 때
- 범용 에이전트 런타임에 개발자용 도구층을 올리고 싶을 때

## 참고

- 이 저장소는 개별 에이전트 스킬이라기보다 *에이전트 실행 하네스*에 가깝습니다.
- 그래서 이 레지스트리에서는 `agent-harness`로 분류하는 편이 자연스럽습니다.
