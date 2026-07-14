---
title: "Desktop Commander MCP"
description: "터미널 명령 실행, 파일 검색·편집, 장기 프로세스 관리와 문서·스프레드시트 처리를 제공하는 MCP 서버입니다."
category: "mcp-server"
tags: ["mcp", "terminal", "filesystem", "file-editing", "process-management", "code-editing", "excel", "pdf", "docx", "docker"]
githubUrl: "https://github.com/wonderwhy-er/DesktopCommanderMCP"
websiteUrl: "https://desktopcommander.app/"
githubStars: 7780
author: "wonderwhy-er"
installCommand: "npx @wonderwhy-er/desktop-commander@latest setup"
compatibleAgents: ["Claude Desktop", "Claude Code", "Codex", "Cursor", "Gemini CLI", "VS Code", "Cline", "Roo Code", "Windsurf"]
featured: false
icon: "Terminal"
---

# Desktop Commander MCP

**Desktop Commander MCP**는 AI 에이전트가 로컬 컴퓨터의 터미널과 파일을 다룰 수 있도록 해 주는 MCP 서버입니다. 명령 실행과 프로세스 제어를 넘어 파일 검색·부분 수정·문서 분석까지 한 대화 안에서 처리할 수 있도록 구성되어 있습니다.

## 언제 쓰나

- 에이전트가 로컬 프로젝트에서 셸 명령을 실행하고 결과를 확인해야 할 때
- 코드와 텍스트 파일을 검색하거나 특정 블록만 안전하게 수정할 때
- SSH 세션, 개발 서버, 데이터베이스 같은 장기 실행 프로세스를 관리할 때
- CSV, JSON, Excel, PDF, DOCX 파일을 읽고 분석하거나 변환할 때
- Claude Desktop, Claude Code, Codex, Cursor 등 MCP 클라이언트에 공통 도구를 연결할 때

## 핵심 기능

- **터미널 제어**: 명령 실행, 출력 스트리밍, 타임아웃, 백그라운드 실행, 세션·프로세스 목록 조회와 종료
- **파일시스템 작업**: 파일 읽기·쓰기, 디렉터리 생성·조회·이동, 파일 메타데이터 확인, 파일명·내용 검색
- **정밀 코드 편집**: 검색 블록 기반 치환, 여러 파일 편집, 패턴 기반 수정, fuzzy search 보조
- **문서·데이터 처리**: Excel(`.xlsx`, `.xls`, `.xlsm`), PDF, DOCX의 읽기·쓰기·검색과 데이터 분석
- **파일 미리보기**: Claude Desktop에서 Markdown, 코드, 이미지, HTML, 디렉터리와 문서를 시각적으로 확인
- **원격 MCP**: Remote Device를 통해 ChatGPT, Claude 웹 등에서 로컬 장치에 연결하는 경로도 제공합니다.
- **보안 기능**: 명령 차단 목록, 심볼릭 링크 탐색 방지, 감사 로그, Docker 기반 격리 실행을 지원합니다.

## 설치

Node.js가 설치되어 있다면 기본 설치 명령은 다음과 같습니다.

```bash
npx @wonderwhy-er/desktop-commander@latest setup
```

설치 후 MCP 클라이언트를 다시 시작합니다. 일반 MCP 클라이언트에는 다음과 같은 설정을 사용할 수 있습니다.

```json
{
  "mcpServers": {
    "desktop-commander": {
      "command": "npx",
      "args": ["-y", "@wonderwhy-er/desktop-commander@latest"]
    }
  }
}
```

Node.js를 사용하지 않거나 더 강한 격리가 필요하면 Docker 설치 스크립트 또는 `mcp/desktop-commander:latest` 이미지를 사용할 수 있습니다.

## 참고 및 주의사항

- 터미널 명령은 사용자 권한으로 실행되며, 파일 작업의 `allowedDirectories` 설정만으로 터미널 명령의 파일 접근 범위가 제한되지는 않습니다. 신뢰할 수 있는 클라이언트와 작업공간에서 사용해야 합니다.
- Docker 모드는 호스트와 분리된 환경을 제공하지만, 호스트 폴더를 마운트하면 마운트한 경로가 컨테이너에 노출됩니다.
- 저장소 README에는 macOS·Windows용 Desktop Commander 앱(Beta)도 안내되어 있습니다. MCP 서버와 데스크톱 앱은 별도 배포 경로입니다.
- 라이선스는 MIT이며, 패키지의 Node.js 요구 버전은 `>=18.0.0`입니다.
