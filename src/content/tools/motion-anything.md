---
title: "motion-anything"
description: "한 문장으로 웹 애니메이션과 런치 영상을 만들고, 실행 중인 페이지에서 컴포넌트별 모션을 편집하는 로컬 우선 모션 엔진입니다."
category: "agent-harness"
tags: ["motion-design", "web-animation", "coding-agent", "ai-agent", "webgl", "lottie", "video", "byok"]
githubUrl: "https://github.com/nexu-io/motion-anything"
githubStars: 351
author: "nexu-io"
installCommand: "git clone https://github.com/nexu-io/motion-anything.git && cd motion-anything && node cli/bin/motion.js serve 4399"
compatibleAgents: ["Claude Code", "Codex", "Cursor", "OpenCode", "Grok Build", "Hermes Agent", "Gemini CLI", "Open Design Cloud"]
featured: false
icon: "Sparkles"
---

# motion-anything

motion-anything은 코딩 에이전트를 활용해 웹 페이지와 영상에 모션을 추가하는 로컬 우선 모션 엔진입니다. 원하는 분위기나 효과를 한 문장으로 설명하면 애니메이션 페이지를 만들고, 실행 중인 페이지에서 컴포넌트 단위로 모션을 다시 편집한 뒤 소스 파일에 반영할 수 있습니다.

## 언제 쓰나

- AI가 만든 랜딩 페이지에 직접 모션을 추가하고 다듬고 싶을 때
- CSS를 처음부터 작성하지 않고 의도 중심으로 웹 애니메이션을 선택하고 싶을 때
- 웹 페이지나 제품 런치 영상을 로컬에서 만들고 MP4·GIF·HTML로 내보내고 싶을 때
- Claude Code, Codex, Cursor, Gemini CLI 등 이미 사용하는 코딩 에이전트를 모션 작업에 연결하고 싶을 때

## 주요 기능

- 실행 중인 페이지에서 `On load`, `On scroll`, `On hover`, `On click` 트리거와 프리셋을 적용
- 스크럽과 자동 키프레임을 지원하는 6트랙 키프레임 에디터
- 403개의 큐레이션된 모션 레시피와 의도 키워드, `avoid_when`, 절제 예산 매니페스트
- 8개 코딩 에이전트 CLI와 Anthropic·OpenAI·Google API를 직접 사용하는 BYOK 모드
- 컴포넌트 모션을 JSON·CSS·React·Lottie로, 페이지를 MP4·GIF·단일 HTML로 내보내기
- 텍스트·도형·이미지·영상 레이어와 장면 전환을 지원하는 브라우저 기반 런치 영상 컴포지터
- `prefers-reduced-motion` 존중, GPU 안전 속성 사용, 워터마크 및 렌더링별 요금 없음

## 설치와 빠른 시작

```bash
git clone https://github.com/nexu-io/motion-anything.git
cd motion-anything
node cli/bin/motion.js serve 4399
# http://localhost:4399 접속
```

npm 의존성이 없는 구조이며 Node.js 18 이상이 필요합니다. 생성 작업을 실행하려면 지원되는 에이전트 CLI가 PATH에 있거나 설정에서 BYOK API 키를 제공해야 합니다.

## 참고

- 현재 저장소의 README는 v0.1 단계로 소개하며, 기능과 인터페이스가 변경될 수 있습니다.
- 에이전트 호출은 사용자의 로컬 CLI 세션 또는 사용자가 제공한 API 키를 사용합니다. 지원 엔진별 인증·설치 요구사항은 각 엔진 문서를 확인해야 합니다.
- 모션 레시피 일부는 외부 소스를 이식한 것이므로 저장소의 `ATTRIBUTION.md`와 Apache-2.0 라이선스를 함께 확인하세요.
- MP4 내보내기는 브라우저 WebCodecs를 사용하므로 브라우저 지원 여부에 따라 사용 가능 범위가 달라질 수 있습니다.
