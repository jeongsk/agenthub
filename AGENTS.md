# AgentHub — 에이전트를 위한 프로젝트 가이드

## 프로젝트 개요

**AgentHub**는 AI 에이전트 스킬, MCP 서버, 플러그인, 브라우저 확장 프로그램을 위한 오픈소스 레지스트리 웹사이트입니다. 데이터베이스 없이 GitOps 방식(Markdown + PR)으로 운영됩니다.

- **프레임워크**: Astro v6 + TypeScript (strict)
- **CSS**: 커스텀 CSS 변수 + 글래스모피즘 디자인 시스템 (Tailwind 없음)
- **아이콘**: Lucide (`@lucide/astro`)
- **폰트**: Inter (본문) + Outfit (제목) — Google Fonts
- **빌드 출력**: 정적 사이트 → `dist/`
- **배포 대상**: Cloudflare Pages
- **Node.js**: >= 22.12.0

## 주요 디렉토리 구조

```
agenthub/
  src/
    components/       # UI 컴포넌트 (Card, Header, Footer, Layout, GitHub 아이콘)
    content/
      skills/         # 🔥 레지스트리 데이터 (Markdown + YAML frontmatter)
    content.config.ts # Content Collections 스키마 정의
    layouts/          # Layout.astro (메인 레이아웃)
    pages/            # 라우트: index.astro, submit.astro, skills/[...slug].astro
    styles/           # global.css (디자인 시스템)
  skills/             # 루트 skills/ — 웹사이트 레지스트리와 별개, AI 에이전트 스킬 정의
    analog-reading-note-image/
      SKILL.md
      agents/openai.yaml
  public/             # 정적 에셋 (파비콘)
```

## 콘텐츠 스키마 (`src/content/skills/` 의 YAML frontmatter)

```yaml
title: Skill Name
description: Short summary
category: mcp-server | agent-skill | plugin | browser-extension
tags: [keyword1, keyword2]
githubUrl: https://github.com/user/repo
githubStars: 1234                    # GitHub star snapshot
author: github-username
installCommand: pip install ...      # optional
compatibleAgents: [Gemini, Claude]   # 필수
featured: true                       # optional, default false
icon: Terminal                       # optional, Lucide icon name, default "Terminal"
```

## 사용 가능한 명령어

| 명령어 | 설명 |
|--------|------|
| `npm run dev` | 로컬 개발 서버 시작 (localhost:4321) |
| `npm run build` | 프로덕션 빌드 → `dist/` |
| `npm run preview` | 빌드된 사이트 미리보기 |
| `npm run astro` | Astro CLI 직접 실행 |

## 디자인 시스템 규칙

- **다크 테마** 기반 (CSS 커스텀 프로퍼티)
- **글래스모피즘**: `.glass-panel`, `.glass-card`, `.glass-input` 클래스
- **그라디언트**: `.text-gradient`, `.btn-grad`
- **카테고리별 색상**:
  - `mcp-server` → 시안 (cyan)
  - `agent-skill` → 바이올렛 (violet)
  - `plugin` → 로즈 (rose)
  - `browser-extension` → 옐로우 (yellow)
- 반응형 브레이크포인트: 992px, 768px, 640px

## 중요 참고사항

1. **데이터베이스 없음**: 모든 콘텐츠는 `src/content/skills/*.md` 파일로 관리되며, PR 기반 GitOps로 기여합니다.
2. **Astro Content Collections v5+** 사용: `glob` 로더 + `zod` 스키마 검증.
3. **클라이언트 상호작용**: 검색, 탭 전환, Markdown 생성, 클립보드 복사는 vanilla TypeScript (`<script>` 블록)로 구현.
4. **ESLint / Prettier / 테스트 미구성**: 현재 lint, format, test 스크립트가 없습니다.
5. 루트 `skills/` 디렉토리와 `src/content/skills/`는 **다른 목적**입니다:
   - `src/content/skills/` = 웹사이트 레지스트리 데이터
   - 루트 `skills/` = AI 에이전트가 사용하는 스킬 정의 (MCP/openai.yaml 형식)

## 새로운 기능 추가 시 확인할 것

- `src/styles/global.css` — 디자인 토큰과 유틸리티 클래스
- 기존 `.astro` 컴포넌트 — 컴포넌트 작성 패턴 참고
- `src/content.config.ts` — 콘텐츠 스키마 변경 필요 시
- `astro.config.mjs` — Astro 설정 (현재는 최소 설정)
