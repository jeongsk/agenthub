---
title: "삿갓 · satgat"
description: "한지·먹·단청 감성의 한국형 문서를 AI로 생성하는 Next.js 기반 문서 디자인 시스템입니다. 이력서, 제안서, 청첩장 같은 문서를 만들거나 Claude Code·Codex·Gemini용 skill을 내보내고 싶을 때 유용합니다."
category: "cli-utility"
tags: ["korean-docs", "document-design", "ai-writing", "nextjs", "cli", "skill"]
githubUrl: "https://github.com/unclejobs-ai/satgat"
websiteUrl: "https://satgat.vercel.app"
githubStars: 9
author: "unclejobs-ai"
compatibleAgents: ["Claude Code", "Codex", "Gemini"]
icon: "FileSignature"
---

# 삿갓 · satgat

`satgat`은 자연어로 문서 목적과 핵심 내용을 적으면 한국형 문서 디자인 시스템 위에서 이력서, 자기소개서, 명함, 브랜드 소개서, 투자 IR 덱, 청첩장 같은 문서를 만들어 주는 도구입니다. Next.js 기반 웹앱과 CLI를 함께 제공하고, AI 에이전트용 skill export도 지원해서 문서 생성 흐름을 로컬 워크스페이스나 에이전트 작업에 바로 붙이기 좋습니다.

## 언제 쓰나

- 이력서·자기소개서·제안서처럼 한국어 문서를 빠르게 만들어야 할 때
- 청첩장, 연하장, 브랜드 스토리북처럼 감성적이면서도 정돈된 레이아웃이 필요할 때
- AI 에이전트에 넣을 한국형 문서 템플릿과 디자인 규칙이 필요할 때
- `npx satgat skill ...`로 Claude Code·Codex·Gemini용 skill을 내보내고 싶을 때
- 로컬에서 Next.js 문서 생성 워크스페이스를 띄워 직접 수정·미리보기를 하고 싶을 때

## 핵심 특징

- **13종 문서 템플릿**: 이력서, 자기소개서, 명함, 제품 소개서, 회사 소개서, IR 덱, 청첩장 등 다양한 문서 타입을 제공합니다.
- **한국형 디자인 시스템**: 백자지, 먹, 단청, 명조 위계를 중심으로 한 스타일 규칙을 적용합니다.
- **skill export 지원**: AI 에이전트가 바로 쓸 수 있도록 `SKILL.md`와 디자인 brief를 내보낼 수 있습니다.
- **웹앱 + CLI**: 브라우저 미리보기와 로컬 실행, `npx satgat` 기반 명령형 사용을 함께 제공합니다.
- **문서화된 예시 갤러리**: 한국어 데모팩과 미리보기 PNG/HTML이 함께 제공돼 결과물을 빠르게 확인할 수 있습니다.
