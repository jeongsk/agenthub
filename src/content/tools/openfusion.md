---
title: "OpenFusion"
description: "OpenRouter Fusion 패널 아키텍처를 로컬 MCP 서버로 구현한 멀티 모델 답변 합성 도구입니다. 여러 모델 후보를 병렬 호출하고 judge가 분석·종합해 하나의 답변으로 반환합니다."
category: "mcp-server"
tags: ["mcp", "mcp-server", "multi-model", "llm", "fusion", "openrouter", "judge", "synthesis", "dashboard"]
githubUrl: "https://github.com/hashangit/openfusion"
githubStars: 23
author: "hashangit"
installCommand: "npx openfusion-setup"
compatibleAgents: ["Claude Code", "Cursor", "Cline", "Zed", "Codex", "Gemini CLI", "Continue"]
featured: false
icon: "Network"
---

# OpenFusion

OpenFusion은 OpenRouter의 Fusion 패널 아키텍처를 로컬에서 실행할 수 있게 만든 MCP 서버입니다. 하나의 프롬프트를 2~5개 후보 모델에 병렬로 보내고, 살아남은 응답들을 judge 모델이 먼저 구조적으로 분석한 뒤 다시 종합해 하나의 답변으로 반환합니다. 특정 에이전트를 대체하는 도구가 아니라, MCP 클라이언트가 필요할 때 호출하는 **멀티 모델 합성 엔진**에 가깝습니다.

## 언제 쓰나

- 복잡한 아키텍처 판단이나 고위험 의사결정에서 여러 모델의 독립적인 관점을 합치고 싶을 때
- 단일 frontier 모델보다 저렴한 모델 패널을 조합해 품질을 끌어올리고 싶을 때
- deep research 결과나 긴 컨텍스트를 여러 모델이 검토한 뒤 judge가 통합하게 하고 싶을 때
- Claude Code, Cursor, Cline, Zed, Codex, Gemini CLI, Continue 같은 MCP 클라이언트에 모델 합성 도구를 붙이고 싶을 때
- 모델별 비용, 토큰, 지연시간, 후보 답변을 로컬 dashboard에서 추적하고 싶을 때

## 핵심 특징

- **Fan-out + two-step judge**: 후보 모델들을 병렬 호출한 뒤, judge가 `analysis → synthesis` 두 단계로 최종 답변을 만듭니다.
- **Provider lock-in 없음**: OpenRouter만 쓰는 구조가 아니라, 사용자가 가진 provider key와 모델 조합을 dashboard에서 설정합니다.
- **로컬 MCP 서버**: `fusion`과 `open_dashboard` 도구를 MCP 클라이언트에 노출합니다.
- **로컬 dashboard**: `http://localhost:9077`에서 구성 상태, generation 로그, 모델별 비용·토큰·latency를 확인합니다.
- **로컬 저장소**: config, encrypted keys, SQLite DB를 `OPENFUSION_HOME` 아래에 저장합니다.

## 설치

Node.js 22+가 필요합니다. npm 패키지로 배포되어 clone 없이 시작할 수 있습니다.

```bash
npx openfusion-setup
```

수동 등록이 필요하면 MCP 클라이언트에서 다음 서버를 가리키면 됩니다.

```bash
npx -y openfusion-mcp
```

Dashboard만 열고 싶을 때는 다음 명령도 제공합니다.

```bash
npx openfusion-ui
```

## 참고

- OpenFusion은 브라우징이나 도구 호출을 직접 하는 agent가 아니라, 이미 수집된 prompt/context를 여러 모델에 분배해 합성하는 fusion engine입니다.
- Fusion 호출은 단일 모델 호출보다 2~3배 느리고 비쌀 수 있으므로, routine coding이나 간단한 Q&A보다는 복잡한 판단·검증에 쓰는 편이 좋습니다.
- API key는 AES-256-GCM으로 암호화되어 로컬에 저장되고, dashboard는 loopback 주소에 바인딩됩니다.
- `better-sqlite3` native addon 설치가 실패하면 `npm rebuild better-sqlite3` 및 Python 3/C++ toolchain이 필요할 수 있습니다.
- 라이선스는 MIT입니다.
