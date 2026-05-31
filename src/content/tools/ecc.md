---
title: "ECC"
description: "에이전트의 규칙, 메모리, 보안, 리서치, 설치 흐름을 한데 묶어 여러 런타임에서 일관되게 작동하도록 돕는 하네스입니다."
category: "agent-harness"
tags: ["claude-code", "cursor", "codex", "orchestration"]
githubUrl: "https://github.com/affaan-m/ECC"
githubStars: 199774
author: "affaan-m"
installCommand: "git clone https://github.com/affaan-m/ECC.git && cd ECC && ./install.sh --profile minimal --target claude"
compatibleAgents: ["Claude Code", "Cursor", "Codex", "OpenCode"]
featured: true
icon: "ShieldCheck"
---

# ECC

ECC는 에이전트 하네스 운영을 위한 큰 틀의 시스템입니다. 단순히 파일 몇 개를 복사하는 수준이 아니라, 에이전트의 행동 규칙, 설치 방식, 메모리/세션 흐름, 보안 점검, 리서치 습관을 묶어서 관리합니다. 그래서 한 번 도입하면 여러 도구와 런타임에서 비슷한 작업 품질을 유지하기 쉽습니다.

## 어떤 점이 강한가

- **설치 경로가 유연함**: 플러그인 방식, 수동 설치, 최소/코어 프로필처럼 상황에 맞는 경로를 고를 수 있습니다.
- **다중 런타임 대응**: Claude Code뿐 아니라 Cursor, Codex, OpenCode 같은 환경도 염두에 둡니다.
- **운영 규칙이 풍부함**: 에이전트가 어떻게 생각하고, 언제 검증하고, 어떤 순서로 움직일지까지 포함합니다.
- **확장성이 큼**: 작은 스킬 집합보다, 하네스 자체를 표준화하는 쪽에 더 어울립니다.

## 이런 경우에 적합합니다

- 여러 에이전트 도구를 같은 기준으로 운영하고 싶을 때
- 설치와 규칙을 프로젝트마다 다시 설명하고 싶지 않을 때
- 보안, 메모리, 리서치, 작업 흐름까지 함께 정리하고 싶을 때

## 참고

- ECC는 일반적인 플러그인보다 더 넓은 개념입니다.
- “기능 하나 추가”보다 “에이전트 운영 체계 정리”에 가깝습니다.
- 그래서 이 레지스트리에서는 `agent-harness`로 분류하는 편이 의미가 분명합니다.
