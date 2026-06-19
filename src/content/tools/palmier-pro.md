---
title: "Palmier Pro"
description: "macOS용 AI 네이티브 비디오 편집기입니다. Swift로 처음부터 빌드했으며, Seedance·Kling 등 최신 생성 AI 모델을 타임라인에서 직접 사용할 수 있고, MCP 서버를 통해 Claude·Codex·Cursor 같은 에이전트와 함께 편집할 수 있습니다."
category: "desktop-utility"
tags: ["video-editor", "macos", "swift", "ai-video", "mcp", "generative-ai", "claude", "seedance"]
githubUrl: "https://github.com/palmier-io/palmier-pro"
githubStars: 1818
author: "palmier-io"
websiteUrl: "https://palmier.io"
compatibleAgents: ["Claude Code", "Codex", "Cursor", "Claude Desktop"]
featured: false
icon: "Video"
---

# Palmier Pro

Palmier Pro는 AI를 위해 설계된 오픈소스 macOS 비디오 편집기입니다. 타임라인에서 에이전트와 협업하며 영상을 편집하고, Seedance·Kling 같은 최신 생성 AI로 장면을 직접 만들어 넣을 수 있습니다.

## 언제 쓰나

- AI 에이전트와 함께 비디오를 편집하고 싶을 때 (MCP로 Claude·Codex·Cursor 연결)
- 타임라인에서 바로 생성 AI로 영상/이미지를 만들고 싶을 때
- Premiere Pro 수준의 네이티브 편집기를 오픈소스로 쓰고 싶을 때
- Y Combinator S24 스타트업이 만든 신규 편집 워크플로를 체험하고 싶을 때

## 핵심 특징

- Swift 네이티브, Apple Silicon 전용 macOS 앱.
- Seedance·Kling·Nano Banana Pro 등 SOTA 생성 모델을 타임라인 내장.
- HTTP MCP 서버(`:19789/mcp`)로 에이전트 연결 지원.
- 앱 내장 에이전트 채팅으로 같은 프로젝트를 함께 편집.
- 로그인 없이 편집기와 MCP 서버 무료 사용, 생성 AI 기능만 구독.
