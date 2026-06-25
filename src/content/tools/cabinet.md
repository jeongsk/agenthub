---
title: "Cabinet"
description: "Markdown 파일 기반 지식 베이스에 AI 에이전트, 스케줄 작업, 미션/태스크, Git 히스토리를 결합한 self-hosted AI-first startup OS입니다."
category: "agent-framework"
tags: ["agent-framework", "knowledge-base", "startup-os", "self-hosted", "markdown", "git", "scheduled-jobs", "ai-agents", "claude-code", "codex", "opencode", "typescript", "nextjs"]
githubUrl: "https://github.com/hilash/cabinet"
websiteUrl: "https://runcabinet.com"
githubStars: 2361
author: "hilash"
installCommand: "npx create-cabinet@latest"
compatibleAgents: ["Claude Code", "Codex", "OpenCode", "Local AI CLI"]
featured: false
icon: "Archive"
---

# Cabinet

Cabinet은 지식 베이스와 AI 에이전트 팀을 하나로 묶는 self-hosted startup OS입니다. 모든 데이터는 데이터베이스가 아니라 디스크 위의 Markdown 파일로 저장되고, Git으로 변경 이력을 남기며, AI 에이전트가 goals, skills, scheduled jobs를 기반으로 작업을 수행합니다.

## 언제 쓰나

- Notion/Obsidian식 지식 베이스에 AI 에이전트 오케스트레이션을 붙이고 싶을 때
- 문서, 리서치, 계획, 미션, 태스크를 Markdown 파일과 Git 히스토리로 관리하고 싶을 때
- Claude Code, Codex CLI, OpenCode 같은 로컬 AI CLI를 지식 베이스 안에서 팀처럼 운용하고 싶을 때
- 에이전트별 역할, 스킬, 반복 작업을 설정해 Reddit 스카우트, 주간 리포트, 콘텐츠 작성 같은 일을 자동화하고 싶을 때
- 생성된 HTML 앱을 지식 베이스 폴더에 넣어 바로 embedded app으로 렌더링하고 싶을 때

## 핵심 특징

- **File-based everything**: 지식 베이스는 Markdown 파일로 저장됩니다. 데이터베이스 없이 로컬 디스크에 남기므로 이식성과 소유권이 높습니다.
- **AI agents with memory**: 각 에이전트는 목표, 스킬, 스케줄 작업을 가지며, 실행 결과가 지식 베이스에 누적됩니다.
- **Scheduled jobs**: cron 기반으로 반복 에이전트 작업을 실행할 수 있습니다.
- **Git-backed history**: 저장마다 Git 커밋을 남겨 diff 확인과 과거 버전 복원이 가능합니다.
- **WYSIWYG + Markdown editor**: Tiptap 기반 rich text editing과 Markdown을 함께 사용합니다.
- **Missions & Tasks**: 목표를 mission과 task로 쪼개고 Kanban 방식으로 추적합니다.
- **Internal chat**: 사람과 에이전트가 팀 채널에서 대화하는 구조를 제공합니다.
- **Embedded HTML apps**: 폴더에 `index.html`을 넣으면 iframe 앱으로 렌더링됩니다.
- **Web terminal**: 브라우저 안에서 로컬 AI CLI 터미널을 사용할 수 있습니다.
- **BYOAI 철학**: README 기준 현재 기본 adapter는 `claude_local`과 `codex_local`이며, provider/model/reasoning effort override를 지원합니다.

## 빠른 시작

```bash
npx create-cabinet@latest
cd cabinet
npm run dev:all
```

실행 후 브라우저에서 다음 주소를 엽니다.

```text
http://localhost:4000
```

첫 실행에서는 5개 질문으로 custom AI team을 구성하는 onboarding wizard가 실행됩니다.

## 설치와 관리

Cabinet은 global install 없이 `npx`로 실행할 수 있습니다. CLI 패키지는 `cabinetai`이고, `create-cabinet`은 그 위의 thin wrapper입니다.

```bash
npx create-cabinet@latest          # cabinet 생성 후 시작
npx cabinetai create my-startup    # 생성만 하고 시작하지 않음
npx cabinetai run                  # 현재 디렉터리에서 Cabinet 시작
npx cabinetai update               # 새 app version 확인 및 업데이트
npx cabinetai uninstall            # cached app versions 제거
npx cabinetai uninstall --all      # global state와 telemetry data까지 제거
```

Cabinet directory의 실제 데이터는 uninstall 명령으로 삭제되지 않으며, 필요하면 사용자가 직접 지워야 합니다.

## 기술 스택

- Next.js 16
- TypeScript
- Tailwind CSS
- shadcn/ui
- Tiptap
- Zustand
- xterm.js
- node-cron
- Electron packaging

## 요구사항과 설정

- Node.js 22+ 권장
- Claude Code CLI 또는 Codex CLI 같은 supported CLI provider 중 하나 이상
- source mode는 macOS, Linux, Windows 지원
- Electron desktop packaging은 macOS와 Windows 지원

환경 설정은 다음 파일에서 시작합니다.

```bash
cp .env.example .env.local
```

`KB_PASSWORD`를 설정하면 UI/API 전체에 단일 password gate가 켜집니다. 비워두면 인증 없이 실행됩니다.

## 참고

- Cabinet은 anonymous usage telemetry를 기본으로 보냅니다. README 기준 파일 내용, 경로, 프롬프트, secret은 보내지 않는다고 설명하며, `CABINET_TELEMETRY_DISABLED=1` 또는 Settings → Privacy에서 비활성화할 수 있습니다.
- 라이선스는 MIT입니다.
