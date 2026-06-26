---
title: "FreeLLMAPI"
description: "16개 무료 LLM 제공자의 free tier와 커스텀 OpenAI 호환 엔드포인트를 하나의 /v1 프록시로 묶는 self-hosted 라우터입니다. OpenAI·Anthropic 호환 API, 자동 failover, 키 암호화, 사용량 추적을 지원합니다."
category: "agent-infrastructure"
tags: ["openai-compatible", "anthropic-compatible", "proxy", "model-routing", "failover", "llm", "free-tier", "self-hosted", "docker"]
githubUrl: "https://github.com/tashfeenahmed/freellmapi"
websiteUrl: "https://freellmapi.co"
githubStars: 12726
author: "tashfeenahmed"
installCommand: "curl -fsSL https://freellmapi.co/install.sh | bash"
compatibleAgents: ["Claude Code", "Codex", "OpenCode", "Cursor", "Hermes Agent", "Continue"]
featured: true
icon: "Shuffle"
---

# FreeLLMAPI

FreeLLMAPI는 여러 무료 LLM 제공자의 free tier와 커스텀 OpenAI 호환 엔드포인트를 하나의 self-hosted `/v1` 프록시로 묶는 모델 라우터입니다. OpenAI 호환 Chat/Responses API와 Anthropic Messages API를 제공하고, 자동 failover·사용량 추적·키 암호화로 여러 provider를 한 endpoint처럼 사용할 수 있게 해줍니다.

![FreeLLMAPI 플레이그라운드 화면](/tool-screenshots/freellmapi-playground.webp)

## 언제 쓰나

- 하나의 `base_url`로 여러 무료 모델 공급자와 로컬/커스텀 OpenAI 호환 endpoint를 묶고 싶을 때
- 특정 제공자의 rate limit에 자주 걸려서 자동 failover가 필요할 때
- Codex CLI의 Responses API나 Claude Code의 Anthropic Messages API를 self-hosted proxy 뒤에 붙이고 싶을 때
- 에이전트나 앱에서 공급자별 키를 직접 노출하지 않고 단일 proxy key만 쓰고 싶을 때
- 개인 실험용으로 저비용 LLM 라우팅 레이어가 필요할 때

## 특징

- OpenAI 호환 `/v1/chat/completions`, `/v1/responses`, `/v1/models`, embeddings, image generation, TTS endpoint를 제공합니다.
- Anthropic Messages API(`/v1/messages`)를 지원해 Claude Code와 Anthropic SDK도 같은 router 뒤에서 사용할 수 있습니다.
- 공급자별 rate limit을 추적하고, 429/5xx/timeout 발생 시 fallback chain의 다음 후보로 넘어갑니다.
- Provider key는 AES-256-GCM으로 암호화해 SQLite에 저장하고, 클라이언트에는 단일 `freellmapi-...` proxy key만 노출합니다.
- 대시보드, playground, analytics, health check, sticky session, Docker/desktop 앱을 제공합니다.

## 빠른 시작

Docker가 있다면 공식 설치 스크립트로 로컬 인스턴스를 만들 수 있습니다.

```bash
curl -fsSL https://freellmapi.co/install.sh | bash
```

또는 저장소를 clone해서 Docker Compose로 실행합니다.

```bash
git clone https://github.com/tashfeenahmed/freellmapi.git
cd freellmapi
ENCRYPTION_KEY="$(openssl rand -hex 32)"
printf "ENCRYPTION_KEY=%s\nPORT=3001\n" "$ENCRYPTION_KEY" > .env
docker compose up -d
```

실행 후 `http://localhost:3001`에서 provider key를 추가하고, unified API key를 발급받아 OpenAI/Anthropic 호환 client의 `base_url`로 연결합니다.

## 참고

- 이 저장소는 독립 실행 도구라기보다 **여러 LLM 공급자를 묶는 self-hosted 모델 프록시/라우팅 인프라**입니다.
- 그래서 이 레지스트리에서는 `agent-infrastructure`로 분류합니다.
- README가 명시하듯 개인 실험용에 초점을 둔 single-user proxy이며, LAN에 노출할 때는 trusted network에서만 사용해야 합니다.
- 일부 provider free tier는 평가/개인 사용 제한이 있을 수 있으므로 각 provider의 ToS를 별도로 확인해야 합니다.
