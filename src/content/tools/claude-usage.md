---
title: "Claude Usage"
description: "Claude Code의 로컬 JSONL 로그를 읽어 토큰, 비용 추정치, 세션 기록을 시각화하는 대시보드입니다. Pro·Max 구독자의 사용 한도 진행 바와 VS Code 사이드바도 제공합니다."
category: "desktop-utility"
tags: ["claude-code", "token-usage", "cost-tracking", "usage-dashboard", "session-history", "sqlite", "python", "vscode-extension", "local-first"]
githubUrl: "https://github.com/phuryn/claude-usage"
websiteUrl: "https://www.productcompass.pm/"
githubStars: 1993
author: "phuryn"
installCommand: "brew tap phuryn/claude-usage https://github.com/phuryn/claude-usage && brew install phuryn/claude-usage/claude-usage"
compatibleAgents: ["Claude Code", "VS Code"]
icon: "BarChart3"
---

Claude Usage는 Claude Code가 로컬에 남기는 JSONL 사용 로그를 읽어 토큰, 비용 추정치, 세션, 프로젝트 정보를 한눈에 보여 주는 대시보드입니다. Claude Code를 자주 쓰면서 사용량과 비용 흐름을 별도로 확인하고 싶을 때 유용합니다. Python 표준 라이브러리와 SQLite만 사용하며, 로그와 처리가 로컬에서 끝납니다.

![Claude Usage dashboard](/tool-screenshots/claude-usage-dashboard.webp)

## 언제 쓰나

- Claude Code의 토큰 사용량과 비용 추정치를 로컬에서 추적하고 싶을 때
- Pro·Max 구독자의 사용 한도 대비 소진율과 세션 히스토리를 확인하고 싶을 때
- 터미널 대시보드뿐 아니라 VS Code 사이드바에서도 같은 데이터를 보고 싶을 때

## 특징

- `~/.claude/projects/`의 JSONL 로그를 스캔해 `~/.claude/usage.db` SQLite DB에 증분 저장합니다.
- 오늘/주간/전체 통계를 터미널과 웹 대시보드로 보여 줍니다.
- 모델별 비용 추정, 날짜 범위 필터, 자동 새로고침을 지원합니다.
- macOS·Linux·Windows에서 Python 3.8+만으로 실행할 수 있으며, Homebrew·uv·pipx·Docker 설치 방식을 제공합니다.
- VS Code 확장과 Open VSX 배포판으로도 동일한 대시보드를 볼 수 있습니다.

## 빠른 시작

```bash
brew tap phuryn/claude-usage https://github.com/phuryn/claude-usage
brew install phuryn/claude-usage/claude-usage
claude-usage dashboard
```

또는 `uv tool install git+https://github.com/phuryn/claude-usage`로 설치할 수 있습니다. 대시보드는 기본적으로 `http://localhost:8080`에서 열립니다.

## 참고할 점

- Claude Code CLI, VS Code의 Claude Code 사이드바, Dispatched Code 세션을 추적하지만 서버 측에서 실행되는 Cowork 세션은 로컬 JSONL이 없어 집계하지 않습니다.
- 표시되는 비용은 Anthropic API 가격을 기준으로 한 추정치입니다. Pro·Max 구독의 실제 과금은 토큰당 과금이 아니므로 참고값으로 봐야 합니다.
- 비용 계산은 알려진 Claude 모델명만 대상으로 하며, 알 수 없는 모델이나 로컬 모델은 `n/a`로 표시됩니다.
- MIT 라이선스로 배포됩니다.
