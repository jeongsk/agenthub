---
title: "Penpot"
description: "오픈소스 디자인·프로토타이핑 플랫폼입니다. SVG, CSS, HTML, JSON 같은 웹 표준 기반으로 디자인과 코드 협업을 연결하고, self-hosting, design tokens, plugin/API, MCP server를 지원합니다."
category: "desktop-utility"
tags: ["design", "prototyping", "ui", "ux", "figma-alternative", "design-system", "design-tokens", "collaboration", "mcp", "api", "self-hosted", "clojure", "clojurescript"]
githubUrl: "https://github.com/penpot/penpot"
websiteUrl: "https://penpot.app"
githubStars: 54098
author: "penpot"
installCommand: "Use SaaS at https://design.penpot.app or self-host from https://penpot.app/self-host"
compatibleAgents: ["Claude Code", "Codex", "Cursor", "Gemini CLI", "OpenCode"]
featured: false
icon: "PenTool"
---

# Penpot

Penpot은 오픈소스 디자인 및 프로토타이핑 플랫폼입니다. 디자이너와 개발자가 같은 프로젝트에서 실시간으로 협업할 수 있는 Figma의 오픈소스 대안이며, 브라우저 SaaS로 바로 쓰거나 자체 서버에 배포할 수 있습니다.

AgentHub 관점에서는 단순 디자인 툴을 넘어 **디자인-코드-AI workflow를 연결하는 programmable design platform**으로 볼 수 있습니다. Penpot은 SVG, CSS, HTML, JSON 같은 웹 표준을 기반으로 디자인을 표현하고, inspect mode, design tokens, plugin system, API, MCP server를 통해 에이전트와 개발 도구가 디자인 정보를 읽고 활용할 수 있게 합니다.

## 언제 쓰나

- Figma 대안으로 오픈소스 UI/UX 디자인·프로토타이핑 도구가 필요할 때
- 보안·컴플라이언스 요구 때문에 디자인 인프라를 self-hosting해야 할 때
- 디자이너와 개발자가 design tokens, components, variants를 중심으로 같은 source of truth를 공유해야 할 때
- SVG/CSS/HTML에 가까운 형태로 디자인을 관리하고 inspect mode로 구현 정보를 확인하고 싶을 때
- Penpot API, plugin system, MCP server를 통해 디자인과 코드/AI assistant workflow를 연결하고 싶을 때

## 핵심 특징

- **Open-source design platform**: Mozilla Public License 2.0 기반의 공개 소스 디자인 플랫폼입니다.
- **Deployment agnostic**: Penpot SaaS를 쓰거나 Docker, Kubernetes, Elestio 등으로 직접 배포할 수 있습니다.
- **웹 표준 기반**: SVG, CSS, HTML, JSON 같은 표준을 사용해 디자인 결과물을 개발자가 이해하기 쉽게 만듭니다.
- **실시간 협업**: 팀 단위 디자인, 프로토타이핑, 리뷰를 웹 브라우저에서 진행할 수 있습니다.
- **Design Tokens**: 디자인 시스템의 색상, 타이포그래피, spacing 등을 코드 친화적인 source of truth로 관리합니다.
- **Inspect mode**: SVG, CSS, HTML 코드 정보를 확인해 디자인-구현 간 간극을 줄입니다.
- **Plugin/API/MCP**: plugin system, webhooks, access-token 기반 API, MCP server로 자동화와 AI-driven workflow를 구성할 수 있습니다.

## 빠른 시작

브라우저에서 바로 쓰려면 SaaS를 사용합니다.

```text
https://design.penpot.app
```

직접 운영하려면 self-host 문서를 따릅니다.

```text
https://penpot.app/self-host
```

개발용 repository 작업은 `pnpm` 기반이며, README 기준 repo package는 private monorepo 형태입니다.

## 참고와 주의사항

- Penpot repository의 기본 브랜치는 `develop`입니다.
- 라이선스는 `MPL-2.0`입니다.
- SaaS 사용과 self-hosted deployment가 모두 가능하지만, 운영 환경 구성은 공식 self-host 문서를 기준으로 확인해야 합니다.
- MCP server와 API는 디자인 정보를 AI coding assistant와 연결하는 데 유용하지만, 실제 agent integration은 사용하는 클라이언트와 인증·권한 설정에 따라 달라집니다.
