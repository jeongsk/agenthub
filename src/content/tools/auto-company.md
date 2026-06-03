---
title: "Auto Company"
description: "macOS, Windows, WSL에서 24/7로 돌아가는 자율 AI 회사 오케스트레이션 스택입니다. 여러 에이전트가 번갈아 조사·개발·배포·마케팅을 수행하는 상시 운영 실험을 보고 싶을 때 유용합니다."
category: "agent-harness"
tags: ["autonomous-agent", "multi-agent", "orchestration", "daemon", "dashboard", "claude-code", "codex-cli", "automation", "windows", "macos", "wsl"]
githubUrl: "https://github.com/MaxMiksa/Auto-Company"
githubStars: 848
author: "MaxMiksa"
compatibleAgents: ["Claude Code", "Codex CLI"]
featured: false
icon: "Rocket"
---

# Auto Company

Auto Company는 여러 AI 에이전트를 묶어 24/7로 실행하는 자율 운영 스택입니다. 공유 consensus 메모리와 대시보드를 중심으로, 각 사이클마다 에이전트 팀이 조사·의사결정·코딩·배포·마케팅을 이어서 수행합니다. 혼자 돌리는 에이전트 데모가 아니라, 계속 순환하는 팀형 오케스트레이션을 만들고 싶을 때 참고하기 좋습니다.

## 언제 쓰나

- 24/7로 돌아가는 자율 에이전트 시스템을 실험하고 싶을 때
- 여러 에이전트를 역할별로 나눠 운영하는 팀 오케스트레이션 패턴을 보고 싶을 때
- Claude Code나 Codex CLI를 백엔드 실행 엔진으로 묶어 쓰고 싶을 때
- 대시보드, 로그, consensus 메모리처럼 운영용 상태 관리 패턴이 필요할 때
- macOS, Windows, WSL에서 동일한 자동화 루프를 돌리고 싶을 때

## 핵심 특징

- **지속 루프 실행**: daemon/launchd/systemd 기반으로 반복 작업을 계속 돌립니다.
- **다중 에이전트 팀**: 역할별 에이전트를 묶어 조사, 개발, 배포, 마케팅을 나눠 처리합니다.
- **공유 consensus 메모리**: 다음 행동을 Markdown 상태 파일로 조율합니다.
- **대시보드와 로그**: 로컬 대시보드와 실행 로그로 사이클 상태를 확인합니다.
- **크로스 플랫폼**: macOS, Windows, WSL을 함께 지원합니다.
