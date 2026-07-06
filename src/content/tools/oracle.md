---
title: "Oracle"
description: "프롬프트와 관련 파일을 묶어 외부 AI에 컨텍스트 기반 답변을 요청하는 CLI 하네스입니다. API 키가 없으면 브라우저 자동화로 ChatGPT/Gemini 세션을 실행할 수도 있습니다."
category: "agent-harness"
tags: ["cli", "openai", "gpt-5-pro", "gemini", "anthropic", "browser-automation", "multi-model", "mcp", "agent-orchestration"]
githubUrl: "https://github.com/steipete/oracle"
websiteUrl: "https://askoracle.sh"
githubStars: 3199
author: "steipete"
installCommand: "npm install -g @steipete/oracle"
compatibleAgents: ["Claude Code", "Codex", "Gemini", "Hermes Agent", "OpenCode", "Cursor"]
featured: false
icon: "Bot"
---

# Oracle

Oracle은 프롬프트와 관련 파일을 번들로 묶어 OpenAI 또는 Gemini 계열 모델에 컨텍스트 기반 답변을 요청하는 CLI 도구입니다. 기본 엔진은 OpenAI Responses API이며, API 키가 없을 때는 브라우저 자동화로 ChatGPT나 Gemini 웹 세션을 직접 조종하는 경로도 제공합니다.

## 언제 쓰나

- 코딩하다 막혔을 때 파일 컨텍스트를 포함한 AI 두 번째 의견이 필요할 때
- 여러 모델(gpt-5.x, gemini-3.x, claude-4.x)에 동시에 같은 질문을 보내 비교하고 싶을 때
- ChatGPT 브라우저 세션을 자동화해 API 키 없이도 Pro 모델 응답을 받고 싶을 때
- 기존 OpenAI/Azure 응답 세션을 이어서 후속 질문을 하고 싶을 때
- Project Sources 탭을 코드 리뷰/문서 번들과 같이 공유하고 싶을 때
- Claude Code, Codex, Cursor 등에서 MCP 서버로 연동하고 싶을 때

## 핵심 특징

- **번들 + 컨텍스트 전달**: 프롬프트와 파일/glob 패키지를 묶어 모델에 전달합니다.
- **다중 모델 패널**: `--models`로 여러 프로바이더/모델을 한 번에 호출하고, `--allow-partial`로 부분 성공을 허용할 수 있습니다.
- **브라우저 자동화 경로**: macOS/Linux/Windows에서 ChatGPT 또는 Gemini 브라우저 세션을 자동 조종하며, 수동 로그인 프로필을 재사용합니다.
- **세션 계보**: `oracle status`, `oracle session <id> --render`로 과거 세션을 재생하거나 `--followup`으로 이어갈 수 있습니다.
- **MCP 지원**: `oracle-mcp` stdio 서버를 통해 Claude Code, Cursor 등에서 직접 호출할 수 있습니다.
- **러스트/타입스크립트 기반 흐름**: README 상 Node 24+ 권장, 브라우저 모드는 macOS에서 가장 안정적이라고 명시되어 있습니다.

## 빠른 시작

```bash
# npm/qg Global
npm install -g @steipete/oracle

# 또는 npx로 직접 실행
npx -y @steipete/oracle -h
```

기본 API 실행 예시:
- `OPENAI_API_KEY`, `GEMINI_API_KEY`, `ANTHROPIC_API_KEY` 등의 환경 변수를 설정한 뒤 프롬프트와 파일을 전달합니다.
- 브라우저 모드는 첫 실행 시 수동 로그인 후, 자동 재균Attach로 반복 사용할 수 있습니다.

```bash
# API 키 기반 minimal run
npx -y @steipete/oracle -p "Write a concise architecture note" --file docs/architecture.md

# browser mode
npx -y @steipete/oracle --engine browser -p "Walk through the UI smoke test" --file "src/**/*.ts"
```

## 참고

- 브라우저 자동화는 실험 기능으로 분류되어 있습니다.
- README에는 브라우저 모드의 macOS 안정성, Linux/Windows에서의 추가 플래그 필요 여부가 명시되어 있습니다.
- 저장된 세션은 기본적으로 `~/.oracle/sessions` 아래에 기록됩니다.
- 커뮤니티/상용 제한, 보안 이슈 대응, 기업 배포 가이드는 별도 문서나 README를 확인하는 것이 좋습니다.
