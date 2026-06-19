/**
 * githubUrl → "owner/repo" 정규화 (소문자).
 * - `https://github.com/` 로 시작하지 않으면(gist·비-github 호스트 포함) null.
 * - 서브패스(`/tree/...`, `/blob/...`)는 앞 2세그먼트만 취함.
 * NOTE: 동일 로직이 scripts/update-stars.mjs 에도 (의도적으로) 중복되어 있다.
 *       TS↔mjs import 마찰을 피하려는 선택이므로 한쪽을 고치면 양쪽을 맞출 것.
 */
export function repoSlugFromUrl(url: string | null | undefined): string | null {
  const prefix = 'https://github.com/';
  if (!url || !url.startsWith(prefix)) return null;
  const segments = url.slice(prefix.length).split('/').filter(Boolean);
  if (segments.length < 2) return null;
  const [owner, repo] = segments;
  return `${owner}/${repo.replace(/\.git$/, '')}`.toLowerCase();
}

export function formatStarCount(stars: number | null | undefined): string {
  if (typeof stars !== 'number') return 'Stars unavailable';
  return new Intl.NumberFormat('en', {
    notation: stars >= 1000 ? 'compact' : 'standard',
    maximumFractionDigits: 1,
  }).format(stars);
}
