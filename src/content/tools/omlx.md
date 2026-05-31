---
title: "oMLX"
description: "Apple Silicon(Mac)에 최적화된 LLM 추론 서버입니다. Continuous batching과 메모리·SSD 2단계 KV 캐시로 추론을 최적화하고, OpenAI 호환 API를 macOS 메뉴바에서 관리합니다."
category: "model-runtime"
tags: ["mlx", "inference-server", "apple-silicon", "macos", "openai-api", "llm", "kv-cache"]
githubUrl: "https://github.com/jundot/omlx"
websiteUrl: "https://omlx.ai"
githubStars: 15543
author: "jundot"
installCommand: "brew tap jundot/omlx https://github.com/jundot/omlx && brew install omlx"
compatibleAgents: ["Claude Code", "Codex", "Cursor"]
featured: false
icon: "Server"
---

# oMLX

oMLX는 Mac에 최적화된 LLM 추론 서버입니다. MLX 기반으로 Apple Silicon에서 모델을 구동하며, continuous batching과 Hot Cache(메모리)·Cold Cache(SSD) 2단계 KV 캐시로 추론 성능을 끌어올립니다. OpenAI 호환 API를 제공해 기존 클라이언트를 그대로 붙일 수 있고, 서버 관리는 macOS 메뉴바 앱에서 처리합니다.

![oMLX 관리자 대시보드](/tool-screenshots/omlx-dashboard.webp)

## 언제 쓰나

- 맥에서 로컬 LLM을 OpenAI 호환 엔드포인트로 띄워 Claude Code·Codex 같은 도구에 연결하고 싶을 때
- 자주 쓰는 모델은 고정 로딩하고 무거운 모델은 필요할 때 자동 교체하는 식으로 메모리를 효율적으로 쓰고 싶을 때
- 긴 세션에서 컨텍스트가 바뀌어도 과거 KV 캐시를 유지해 반복 추론 비용을 줄이고 싶을 때

## 주요 기능

- Continuous batching으로 동시 요청 처리 최적화
- 메모리·SSD 2단계 KV 캐시로 컨텍스트 재사용
- OpenAI 호환 API 제공
- macOS 메뉴바에서 모델 로딩·교체·서버 상태 관리
- MCP(Model Context Protocol) 지원 (선택 설치)
- Homebrew 백그라운드 서비스로 실행 (크래시 시 자동 재시작)

![oMLX의 Hot/Cold 2단계 KV 캐시 구조](/tool-screenshots/omlx-hot-cold-cache.webp)
