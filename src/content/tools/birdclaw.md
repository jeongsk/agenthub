---
title: "Birdclaw"
description: "X/Twitter 데이터를 로컬 SQLite에 모으고, 아카이브 import와 라이브 sync, 멘션·DM·북마크 triage를 한곳에서 다루는 로컬 퍼스트 워크스페이스입니다."
category: "desktop-utility"
tags: ["twitter", "x", "sqlite", "local-first", "archive", "dm", "bookmarks", "cli"]
githubUrl: "https://github.com/steipete/birdclaw"
githubStars: 665
websiteUrl: "https://birdclaw.sh"
author: "steipete"
installCommand: "brew install steipete/tap/birdclaw"
compatibleAgents: ["Claude Code", "Cursor", "Codex", "OpenCode"]
featured: false
icon: "Database"
---

# Birdclaw

Birdclaw는 X/Twitter 데이터를 로컬 SQLite에 축적해 두고, 아카이브 import와 라이브 sync, 검색, 멘션/DM/북마크 triage를 한 화면에서 다루는 로컬 퍼스트 워크스페이스입니다. CLI와 웹 UI를 함께 제공해서, 사람이 직접 보든 에이전트가 읽든 같은 로컬 데이터셋을 기준으로 작업하기 좋습니다.

## 언제 쓰나

- X/Twitter 아카이브를 로컬에 안전하게 보관하고 싶을 때
- 멘션, DM, 북마크, 좋아요를 한 곳에서 triage하고 싶을 때
- 에이전트가 읽을 수 있는 로컬 JSON/SQLite 기반 데이터가 필요할 때
- 라이브 sync와 아카이브 데이터를 함께 쓰는 작업흐름이 필요할 때
- 트윗/DM 검색과 후처리를 자동화하고 싶을 때

## 특징

- 로컬 SQLite DB를 중심으로 동작합니다.
- X 아카이브 import, 라이브 sync, FTS5 검색을 지원합니다.
- 홈, 멘션, DMs, Likes, Bookmarks, Blocks 워크스페이스를 제공합니다.
- `xurl` / `bird` 기반의 읽기·쓰기 흐름과 자동화용 JSON 출력을 제공합니다.
- 로컬 퍼스트 구조라 에이전트가 다루기 쉬운 데이터 저장소 역할도 합니다.

## 분류 메모

- 이 프로젝트는 에이전트 프레임워크나 스킬이 아니라, 개발자/에이전트가 함께 쓰는 **로컬 데스크톱 유틸리티**에 가깝습니다.
- 그래서 이 레지스트리에서는 `desktop-utility`로 두는 편이 자연스럽습니다.
