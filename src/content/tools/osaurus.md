---
title: "Osaurus"
description: "Apple Silicon Mac에서 에이전트, 메모리, 도구, 모델 라우팅을 로컬 우선으로 실행하는 네이티브 Swift AI harness입니다. 로컬·클라우드 모델, MCP, 샌드박스 실행, 암호화된 에이전트 연결을 지원합니다."
category: "agent-harness"
tags: ["agent-harness", "macos", "swift", "local-first", "mcp", "mlx", "apple-silicon", "memory", "sandbox", "openai-compatible", "anthropic-compatible"]
githubUrl: "https://github.com/osaurus-ai/osaurus"
websiteUrl: "https://osaurus.ai"
githubStars: 6170
author: "osaurus-ai"
installCommand: "brew install --cask osaurus"
compatibleAgents: ["Claude Code", "Cursor", "Windsurf", "OpenCode", "Codex", "Gemini CLI", "Hermes Agent", "MCP Clients"]
featured: false
icon: "Bot"
---

# Osaurus

Osaurus는 macOS용 네이티브 AI agent harness입니다. 모델 자체보다 그 주변의 컨텍스트, 메모리, 도구, 에이전트 실행 계층을 사용자의 Mac에 두는 것을 목표로 하며, Swift로 작성되어 Apple Silicon 환경에서 로컬 우선으로 동작합니다. 로컬 MLX 모델부터 OpenAI, Anthropic, Gemini, xAI/Grok, OpenRouter, Ollama, LM Studio 같은 원격 provider까지 같은 harness 안에서 연결할 수 있습니다.

## 언제 쓰나

- 에이전트의 메모리, 도구, 실행 기록을 클라우드 서비스가 아니라 로컬 Mac에 보관하고 싶을 때
- Apple Silicon에서 MLX 기반 로컬 모델과 클라우드 모델을 필요에 따라 바꿔 쓰고 싶을 때
- macOS 네이티브 앱에서 채팅 UI, agent loop, 자동화, 음성 입력, Shortcuts/App Intents를 함께 쓰고 싶을 때
- Claude Code, Cursor, Codex, Gemini CLI 등 MCP 클라이언트에 로컬 Osaurus 도구를 노출하고 싶을 때
- OpenAI/Anthropic/Ollama 호환 API 엔드포인트 뒤에 로컬 agent harness를 붙이고 싶을 때

## 핵심 특징

- **네이티브 macOS harness**: Electron이 아닌 Swift 기반 앱과 CLI로 동작하며 Apple Silicon을 대상으로 합니다.
- **Agent loop와 로컬 메모리**: 에이전트별 prompt, memory, visual theme, private local database, self-scheduling을 제공합니다.
- **격리 실행 샌드박스**: macOS 26+에서는 Apple Containerization 기반 Linux VM에서 shell, Python, Node.js, git 작업을 실행할 수 있습니다.
- **모델 선택 자유도**: 로컬 MLX 모델, Apple Foundation Models, OpenAI/Anthropic/Gemini/xAI/OpenRouter/Ollama/LM Studio 등 다양한 provider를 연결합니다.
- **MCP 서버·클라이언트**: `osaurus mcp`로 MCP stdio 서버를 열고, 원격 HTTP/SSE MCP provider도 Osaurus 안에서 집계할 수 있습니다.
- **호환 API**: `http://127.0.0.1:1337`에서 OpenAI, Anthropic, Ollama 호환 엔드포인트를 제공합니다.
- **로컬 플러그인**: Mail, Calendar, Vision, macOS Use, XLSX, PPTX, Browser, Music, Git, Filesystem, Search, Fetch 등 20개 이상의 native plugin을 제공합니다.
- **보안과 프라이버시**: 로컬 실행을 기본으로 하고, cloud model 전송 전 privacy filter, 에이전트 암호학적 identity, E2E secure channel, access key를 제공합니다.

## 빠른 시작

Homebrew cask로 설치할 수 있습니다.

```bash
brew install --cask osaurus
```

설치 후 Spotlight에서 앱을 열거나 CLI를 사용할 수 있습니다.

```bash
osaurus ui       # chat UI 열기
osaurus serve    # local server 시작
osaurus status   # 상태 확인
osaurus stop     # server 중지
```

MCP 클라이언트에는 다음처럼 등록할 수 있습니다.

```json
{
  "mcpServers": {
    "osaurus": {
      "command": "osaurus",
      "args": ["mcp"]
    }
  }
}
```

## 참고

- 기본 사용에는 macOS 15.5+와 Apple Silicon이 필요합니다.
- agent sandbox 기능은 macOS 26+가 필요합니다.
- cloud model을 사용할 때는 사용자가 선택한 provider로 데이터가 전송될 수 있으며, Osaurus는 전송 전 privacy filter와 review flow를 제공합니다.
- anonymous aggregate analytics와 crash reporting 설정이 있으며, source build에서는 key가 없으면 telemetry가 초기화되지 않습니다.
- 라이선스는 MIT입니다.
