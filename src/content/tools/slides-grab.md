---
title: "slides-grab"
description: "Claude Code와 Codex에서 슬라이드 제작·편집·검증 흐름을 붙여 주는 오픈소스 하네스입니다. HTML/CSS 기반 발표 자료를 만들고, 영역 선택 편집과 린팅·PDF/PPTX 내보내기를 함께 쓰고 싶을 때 유용합니다."
category: "agent-harness"
tags: ["slides", "presentations", "claude-code", "codex", "html", "css", "editor", "lint", "pdf", "pptx"]
githubUrl: "https://github.com/NomaDamas/slides-grab"
websiteUrl: "https://nomadamas.github.io/slides-grab/"
githubStars: 750
author: "NomaDamas"
installCommand: "git clone https://github.com/NomaDamas/slides-grab.git && cd slides-grab && npm ci && npx playwright install chromium"
compatibleAgents: ["Claude Code", "Codex"]
featured: false
icon: "Workflow"
---

# slides-grab

slides-grab는 AI가 만든 HTML 슬라이드를 더 잘 다루게 해 주는 하네스입니다. 슬라이드를 시각적으로 선택해 수정하고, 검증하고, PDF나 PPTX로 내보내는 흐름을 한 번에 묶어 줍니다.

## 언제 쓰나

- Claude Code나 Codex로 발표자료를 만들고 있을 때
- HTML/CSS 기반 슬라이드를 AI와 함께 빠르게 수정하고 싶을 때
- 슬라이드의 특정 영역을 드래그로 집어 편집하고 싶을 때
- PDF, PPTX, 이미지 같은 결과물로 내보내는 흐름이 필요할 때
- 슬라이드 디자인 스타일을 빠르게 바꿔가며 실험하고 싶을 때

## 주요 기능

- **비주얼 에디터** — 슬라이드 영역을 드래그로 선택해 AI에게 수정 지시
- **HTML/CSS 기반 워크플로** — 에이전트가 다루기 쉬운 형태로 슬라이드 작성
- **검증 도구** — Playwright 기반 검증과 슬라이드 린팅 지원
- **내보내기** — PDF, 실험적 PPTX, Figma용 내보내기 지원
- **스타일 갤러리** — 번들 디자인 스타일을 미리 보고 선택 가능
- **로컬 자산 계약** — 이미지/비디오를 로컬 assets 폴더로 관리
