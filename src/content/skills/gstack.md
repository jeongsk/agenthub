---
title: "gstack"
description: "Claude Code에 역할별 작업 흐름과 브라우징·리뷰·배포 습관을 얹어, 한 사람이 여러 역할의 팀처럼 일하도록 돕는 에이전트 하네스입니다."
category: "agent-harness"
tags: ["claude-code", "agent-harness", "orchestration", "workflow", "productivity"]
githubUrl: "https://github.com/garrytan/gstack"
githubStars: 101272
author: "garrytan"
installCommand: "git clone --single-branch --depth 1 https://github.com/garrytan/gstack.git ~/.claude/skills/gstack && cd ~/.claude/skills/gstack && ./setup"
compatibleAgents: ["Claude Code"]
featured: true
icon: "Workflow"
---

# gstack

gstack은 Claude Code를 팀처럼 쓰기 위한 실전형 하네스입니다. 단순한 프롬프트 모음이 아니라, CEO·디자이너·엔지니어·QA 같은 역할을 나눠서 생각하게 만들고, 웹 탐색·기획·리뷰·검증·출시까지 하나의 작업 흐름으로 묶어 줍니다.

## 왜 유용한가

- **역할 분리**: 같은 에이전트라도 어떤 관점으로 답해야 하는지 기준을 줍니다.
- **반복 작업 표준화**: 리뷰, QA, 배포 전 점검처럼 자주 하는 일을 일정한 절차로 돌리게 해 줍니다.
- **실전형 운영 습관**: 빠르게 쓰고 끝내는 도구가 아니라, 실제 제품을 계속 밀어붙이는 방식에 맞춰져 있습니다.

## 이런 경우에 맞습니다

- Claude Code를 더 구조적으로 쓰고 싶을 때
- 혼자서도 팀처럼 분업된 판단을 받고 싶을 때
- 웹 탐색, 기획 검토, 코드 리뷰, QA 흐름을 묶어 운영하고 싶을 때

## 참고

- 이 항목은 일반적인 “에이전트 스킬”이라기보다 **에이전트 하네스**에 가깝습니다.
- 즉, 특정 한 가지 행동만 수행하는 도구가 아니라, 에이전트가 일하는 방식 전체를 정리하는 상위 레이어입니다.
