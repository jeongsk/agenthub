export const REMOTE_REGISTRY_URL =
  'https://raw.githubusercontent.com/jeongsk/agenthub/refs/heads/main/public/metadata.json';
export const FALLBACK_REGISTRY_URL = '/metadata.json';

export const categories = ['mcp-server', 'agent-skill', 'plugin', 'browser-extension'] as const;

export type Category = (typeof categories)[number];

export interface RegistryItem {
  slug: string;
  title: string;
  description: string;
  category: Category;
  tags: string[];
  githubUrl: string;
  author: string;
  installCommand?: string;
  compatibleAgents: string[];
  featured?: boolean;
  icon: string;
  content?: string;
  readmeUrl?: string;
}

export interface Registry {
  version: number;
  updatedAt?: string;
  items: RegistryItem[];
}

const categorySet = new Set(categories);

export async function loadRegistry(): Promise<{ registry: Registry; source: string; dropped: number }> {
  const urls = [REMOTE_REGISTRY_URL, FALLBACK_REGISTRY_URL];
  let lastError: unknown;

  for (const url of urls) {
    try {
      const response = await fetch(url, { cache: 'no-store' });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const raw = await response.json();
      const items = Array.isArray(raw?.items) ? raw.items : [];
      const validItems = items.filter(isRegistryItem).sort(sortRegistryItems);

      return {
        registry: {
          version: Number(raw?.version) || 1,
          updatedAt: typeof raw?.updatedAt === 'string' ? raw.updatedAt : undefined,
          items: validItems,
        },
        source: url,
        dropped: items.length - validItems.length,
      };
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError instanceof Error ? lastError : new Error('레지스트리를 불러오지 못했습니다.');
}

export function categoryLabel(category: Category): string {
  return {
    'mcp-server': 'MCP 서버',
    'agent-skill': '에이전트 스킬',
    plugin: '플러그인',
    'browser-extension': '브라우저 확장',
  }[category];
}

export function badgeClass(category: Category): string {
  return {
    'mcp-server': 'badge-mcp',
    'agent-skill': 'badge-skill',
    plugin: 'badge-plugin',
    'browser-extension': 'badge-extension',
  }[category];
}

export function searchableText(item: RegistryItem): string {
  return [item.title, item.description, item.author, ...item.tags, ...item.compatibleAgents]
    .join(' ')
    .toLowerCase();
}

function isRegistryItem(item: unknown): item is RegistryItem {
  if (!item || typeof item !== 'object') return false;
  const candidate = item as Record<string, unknown>;

  return (
    stringField(candidate.slug) &&
    stringField(candidate.title) &&
    stringField(candidate.description) &&
    stringField(candidate.category) &&
    categorySet.has(candidate.category as Category) &&
    stringField(candidate.githubUrl) &&
    stringField(candidate.author) &&
    stringField(candidate.icon) &&
    stringArray(candidate.tags) &&
    stringArray(candidate.compatibleAgents)
  );
}

function stringField(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

function stringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((entry) => typeof entry === 'string' && entry.trim().length > 0);
}

function sortRegistryItems(a: RegistryItem, b: RegistryItem): number {
  if (a.featured && !b.featured) return -1;
  if (!a.featured && b.featured) return 1;
  return a.title.localeCompare(b.title, 'ko-KR');
}
