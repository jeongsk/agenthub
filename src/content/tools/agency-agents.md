---
title: "agency-agents"
description: "AI 에이전트 특화 페르소나 컬렉션. 엔지니어링·마케팅·세일즈·디자인·보안 등 100개 이상의 전문 에이전트를 Claude Code, Cursor, Codex, Gemini CLI, OpenCode 등에 설치해 바로 활용한다."
category: "agent-skill"
tags: ["agent-personas", "claude-code", "cursor", "codex", "opencode", "gemini-cli", "multi-agent", "prompts", "productivity", "engineering", "marketing", "sales", "security", "shell"]
githubUrl: "https://github.com/msitarzewski/agency-agents"
websiteUrl: "https://agencyagents.app"
githubStars: 127855
author: "msitarzewski"
installCommand: "brew install --cask msitarzewski/agency-agents/agency-agents"
compatibleAgents: ["Claude Code", "Cursor", "Codex", "OpenCode", "Gemini CLI", "Hermes Agent"]
featured: false
icon: "Users"
---

AI 에이전트 특화 페르소나 컬렉션. Reddit 스레드에서 시작해 수개월간 발전한 **The Agency**는 100개 이상의 전문 AI 에이전트를 모은 대규모 컬렉션이다.

## 주요 특징

- **특화 페르소나**: 범용 프롬프트 템플릿이 아닌 각 도메인에 맞춘 심층 전문성
- **고유한 보이스·스타일**: 에이전트마다 고유한 커뮤니케이션 방식과 접근법
- **검증된 결과물**: 실제 코드, 프로세스, 측정 가능한 산출물 제공
- **전투 검증 워크플로우**: Production-ready한 워크플로우와 성공 지표 내장

## 지원하는 도구

Claude Code, Cursor, Codex, Gemini CLI, OpenCode, OpenClaw, Aider, Windsurf, Kimi Code, Osaurus, Hermes, GitHub Copilot, Antigravity, Mistral Vibe 등.

## 설치 방법

### 데스크톱 앱 (가장 빠름)
[Agency Agents](https://agencyagents.app) 데스크톱 앱(macOS/Linux/Windows)을 내려받아 클릭만으로 에이전트를 설치하고 자동 업데이트.

```bash
brew install --cask msitarzewski/agency-agents/agency-agents
```

### Claude Code용 설치
```bash
./scripts/install.sh --tool claude-code
```

### 다른 도구에 설치
```bash
# 통합 파일 생성
./scripts/convert.sh
# 대화형 설치
./scripts/install.sh
# 특정 도구만
./scripts/install.sh --tool opencode
./scripts/install.sh --tool gemini-cli
```

## 에이전트 분야

| 분야 | 에이전트 수 | 대표 역할 |
|------|-----------|---------|
| 💻 엔지니어링 | 30+ | 프론트엔드, 백엔드, DevOps, AI 엔지니어링, 네트워크 |
| 🎨 디자인 | 9 | UI/UX, 브랜드, 이미지 프롬프트 |
| 💰 유료 미디어 | 7 | PPC, SEO, 애널리틱스 |
| 💼 세일즈 | 11 | 아웃바운드, 디스커버리, 딜 전략 |
| 📢 마케팅 | 40+ | SNS, 콘텐츠, 중국 플랫폼 |
| 🔒 보안 | 12 | 펜테스트, 시큐어 코딩, 컴플라이언스 |
| 🛟 지원 | 7+ | 커머스, 애널리틱스, 인프라 |

## 참고 사항

- MIT 라이선스
- `main` 브랜치 기준, 지속적으로 업데이트됨
- OpenCode의 경우 등록 가능 에이전트 수 제한(~119)이 있어 `--division` 옵션으로 하위 집합 설치 권장