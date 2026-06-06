---
title: "autoskills"
description: "프로젝트의 기술 스택을 자동 감지해서 맞는 AI 에이전트 스킬을 설치해 주는 CLI 도구입니다. React·Next.js·Astro·Tailwind 같은 스택을 쓰는 프로젝트에서, 수동으로 스킬을 고르지 않고 바로 맞춤형 AI 작업 환경을 깔고 싶을 때 유용합니다."
category: "cli-utility"
tags: ["ai-skills", "cli", "automation", "project-scanning", "security", "nodejs", "typescript", "agent-skills"]
githubUrl: "https://github.com/midudev/autoskills"
websiteUrl: "https://autoskills.sh"
githubStars: 5866
author: "midudev"
installCommand: "npx autoskills"
compatibleAgents: ["Claude Code", "Codex", "Cursor", "OpenCode"]
featured: false
icon: "WandSparkles"
---

# autoskills

autoskills는 프로젝트를 스캔해 기술 스택을 판별하고, 그에 맞는 AI 에이전트 스킬을 자동으로 설치하는 CLI 도구입니다. `package.json`, Gradle 파일, 설정 파일을 읽어서 필요한 스킬만 골라 내려받기 때문에, 프로젝트별로 맞춤형 AI 작업 환경을 빠르게 세팅할 때 적합합니다.

## 언제 쓰나

- 새 프로젝트를 열자마자 그 스택에 맞는 에이전트 스킬을 한 번에 깔고 싶을 때
- React, Next.js, Vue, Astro, Tailwind 같은 웹 스택에 맞는 스킬을 자동으로 고르고 싶을 때
- 수동으로 스킬 레포를 뒤지지 않고, 검증된 curated registry만 쓰고 싶을 때
- AI 에이전트용 스킬 설치를 표준화해서 팀별 세팅 시간을 줄이고 싶을 때
- 설치 전후에 해시 검증과 잠금 파일 기반 추적이 필요한 보안 민감 환경에서 쓸 때

## 주요 기능

- **스택 자동 감지** — `package.json`, Gradle, 각종 config 파일을 스캔해 기술 스택을 찾습니다.
- **맞춤형 스킬 선택** — 프로젝트에 필요한 스킬만 curated registry에서 골라 설치합니다.
- **검증된 다운로드** — SHA-256 manifest로 파일 무결성을 확인합니다.
- **잠금 파일 기록** — 설치된 소스와 번들 해시를 `skills-lock.json`에 남깁니다.
- **간단한 실행** — 별도 설정 없이 `npx autoskills`로 바로 시작할 수 있습니다.

## 설치

```bash
npx autoskills
```

옵션:

```bash
-y, --yes     확인 프롬프트 생략
--dry-run     실제 설치 없이 미리보기
-h, --help    도움말 출력
```

## 참고

- 지원 스택: React, Next.js, Vue, Astro, Tailwind CSS, shadcn/ui, TypeScript, Node.js, Go, Bun, Deno, Spring Boot, Expo, Flutter, Tauri, Electron, Prisma, Drizzle, Vercel, Cloudflare, Terraform 등
- 라이선스: CC BY-NC 4.0
