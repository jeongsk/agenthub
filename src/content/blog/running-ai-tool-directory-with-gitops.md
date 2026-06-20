---
title: "GitOps 방식으로 AI 도구 디렉토리 운영하기"
description: "데이터베이스 없이 Markdown, YAML frontmatter, Pull Request만으로 커뮤니티 레지스트리를 운영하는 AgentHub의 구조를 소개합니다."
date: "2026.05.10"
readTime: "6분"
category: "Operations"
tags: ["markdown", "astro", "cloudflare-pages"]
---

## Markdown이 데이터베이스 역할을 합니다

AgentHub는 별도 데이터베이스 없이 `src/content/tools`의 Markdown 파일을 레지스트리 데이터로 사용합니다. YAML frontmatter는 목록과 검색에 필요한 구조화된 필드가 됩니다.

이 방식은 기여자가 브라우저에서 파일 하나를 추가해 Pull Request를 만들 수 있다는 장점이 있습니다.

## 정적 빌드는 운영을 단순하게 만듭니다

Astro Content Collections가 Markdown을 검증하고 정적 페이지를 생성합니다. 배포 대상은 Cloudflare Pages라서 런타임 서버 없이 빠르게 제공할 수 있습니다.

스키마가 코드에 남아 있기 때문에 항목이 늘어나도 필수 필드 누락이나 잘못된 카테고리를 빌드 단계에서 잡을 수 있습니다.

## 리뷰는 콘텐츠 품질의 핵심입니다

오픈 레지스트리의 품질은 자동 수집보다 검토 흐름에서 나옵니다. 설치 가능성, 설명의 명확성, 라이선스, 유지보수 상태를 PR에서 확인하면 사용자에게 더 신뢰할 수 있는 목록을 제공할 수 있습니다.
