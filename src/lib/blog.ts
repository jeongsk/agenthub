export interface BlogSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  sections: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'agent-harness-engineering-survey',
    title: "프롬프트 다음, 컨텍스트 다음은 '하네스'다",
    description:
      'LLM 에이전트의 신뢰성은 모델 성능보다 실행 환경, 도구 계약, 관측, 검증, 거버넌스가 좌우합니다. ETCLOVG 관점으로 하네스 엔지니어링을 정리합니다.',
    date: '2026.05.25',
    readTime: '10분',
    category: 'Operations',
    tags: ['ai-agents', 'harness', 'survey', 'observability', 'governance'],
    sections: [
      {
        heading: '왜 하네스가 중요해졌나',
        paragraphs: [
          '모델이 좋아질수록 병목은 점점 모델 바깥으로 이동합니다. 실제 프로덕션에서는 어떤 프롬프트를 쓰는지보다 어떤 실행 환경, 도구 계약, 컨텍스트 정책, 검증 루프를 두는지가 더 큰 차이를 만듭니다.',
          '이 글은 2026년 공개된 Agent Harness Engineering 서베이를 바탕으로, 에이전트를 운영 가능한 시스템으로 만드는 핵심 레이어를 압축해 정리한 글입니다.',
        ],
      },
      {
        heading: '모델이 같아도 점수는 달라집니다',
        paragraphs: [
          'LangChain은 `gpt-5.2-codex`를 고정한 상태에서 하네스만 바꿔 Terminal Bench 점수를 52.8에서 66.5까지 끌어올렸습니다. 같은 모델인데도 13점이 넘는 차이가 났다는 사실은, 하네스가 부수 장식이 아니라 성능을 좌우하는 본체라는 점을 보여줍니다.',
          '즉, "어떤 모델을 쓸까"만 보지 말고 "모델 주변에 어떤 시스템을 둘까"를 같이 봐야 합니다.',
        ],
      },
      {
        heading: 'ETCLOVG는 하네스를 7계층으로 나눕니다',
        paragraphs: [
          '서베이는 하네스를 Execution, Tool, Context, Lifecycle, Observability, Verification, Governance의 7개 관심사로 나눕니다. 이 분해가 중요한 이유는, 프로토타입에서 보이지 않던 운영 이슈가 어느 레이어에서 생기는지 추적할 수 있게 해주기 때문입니다.',
        ],
        bullets: [
          'E — Execution environment: 컨테이너, microVM, 브라우저, OS 권한 경계',
          'T — Tool interface & protocol: tool schema, MCP, function calling',
          'C — Context & memory management: retrieval, compaction, long-term memory',
          'L — Lifecycle & orchestration: 단일/멀티 에이전트 루프, task pipeline',
          'O — Observability & operations: tracing, latency, 비용, 실패 진단',
          'V — Verification & evaluation: 벤치마크, 회귀 평가, trajectory capture',
          'G — Governance & security: 권한 제어, 정책, 감사 추적, guardrails',
        ],
      },
      {
        heading: '운영에서 특히 비는 영역은 O와 G입니다',
        paragraphs: [
          '오픈소스 에이전트 프로젝트는 샌드박스(E), 도구(T), 루프(L), 평가(V)는 비교적 빨리 채웁니다. 반면 관측(O)과 거버넌스(G)는 뒤늦게 붙는 경우가 많습니다.',
          '하지만 실제 운영으로 넘어가면 O와 G가 없어서 생기는 문제를 제일 먼저 마주칩니다. 누가 무엇을 실행했는지, 어떤 권한이 사용됐는지, 실패가 어디서 났는지를 볼 수 있어야 롤아웃과 복구가 가능합니다.',
        ],
      },
      {
        heading: '하네스 변경은 시스템 변경으로 다뤄야 합니다',
        paragraphs: [
          '프롬프트, 도구, 샌드박스, 검증기, 모니터를 따로 최적화하면 좋아 보이는 변경도 전체 루프와 합쳐졌을 때는 깨질 수 있습니다. 그래서 하네스 변경은 국소 패치가 아니라 시스템 변경으로 테스트해야 합니다.',
          '실무적으로는 비용·품질·속도, 능력·통제의 균형을 같이 보면서, 어느 지점에서 사람이 개입하고 어느 지점에서 자동화할지 명시해야 합니다.',
        ],
      },
      {
        heading: '지금 당장 점검할 것',
        bullets: [
          '도구 스키마와 권한 범위가 실제 작업에 맞는지 확인하기',
          '장기 실행 에이전트라면 컨텍스트 압축과 상태 복원 전략을 분리하기',
          'trace와 outcome score를 같이 남겨 회귀 분석이 가능하게 만들기',
          'human handoff 시 intent, permissions, artifacts, risk level까지 넘기기',
        ],
        paragraphs: [
          '하네스 엔지니어링은 모델을 대체하는 일이 아니라, 모델이 실제 업무를 안전하게 끝낼 수 있도록 바깥을 설계하는 일입니다.',
        ],
      },
      {
        heading: '더 읽을거리',
        paragraphs: [],
        bullets: [
          'OpenReview: https://openreview.net/forum?id=eONq7FdiHa',
          '프로젝트 페이지: https://picrew.github.io/LLM-Harness/',
          '오픈소스 카탈로그: https://github.com/Picrew/awesome-agent-harness',
          'LangChain Deep Agents: https://www.langchain.com/blog/improving-deep-agents-with-harness-engineering',
        ],
      }
    ],
  },
  {
    slug: 'choosing-mcp-servers',
    title: 'MCP 서버를 고를 때 먼저 확인할 것들',
    description:
      '도구 권한, 배포 방식, 유지보수 신호를 기준으로 에이전트 워크플로에 맞는 MCP 서버를 평가하는 방법을 정리했습니다.',
    date: '2026.05.24',
    readTime: '5분',
    category: 'MCP',
    tags: ['mcp-server', 'security', 'workflow'],
    sections: [
      {
        heading: '권한 범위를 먼저 확인하세요',
        paragraphs: [
          'MCP 서버는 에이전트가 외부 시스템을 실제로 조작할 수 있게 만드는 연결점입니다. 그래서 기능 목록보다 먼저 어떤 파일, API, 계정, 네트워크 권한을 요구하는지 확인해야 합니다.',
          '권한이 넓은 서버가 항상 나쁜 것은 아니지만, 사용 목적과 권한 범위가 맞지 않으면 작은 자동화도 운영 리스크가 됩니다.',
        ],
        bullets: [
          '읽기 전용으로 충분한 작업에 쓰기 권한이 필요한지 확인합니다.',
          '토큰, 쿠키, 로컬 파일 경로 같은 민감 정보 접근 방식을 확인합니다.',
          '에이전트별 승인 흐름과 감사 로그를 남길 수 있는지 살펴봅니다.',
        ],
      },
      {
        heading: '배포와 업데이트 흐름을 봅니다',
        paragraphs: [
          '로컬에서만 실행되는 서버인지, 원격 서비스로 배포되는지에 따라 운영 방식이 크게 달라집니다. 팀에서 함께 쓸 도구라면 설치 명령보다 재현 가능한 배포 방법이 더 중요할 수 있습니다.',
          '컨테이너 이미지, 버전 태그, 릴리스 노트가 정리되어 있으면 장애 대응과 롤백도 쉬워집니다.',
        ],
      },
      {
        heading: '유지보수 신호를 읽습니다',
        paragraphs: [
          'GitHub star 수는 발견 가능성을 보여주지만, 품질을 보장하지는 않습니다. 최근 커밋, 이슈 응답, 보안 관련 수정 내역, 문서의 최신성을 함께 보는 편이 좋습니다.',
          'AgentHub의 레지스트리는 이런 신호를 한곳에서 비교하기 위한 출발점입니다. 실제 도입 전에는 작은 샌드박스 워크플로에서 먼저 검증해보세요.',
        ],
      },
    ],
  },
  {
    slug: 'why-agent-skill-registry-matters',
    title: '에이전트 스킬 레지스트리가 필요한 이유',
    description:
      '프롬프트 조각을 넘어 재사용 가능한 작업 지식으로 스킬을 관리할 때 팀의 자동화 품질이 어떻게 달라지는지 살펴봅니다.',
    date: '2026.05.17',
    readTime: '4분',
    category: 'Agent Skill',
    tags: ['agent-skill', 'registry', 'gitops'],
    sections: [
      {
        heading: '스킬은 반복 가능한 작업 지식입니다',
        paragraphs: [
          '좋은 에이전트 스킬은 단순한 프롬프트 모음이 아니라 특정 작업을 안정적으로 수행하기 위한 절차, 도구 사용법, 판단 기준을 함께 담습니다.',
          '레지스트리로 관리하면 개인의 대화창 안에 흩어진 노하우를 팀이 재사용할 수 있는 자산으로 바꿀 수 있습니다.',
        ],
      },
      {
        heading: '검색과 검토가 가능해야 합니다',
        paragraphs: [
          '스킬이 늘어나면 이름만으로는 어떤 작업에 적합한지 알기 어렵습니다. 카테고리, 태그, 호환 에이전트, 설치 방식이 함께 정리되어야 실제로 찾고 비교할 수 있습니다.',
          'GitOps 방식은 변경 이력을 남기고 리뷰를 거쳐 스킬을 업데이트할 수 있어서 운영 품질을 유지하는 데 유리합니다.',
        ],
      },
    ],
  },
  {
    slug: 'running-ai-tool-directory-with-gitops',
    title: 'GitOps 방식으로 AI 도구 디렉토리 운영하기',
    description:
      '데이터베이스 없이 Markdown, YAML frontmatter, Pull Request만으로 커뮤니티 레지스트리를 운영하는 AgentHub의 구조를 소개합니다.',
    date: '2026.05.10',
    readTime: '6분',
    category: 'Operations',
    tags: ['markdown', 'astro', 'cloudflare-pages'],
    sections: [
      {
        heading: 'Markdown이 데이터베이스 역할을 합니다',
        paragraphs: [
          'AgentHub는 별도 데이터베이스 없이 `src/content/tools`의 Markdown 파일을 레지스트리 데이터로 사용합니다. YAML frontmatter는 목록과 검색에 필요한 구조화된 필드가 됩니다.',
          '이 방식은 기여자가 브라우저에서 파일 하나를 추가해 Pull Request를 만들 수 있다는 장점이 있습니다.',
        ],
      },
      {
        heading: '정적 빌드는 운영을 단순하게 만듭니다',
        paragraphs: [
          'Astro Content Collections가 Markdown을 검증하고 정적 페이지를 생성합니다. 배포 대상은 Cloudflare Pages라서 런타임 서버 없이 빠르게 제공할 수 있습니다.',
          '스키마가 코드에 남아 있기 때문에 항목이 늘어나도 필수 필드 누락이나 잘못된 카테고리를 빌드 단계에서 잡을 수 있습니다.',
        ],
      },
      {
        heading: '리뷰는 콘텐츠 품질의 핵심입니다',
        paragraphs: [
          '오픈 레지스트리의 품질은 자동 수집보다 검토 흐름에서 나옵니다. 설치 가능성, 설명의 명확성, 라이선스, 유지보수 상태를 PR에서 확인하면 사용자에게 더 신뢰할 수 있는 목록을 제공할 수 있습니다.',
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
