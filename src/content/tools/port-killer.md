---
title: "PortKiller"
description: "개발 중 포트 충돌을 빠르게 찾고 정리하는 크로스플랫폼 데스크톱 앱입니다."
category: "desktop-utility"
tags: ["ports", "process-manager", "kubernetes", "cloudflare-tunnel", "desktop-app", "developer-tools"]
githubUrl: "https://github.com/productdevbook/port-killer"
githubStars: 4840
author: "productdevbook"
installCommand: "brew install --cask productdevbook/tap/portkiller"
compatibleAgents: ["Claude", "Cursor", "Gemini", "Codex"]
featured: true
icon: "Zap"
---

# PortKiller

PortKiller는 개발 중 자주 마주치는 포트 충돌을 빠르게 정리해 주는 데스크톱 앱입니다. 로컬 리스닝 포트, Kubernetes port-forward 세션, Cloudflare Tunnel 연결을 한곳에서 보고, 필요하면 점유 프로세스를 바로 종료할 수 있습니다.

![PortKiller macOS 화면: 로컬 포트, Kubernetes 포트포워드, Cloudflare Tunnel 상태를 한눈에 보여주는 메뉴바 앱](/tool-screenshots/port-killer-macos.webp)

## 언제 쓰나

- `3000`, `5173` 같은 개발 포트가 이미 사용 중일 때
- 어떤 프로세스가 해당 포트를 잡고 있는지 빨리 확인하고 싶을 때
- `kubectl port-forward` 세션을 자주 열고 닫을 때
- Cloudflare Tunnel 연결 상태를 함께 모니터링하고 싶을 때
- macOS 메뉴바나 Windows 트레이에서 가볍게 포트 상태를 보고 싶을 때

## 특징

- 현재 열려 있는 TCP 포트를 자동으로 탐지합니다.
- 프로세스 종료를 빠르게 수행할 수 있습니다.
- 포트 번호와 프로세스 이름으로 검색할 수 있습니다.
- 즐겨찾기와 감시 포트를 관리할 수 있습니다.
- Kubernetes port-forward 세션과 Cloudflare Tunnel 상태도 함께 다룹니다.
- macOS와 Windows를 모두 지원하는 크로스플랫폼 앱입니다.
