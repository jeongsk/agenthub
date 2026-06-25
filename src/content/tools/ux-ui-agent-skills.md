---
title: "UX/UI Agent Skills"
description: "Claude를 디자인 토큰, 컴포넌트 명세, 접근성 감사, 디자인 리뷰, any-framework 코드 생성을 수행하는 UX/UI 전문 에이전트로 확장하는 스킬 키트입니다."
category: "agent-skill"
tags: ["agent-skills", "claude", "claude-code", "ux", "ui", "design-system", "design-tokens", "dtcg", "accessibility", "wcag", "design-to-code", "component-library"]
githubUrl: "https://github.com/plugin87/ux-ui-agent-skills"
githubStars: 358
author: "plugin87"
installCommand: "npx ux-ui-agent-skills init"
compatibleAgents: ["Claude Code", "Claude"]
featured: false
icon: "Palette"
---

# UX/UI Agent Skills

UX/UI Agent Skills는 Claude Code나 Claude 기반 IDE에 UX/UI 설계 지식, DTCG 디자인 토큰, 컴포넌트 명세, 접근성 기준, 디자인 시스템 상호운용 규칙, 실행 가능한 스킬과 검증 스크립트를 추가하는 에이전트 스킬 키트입니다. 런타임 앱이 아니라 프로젝트에 복사해 넣는 instruction/knowledge layer에 가깝고, Claude가 디자인 시스템 아키텍트처럼 일관된 UI 설계와 코드 생성을 하도록 돕습니다.

## 언제 쓰나

- Claude에게 접근성, 디자인 토큰, 컴포넌트 상태, 디자인 리뷰 기준을 일관되게 적용하게 하고 싶을 때
- React, Next.js, SwiftUI, Vue, Svelte, Angular, Web Components, React Native, Flutter 등 다양한 프레임워크로 UI 코드를 생성하고 싶을 때
- Material 3, Apple HIG, Fluent, Carbon, shadcn/ui, Radix 같은 디자인 시스템과의 매핑이 필요할 때
- 랜딩 페이지, 대시보드, 폼, 모달, 데이터 테이블 같은 UI를 토큰 기반으로 설계하고 검증하고 싶을 때
- WCAG 2.2 접근성 감사, 색 대비 검사, focus trap, RTL, 하드코딩 lint 같은 게이트를 에이전트 워크플로에 붙이고 싶을 때

## 핵심 특징

- **DTCG 디자인 토큰**: primitive, semantic, component 3계층 구조로 색상, 타이포그래피, spacing, shadow, border, breakpoint, motion 토큰을 생성·확장·검증합니다.
- **컴포넌트 설계**: Atomic Design 기준으로 anatomy, variants, states, token mapping, accessibility spec을 포함한 컴포넌트 명세를 만듭니다.
- **Any-framework 코드 생성**: React/Tailwind, Next.js, SwiftUI뿐 아니라 Vue, Svelte, Angular, Solid, Lit, React Native, Flutter, Jetpack Compose, vanilla CSS, CSS-in-JS로 변환하는 adapter protocol을 제공합니다.
- **디자인 시스템 상호운용**: Material 3, Apple HIG, Fluent, Carbon, shadcn/ui, Radix 등으로부터 역할 기반 crosswalk를 만들고, 138개 브랜드급 디자인 시스템 레퍼런스를 활용합니다.
- **실행 가능한 스킬과 스크립트**: `/design-tokens`, `/design-component`, `/design-code`, `/design-review`, `/a11y-audit`, `/apply-aesthetic`, `/redesign`, `/prototype`, `/ux-writing` 같은 Claude 스킬과 Python/Node 검증 스크립트를 포함합니다.
- **접근성 중심 검증**: WCAG 2.2 AA를 기본선으로 색 대비, 키보드 내비게이션, ARIA, touch target, reduced motion, RTL, focus trap을 확인합니다.

## 빠른 시작

현재 프로젝트에 전체 키트를 설치하려면 `npx`를 사용합니다.

```bash
npx ux-ui-agent-skills init
```

필요한 영역만 추가할 수도 있습니다.

```bash
npx ux-ui-agent-skills add tokens taste design-systems
npx ux-ui-agent-skills list
```

또는 저장소를 직접 복사해 프로젝트에 넣을 수 있습니다.

```bash
git clone https://github.com/plugin87/ux-ui-agent-skills.git
cp -r ux-ui-agent-skills/ your-project/
```

설치 후 Claude Code나 Claude 기반 IDE에서 프로젝트를 열면 `CLAUDE.md`, `.claude/skills`, tokens, components, accessibility, workflows, frameworks 레퍼런스를 바탕으로 디자인 관련 요청을 라우팅합니다.

## 예시 요청

```text
/design-code a pricing card in Vue, dark-mode aware
/a11y-audit this checkout form
/apply-aesthetic linear, then redesign this dashboard
Generate React + Tailwind code for a data table with sorting and pagination
Create a DTCG token palette for a fintech brand using blue as the primary
```

## 참고

- npm 패키지 이름은 `ux-ui-agent-skills`이며 CLI는 `ux-ui-agent-skills`와 `ux-ui-skills`를 제공합니다.
- 순수 instruction/knowledge layer라 별도 런타임 의존성 없이 사용할 수 있지만, 일부 검증 스크립트는 Python 3 또는 Node/Playwright를 사용합니다.
- 저장소 기준 현재 릴리스는 `v2.4.0`입니다.
- 라이선스는 MIT입니다.
