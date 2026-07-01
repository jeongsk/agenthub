---
title: "agentgateway"
description: "MCP, A2A, LLM 트래픽을 하나의 데이터 플레인에서 처리하는 Rust 기반 오픈소스 에이전트 게이트웨이입니다. 에이전트-도구, 에이전트-에이전트, 에이전트-LLM 경로에 보안·관측·거버넌스·라우팅 정책을 더할 때 유용합니다."
category: "agent-infrastructure"
tags: ["agent-gateway", "mcp", "a2a", "llm-gateway", "ai-gateway", "rust", "kubernetes", "gateway-api", "security", "observability", "guardrails", "reverse-proxy"]
githubUrl: "https://github.com/agentgateway/agentgateway"
websiteUrl: "https://agentgateway.dev"
githubStars: 3561
author: "agentgateway"
installCommand: "curl -sL https://agentgateway.dev/install | bash"
compatibleAgents: ["Claude Code", "Codex", "Gemini", "Cursor", "OpenCode", "Hermes Agent"]
featured: false
icon: "Network"
---

# agentgateway

agentgateway는 MCP(Model Context Protocol)와 A2A(Agent-to-Agent) 같은 AI-native 프로토콜 위에 세워진 오픈소스 프록시입니다. 에이전트가 LLM, 도구 서버, 다른 에이전트와 통신하는 경로에 인증, 권한, 관측, 거버넌스, 복원력 기능을 코드 수정 없이 붙이는 것을 목표로 합니다.

Rust로 작성되어 롱리브드 연결과 fan-out 패턴이 많은 에이전트 트래픽을 처리하도록 설계되었고, standalone 바이너리·Docker·Kubernetes 배포를 지원합니다. 프로젝트는 Linux Foundation 산하로 운영됩니다.

## 언제 쓰나

- 여러 MCP 서버를 하나의 엔드포인트로 묶고 클라이언트별로 노출할 도구를 제어하고 싶을 때
- OpenAI, Anthropic, Gemini, Bedrock 등 여러 LLM 제공자를 OpenAI 호환 API 뒤에 통합하고 싶을 때
- A2A 기반 에이전트 간 통신에 인증, 정책, 관측을 적용해야 할 때
- 일반 API 게이트웨이와 별도의 AI 게이트웨이를 나누지 않고 같은 데이터 플레인에서 API·LLM·MCP 트래픽을 함께 다루고 싶을 때
- Kubernetes Gateway API, inference routing, self-hosted model 라우팅 같은 운영 기능이 필요한 에이전트 플랫폼을 만들 때

## 핵심 특징

- **LLM Gateway**: 주요 LLM 제공자 트래픽을 OpenAI 호환 API로 통합하고, 예산·지출 제어, prompt enrichment, 로드 밸런싱, failover를 제공합니다.
- **MCP Gateway**: MCP 서버 federation, stdio/HTTP/SSE/Streamable HTTP 전송, OpenAPI 통합, OAuth 인증을 지원합니다.
- **A2A Gateway**: 에이전트 간 capability discovery, modality negotiation, task collaboration을 중계합니다.
- **Inference Routing**: GPU 사용률, KV cache, LoRA adapter, queue depth 같은 지표를 바탕으로 자체 호스팅 모델 요청을 라우팅합니다.
- **Guardrails**: 정규식, OpenAI moderation, AWS Bedrock Guardrails, Google Model Armor, 커스텀 webhook 기반 필터링을 조합할 수 있습니다.
- **보안과 관측**: JWT, API key, OAuth, CEL 정책 기반 RBAC, rate limit, TLS, OpenTelemetry metrics/logs/tracing을 제공합니다.

## 운영 특징

- **통합 데이터 플레인**: HTTP, gRPC, MCP, A2A, LLM 트래픽을 같은 게이트웨이에서 처리합니다. 기존 REST API를 에이전트용 도구로 노출하는 흐름에도 맞습니다.
- **프레임워크 비종속**: LangGraph, AutoGen, kagent, Claude Desktop, OpenAI SDK처럼 MCP나 A2A를 쓰는 다양한 에이전트 클라이언트와 함께 사용할 수 있습니다.
- **플랫폼 비종속**: 베어메탈, VM, 컨테이너, Kubernetes 환경에 배포할 수 있습니다.
- **프로토콜 협상**: MCP·A2A 프로토콜 버전 차이를 자동 업그레이드와 폴백으로 흡수하도록 설계되었습니다.
- **셀프서비스 포털**: 에이전트와 도구를 연결, 탐색, federation, 통합, 보안 적용할 수 있는 개발자 포털 UI를 내장합니다.
- **Gateway API 적합성**: Kubernetes Gateway API 구현체로 사용할 수 있으며, Kubernetes 환경에서는 Gateway API 리소스와 함께 운영할 수 있습니다.
- **동적 설정**: xDS 인터페이스를 통해 다운타임 없이 설정을 갱신하는 운영 모델을 지원합니다.

## 빠른 시작

standalone 바이너리는 설치 스크립트로 받을 수 있습니다.

```bash
curl -sL https://agentgateway.dev/install | bash
```

특정 버전을 지정하려면 `--version`을 넘깁니다.

```bash
curl -sL https://agentgateway.dev/install | bash -s -- --version 1.3.1
```

OpenAI로 라우팅하는 가장 단순한 예시는 API 키를 환경 변수로 설정하고 `agentgateway`를 실행하는 것입니다. 설정 파일 없이 실행하면 `~/.config/agentgateway/config.yaml`에 기본 설정을 부트스트랩하고 자동으로 사용합니다.

```bash
export OPENAI_API_KEY='<your-api-key>'
agentgateway
```

실행 후 로컬 admin UI는 보통 `http://localhost:15000/ui`에서 확인합니다. 이 UI에서 Listener, Route, Backend, Policy를 살펴보고 내장 playground로 chat completion 요청을 테스트할 수 있습니다.

Docker로 standalone agentgateway를 실행할 수도 있습니다.

```bash
mkdir agentgateway-config
docker run \
  --user "$(id -u):$(id -g)" \
  -v ./agentgateway-config:/config \
  -p 3000:3000 -p 4000:4000 -p 127.0.0.1:15000:15000 \
  cr.agentgateway.dev/agentgateway
```

Kubernetes 환경에서는 agentgateway 문서의 Kubernetes Quickstart와 Gateway API 기반 배포 경로를 따르는 것이 좋습니다.

## 참고

agentgateway는 현재 활발히 개발 중인 인프라 프로젝트입니다. 실제 운영에 넣을 때는 사용하는 배포 모드(standalone, Docker, Kubernetes), 인증 체계, MCP/A2A 클라이언트별 호환성, 관측 백엔드 연동을 별도로 검증해야 합니다.
