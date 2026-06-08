---
title: "Trivy"
description: "컨테이너, Kubernetes, 코드 저장소, 클라우드의 취약점·오구성·비밀정보를 한 번에 검사하는 보안 스캐너입니다. 배포 전 점검과 CI 보안 게이트에 유용합니다."
category: "cli-utility"
tags: ["security", "scanner", "vulnerability", "sbom", "kubernetes", "container", "cli"]
githubUrl: "https://github.com/aquasecurity/trivy"
websiteUrl: "https://trivy.dev"
githubStars: 36110
author: "aquasecurity"
compatibleAgents: []
icon: "Shield"
---

# Trivy

Trivy는 컨테이너와 인프라, 코드, 클라우드 설정을 함께 점검할 수 있는 범용 보안 스캐너입니다. 취약점과 비밀정보, 오구성을 한 번에 확인하고 싶을 때 가장 먼저 떠올릴 만한 도구입니다.

## 언제 쓰나

- 컨테이너 이미지와 파일시스템을 배포 전에 검사하고 싶을 때
- Kubernetes 매니페스트나 IaC 설정의 오구성을 찾고 싶을 때
- 코드 저장소에서 비밀정보나 알려진 취약점을 확인하고 싶을 때
- CI 파이프라인에 보안 게이트를 넣고 싶을 때

## 핵심 특징

- 취약점, 오구성, 비밀정보, SBOM을 폭넓게 검사합니다.
- 컨테이너와 Kubernetes, 코드 저장소, 클라우드까지 지원 범위가 넓습니다.
- 보안 점검을 반복 작업으로 자동화하기 좋습니다.
- 문서와 설치 경로가 잘 정리된 성숙한 오픈소스입니다.
