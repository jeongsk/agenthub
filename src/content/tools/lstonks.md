---
title: "lstonks"
description: "직장인 개발자를 위한 터미널 관심종목 뷰어. KOSPI/KOSDAQ 시세를 TUI·JSON CLI로 확인하고, htop/vim 위장 테마로 화면을 숨길 수 있습니다."
category: "cli-utility"
tags: ["stocks", "kospi", "kosdaq", "terminal", "tui", "json", "go", "naver-finance"]
githubUrl: "https://github.com/SuhJae/lstonks"
websiteUrl: "https://github.com/SuhJae/lstonks"
githubStars: 3
author: "SuhJae"
installCommand: "go build -o ~/.local/bin/lstonks ./cmd/lstonks"
compatibleAgents: ["Claude Code", "Codex", "Gemini", "Hermes Agent", "OpenCode"]
featured: false
icon: "Terminal"
---

## lstonks란?

**lstonks**는 `ls`처럼 터미널에서 실행하는 한국 주식 관심종목/포트폴리오 뷰어입니다. KOSPI/KOSDAQ 종목의 현재가, 등락률, 평가손익을 한 번 출력하거나 `watch` 모드의 전체화면 TUI로 실시간에 가깝게 확인할 수 있습니다.

직장 환경을 의식한 기능도 포함되어 있어, 화면을 `vim` 또는 `htop`처럼 보이게 하는 위장 테마를 제공하는 점이 특징입니다.

## 주요 기능

- **터미널 관심종목 뷰어** — `lstonks`는 현재 관심종목을 표 형태로 한 번 출력하고 종료합니다.
- **실시간 TUI** — `lstonks watch`로 전체화면 인터페이스를 띄워 자동 갱신, 종목 추가/삭제/편집, 폴더 정리, 차트 확인을 수행합니다.
- **한국 시장 지원** — 네이버 금융 폴링 엔드포인트를 사용해 KOSPI/KOSDAQ 시세를 가져오며, NXT 시간외 단일가와 장 구분 로직을 포함합니다.
- **포트폴리오 관리** — 보유 수량과 평균단가를 기록해 평가액, 손익, 수익률을 계산합니다. 데이터는 `~/.config/lstonks/portfolio.json`에 저장됩니다.
- **JSON 출력** — `list`, `search`, `quote`, `value` 등 데이터 명령에서 `--json`을 지원해 에이전트나 스크립트가 읽기 쉽습니다.
- **위장 테마** — `lstonks config theme vim` 또는 `lstonks config theme htop`으로 watch 화면을 다른 터미널 프로그램처럼 보이게 할 수 있습니다.
- **다국어/색상 설정** — 한국어/영어 표시와 한국식(상승 빨강·하락 파랑), 서양식, 단색 컬러 모드를 지원합니다.

## 설치 및 실행

Go 기반 프로젝트입니다. 저장소를 클론한 뒤 빌드합니다.

```bash
git clone https://github.com/SuhJae/lstonks.git
cd lstonks
go build -o ~/.local/bin/lstonks ./cmd/lstonks
```

기본 사용 예시는 다음과 같습니다.

```bash
lstonks                                 # 관심종목 출력
lstonks watch                           # 실시간 TUI
lstonks search 삼성 --json               # 종목 검색
lstonks add 005930 --qty 5 --avg 70000  # 보유 수량/평단과 함께 추가
lstonks quote 005930 000660 --json      # 현재가 조회
lstonks config theme htop               # htop 위장 테마
```

## 에이전트 활용 포인트

`--json` 옵션이 있는 CLI 표면이 있어 AI 에이전트가 사용자의 로컬 관심종목 파일을 읽거나, 특정 종목의 시세를 조회해 요약하는 자동화에 붙이기 좋습니다. 별도 API 키 없이 동작하지만, 시세 데이터는 공식 증권 API가 아니라 네이버 금융의 비공식 폴링 엔드포인트에 의존합니다.

## 주의사항

- README에는 Go 1.24+가 필요하다고 설명되어 있으나, 현재 `go.mod`는 `go 1.26.4`로 선언되어 있습니다. 실제 빌드 환경에서는 저장소의 `go.mod` 요구 버전을 확인해야 합니다.
- 한국 주식 시세는 네이버 금융 비공식 엔드포인트에 의존하므로 서비스 변경이나 rate limit에 영향을 받을 수 있습니다.
- 영어 종목명은 야후 파이낸스 비공식 검색 엔드포인트를 사용하며, 조회 결과는 로컬 포트폴리오 파일에 캐시됩니다.
- 보유 종목과 설정은 기본적으로 `~/.config/lstonks/` 아래 JSON 파일에 저장됩니다. `LSTONKS_CONFIG_DIR`로 위치를 바꿀 수 있습니다.
