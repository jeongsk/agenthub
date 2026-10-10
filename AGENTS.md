# AgentHub — 에이전트를 위한 프로젝트 가이드

## 프로젝트 개요

**AgentHub**는 AI 에이전트 스킬, MCP 서버, 플러그인, 하네스, CLI·데스크톱 유틸리티, 브라우저 확장 프로그램을 위한 오픈소스 레지스트리 웹사이트입니다. 데이터베이스 없이 GitOps 방식(Markdown + PR)으로 운영됩니다.

- **사이트**: https://agenthub.jeongsk.work
- **프레임워크**: Astro v6 + TypeScript (strict)
- **CSS**: 커스텀 CSS 변수 + 글래스모피즘 디자인 시스템 (Tailwind 없음)
- **아이콘**: Lucide (`@lucide/astro`)
- **폰트**: Inter (본문) + Outfit (제목) — Google Fonts
- **빌드 출력**: 정적 사이트 → `dist/`
- **배포 대상**: Cloudflare Pages (`main`에 push되면 자동 빌드·배포)
- **Node.js**: >= 22.12.0

## 주요 디렉토리 구조

```
agenthub/
  src/
    components/       # UI 컴포넌트 (Card, Header, Footer, icons/GitHub)
    content/
      tools/          # 🔥 레지스트리 데이터 (Markdown + YAML frontmatter)
      blog/           # 블로그 글 (Markdown + YAML frontmatter)
    content.config.ts # Content Collections 스키마 정의 (skills, blog)
    data/
      stars.json      # GitHub star 라이브 값 (봇이 매일 갱신, 직접 수정 금지)
    layouts/          # Layout.astro (메인 레이아웃)
    lib/              # 데이터 로더·헬퍼 (skills.ts, registry.ts, blog.ts, tags.ts, github.ts)
    pages/            # 라우트 (아래 "라우트" 참고)
    styles/           # global.css (디자인 시스템)
  scripts/
    update-stars.mjs      # tools/*.md의 githubUrl로 GitHub GraphQL을 조회해 src/data/stars.json 갱신
    validate-content.mjs  # tools/*.md frontmatter 검증 (카테고리, 필수 필드, kebab-case 파일명, 중복 slug)
  .github/workflows/
    update-stars.yml  # 매일 18:00 UTC(한국시간 03:00) update-stars 실행 → 변경 시 stars.json 커밋·push
  skills/             # 루트 skills/ — 웹사이트 레지스트리와 별개, AI 에이전트 스킬 정의
    analog-reading-note-image/
    image-optimizer/
    spec-implementation-notes/
    youtube-learning-notes/
  hermes/
    profiles/buddha/  # Hermes Agent용 에이전트 프로필(SOUL.md, profile.yaml, memories/) — 사이트 빌드와 무관
  public/
    _redirects        # /skills/* → /tools/* 301 (레거시 URL)
    tool-screenshots/ # 도구 상세 페이지 스크린샷 (WebP)
    blog-assets/      # 블로그 글별 이미지
    favicon.*
```

## 라우트 (`src/pages/`)

| 경로 | 파일 | 설명 |
|------|------|------|
| `/` | `index.astro` | 홈 (검색, 카테고리 탭, 도구 카드) |
| `/tools/` | `tools/index.astro` | `/`로 리다이렉트 (별도 목록 페이지 없음) |
| `/tools/<slug>` | `tools/[...slug].astro` | 도구 상세 |
| `/tags/` | `tags/index.astro` | 태그 목록 |
| `/tags/<tag>` | `tags/[tag].astro` | 태그별 도구 |
| `/blog` | `blog.astro` | 블로그 목록 |
| `/blog/<slug>` | `blog/[slug].astro` | 블로그 글 |
| `/submit` | `submit.astro` | 도구 등록 안내 |

## 콘텐츠 스키마

### 도구 (`src/content/tools/*.md`)

컬렉션 이름은 역사적 이유로 `skills`이지만(`getCollection('skills')`), 데이터 경로는 `src/content/tools/`입니다.

```yaml
title: Tool Name
description: Short summary
category: agent-skill            # 아래 카테고리 표의 값 중 하나
tags: [keyword1, keyword2]
githubUrl: https://github.com/user/repo   # optional
websiteUrl: https://example.com           # optional
chromeWebStoreUrl: https://...            # optional (브라우저 확장)
githubStars: 0                   # optional, default 0 — 시드 값일 뿐, 아래 참고
author: github-username
installCommand: pip install ...  # optional
compatibleAgents: [Gemini, Claude]   # 필수
featured: true                   # optional, default false
icon: Terminal                   # optional, Lucide icon name, default "Terminal"
```

**GitHub star**: frontmatter의 `githubStars`는 시드 값입니다. 실제 표시·정렬에는 GitHub Actions(`update-stars.yml`)가 매일 갱신하는 `src/data/stars.json` 값이 `src/lib/skills.ts`의 `getResolvedSkills()`에서 덮어씌워집니다. 새 도구는 `githubStars`를 생략하거나 `0`으로 두면 됩니다. 페이지에서 도구 목록을 읽을 때는 `getCollection('skills')`를 직접 쓰지 말고 반드시 `getResolvedSkills()`를 거치세요.

