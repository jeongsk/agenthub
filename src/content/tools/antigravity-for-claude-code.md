---
title: "Antigravity for Claude Code"
description: "Claude Code가 Antigravity CLI(agy·Gemini)를 협업 서브에이전트로 호출하도록 연결해, 비용을 고려한 모델 라우팅과 SDLC 작업 위임을 지원하는 오케스트레이션 하네스입니다."
category: "agent-harness"
tags: ["claude-code", "antigravity", "gemini", "multi-agent", "orchestration", "delegation", "model-routing", "sdlc"]
githubUrl: "https://github.com/yuting0624/antigravity-for-claude-code"
websiteUrl: "https://antigravity.google/docs/cli-using"
githubStars: 146
author: "linyuting"
installCommand: "/plugin marketplace add yuting0624/antigravity-for-claude-code && /plugin install antigravity@antigravity-for-claude-code && /antigravity:setup"
compatibleAgents: ["Claude Code"]
featured: false
icon: "Workflow"
---

# Antigravity for Claude Code

Antigravity for Claude Code는 Claude Code를 지휘자(conductor)로 두고 Antigravity CLI(`agy`)의 Gemini 모델을 협업 서브에이전트로 연결하는 Claude Code 플러그인입니다. Claude가 요구사항·아키텍처·검증·리뷰를 맡고, 반복적이거나 대량인 스캐폴딩·테스트 생성·마이그레이션·초기 리뷰·리서치 작업을 `agy`에 위임하는 하이브리드 개발 흐름을 제공합니다.

## 언제 쓰나

- Claude Code에서 Gemini 기반 실행 에이전트로 대량·반복 작업을 분리하고 싶을 때
- 구현 결과를 다른 모델의 관점으로 교차 검증하고 싶을 때
- 웹 검색, Vertex AI Search, Cloud Logging 등을 포함한 리서치·디버깅 작업을 위임하고 싶을 때
- 백그라운드 위임 작업을 시작한 뒤 상태·결과를 나중에 수집하고 싶을 때

## 주요 기능

- `/antigravity:delegate`, `/antigravity:review`, `/antigravity:research` 등 Claude Code 슬래시 커맨드 제공
- `flash`, `flash-lo`, `pro` 티어와 `agy models` 기반 모델 선택 지원
- `SessionStart` 및 `UserPromptSubmit` 훅으로 비용 기준 위임 정책을 주입하고 대량 작업을 안내
- `--digest`, 백그라운드 작업, 내부 서브에이전트 fan-out, `agy-trace` 기반 실행 경로 확인 지원
- `AGENTS.md`를 공유 기준으로 사용하며 Claude가 결과를 다시 검증하는 흐름을 강조

## 설치 및 요구사항

Claude Code에서 다음을 실행합니다.

```text
/plugin marketplace add yuting0624/antigravity-for-claude-code
/plugin install antigravity@antigravity-for-claude-code
/antigravity:setup
```

Antigravity CLI(`agy`)를 별도로 설치하고 인증해야 하며, `agy models`에서 사용할 모델이 표시되어야 합니다. headless 위임은 macOS·Linux·WSL을 지원하지만, 네이티브 Windows(Git Bash/MSYS)는 콘솔 문제로 권장되지 않습니다.

## 주의사항

- `agy`의 출력은 틀릴 수 있으므로 변경 사항과 테스트 게이트를 Claude 또는 사용자가 반드시 다시 검증해야 합니다.
- `--yolo`는 모든 도구 호출을 자동 승인하므로 샌드박스나 일회성 디렉터리에서 신중하게 사용해야 합니다.
- 파일 쓰기 작업은 전용 브랜치·워크트리에서 실행하고 실제 diff가 생성됐는지 확인하는 편이 안전합니다.
- 비용 수치는 추정치이며, 작은 일회성 작업은 위임보다 Claude에서 바로 처리하는 편이 저렴할 수 있습니다.
- Google·Anthropic과 제휴·공식 지원 관계가 없는 커뮤니티 프로젝트입니다.
