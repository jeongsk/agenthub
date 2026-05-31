---
title: "insane-search"
description: "Claude Code에서 차단된 웹사이트나 WAF, CAPTCHA, 로그인 벽을 만났을 때 대체 경로를 단계적으로 시도해 콘텐츠를 회수하는 에이전트 스킬 묶음입니다. 기본 검색이 막혔을 때의 fallback layer로 유용합니다."
category: "agent-skill"
tags: ["web-scraping", "fallback", "anti-bot", "claude-code", "search"]
githubUrl: "https://github.com/fivetaku/insane-search"
githubStars: 672
author: "fivetaku"
installCommand: "/plugin marketplace add https://github.com/fivetaku/gptaku_plugins.git && /plugin install insane-search"
compatibleAgents: ["Claude Code"]
icon: "Search"
---

# insane-search

insane-search는 Claude Code에서 막힌 웹사이트를 우회해 콘텐츠를 회수하도록 돕는 스킬 묶음입니다. 검색, URL fetch, 대체 엔드포인트, 브라우저 기반 탐색을 단계적으로 시도해 접근 회복을 노립니다.

## 언제 쓰나

- 일반 웹 검색이나 단순 fetch가 403, 429, WAF, CAPTCHA로 막힐 때
- 특정 URL의 본문을 확보해야 하는데 정적 추출로는 실패할 때
- 로그인 벽이나 차단 페이지를 만나 대체 경로가 필요한 경우
- 에이전트의 웹 접근을 primary tool이 아니라 fallback layer로 두고 싶을 때

## 핵심 포인트

- **단계적 탐색**: 실패 신호가 보이면 더 강한 방법으로 넘어갑니다.
- **차단 대응**: WAF, CAPTCHA, empty SPA, login wall 같은 상황을 고려합니다.
- **브라우저 연동**: 필요할 때 실제 브라우저 단계까지 올려서 탐색합니다.
- **fallback 지향**: 기본 검색보다, 막혔을 때의 복구 경로에 초점이 있습니다.

## 참고

- 이 저장소는 일반적인 검색 도구라기보다, *접근 복구용 웹 처리 스킬*에 가깝습니다.
- 그래서 이 레지스트리에서는 `agent-skill`로 분류하는 편이 자연스럽습니다.
