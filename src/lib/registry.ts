export const categories = ['mcp-server', 'agent-skill', 'agent-harness', 'desktop-utility', 'plugin', 'browser-extension'] as const;

export type Category = (typeof categories)[number];

export interface SkillData {
  title: string;
  description: string;
  category: Category;
  tags: string[];
  githubUrl: string;
  githubStars: number;
  author: string;
  installCommand?: string;
  compatibleAgents: string[];
  featured?: boolean;
  icon: string;
}

export function categoryLabel(category: Category): string {
  return {
    'mcp-server': 'MCP 서버',
    'agent-skill': '에이전트 스킬',
    'agent-harness': '에이전트 하네스',
    'desktop-utility': '데스크톱 유틸리티',
    plugin: '플러그인',
    'browser-extension': '브라우저 확장',
  }[category];
}

export function badgeClass(category: Category): string {
  return {
    'mcp-server': 'badge-mcp',
    'agent-skill': 'badge-skill',
    'agent-harness': 'badge-harness',
    'desktop-utility': 'badge-utility',
    plugin: 'badge-plugin',
    'browser-extension': 'badge-extension',
  }[category];
}

export function isGitHubUrl(url: string): boolean {
  return url.startsWith('https://github.com/');
}

export function searchableText(item: SkillData): string {
  return [item.title, item.description, item.author, ...item.tags, ...item.compatibleAgents]
    .join(' ')
    .toLowerCase();
}
