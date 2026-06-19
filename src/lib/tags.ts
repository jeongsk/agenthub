/**
 * AgentHub 태그 — 집계 · 정규화 · slug 단일 진실 공급원
 *
 * 모든 태그 관련 로직(정규화/별칭, slug 변환, 집계, 관련 태그)은 이 파일에서만
 * 정의하고, 페이지/컴포넌트는 항상 여기를 참조합니다. (registry.ts의 카테고리와 동일한 컨벤션)
 */
import { type CollectionEntry } from 'astro:content';
import { CATEGORY_IDS } from './registry';
import { blogPosts, type BlogPost } from './blog';
import { getResolvedSkills } from './skills';

type Skill = CollectionEntry<'skills'>;

/**
 * 보수적 단·복수 별칭 매핑. 의미 손실 위험이 거의 없는 명백한 흔들림만 통합한다.
 * (skills 계열·mcp-server 통합 등 논쟁적 동의어는 의도적으로 제외)
 */
export const TAG_ALIASES: Record<string, string> = {
  'ai-agents': 'ai-agent',
  'coding-agents': 'coding-agent',
  'plugins': 'plugin',
  'workspaces': 'workspace',
};

/**
 * 카테고리 id와 정확히 같은 이름의 태그는 드롭한다.
 * 태그 = 도메인/기술/플랫폼, 카테고리 = 산출물 종류로 축을 분리해, 같은 이름의
 * 태그 페이지(/tags/agent-harness)와 카테고리 탭이 어긋나는 혼선을 막는다.
 * (별칭 적용 후 비교하므로 `plugins`→`plugin`도 함께 드롭된다. `mcp`·`cli`·`web-app`
 *  처럼 카테고리 id와 다른 형태/도메인 태그는 유지된다.)
 */
const DROPPED_TAGS = new Set<string>(CATEGORY_IDS);

/** 인기 태그(클라우드/강조) 컷오프 — 이 횟수 이상 등장한 태그만 1차 노출 */
export const TAG_THRESHOLD = 3;

export interface TagInfo {
  /** 정규화된 대표(canonical) 태그 — 표시·집계 기준 */
  tag: string;
  /** URL 세그먼트 */
  slug: string;
  /** 이 태그를 가진 도구 수 */
  count: number;
}

/** 태그 문자열을 정규 태그로 변환(소문자/trim + 별칭 적용). 카테고리명 태그는 ''로 드롭 */
export function canonicalizeTag(tag: string): string {
  const normalized = tag.toLowerCase().trim();
  const aliased = TAG_ALIASES[normalized] ?? normalized;
  return DROPPED_TAGS.has(aliased) ? '' : aliased;
}

/** 임의 문자열을 URL-safe slug로 변환(방어적). 현 데이터(소문자 케밥)에선 사실상 항등 */
export function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** 원본 태그 → 정규 태그의 slug (칩/배지 링크의 href 생성에 사용) */
export function tagToSlug(tag: string): string {
  return slugify(canonicalizeTag(tag));
}

let _skillsCache: Skill[] | null = null;
let _tagsCache: TagInfo[] | null = null;

async function loadSkills(): Promise<Skill[]> {
  if (!_skillsCache) _skillsCache = await getResolvedSkills();
  return _skillsCache;
}

/** 도구 정렬 기준: featured → stars → 제목(ko) */
function compareSkills(a: Skill, b: Skill): number {
  if (a.data.featured && !b.data.featured) return -1;
  if (!a.data.featured && b.data.featured) return 1;
  const starDiff = (b.data.githubStars ?? 0) - (a.data.githubStars ?? 0);
  if (starDiff !== 0) return starDiff;
  return a.data.title.localeCompare(b.data.title, 'ko-KR');
}

/** 한 항목의 태그 배열을 정규화해 카운트 맵에 1회씩 더한다(항목 내 ai-agent/ai-agents 중복 제거) */
function tallyTags(counts: Map<string, number>, rawTags: string[]) {
  const seen = new Set<string>();
  for (const raw of rawTags) {
    const canon = canonicalizeTag(raw);
    if (!canon || seen.has(canon)) continue;
    seen.add(canon);
    counts.set(canon, (counts.get(canon) ?? 0) + 1);
  }
}

/** 전체 태그를 정규화 기준으로 집계(도구 + 블로그 통합). count desc → tag asc 정렬 */
export async function getAllTags(): Promise<TagInfo[]> {
  if (_tagsCache) return _tagsCache;
  const skills = await loadSkills();
  const counts = new Map<string, number>();

  for (const skill of skills) tallyTags(counts, skill.data.tags);
  for (const post of blogPosts) tallyTags(counts, post.tags);

  _tagsCache = Array.from(counts.entries())
    .map(([tag, count]) => ({ tag, slug: slugify(tag), count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
  return _tagsCache;
}

/** 특정 태그 slug를 가진 도구 목록(정렬 적용) */
export async function getToolsByTag(slug: string): Promise<Skill[]> {
  const skills = await loadSkills();
  return skills
    .filter((skill) => skill.data.tags.some((raw) => tagToSlug(raw) === slug))
    .sort(compareSkills);
}

/** 특정 태그 slug를 가진 블로그 글 목록(blogPosts 배열 순서 = 최신순) */
export function getBlogPostsByTag(slug: string): BlogPost[] {
  return blogPosts.filter((post) => post.tags.some((raw) => tagToSlug(raw) === slug));
}

/** 주어진 태그와 같은 도구에 함께 등장한 관련 태그(동시 출현 빈도 상위) */
export async function getRelatedTags(slug: string, limit = 8): Promise<TagInfo[]> {
  const skills = await loadSkills();
  const counts = new Map<string, number>();

  const scan = (rawTags: string[]) => {
    const canonTags = new Set(rawTags.map(canonicalizeTag));
    if (!Array.from(canonTags).some((t) => slugify(t) === slug)) return;
    for (const t of canonTags) {
      if (slugify(t) === slug) continue;
      counts.set(t, (counts.get(t) ?? 0) + 1);
    }
  };

  for (const skill of skills) scan(skill.data.tags);
  for (const post of blogPosts) scan(post.tags);

  return Array.from(counts.entries())
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, limit)
    .map(([tag, count]) => ({ tag, slug: slugify(tag), count }));
}

/** 태그 클라우드 폰트 단계(1~5) — count를 최대값 대비 상대 버킷으로 매핑 */
export function tagBucketSize(count: number, max: number): number {
  if (max <= 1) return 1;
  const ratio = count / max;
  if (ratio >= 0.8) return 5;
  if (ratio >= 0.55) return 4;
  if (ratio >= 0.3) return 3;
  if (ratio >= 0.12) return 2;
  return 1;
}
