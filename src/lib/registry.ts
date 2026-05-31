/**
 * AgentHub Registry — 카테고리 정의 단일 진실 공급원
 *
 * 모든 카테고리 관련 데이터(한국어 레이블, 아이콘, 색상, 설명, 배지 클래스)는
 * 이 파일에서만 정의하고, 컴포넌트는 항상 여기를 참조합니다.
 *
 * ───────────────────────────────────────────────────────────────────────────
 * 분류 규칙 (도구를 어떤 category에 넣을지 판단하는 기준)
 *
 * 1. 우선순위(이중 축 해소): 도구의 1차 정체성이 "에이전트 구성요소"
 *    (agent-skill / agent-framework / agent-harness / agent-infrastructure /
 *     mcp-server / model-runtime)면 에이전트 축으로 분류하고, 전달 형태는 태그로
 *    표기한다. 에이전트 구성물이 *아닐* 때만 형태 카테고리(cli-utility /
 *    desktop-utility / plugin / browser-extension)를 쓴다.
 *
 * 2. agent-* 4종 판별선:
 *    - agent-skill          = 기존 에이전트에 "로드되는 능력 콘텐츠"(프롬프트/커맨드/
 *                             서브에이전트). 자체 런타임 없음.
 *    - agent-framework      = 에이전트를 "코드로 만드는" 라이브러리·SDK(import 후 작성).
 *    - agent-harness        = "기존 에이전트를 감싸/구동/병렬화"하는 턴키 오케스트레이터.
 *    - agent-infrastructure = 에이전트가 "호출하는" 재사용 런타임/저장소(메모리·지식·
 *                             프록시·보안 검사 등).
 *    → 빌드 vs 오케스트레이트 = framework↔harness 선. 콘텐츠 vs 런타임 = skill↔infra 선.
 *
 * 3. model-runtime = 모델 추론·음성합성 등 "모델 레이어" 엔진/런타임(에이전트 그 자체가 아님).
 *
 * 4. plugin vs agent-skill: IDE/Claude Code "플러그인"으로 배포(플러그인 매니페스트/마켓)면
 *    plugin; `.claude/skills`에 설치되는 능력 묶음이면 agent-skill.
 *
 * 5. 형태 통제 태그: cli, desktop-app, web-app, terminal, mcp 등 2차 축은 태그로 일관 표기.
 *    단, 카테고리 id와 같은 이름의 태그는 쓰지 않는다(tags.ts에서 drop). 태그=도메인/기술/
 *    플랫폼, 카테고리=산출물 종류.
 * ───────────────────────────────────────────────────────────────────────────
 */

export const CATEGORY_IDS = [
  // 에이전트 패밀리
  'agent-skill',
  'agent-framework',
  'agent-harness',
  'agent-infrastructure',
  // 에이전트 인접 인프라
  'mcp-server',
  'model-runtime',
  // 전달 형태
  'cli-utility',
  'desktop-utility',
  'plugin',
  'browser-extension',
] as const;

export type CategoryId = (typeof CATEGORY_IDS)[number];

export interface CategoryConfig {
  id: CategoryId;
  /** 한국어 표시 레이블 */
  label: string;
  /** 한 줄 설명 (탭 tooltip·부제 노출용) */
  description: string;
  /** Lucide 아이콘 이름 */
  icon: string;
  /** 강조 색상 (텍스트) — CSS 색상값 */
  color: string;
  /** 배경 색상 — CSS 색상값 */
  bg: string;
  /** 테두리 색상 — CSS 색상값 */
  border: string;
}

