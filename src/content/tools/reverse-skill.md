---
title: "reverse-skill"
description: "리버스 엔지니어링, 승인된 침투 테스트, 보안 연구 작업을 AI 에이전트가 대상 유형별 스킬과 도구 체인으로 라우팅하도록 돕는 보안 작업 스킬 라우터입니다."
category: "agent-skill"
tags: ["reverse-engineering", "security", "pentest", "ctf", "skill-router", "tool-orchestration"]
githubUrl: "https://github.com/zhaoxuya520/reverse-skill"
githubStars: 5270
author: "zhaoxuya520"
installCommand: "git clone https://github.com/zhaoxuya520/reverse-skill.git"
compatibleAgents: ["Claude Code", "Codex", "Cursor", "Cline", "Windsurf", "Kiro"]
featured: false
icon: "Shield"
---

# reverse-skill

reverse-skill은 리버스 엔지니어링, 승인된 침투 테스트, 보안 연구, CTF 작업을 위한 AI 에이전트용 스킬 라우터입니다. APK, 바이너리, 프론트엔드 JavaScript, HTTP 트래픽, 펌웨어, N-day 분석 같은 작업을 먼저 분류한 뒤 적절한 하위 스킬과 실제 도구 체인으로 연결하는 구조를 제공합니다.

## 언제 쓰나

- AI 코딩 에이전트에게 보안 분석 작업을 설명만 하게 두지 않고 실제 실행 경로로 라우팅하고 싶을 때
- APK, ELF/PE, JS 서명, PCAP, 펌웨어, CTF 등 대상별 분석 플레이북이 필요할 때
- jadx, apktool, Frida, IDA, radare2, BurpSuite, MCP 서버, 로컬 스크립트를 한 워크플로 안에서 정리하고 싶을 때
- 분석 결과를 보고서, 다이어그램, 필드 저널 형태로 남겨 반복 작업을 줄이고 싶을 때

## 핵심 특징

- **스킬 라우팅**: 대상 유형과 사용자 의도를 기준으로 `apk-reverse`, `ida-reverse`, `js-reverse`, `pentest-tools`, `firmware-pentest`, `pwn-chain` 등으로 분기합니다.
- **도구 오케스트레이션**: 리버스 엔지니어링과 보안 테스트에 쓰이는 CLI, MCP, 브라우저, 스크립트 엔트리포인트를 연결합니다.
- **플랫폼별 부트스트랩**: Windows, Kali Linux, 일반 Linux, macOS용 배포 문서와 도구 인덱스 갱신 스크립트를 제공합니다.
- **경험 축적**: 작업 후 재사용 가능한 명령, 패턴, 함정, 교훈을 field journal에 기록하는 흐름을 포함합니다.
- **보고서 생성**: 분석 보고서, 공격 경로, Mermaid/Graphviz/PlantUML 다이어그램, CTF writeup 생성을 지원합니다.

## 빠른 시작

```bash
git clone https://github.com/zhaoxuya520/reverse-skill.git
cd reverse-skill
bash skills/scripts/refresh-tool-index.sh
bash skills/scripts/bootstrap-reverse.sh --list
```

Kali 환경에서는 전용 엔트리포인트를 사용합니다.

```bash
bash kali/scripts/refresh-tool-index.sh
bash kali/scripts/bootstrap-reverse.sh
```

## 참고

- `skills/tool-index.md`와 `skills/tool-index.json`은 로컬 머신의 도구 상태를 반영하므로 처음 사용 전 갱신이 필요합니다.
- 보안 연구와 침투 테스트 워크플로는 승인된 범위에서 사용해야 합니다.
- README는 에이전트 부트스트랩 지시가 먼저 나오는 구조라, 사람이 이해하려면 `OVERVIEW.md`부터 읽는 편이 좋습니다.
- 라이선스는 MIT입니다.
