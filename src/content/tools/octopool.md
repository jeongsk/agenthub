---
title: "Octopool"
description: "조직의 GitHub PAT·GitHub App 계정을 풀링하고 Cloudflare 캐시로 읽기 요청을 공유하는 self-hosted GitHub relay입니다."
category: "agent-infrastructure"
tags: ["github", "cache", "rate-limit", "cloudflare", "github-app", "pat", "self-hosted", "cli", "agent-infrastructure"]
githubUrl: "https://github.com/openclaw/octopool"
websiteUrl: "https://octopool.dev"
githubStars: 102
author: "openclaw"
installCommand: "brew install openclaw/tap/octopool"
compatibleAgents: ["Claude Code", "Codex", "OpenCode", "OpenClaw", "Hermes Agent"]
featured: false
icon: "Globe"
---

# Octopool

Octopool은 조직의 GitHub 읽기 요청을 하나의 공유 relay와 캐시 계층으로 모으는 **self-hosted GitHub read relay**입니다. Cloudflare Worker가 요청을 분류하고 Edge Cache·D1 캐시를 확인한 뒤, 필요할 때만 token-free GitHub transport 또는 풀링된 PAT/GitHub App identity를 사용합니다.

## 언제 쓰나

- 여러 개발자와 봇이 동일한 public GitHub 저장소를 반복해서 읽을 때
- `gh pr view`, `gh pr checks`, `gh run list`, `gh issue list`, `gh api` 등의 호출로 GitHub rate limit이 빠르게 소진될 때
- 각자의 PAT를 노트북·CI에 배포하지 않고 조직 단위로 GitHub 읽기 용량을 공유할 때
- 에이전트 운영 환경의 GitHub 조회를 캐시·감사·rate-limit 정책 아래 두고 싶을 때

개인 개발자가 GitHub rate limit 문제를 겪지 않는다면 Octopool은 필요하지 않을 수 있습니다.

## 주요 기능

- **공유 캐시**: Edge Cache와 Cloudflare D1 read-through cache를 사용하며, 캐시 hit는 GitHub quota를 소비하지 않습니다.
- **Identity pooling**: 여러 PAT와 GitHub App installation을 하나의 pool로 묶고, Durable Object가 잔여 rate limit과 cooldown을 기준으로 identity를 선택합니다.
- **Token-free fallback**: public PR diff, patch, explicit-ref content, workflow-filtered run list 등은 가능한 경우 익명 GitHub web/raw/Git transport를 우선 사용합니다.
- **`gh` 호환 CLI**: `octopool gh ...`로 읽기 명령을 실행하거나 `octopool install-shim`으로 zsh 환경의 `gh` 읽기 호출을 가로챌 수 있습니다.
- **로컬 fallback**: mutation, secret-bearing 요청, 지원하지 않는 옵션은 서버에 보내지 않고 실제 로컬 `gh`로 넘깁니다.
- **운영 관측성**: pool·caller·identity별 cache hit, rate limit, 사용량, audit 정보를 확인할 수 있는 통계와 대시보드를 제공합니다.

## 설치와 사용

```bash
brew install openclaw/tap/octopool

octopool login
octopool install-shim
octopool whoami

octopool gh pr view 85341 -R openclaw/openclaw --json number,title,url
octopool stats
```

Go 환경에서는 다음 방식으로도 설치할 수 있습니다.

```bash
go install github.com/openclaw/octopool/cmd/octopool@latest
```

## Self-hosted 배포

조직이 직접 배포하려면 Cloudflare Workers **Paid plan**(Durable Objects와 D1), 연결할 도메인, 검증할 GitHub organization, 최소 하나의 PAT 또는 GitHub App identity가 필요합니다. 기본 배포 흐름은 저장소를 clone한 뒤 `pnpm install`, D1 migration, Cloudflare secrets 설정, `wrangler deploy` 순서입니다.

## 보안 및 제한

- 배포 설정의 `ALLOWED_GITHUB_ORG`에 속한 검증된 조직 멤버만 caller token을 발급받을 수 있습니다.
- 저장소 visibility guard 때문에 relay가 직접 처리하는 대상은 public repository입니다. private repository 요청은 각자의 로컬 `gh`로 fallback됩니다.
- PAT와 GitHub App private key는 Cloudflare Worker secret에만 보관되며 응답·D1·audit log·cache로 유출되지 않도록 설계되어 있습니다.
- Octopool은 GitHub **read relay**이므로 쓰기 작업이나 secret-bearing 요청을 원격으로 전달하는 용도로 사용하면 안 됩니다.
- Cloudflare 비용, GitHub OAuth/App 설정, 조직 membership 검증, identity secret rotation은 배포자가 직접 관리해야 합니다.

## 링크

- [공식 사이트](https://octopool.dev)
- [문서](https://docs.octopool.dev)
- [GitHub 저장소](https://github.com/openclaw/octopool)
