---
title: "herdr"
description: "터미널에서 여러 에이전트를 워크스페이스·탭·패널로 묶어 보여 주는 에이전트 멀티플렉서입니다. 실행 중인 에이전트를 한눈에 보고 재접속할 때 유용합니다."
category: "agent-harness"
tags: ["terminal", "multiplexer", "agents", "workspace", "orchestration", "cli"]
githubUrl: "https://github.com/ogulcancelik/herdr"
websiteUrl: "https://herdr.dev"
githubStars: 3411
author: "ogulcancelik"
installCommand: "curl -fsSL https://herdr.dev/install.sh | sh"
compatibleAgents: ["Claude Code", "Codex", "Cursor", "OpenCode", "Hermes Agent"]
icon: "Layers3"
---

# herdr

herdr는 터미널 안에서 여러 에이전트 세션을 동시에 관리하는 멀티플렉서입니다. 작업 중인 에이전트를 탭, 패널, 워크스페이스로 정리해 두고 상태를 빠르게 확인할 수 있습니다.

## 언제 쓰나

- 여러 에이전트를 동시에 돌리면서 진행 상황을 한 화면에서 보고 싶을 때
- 에이전트 세션을 detach/reattach 하며 이어서 작업하고 싶을 때
- 탭과 패널로 에이전트 출력을 나눠 보고 싶을 때
- GUI 없이 터미널 중심으로 에이전트 운영을 정리하고 싶을 때

## 핵심 특징

- **에이전트 멀티플렉싱**: 여러 세션을 한 곳에서 모아 봅니다.
- **mouse-native UI**: 클릭과 드래그로 분할·정리를 하기 쉽습니다.
- **세션 지속성**: 분리해 둔 에이전트가 계속 돌아가도록 설계되었습니다.
- **웹 문서 제공**: 설치, 통합, 설정, socket API 문서를 별도 사이트에서 확인할 수 있습니다.
