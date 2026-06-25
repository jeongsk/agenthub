---
title: "Daily Stock Analysis"
description: "LLM으로 A주·홍콩주·미국주·일본주·한국주 관심 종목을 매일 분석하고, 의사결정 대시보드와 알림을 자동 생성하는 멀티마켓 주식 분석 시스템입니다."
category: "agent-framework"
tags: ["stock-market", "finance", "quantitative-finance", "ai-agent", "llm", "market-data", "automation", "dashboard", "notifications", "python"]
githubUrl: "https://github.com/ZhuLinsen/daily_stock_analysis"
websiteUrl: "https://dsa.zhulinsen.tech"
githubStars: 48408
author: "ZhuLinsen"
installCommand: "git clone https://github.com/ZhuLinsen/daily_stock_analysis.git && cd daily_stock_analysis && pip install -r requirements.txt"
compatibleAgents: ["OpenAI", "Claude", "Gemini", "DeepSeek", "Ollama"]
featured: false
icon: "TrendingUp"
---

# Daily Stock Analysis

Daily Stock Analysis는 LLM 기반 멀티마켓 주식 분석 시스템입니다. A주, 홍콩주, 미국주, ETF, 일부 일본·한국 주식 관심 종목을 대상으로 시장 데이터, 뉴스, 기술 지표, 기본 정보, 자금 흐름 등을 모아 AI 의사결정 보고서와 대시보드를 만들고, 기업위챗·Feishu·Telegram·Discord·Slack·이메일로 자동 전송할 수 있습니다.

## 언제 쓰나

- 관심 종목을 매일 자동 분석하고 요약된 의사결정 대시보드를 받고 싶을 때
- GitHub Actions로 서버 없이 정기 주식 분석 리포트를 실행하고 싶을 때
- A주/홍콩주/미국주 중심의 가격, K선, 기술 지표, 뉴스, 공시, 기본면 데이터를 한 흐름으로 합치고 싶을 때
- Web UI에서 수동 분석, 작업 진행률, 과거 보고서, 백테스트, 포지션, 설정을 관리하고 싶을 때
- AI 전략 문답으로 균선, 추세, 이벤트, 성장성, 기대 재평가 등 다양한 관점의 종목 질문을 이어가고 싶을 때

## 핵심 특징

- **AI 의사결정 보고서**: 핵심 결론, 점수, 추세, 매수·매도 포인트, 리스크 경고, 촉매 요인, 실행 체크리스트를 생성합니다.
- **멀티마켓 데이터 집계**: AkShare, Tushare, Pytdx, Baostock, YFinance, Longbridge, TickFlow 등 여러 데이터 소스를 fallback 우선순위로 사용합니다.
- **뉴스·검색 통합**: Anspire, SerpAPI, Tavily, Bocha, Brave, MiniMax, SearXNG 등을 통해 종목 뉴스와 이벤트를 보강합니다.
- **자동화와 알림**: GitHub Actions, Docker, 로컬 스케줄러, FastAPI 서비스, 여러 메신저/메일 알림 채널을 지원합니다.
- **Web/데스크톱 워크벤치**: 수동 분석, 히스토리, Markdown 보고서, 설정 관리, 가져오기, 종목 자동완성, 라이트/다크 테마를 제공합니다.
- **Agent 전략 문답**: Web/Bot/API에서 다중 턴 질문, 내장 전략, 커스텀 전략 파일, 실험적 multi-agent orchestration을 사용할 수 있습니다.

## 빠른 시작

GitHub Actions 경로는 저장소를 fork한 뒤 Actions secrets에 최소 하나의 LLM API 키, 알림 채널, `STOCK_LIST`를 설정하는 방식입니다. 로컬 실행은 다음처럼 시작합니다.

```bash
git clone https://github.com/ZhuLinsen/daily_stock_analysis.git
cd daily_stock_analysis
pip install -r requirements.txt
cp .env.example .env
python main.py
```

자주 쓰는 실행 옵션:

```bash
python main.py --debug
python main.py --dry-run
python main.py --stocks 600519,hk00700,AAPL
python main.py --market-review
python main.py --schedule
python main.py --webui
```

Web UI는 다음 명령으로 실행한 뒤 `http://127.0.0.1:8000`에서 사용할 수 있습니다.

```bash
python main.py --webui-only
```

## 참고

- Python 3.10+가 필요하며, Docker와 GitHub Actions 배포도 지원합니다.
- LLM provider는 Anspire, AIHubMix, Gemini, OpenAI 호환, DeepSeek, Qwen, Claude, Ollama 등을 사용할 수 있습니다.
- 알림 채널은 기업위챗, Feishu, Telegram, Discord, Slack, 이메일 등을 지원합니다.
- 프로젝트 README의 면책 조항처럼 이 도구는 학습·연구용이며 투자 조언이 아닙니다. 주식 투자는 손실 위험이 있습니다.
- 라이선스는 MIT입니다.
