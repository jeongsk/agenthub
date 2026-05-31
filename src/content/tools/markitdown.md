---
title: "MarkItDown"
description: "PDF·Office 문서·이미지·오디오 등 다양한 파일을 LLM이 다루기 좋은 Markdown으로 변환해 주는 마이크로소프트의 Python 도구입니다."
category: "cli-utility"
tags: ["markdown", "document-conversion", "pdf", "office", "rag"]
githubUrl: "https://github.com/microsoft/markitdown"
githubStars: 134159
author: "microsoft"
installCommand: "pip install 'markitdown[all]'"
compatibleAgents: ["Claude Code", "Codex", "Cursor", "OpenCode"]
featured: true
icon: "FileText"
---

# MarkItDown

MarkItDown은 PDF, Word·PowerPoint·Excel 같은 Office 문서, 이미지, 오디오, HTML 등 다양한 파일을 Markdown으로 변환해 주는 마이크로소프트의 Python 도구입니다. LLM과 텍스트 분석 파이프라인이 다루기 좋은 형식으로 문서를 정규화하는 데 초점을 맞춰, 문서 구조(제목·목록·표·링크 등)를 최대한 보존하며 변환합니다.

## 언제 쓰나

- PDF·Office 문서를 LLM 입력용 Markdown으로 변환하고 싶을 때
- RAG 파이프라인에서 다양한 포맷의 문서를 일관된 텍스트로 정규화하고 싶을 때
- 코딩 에이전트가 첨부 문서를 읽을 수 있게 전처리하고 싶을 때
- 이미지·오디오의 메타데이터나 전사 텍스트까지 한 번에 추출하고 싶을 때

## 특징

- **폭넓은 포맷 지원**: PDF, Word, PowerPoint, Excel, 이미지, 오디오, HTML, CSV/JSON/XML, ZIP, EPub 등을 처리합니다.
- **구조 보존 변환**: 제목·목록·표·링크 등 문서 구조를 살려 Markdown으로 변환합니다.
- **LLM 연동**: 이미지 설명 생성 등에 OpenAI 등 LLM을 옵션으로 활용할 수 있습니다.
- **에이전트 생태계 친화**: AutoGen, LangChain 등과 함께 쓰기 좋게 설계됐습니다.
- **CLI + 라이브러리 + MCP**: 명령줄 도구와 Python 라이브러리로 쓸 수 있고, 별도 `markitdown-mcp` 서버도 제공됩니다.

> 설치 시 `markitdown[all]`로 전체 의존성을 받거나, `markitdown[pdf,docx,pptx]`처럼 필요한 변환기만 선택할 수 있습니다.
