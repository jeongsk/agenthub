---
title: "Skills for Design Engineers"
description: "애니메이션과 디자인 의사결정을 더 빠르게 개선할 수 있도록 돕는 Emil Kowalski의 디자인 엔지니어링 에이전트 스킬 모음입니다."
category: "agent-skill"
tags: ["agent-skills", "design-engineering", "ui-design", "animation", "motion", "frontend", "css", "skills-sh"]
githubUrl: "https://github.com/emilkowalski/skills"
websiteUrl: "https://emilkowal.ski/skill"
githubStars: 10237
author: "emilkowalski"
installCommand: "npx skills@latest add emilkowalski/skills"
compatibleAgents: ["Claude Code", "Codex", "Cursor", "Gemini", "OpenCode"]
featured: false
icon: "Sparkles"
---

# Skills for Design Engineers

**Skills for Design Engineers**는 디자이너와 엔지니어가 더 나은 사용자 인터페이스를 만들도록 돕는 에이전트 스킬 모음입니다. Vercel과 Linear 등에서의 경험을 바탕으로, 에이전트가 애니메이션과 디자인을 결정할 때 놓치기 쉬운 디테일을 점검하고 더 빠르게 좋은 선택에 도달하도록 돕습니다. README는 에이전트가 반복적이거나 어색한 애니메이션을 피하고 더 나은 인터페이스를 만들 수 있도록 하는 것을 이 저장소의 목표로 설명합니다.

## 언제 쓰나

- UI 애니메이션의 목적, 빈도, easing, 지속 시간을 체계적으로 검토하고 싶을 때
- 버튼, 팝오버, 토스트, 드로어 같은 인터랙션의 움직임을 더 자연스럽게 다듬고 싶을 때
- CSS transform, spring, gesture, interruptibility, 성능과 접근성까지 모션 품질을 리뷰하고 싶을 때
- Apple 스타일의 유동적인 제스처, 모멘텀, 스프링 애니메이션 원칙을 웹 UI에 적용하고 싶을 때
- 에이전트가 그럴듯하지만 반복적이거나 과도한 애니메이션을 만드는 것을 줄이고 싶을 때

## 포함된 스킬

- **`emil-design-eng`**: 컴포넌트 설계, UI 폴리시, 애니메이션 선택, 보이지 않는 디테일에 대한 디자인 엔지니어링 원칙
- **`review-animations`**: easing, duration, transform-origin, GPU 성능, reduced motion 등을 엄격한 기준으로 검토하는 모션 리뷰
- **`improve-animations`**: 코드베이스 전체의 애니메이션을 여러 기준으로 감사하고, 우선순위가 정해진 실행 계획을 `plans/`에 작성하는 워크플로
- **`animation-vocabulary`**: 원하는 애니메이션을 에이전트에게 정확히 설명하기 위한 모션 용어와 개념
- **`apple-design`**: Apple의 유동적 인터페이스 원칙을 CSS, Pointer Events, `requestAnimationFrame`, Motion/Framer Motion에 맞게 해석한 가이드

## 설치

`skills.sh`를 통해 필요한 스킬과 대상 에이전트를 선택해 설치할 수 있습니다.

```bash
npx skills@latest add emilkowalski/skills
```

## 참고

- 저장소는 애니메이션과 디자인 의사결정에 대한 전문 지식을 에이전트에 제공하는 스킬 팩이며, 별도의 런타임이나 UI 라이브러리를 포함하지 않습니다.
- `improve-animations`는 소스 코드를 직접 수정하지 않고, 코드베이스를 감사한 뒤 다른 에이전트가 실행할 수 있는 자체 완결형 계획을 생성합니다.
- 모션 리뷰는 기본적으로 엄격하게 문제를 지적하는 방식이며, 일반적인 코드 리뷰나 기능 구현을 대신하지 않습니다.
- `prefers-reduced-motion`, hover 입력 방식, GPU 친화적 속성 등 접근성과 성능 기준을 함께 다룹니다.
- 라이선스는 MIT입니다.
