/**
 * AgentHub 스킬 로더 — GitHub star 오버레이 단일 진실 공급원.
 *
 * frontmatter의 `githubStars`는 "시드"이고, src/data/stars.json(봇이 매일 갱신)이
 * 라이브 값이다. 모든 페이지/정렬/표시는 반드시 getResolvedSkills()를 거쳐
 * 오버레이된 `data.githubStars`를 읽는다. (registry.ts/tags.ts와 동일한 컨벤션)
 *
 * 오버레이가 이 한 곳에만 존재하므로 정렬과 표시가 desync되지 않는다.
 */
import { getCollection, type CollectionEntry } from 'astro:content';
import starsData from '../data/stars.json';
import { repoSlugFromUrl } from './github';

type Skill = CollectionEntry<'skills'>;

const starMap: Record<string, number> = starsData.stars ?? {};

/** stars.json 기준 시각(ISO). 한 번도 갱신 안 됐으면 null. */
export function starsUpdatedAt(): string | null {
  return starsData.updatedAt ?? null;
}

/**
 * 컬렉션을 로드하고 stars.json을 frontmatter 위에 오버레이한다.
 * 라이브 값이 없는 항목(비-github·gist·미수집)은 frontmatter 시드를 그대로 둔다.
 */
export async function getResolvedSkills(): Promise<Skill[]> {
  const entries = await getCollection('skills');
  return entries.map((entry) => {
    const slug = repoSlugFromUrl(entry.data.githubUrl);
    const live = slug ? starMap[slug] : undefined;
    if (typeof live !== 'number') return entry;
    return { ...entry, data: { ...entry.data, githubStars: live } };
  });
}
