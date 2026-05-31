---
title: "Claude Usage"
description: "Claude Code의 로컬 사용량 로그를 읽어 토큰, 비용, 세션 히스토리를 시각화하는 대시보드입니다. Pro·Max 구독자의 진행 바 확인이나 VS Code 확장으로 같은 화면을 보고 싶을 때 유용합니다."
category: "desktop-utility"
tags: ["claude-code", "token-usage", "cost-tracking", "usage-dashboard", "session-history", "sqlite", "python", "vscode-extension"]
githubUrl: "https://github.com/phuryn/claude-usage"
githubStars: 1673
author: "phuryn"
installCommand: "brew install --formula https://raw.githubusercontent.com/phuryn/claude-usage/main/Formula/claude-usage.rb"
compatibleAgents: ["Claude Code"]
icon: "BarChart3"
---

# Claude Usage

Claude Usage는 Claude Code가 로컬에 남기는 사용량 로그를 읽어 토큰, 비용, 세션, 프로젝트 정보를 한눈에 보여 주는 대시보드입니다. Claude Code를 자주 쓰는데 사용량과 비용 흐름을 따로 확인하고 싶을 때 유용합니다.

![Claude Usage dashboard](/tool-screenshots/claude-usage-dashboard.png)

## 언제 쓰나

- Claude Code의 토큰 사용량과 비용을 로컬에서 추적하고 싶을 때
- Pro·Max 구독자용 진행 바와 세션 히스토리를 확인하고 싶을 때
- API, Pro, Max 계획을 한 화면에서 비교하고 싶을 때
- 터미널뿐 아니라 VS Code 확장 형태로도 같은 데이터를 보고 싶을 때

## 특징

- Claude Code JSONL 로그를 스캔해 SQLite DB에 저장합니다.
- 오늘/주간/전체 통계를 터미널과 웹 대시보드로 보여 줍니다.
- 모델별 비용 추정치를 함께 표시합니다.
- macOS, Linux, Windows에서 클론 실행 또는 Homebrew 설치로 쓸 수 있습니다.
- VS Code 확장으로도 동일한 대시보드를 볼 수 있습니다.
