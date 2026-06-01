---
title: "Cursor Plugins"
description: "Cursor 공식 플러그인 저장소입니다. Cursor용 플러그인의 매니페스트 구조와 마켓플레이스 패키징 방식을 확인하거나, 공식 플러그인을 참고해 팀용 확장 구성을 만들 때 유용합니다."
category: "plugin"
tags: ["cursor", "plugins", "marketplace", "developer-tools"]
githubUrl: "https://github.com/cursor/plugins"
githubStars: 1611
author: "cursor"
compatibleAgents: ["Cursor"]
icon: "Puzzle"
---

# Cursor Plugins

Cursor Plugins는 Cursor가 공개한 공식 플러그인 저장소입니다. 개발 도구와 워크플로를 플러그인 단위로 묶는 구조를 살펴보거나, Cursor용 플러그인 작성 방식을 참고할 때 유용합니다.

## 언제 쓰나

- Cursor용 공식 플러그인을 확인하고 싶을 때
- `.cursor-plugin` 매니페스트 구조를 참고하고 싶을 때
- 개발자 도구, 프레임워크, SaaS 연동을 플러그인으로 배포하고 싶을 때
- Cursor 생태계의 플러그인 설계 방식을 이해하고 싶을 때

## 핵심 특징

- **공식 Cursor 저장소**: Cursor가 직접 관리하는 플러그인 모음입니다.
- **독립 디렉터리 구조**: 각 플러그인이 루트의 별도 디렉터리로 구성됩니다.
- **매니페스트 기반**: `.cursor-plugin/plugin.json`으로 플러그인 정보를 정의합니다.
- **템플릿 역할**: 새 플러그인을 만들기 위한 참고 구조로도 좋습니다.
