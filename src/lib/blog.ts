import { marked } from 'marked';
import agentHarnessEngineeringSource from '../content/blog/2026-05-25-agent-harness-engineering-blog.md?raw';
import aiNativeCompanySource from '../content/blog/2026-05-25-ai-is-not-a-tool-company-os.md?raw';
import hashedKimSeojunSource from '../content/blog/2026-05-30-hashed-kim-seojun-ai-intention.md?raw';

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
  html?: string;
}

function renderWikiMarkdown(source: string, assetFolder: string) {
  const body = source
    .replace(/^---[\s\S]*?---\n/, '')
    // 블로그 템플릿이 post.title을 이미 <h1>으로 렌더하므로, 본문 선두의 중복 H1을 제거한다.
    .replace(/^\s*#\s+[^\n]*\n+/, '');
  const translated = body
    .replace(/!\[\[assets\/wiki-pages\/([^\]]+)\]\]/g, (_match: string, fileName: string) => {
      return `![](/blog-assets/${assetFolder}/${fileName})`;
    })
    // 노트의 상대 스크린샷 경로(screenshots/...)를 발행용 절대 경로로 변환
    .replace(/\]\(screenshots\//g, `](/blog-assets/${assetFolder}/`)
    // Obsidian 콜아웃(> [!type] 제목)을 marked가 깔끔히 렌더하도록 굵은 제목 + 본문 분리로 변환
    .replace(/^> \[![a-zA-Z]+\]\s*(.+)$/gm, '> **$1**\n>')
    .replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, '$2')
    .replace(/\[\[([^\]]+)\]\]/g, '$1');

  return marked.parse(translated, { async: false }) as string;
}

const agentHarnessEngineeringHtml = renderWikiMarkdown(agentHarnessEngineeringSource, 'agent-harness-engineering-survey');
const aiNativeCompanyHtml = renderWikiMarkdown(aiNativeCompanySource, 'ai-is-not-a-tool-company-os');
const hashedKimSeojunHtml = renderWikiMarkdown(hashedKimSeojunSource, 'hashed-kim-seojun-ai-intention');

export const blogPosts: BlogPost[] = [
  {
    slug: 'hashed-kim-seojun-ai-intention',
    title: "AI가 실행하는 시대, 인간에게 남는 건 '의도'",
    description:
      '해시드 김서준 대표가 바이브 코딩을 직접 경험한 뒤 그린 AI 시대 — 창업·VC·대학·회사의 해체와 에이전트 경제, 그리고 사람에게 남는 건 의도뿐이라는 대담을 스크린샷과 함께 정리했습니다.',
    date: '2026.05.30',
    readTime: '18분',
    category: 'Operations',
    tags: ['ai-agents', 'agent-economy', 'vibe-coding', 'blockchain', 'startup', 'future-of-work'],
    html: hashedKimSeojunHtml,
    sections: [],
  },
  {
    slug: 'ai-is-not-a-tool-company-os',
    title: 'AI는 도구가 아니라 운영체제다',
    description:
      'Diana Hu의 YC 발언을 바탕으로, AI를 직원이 쓰는 도구가 아니라 회사 전체가 그 위에서 돌아가는 운영체제로 보는 관점을 원문에 가깝게 옮긴 글입니다.',
    date: '2026.05.25',
    readTime: '20분',
    category: 'Operations',
    tags: ['ai-native', 'operating-system', 'organization', 'yc', 'closed-loop'],
    html: aiNativeCompanyHtml,
    sections: [],
  },
  {
    slug: 'agent-harness-engineering-survey',
    title: "프롬프트 다음, 컨텍스트 다음은 '하네스'다",
    description:
      '원문 노트를 가능한 한 그대로 옮겨 담은 하네스 엔지니어링 정리글입니다. 이미지, 표, 인용을 포함해 서베이 노트를 블로그 형식으로 보존합니다.',
    date: '2026.05.25',
    readTime: '10분',
    category: 'Operations',
    tags: ['ai-agents', 'harness', 'etclovg', 'survey', 'observability', 'governance'],
    html: agentHarnessEngineeringHtml,
    // 본문은 위 html(마크다운 렌더)로 표시되며, 블로그 템플릿이 html을 우선하므로
    // sections는 렌더되지 않는다. 죽은 데이터(구버전 링크 포함)를 남기지 않도록 비워 둔다.
    sections: [],
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
