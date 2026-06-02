---
title: "VoxCPM"
description: "토크나이저 없는 확산 기반 다국어 TTS 시스템으로, 음성 디자인과 사실적인 음성 클로닝, 48kHz 스튜디오 품질 합성을 지원합니다."
category: "model-runtime"
tags: ["tts", "text-to-speech", "voice-cloning", "voice-design", "multilingual"]
githubUrl: "https://github.com/OpenBMB/VoxCPM"
websiteUrl: "https://voxcpm.com"
githubStars: 25068
author: "OpenBMB"
installCommand: "pip install voxcpm"
compatibleAgents: ["Claude", "Gemini", "OpenAI"]
featured: true
icon: "AudioLines"
---

# VoxCPM

VoxCPM(VoxCPM2)은 OpenBMB가 공개한 토크나이저 없는(tokenizer-free) 다국어 TTS 시스템입니다. 200만 시간 이상의 음성 데이터로 학습한 2B 파라미터 모델로, 확산 기반 오토리그레시브 아키텍처를 통해 30개 언어에서 자연스럽고 표현력 있는 48kHz 스튜디오 품질 음성을 생성합니다.

## 언제 쓰나

- 30개 언어의 고품질 음성을 언어 태그 없이 합성하고 싶을 때
- 텍스트 설명(나이·성별·톤·감정)만으로 새 목소리를 디자인하고 싶을 때
- 참조 음성으로 사실적인 음성 클로닝을 하고 싶을 때
- 실시간 스트리밍이 필요한 음성 서비스를 구축하고 싶을 때

## 특징

- **Voice Design**: 자연어 설명만으로 원하는 목소리를 생성합니다.
- **제어 가능한 클로닝**: 스타일 가이드와 함께 음성을 복제하고, 참조 음성+전사로 미세한 발성 뉘앙스까지 재현합니다.
- **실시간 스트리밍**: RTX 4090에서 RTF ~0.3, Nano-vLLM 사용 시 ~0.13 수준입니다.
- **다국어·방언**: 30개 언어와 9개 중국어 방언을 지원합니다.
- **컨텍스트 인식 프로소디**: 내용에서 적절한 억양을 자동으로 추론합니다.
- **다양한 사용 경로**: Python API, CLI(`voxcpm design/clone/batch`), Gradio 웹 데모, vLLM 기반 프로덕션 서빙을 지원합니다.

> Python ≥3.10(<3.13), PyTorch ≥2.5.0, CUDA ≥12.0이 필요하며 약 8GB VRAM에서 동작합니다. Apache-2.0 라이선스로 상업적 사용이 가능합니다.