export const CATEGORIES: Record<CategoryId, CategoryConfig> = {
  'agent-skill': {
    id: 'agent-skill',
    label: '에이전트 스킬',
    description: 'Claude Code·Codex 등 기존 에이전트에 설치해 능력을 더하는 스킬·커맨드 묶음',
    icon: 'Sparkles',
    color: 'rgb(var(--cat-agent-skill))',
    bg: 'rgba(139, 92, 246, 0.06)',
    border: 'rgba(139, 92, 246, 0.15)',
  },
  'agent-framework': {
    id: 'agent-framework',
    label: '에이전트 프레임워크',
    description: '에이전트를 코드로 직접 만드는 라이브러리·SDK',
    icon: 'Bot',
    color: 'rgb(var(--cat-agent-framework))',
    bg: 'rgba(99, 102, 241, 0.06)',
    border: 'rgba(99, 102, 241, 0.15)',
  },
  'agent-harness': {
    id: 'agent-harness',
    label: '에이전트 하네스',
    description: '기존 코딩 에이전트를 감싸 구동·병렬화·검증하는 오케스트레이터',
    icon: 'Layers3',
    color: 'rgb(var(--cat-agent-harness))',
    bg: 'rgba(20, 184, 166, 0.06)',
    border: 'rgba(20, 184, 166, 0.15)',
  },
  'agent-infrastructure': {
    id: 'agent-infrastructure',
    label: '에이전트 인프라',
    description: '에이전트가 호출하는 재사용 부품 — 메모리·지식·프록시·보안 등',
    icon: 'Blocks',
    color: 'rgb(var(--cat-agent-infrastructure))',
    bg: 'rgba(192, 38, 211, 0.06)',
    border: 'rgba(192, 38, 211, 0.15)',
  },
  'mcp-server': {
    id: 'mcp-server',
    label: 'MCP 서버',
    description: 'MCP 프로토콜로 도구·리소스를 제공하는 서버',
    icon: 'Terminal',
    color: 'rgb(var(--cat-mcp-server))',
    bg: 'rgba(6, 182, 212, 0.06)',
    border: 'rgba(6, 182, 212, 0.15)',
  },
  'model-runtime': {
    id: 'model-runtime',
    label: '모델 런타임',
    description: '모델 추론·음성합성 등을 수행하는 런타임·엔진',
    icon: 'BrainCircuit',
    color: 'rgb(var(--cat-model-runtime))',
    bg: 'rgba(249, 115, 22, 0.06)',
    border: 'rgba(249, 115, 22, 0.15)',
  },
  'cli-utility': {
    id: 'cli-utility',
    label: 'CLI 유틸리티',
    description: '터미널에서 쓰는 명령줄 도구',
    icon: 'TerminalSquare',
    color: 'rgb(var(--cat-cli-utility))',
    bg: 'rgba(100, 116, 139, 0.06)',
    border: 'rgba(100, 116, 139, 0.15)',
  },
  'desktop-utility': {
    id: 'desktop-utility',
    label: '데스크톱 유틸리티',
    description: 'GUI 데스크톱 애플리케이션',
    icon: 'Monitor',
    color: 'rgb(var(--cat-desktop-utility))',
    bg: 'rgba(245, 158, 11, 0.06)',
    border: 'rgba(245, 158, 11, 0.15)',
  },
  plugin: {
    id: 'plugin',
    label: '플러그인',
    description: 'IDE·Claude Code에 설치하는 플러그인',
    icon: 'Cpu',
    color: 'rgb(var(--cat-plugin))',
    bg: 'rgba(244, 63, 94, 0.06)',
    border: 'rgba(244, 63, 94, 0.15)',
  },
  'browser-extension': {
    id: 'browser-extension',
    label: '브라우저 확장',
    description: '브라우저에 설치하는 확장 프로그램',
    icon: 'Puzzle',
    color: 'rgb(var(--cat-browser-extension))',
    bg: 'rgba(234, 179, 8, 0.06)',
    border: 'rgba(234, 179, 8, 0.15)',
  },
};

export function categoryLabel(id: CategoryId): string {
  return CATEGORIES[id]?.label ?? id;
}

export function categoryIcon(id: CategoryId): string {
  return CATEGORIES[id]?.icon ?? 'Terminal';
}

export function categoryColor(id: CategoryId): string {
  return CATEGORIES[id]?.color ?? 'rgb(148, 163, 184)';
}

export function categoryBg(id: CategoryId): string {
  return CATEGORIES[id]?.bg ?? 'rgba(255, 255, 255, 0.03)';
}

export function categoryBorder(id: CategoryId): string {
  return CATEGORIES[id]?.border ?? 'rgba(255, 255, 255, 0.06)';
}

export function badgeClass(id: CategoryId): string {
  const map: Record<string, string> = {
    'mcp-server': 'badge-mcp',
    'agent-skill': 'badge-skill',
    'agent-framework': 'badge-framework',
    'agent-harness': 'badge-harness',
    'agent-infrastructure': 'badge-infrastructure',
    'model-runtime': 'badge-runtime',
    'desktop-utility': 'badge-utility',
    'cli-utility': 'badge-cli',
    plugin: 'badge-plugin',
    'browser-extension': 'badge-extension',
  };
  return map[id] ?? 'badge';
}

export interface SkillData {
  title: string;
  description: string;
  category: CategoryId;
  tags: string[];
  githubUrl: string;
  githubStars: number;
  author: string;
  installCommand?: string;
  compatibleAgents: string[];
  featured?: boolean;
  icon: string;
}

export function isGitHubUrl(url: string | undefined): boolean {
  return url ? url.startsWith('https://github.com/') : false;
}

export function searchableText(item: SkillData): string {
  return [item.title, item.description, item.author, ...item.tags, ...item.compatibleAgents]
    .join(' ')
    .toLowerCase();
}