**카테고리 추가·변경 시** 다음을 함께 맞춰야 합니다: `src/content.config.ts`(enum), `src/lib/registry.ts`(`CATEGORY_IDS`, `CATEGORIES`), `scripts/validate-content.mjs`, `src/styles/global.css`(`--cat-*` 색상), `src/pages/submit.astro`(안내 문구).

### 블로그 (`src/content/blog/*.md`)

```yaml
title: "글 제목"
description: "요약"
date: "2026.05.24"     # YYYY.MM.DD — 표시 및 정렬(문자열 내림차순) 기준
readTime: "5분"
category: "MCP"        # 자유 문자열
tags: [mcp-server, workflow]
featured: false        # optional, default false
```

본문은 Obsidian 위키 문법(`![[...]]`, `> [!callout]`, `[[link]]`)을 쓸 수 있으며 `src/lib/blog.ts`가 변환합니다. 모든 소비처는 `getBlogPosts()`/`getBlogPost()`를 거칩니다.

## 사용 가능한 명령어

| 명령어 | 설명 |
|--------|------|
| `npm run dev` | 로컬 개발 서버 시작 (localhost:4321) |
| `npm run build` | 프로덕션 빌드 → `dist/` |
| `npm run preview` | 빌드된 사이트 미리보기 |
| `npm run validate:content` | `src/content/tools/*.md` frontmatter 검증 |
| `npm run update:stars` | `src/data/stars.json` 갱신 (`GITHUB_TOKEN` 환경변수 필요) |
| `npm run astro` | Astro CLI 직접 실행 |

## 디자인 시스템 규칙

- **다크 테마 기본 + 라이트 테마 지원**: `prefers-color-scheme: light` 자동 적용, 헤더의 토글로 `data-theme="light|dark"` 수동 전환(`localStorage` 키 `agenthub:theme`)
- **글래스모피즘**: `.glass-panel`, `.glass-card`, `.glass-input` 클래스
- **그라디언트**: `.text-gradient`, `.btn-grad`
- **카테고리별 색상**: `global.css`의 `--cat-<category>` 변수(RGB 채널값, `rgb(var(--cat-...))`로 사용). 라이트 테마에서는 더 진한 톤으로 재정의됩니다.

  | 카테고리 | 색상 | 다크 (RGB) |
  |---|---|---|
  | `mcp-server` | 시안 | 34 211 238 |
  | `agent-skill` | 바이올렛 | 167 139 250 |
  | `agent-framework` | 인디고 | 129 140 248 |
  | `agent-harness` | 틸 | 45 212 191 |
  | `agent-infrastructure` | 퓨샤 | 232 121 249 |
  | `model-runtime` | 오렌지 | 251 146 60 |
  | `desktop-utility` | 앰버 | 251 191 36 |
  | `cli-utility` | 슬레이트 | 148 163 184 |
  | `plugin` | 로즈 | 251 113 133 |
  | `browser-extension` | 옐로우 | 253 224 71 |

- 반응형 브레이크포인트: 992px, 900px, 768px, 640px, 390px

## 중요 참고사항

1. **데이터베이스 없음**: 모든 콘텐츠는 `src/content/tools/*.md`, `src/content/blog/*.md` 파일로 관리되며, PR 기반 GitOps로 기여합니다.
2. **Astro Content Collections v5+** 사용: `glob` 로더 + `zod` 스키마 검증.
3. **클라이언트 상호작용**: 검색, 탭 전환, 테마 전환, Markdown 생성, 클립보드 복사는 vanilla TypeScript (`<script>` 블록)로 구현.
4. **ESLint / Prettier / 테스트 미구성**: lint, format, test 스크립트가 없습니다. 콘텐츠 검증은 `npm run validate:content`를 쓰세요.
5. **`repoSlugFromUrl` 중복**: `src/lib/github.ts`와 `scripts/update-stars.mjs`에 같은 로직이 의도적으로 중복돼 있습니다. 한쪽을 고치면 양쪽을 맞추세요.
6. 루트 `skills/` 디렉토리와 `src/content/tools/`는 **다른 목적**입니다:
   - `src/content/tools/` = 웹사이트 레지스트리 데이터
   - 루트 `skills/` = AI 에이전트가 사용하는 스킬 정의 (`SKILL.md`, 일부는 `agents/openai.yaml`)

## 새로운 기능 추가 시 확인할 것

- `src/styles/global.css` — 디자인 토큰과 유틸리티 클래스
- 기존 `.astro` 컴포넌트 — 컴포넌트 작성 패턴 참고
- `src/content.config.ts` — 콘텐츠 스키마 변경 필요 시
- `src/lib/` — 데이터 로더(`skills.ts`, `blog.ts`)와 카테고리 메타데이터(`registry.ts`)
- `astro.config.mjs` — Astro 설정 (현재는 최소 설정)
