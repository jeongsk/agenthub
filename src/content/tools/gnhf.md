---
title: "gnhf"
description: "에이전트를 장시간 자율 실행시키는 오케스트레이터입니다. 반복 실행, 커밋, 롤백을 묶어 밤새 작업을 맡길 때 유용합니다."
category: "agent-harness"
tags: ["orchestration", "autonomous", "git", "worktree", "automation"]
githubUrl: "https://github.com/kunchenguid/gnhf"
githubStars: 1853
author: "kunchenguid"
installCommand: "npm install -g gnhf"
compatibleAgents: ["Claude Code", "Codex", "OpenCode", "GitHub Copilot"]
featured: true
icon: "MoonStar"
---

# gnhf

gnhf는 에이전트를 장시간 자율 실행시키는 오케스트레이터입니다. 반복 실행마다 작은 변경을 만들고, 성공하면 커밋하며, 실패하면 안전하게 롤백합니다.

## 언제 쓰나

- 밤새 맡겨둘 장시간 작업이 필요할 때
- 여러 워크트리로 병렬 실험을 돌리고 싶을 때
- 에이전트가 만든 변경을 반복적으로 커밋·검토하면서 전진시키고 싶을 때
- 자율 실행이 끝난 뒤, 무엇이 일어났는지 로그와 요약으로 확인하고 싶을 때

## 특징

- `hands-off` 형태의 자율 루프를 지원합니다.
- 각 반복마다 한 번씩만 작고 명확한 변경을 만듭니다.
- 성공한 반복은 커밋하고, 실패는 안전하게 처리합니다.
- Claude Code, Codex, OpenCode, GitHub Copilot CLI 같은 여러 에이전트와 함께 쓸 수 있습니다.

## 참고

- 이 저장소는 단일 기능 스킬보다 **에이전트 운영 흐름 전체를 관리하는 하네스**에 가깝습니다.
- 그래서 이 레지스트리에서는 `agent-harness`로 분류하는 편이 가장 자연스럽습니다.
