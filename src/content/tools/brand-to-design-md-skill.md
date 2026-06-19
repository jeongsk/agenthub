---
title: "Brand to DESIGN.md"
description: "공개된 브랜드 URL을 입력하면 공식 페이지·프레스킷·CSS·SVG·이미지에서 시각 근거를 수집해 디자인 토큰·컴포넌트 가이드·사용 경계가 담긴 출처 기반 DESIGN.md를 생성하는 포터블 로컬 스킬입니다."
category: "agent-skill"
tags: ["brand-to-design-md", "design-system", "design-tokens", "brand", "frontend", "ui", "shaom"]
githubUrl: "https://github.com/shaom/brand-to-design-md-skill"
githubStars: 161
author: "shaom"
installCommand: "npx skills add https://github.com/shaom/brand-to-design-md-skill --skill brand-to-design-md"
compatibleAgents: ["Claude Code", "Codex", "Cursor", "OpenClaw"]
featured: false
icon: "Palette"
---

# Brand to DESIGN.md

Brand to DESIGN.md는 공개된 브랜드 URL 하나를 출처 기반 `DESIGN.md`로 바꿔주는 포터블 로컬 스킬입니다. 공식 페이지·프레스킷·CSS·SVG·이미지·디자인 사례에서 시각 근거를 모아 디자인 토큰과 실무용 컴포넌트 가이드로 번역하고, 선택적으로 반응형 HTML 데모까지 만들어 검증합니다. 에이전트별 메타데이터를 의도적으로 배제해 어떤 에이전트 환경으로도 이식할 수 있습니다.

## 언제 쓰나

- 특정 브랜드의 사이트만 보고 일관된 디자인 시스템 문서를 빠르게 만들고 싶을 때
- 색상·타이포그래피·레이아웃·로고 사용 경계를 출처와 함께 정리해야 할 때
- 에이전트가 브랜드 톤에 맞는 UI를 만들도록 디자인 토큰을 제공하고 싶을 때
- 반응형 데모로 추출된 디자인이 실제로 들어맞는지 확인하고 싶을 때

## 핵심 특징

- 공식 페이지·프레스킷·CSS·SVG·이미지 등 공개 근거를 수집해 시각 정보를 확보.
- 브랜드 근거를 디자인 토큰과 실무 컴포넌트 가이드로 번역.
- 색상·타이포그래피·레이아웃·컴포넌트·이미지·로고 경계와 Do/Don't 가이드가 담긴 출처 기반 `DESIGN.md` 생성.
- 선택적으로 반응형 HTML 데모를 만들고 검증.
- 에이전트 비종속(포터블) 설계 — Codex, Claude Code, Cursor, OpenClaw 등에 폴더 복사로 설치.
- `skills` CLI 지원 환경에서는 GitHub에서 바로 설치 가능.
