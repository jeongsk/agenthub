# AgentHub

AI 에이전트 생태계의 도구를 한곳에 모아 둔 오픈소스 큐레이션 레지스트리입니다.
에이전트 스킬, MCP 서버, 플러그인, 하네스, CLI·데스크톱 유틸리티, 브라우저 확장을 카테고리별로 찾아볼 수 있습니다.

**사이트**: https://agenthub.jeongsk.work

## 특징

- **데이터베이스 없음**: 모든 항목은 `src/content/tools/*.md` 마크다운 파일 하나로 관리합니다.
- **PR로 기여**: 새 도구를 추가하려면 파일 하나를 추가해 PR을 보내면 됩니다.
- **GitHub 스타 자동 갱신**: GitHub Actions(`update-stars.yml`)가 매일 각 도구의 스타 수를 업데이트합니다.
- **정적 사이트**: Astro로 빌드해 Cloudflare Pages에 배포합니다.

## 카테고리

| 값 | 설명 |
|---|---|
| `agent-skill` | 에이전트 스킬 |
| `agent-framework` | 에이전트 프레임워크 |
| `agent-harness` | 에이전트 하네스 |
| `agent-infrastructure` | 에이전트 인프라 |
| `mcp-server` | MCP 서버 |
| `model-runtime` | 모델 런타임 |
| `cli-utility` | CLI 유틸리티 |
| `desktop-utility` | 데스크톱 유틸리티 |
| `plugin` | 플러그인 |
| `browser-extension` | 브라우저 확장 |

## 도구 추가하기

`src/content/tools/<slug>.md` 파일을 만들고 아래 frontmatter를 채워 PR을 보내 주세요.

```yaml
---
title: Tool Name
description: 한 줄 설명
category: mcp-server
tags: [keyword1, keyword2]
githubUrl: https://github.com/owner/repo   # 선택
websiteUrl: https://example.com            # 선택
chromeWebStoreUrl: https://...             # 선택 (브라우저 확장)
author: github-username
installCommand: npx some-tool              # 선택
compatibleAgents: [Claude, Codex, Gemini]
featured: false                            # 선택
icon: Terminal                             # 선택, Lucide 아이콘 이름
---

도구에 대한 자세한 설명 (마크다운)
```

`githubStars`는 자동으로 갱신되므로 직접 적지 않아도 됩니다.

## 로컬 개발

Node.js 22.12 이상이 필요합니다.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ 에 정적 사이트 생성
npm run preview  # 빌드 결과 미리보기
```

## 기술 스택

Astro 6 · TypeScript · 커스텀 CSS(글래스모피즘 다크 테마) · Lucide 아이콘 · Cloudflare Pages

## 라이선스

MIT
