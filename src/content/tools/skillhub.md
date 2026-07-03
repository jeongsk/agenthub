---
title: "SkillHub"
description: "기업 내부에서 에이전트 스킬을 게시·검색·설치·버전관리하는 self-hosted 오픈소스 스킬 레지스트리입니다. RBAC, 감사 로그, 팀 네임스페이스, CLI 설치 흐름을 갖춘 사내 Agent skill hub를 만들 때 유용합니다."
category: "agent-infrastructure"
tags: ["skill-registry", "agent-skills", "self-hosted", "enterprise-ai", "rbac", "audit-log", "version-control", "cli", "docker", "kubernetes", "java", "react"]
githubUrl: "https://github.com/iflytek/skillhub"
websiteUrl: "https://skill.xfyun.cn"
githubStars: 3745
author: "iflytek"
installCommand: "npm install -g @astron-team/skillhub"
compatibleAgents: ["Claude Code", "Codex", "Cursor", "Gemini CLI", "OpenCode", "OpenClaw"]
featured: false
icon: "PackageSearch"
---

# SkillHub

SkillHub는 조직 안에서 재사용 가능한 에이전트 스킬 패키지를 안전하게 배포하기 위한 오픈소스 레지스트리 플랫폼입니다. 사내 방화벽 안에 직접 배포하고, 팀별 네임스페이스와 권한 정책을 적용한 뒤, CLI로 스킬을 검색·설치·게시할 수 있게 해줍니다.

백엔드는 Spring Boot 3 / Java 21 기반의 멀티 모듈 구조이고, 프론트엔드는 React 19 / TypeScript / Vite로 구성되어 있습니다. 운영 환경에서는 PostgreSQL, Redis, S3 또는 MinIO 스토리지를 사용하며 Docker Compose와 Kubernetes 배포 경로를 제공합니다.

## 언제 쓰나

- 사내 Claude Code, Codex, Cursor, Gemini CLI, OpenCode 사용자에게 표준 스킬을 배포하고 싶을 때
- 공개 마켓플레이스 대신 회사 내부의 private skill registry가 필요할 때
- 팀별 네임스페이스, Owner/Admin/Member 역할, 게시 승인, 감사 로그가 필요한 엔터프라이즈 환경일 때
- 스킬 패키지의 semantic versioning, latest 추적, 다운로드·별점·평점 같은 레지스트리 기능을 직접 운영하고 싶을 때
- OpenClaw/ClawHub 호환 API를 통해 기존 스킬 CLI 생태계와 연결하고 싶을 때

## 핵심 특징

- **Self-hosted registry**: Docker Compose, runtime script, Kubernetes manifests로 사내 인프라에 배포할 수 있습니다.
- **스킬 게시와 버전관리**: skill package 업로드, semantic version, beta/stable 태그, `latest` 추적을 지원합니다.
- **검색과 설치**: 전체 텍스트 검색, 네임스페이스·다운로드·평점·최신순 필터, CLI 설치 흐름을 제공합니다.
- **팀 네임스페이스와 RBAC**: 팀 단위 멤버십과 Owner/Admin/Member 권한으로 스킬 공개 범위와 게시 권한을 제어합니다.
- **거버넌스와 감사**: 팀 관리자 리뷰, global scope 승격 게이트, 감사 로그로 조직 내 배포 이력을 추적합니다.
- **CLI-first 운영**: 공식 `@astron-team/skillhub` CLI와 REST API를 제공하고, OpenClaw/ClawHub 스타일 registry client 호환 계층도 갖추고 있습니다.
- **스토리지 교체 가능**: 개발용 local filesystem과 운영용 S3/MinIO를 설정으로 바꿀 수 있습니다.

## 빠른 시작

공식 런타임 스크립트로 전체 스택을 바로 실행할 수 있습니다.

```bash
rm -rf /tmp/skillhub-runtime
curl -fsSL https://imageless.oss-cn-beijing.aliyuncs.com/runtime.sh | sh -s -- up
```

운영 배포에서는 public URL을 지정하는 것이 좋습니다.

```bash
curl -fsSL https://imageless.oss-cn-beijing.aliyuncs.com/runtime.sh | sh -s -- up --public-url https://skillhub.your-company.com
```

로컬 개발 환경은 저장소를 클론한 뒤 Makefile로 실행합니다.

```bash
git clone https://github.com/iflytek/skillhub.git
cd skillhub
make dev-all
```

기본 개발 엔드포인트는 Web UI `http://localhost:3000`, Backend API `http://localhost:8080`입니다.

## CLI 사용

공식 CLI는 npm 패키지 `@astron-team/skillhub`로 배포됩니다.

```bash
npm install -g @astron-team/skillhub
skillhub login --token sk_xxx --registry https://skill.xfyun.cn
skillhub search pdf
skillhub install pdf-parser --agent codex
skillhub list
```

registry는 `--registry`, `SKILLHUB_REGISTRY`, `~/.skillhub/config.json`, 기본값 `https://skill.xfyun.cn` 순서로 결정됩니다. CLI는 `claude-code`, `codex`, `cursor`, `gemini-cli`, `opencode`, `openclaw` 등 여러 에이전트의 user/project-level skills directory를 인식합니다.

## 참고

- 라이선스는 Apache-2.0입니다.
- GitHub 메타데이터 기준 주 언어는 Java이며, TypeScript 프론트엔드와 Bun 기반 CLI가 함께 들어 있습니다.
- 공개 SkillHub 서비스는 `https://skill.xfyun.cn`에 있으며, 조직용으로는 별도 self-hosted 인스턴스를 띄우는 구성을 전제로 합니다.
- production 배포 시 `--public-url`, 강한 bootstrap admin 비밀번호, HTTPS, 외부 S3/OSS 스토리지, PostgreSQL/Redis 바인딩 범위를 별도로 점검해야 합니다.
