---
title: "AI Beacon"
description: "여러 기기의 AI 코딩 에이전트를 한 대시보드에서 모니터링하고, 터미널에 붙어 답변하거나 작업 흐름을 이어갈 수 있는 웹 대시보드입니다."
category: "agent-harness"
tags: ["agent-dashboard", "agent-monitoring", "claude-code", "opencode", "worktree", "notifications", "docker", "helm", "kubernetes", "desktop", "mobile"]
githubUrl: "https://github.com/manusa/ai-beacon"
githubStars: 29
author: "manusa"
installCommand: "docker run --pull=always -e AI_BEACON_AUTH_PASSWORD=demo -p 8080:8080 -v ai-beacon:/data ghcr.io/manusa/ai-beacon:latest"
compatibleAgents: ["Claude Code", "OpenCode"]
featured: false
icon: "MonitorSmartphone"
---

# AI Beacon

AI Beacon은 여러 머신에서 돌고 있는 코딩 에이전트를 한 화면에 모아 보여주는 웹 대시보드입니다. 에이전트의 상태, 모델, 브랜치, 컨텍스트, PR 진행 상황을 보고, 브라우저에서 세션 터미널에 붙어 즉시 응답할 수 있습니다.

## 언제 쓰나

- 여러 기기의 Claude Code나 OpenCode 세션을 하나의 대시보드에서 관리하고 싶을 때
- 에이전트가 권한 승인이나 입력을 기다리는 순간을 놓치지 않고 대응하고 싶을 때
- 휴대폰이나 다른 브라우저에서 원격으로 세션 터미널에 붙어 작업을 이어가고 싶을 때
- 새 브랜치와 워크트리를 함께 만드는 세션 스폰 흐름이 필요할 때
- 로컬 Docker, Helm, Kubernetes, OpenShift 같은 환경에 에이전트 관제 화면을 띄우고 싶을 때

## 핵심 특징

- **멀티 머신 대시보드**: 여러 장치의 세션을 한 곳에서 보고 상태를 비교할 수 있습니다.
- **브라우저 터미널**: 웹에서 세션 터미널에 연결해 응답을 입력할 수 있습니다.
- **푸시 알림**: 탭을 닫아도 서비스 워커로 알림을 받을 수 있습니다.
- **워크플로 템플릿**: `Implement Issue`, `Review PR` 같은 스코프 중심 템플릿을 제공합니다.
- **워크트리 인식 세션 생성**: 새 브랜치와 새 워크트리를 함께 만들어 세션을 시작할 수 있습니다.
- **다양한 배포 방식**: 네이티브 바이너리, Docker, Helm, OpenShift Sandbox, Hugging Face Spaces를 지원합니다.
- **접근 제어**: PSK, 비밀번호, OIDC, OAuth Proxy, Hugging Face identity 등 여러 인증 방식을 지원합니다.

## 빠른 시작

로컬에서 가장 빨리 시험하려면 Docker 이미지를 실행하면 됩니다.

```bash
docker volume create ai-beacon
docker run --pull=always \
  -e AI_BEACON_AUTH_PASSWORD=demo \
  -p 8080:8080 \
  -v ai-beacon:/data \
  ghcr.io/manusa/ai-beacon:latest
```

브라우저에서 `http://localhost:8080`을 열고 `demo` 비밀번호로 로그인합니다. 이후 대시보드의 가이드에서 에이전트 연결 방법을 확인할 수 있습니다.

## 참고

AI Beacon은 아직 **early access** 단계이며, 현재는 Claude Code와 OpenCode를 우선 지원합니다. Docker를 쓸 때는 `/data` 볼륨을 반드시 유지해야 토큰이 보존되고, 재시작 후 에이전트 연결이 끊기는 문제를 피할 수 있습니다. 정식 안정판이 나오기 전까지는 배포 모드와 인증 구성을 먼저 검증하는 편이 좋습니다.
