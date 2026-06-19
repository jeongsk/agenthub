---
title: "YAO Meta Skill"
description: "에이전트 스킬을 엔지니어링하고 평가·거버넌스·이식성을 관리하는 Skill OS 2.0 시스템입니다. 반복되는 워크플로를 재사용 가능한 스킬 패키지로 만들고, 릴리즈 게이트와 증명 기반 품질 관리를 붙이고 싶을 때 유용합니다."
category: "agent-skill"
tags: ["meta-skill", "skill-engineering", "skill-os", "agent-skills", "evaluation", "governance", "portability", "workflow-automation", "skillops"]
githubUrl: "https://github.com/yaojingang/yao-meta-skill"
githubStars: 1140
author: "yaojingang"
compatibleAgents: ["Claude Code", "OpenAI", "VS Code"]
featured: false
icon: "Cog"
---

# YAO Meta Skill

YAO(Yielding AI Outcomes) Meta Skill은 단순한 스킬 묶음이 아니라, 스킬 자체를 생성·컴파일·평가·릴리즈·운영하는 **Skill OS**입니다. 1.0에서는 반복 워크플로를 재사용 가능한 패키지로 만드는 데 집중했다면, 2.0에서는 하나의 스킬을 여러 타겟(Claude, OpenAI, VS Code 등)으로 컴파일하고, 출력 품질을 평가하며, 릴리즈 거버넌스를 적용하는 전 생애주기를 관리합니다.

## 언제 쓰나

- 반복되는 작업을 정식 스킬 패키지로 만들고 싶을 때
- 스킬 품질을 평가하고 릴리즈 게이트를 적용해야 할 때
- 여러 에이전트 플랫폼 간에 같은 스킬을 이식하고 싶을 때
- 스킬의 사용 현황을 추적하고, 개선 제안을 자동화하고 싶을 때
- 단순한 프롬프트 묶음이 아니라 증명 기반의 엔지니어링 시스템이 필요할 때

## 핵심 특징

- **Skill IR**: 플랫폼 중립적인 중간 표현으로 의도·트리거·입출력·경계를 정의합니다.
- **타겟 컴파일러**: 하나의 스킬을 Claude, OpenAI, Agent Skills, VS Code 등 여러 형식으로 뽑아냅니다.
- **Output Eval Lab**: 트리거 검사, 출력 단정, 실행 증명, 타이밍/토큰 증명, 블라인드 리뷰 등을 수행합니다.
- **Review Studio 2.0**: 의도·트리거·평가·컨텍스트·런타임·신뢰·어도션 드리프트를 한 HTML 게이트 페이지로 통합합니다.
- **증명 및 릴리즈 거버넌스**: 패키지 검증, 설치 시뮬레이션, 런타임 권한 프로브, 증명 원장, 퍼블릭 클레임 가드 등.
- **SkillOps 루프**: 메타데이터 기반 어도션 드리프트 감지, 적응형 개선 제안, 큐레이터 리포트.
