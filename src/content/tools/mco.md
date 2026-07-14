---
title: "MCO"
description: "Claude Code, Codex, Gemini CLI 등 여러 AI 코딩 에이전트를 명시적으로 선택해 병렬 실행하고, 원본 답변과 실행 상태를 비교하는 CLI 오케스트레이션 레이어입니다."
category: "agent-harness"
tags: ["multi-agent", "orchestration", "code-review", "ai-coding", "cli", "parallel-execution", "python", "agent-teams"]
githubUrl: "https://github.com/mco-org/mco"
websiteUrl: "https://hivehq.dev"
githubStars: 443
author: "mco-org"
installCommand: "npx @tt-a1i/mco@latest install"
compatibleAgents: ["Claude Code", "Codex", "Gemini", "OpenCode", "Qwen Code", "GitHub Copilot", "Hermes Agent", "Pi", "Cursor"]
featured: false
icon: "Blocks"
---

# MCO

MCO는 여러 AI 코딩 에이전트를 하나의 팀처럼 조율하는 CLI-first 오케스트레이션 레이어입니다. 사용자가 선택한 에이전트와 모델에 같은 작업을 병렬로 보내거나 단계적으로 연결하고, 각 실행의 원본 답변과 운영 상태를 보존해 서로 다른 관점을 비교할 수 있게 합니다.

## 언제 쓰나

- 한 모델의 관점에 의존하지 않고 코드 리뷰·보안 리뷰·아키텍처 분석 결과를 비교하고 싶을 때
- Claude Code, Codex CLI, Gemini CLI, OpenCode, Pi 등 여러 코딩 에이전트에 구현 작업을 분산하고 싶을 때
- CI 점검, 파일 단위 분할, 에이전트 간 체인·토론·합성 워크플로를 터미널에서 재현하고 싶을 때
- 자연어 답변을 임의로 finding·severity·confidence·consensus로 변환하지 않고 원본 증거를 직접 검토하고 싶을 때

## 핵심 기능

- **명시적 에이전트 선택** — `--providers` 또는 `--agent`로 실행할 제공자·모델 팀을 지정하며, 선택하지 않은 제공자를 조용히 고르지 않습니다.
- **병렬 실행과 체이닝** — 여러 에이전트를 동시에 실행하거나 파일 기반 결과를 다음 단계로 넘길 수 있습니다.
- **리뷰·실행 모드** — `mco review`의 기본 읽기 전용 흐름과 `mco run`의 작업공간 쓰기 흐름을 구분하고, `read_only`·`write`·명시적 `yolo` 실행 프로필을 제공합니다.
- **다양한 출력** — 터미널 진행 상황, JSON/JSONL 이벤트, Markdown 및 파일 기반 아티팩트를 지원합니다.
- **제공자 어댑터** — 감지·실행·폴링·취소·전송 디코딩 계약 뒤에 각 CLI를 격리해 한 제공자의 실패가 성공한 다른 답변을 버리지 않도록 합니다.
- **호출 에이전트 연동** — 설치 시 MCO Skill을 Claude Code, Codex 등 호출 에이전트에 배포하고, 런타임에는 별도의 제공자 팀을 선택할 수 있습니다.

## 설치 및 빠른 시작

```bash
npx @tt-a1i/mco@latest install
mco doctor --json
```

읽기 전용 멀티 에이전트 리뷰:

```bash
mco review \
  --repo . \
  --prompt "Review this repository for high-risk bugs." \
  --providers claude,codex,pi
```

작업공간 쓰기가 필요한 구현 작업:

```bash
mco run \
  --repo . \
  --prompt "Implement the requested change and run the relevant tests." \
  --providers codex,pi \
  --execution-mode write
```

GitHub 저장소에서 Python 개발 설치를 할 수도 있습니다.

```bash
git clone https://github.com/mco-org/mco.git
cd mco
python3 -m pip install -e .
```

## 주의사항

- 각 제공자 CLI의 설치, 인증, 모델 접근 권한, 네이티브 샌드박스 동작은 MCO가 아니라 해당 CLI가 책임집니다.
- `--allow-paths`는 MCO가 요청한 범위를 검증할 뿐 운영체제 수준의 샌드박스가 아닙니다. 제공자별 샌드박스 강도도 다릅니다.
- `yolo` 모드는 제공자의 광범위한 승인 우회 프로필을 사용하므로 명시적으로 선택해야 합니다. Hermes oneshot과 ACP 터미널 접근도 신뢰된 환경에서 사용해야 합니다.
- MCO는 worktree를 만들거나 관리하지 않습니다. 병렬 writer를 사용할 때는 겹치지 않는 `--target-paths`로 파일 소유권을 나눠 편집 충돌을 피해야 합니다.
- 저장소 README는 MCO의 새 작업이 브라우저 기반 워크벤치인 **Hive**에서 계속된다고 안내합니다. GitHub 저장소의 현재 설명·홈페이지는 이 관계를 반영하며, MCO는 원래의 CLI 오케스트레이션 도구로 이해하는 것이 정확합니다.
- GitHub 저장소의 `package.json`·`pyproject.toml` 버전은 0.11.0이지만, 조사 시점 npm 레지스트리의 `@tt-a1i/mco` 최신 메타데이터는 0.10.8로 확인되었습니다. 설치 전 배포 버전 차이를 확인하는 편이 좋습니다.

MIT 라이선스로 배포됩니다.
