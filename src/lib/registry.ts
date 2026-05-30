/**
 * AgentHub Registry — 카테고리 정의 단일 진실 공급원
 *
 * 모든 카테고리 관련 데이터(한국어 레이블, 아이콘, 색상, 배지 클래스)는
 * 이 파일에서만 정의하고, 컴포넌트는 항상 여기를 참조합니다.
 */

export const CATEGORY_IDS = [
  'mcp-server',
  'agent-skill',
  'agent-framework',
  'agent-harness',
  'agent-component',
  'desktop-utility',
  'cli-utility',
  'plugin',
  'browser-extension',
] as const;

export type CategoryId = (typeof CATEGORY_IDS)[number];

export interface CategoryConfig {
  id: CategoryId;
  /** 한국어 표시 레이블 */
  label: string;
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
  'mcp-server': {
    id: 'mcp-server',
    label: 'MCP 서버',
    icon: 'Terminal',
    color: 'rgb(34, 211, 238)',
    bg: 'rgba(6, 182, 212, 0.06)',
    border: 'rgba(6, 182, 212, 0.15)',
  },
  'agent-skill': {
    id: 'agent-skill',
    label: '에이전트 스킬',
    icon: 'Sparkles',
    color: 'rgb(167, 139, 250)',
    bg: 'rgba(139, 92, 246, 0.06)',
    border: 'rgba(139, 92, 246, 0.15)',
  },
  'agent-framework': {
    id: 'agent-framework',
    label: '에이전트 프레임워크',
    icon: 'Bot',
    color: 'rgb(129, 140, 248)',
    bg: 'rgba(99, 102, 241, 0.06)',
    border: 'rgba(99, 102, 241, 0.15)',
  },
  'agent-harness': {
    id: 'agent-harness',
    label: '에이전트 하네스',
    icon: 'Layers3',
    color: 'rgb(45, 212, 191)',
    bg: 'rgba(20, 184, 166, 0.06)',
    border: 'rgba(20, 184, 166, 0.15)',
  },
  'agent-component': {
    id: 'agent-component',
    label: '에이전트 컴포넌트',
    icon: 'Puzzle',
    color: 'rgb(232, 121, 249)',
    bg: 'rgba(192, 38, 211, 0.06)',
    border: 'rgba(192, 38, 211, 0.15)',
  },
  'desktop-utility': {
    id: 'desktop-utility',
    label: '데스크톱 유틸리티',
    icon: 'Monitor',
    color: 'rgb(251, 191, 36)',
    bg: 'rgba(245, 158, 11, 0.06)',
    border: 'rgba(245, 158, 11, 0.15)',
  },
  'cli-utility': {
    id: 'cli-utility',
    label: 'CLI 유틸리티',
    icon: 'TerminalSquare',
    color: 'rgb(148, 163, 184)',
    bg: 'rgba(100, 116, 139, 0.06)',
    border: 'rgba(100, 116, 139, 0.15)',
  },
  plugin: {
    id: 'plugin',
    label: '플러그인',
    icon: 'Cpu',
    color: 'rgb(251, 113, 133)',
    bg: 'rgba(244, 63, 94, 0.06)',
    border: 'rgba(244, 63, 94, 0.15)',
  },
  'browser-extension': {
    id: 'browser-extension',
    label: '브라우저 확장',
    icon: 'Puzzle',
    color: 'rgb(253, 224, 71)',
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
    'agent-component': 'badge-component',
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
