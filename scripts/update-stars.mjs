/**
 * GitHub star 수집기 — src/data/stars.json 갱신.
 *
 * - src/content/tools/*.md 의 githubUrl 에서 owner/repo 추출(중복 dedup).
 * - GitHub GraphQL stargazerCount 를 100개씩 배치로 조회.
 * - 머지-유지: 기존 stars.json 을 베이스로 깔고 "성공한 repo만" 덮어쓴다.
 *   (이름변경/삭제/일시 오류 repo는 직전 값 유지 → 데이터 후퇴 방지)
 * - updatedAt 은 매 실행 갱신(=실행 시각).
 *
 * 인증: 환경변수 GITHUB_TOKEN (GitHub Actions 기본 토큰으로 충분, 5000 req/hr).
 *
 * NOTE: repoSlugFromUrl 은 src/lib/github.ts 에도 (의도적으로) 중복되어 있다.
 *       TS↔mjs import 마찰을 피하려는 선택이므로 한쪽을 고치면 양쪽을 맞출 것.
 */
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { basename, join } from 'node:path';

const contentDir = new URL('../src/content/tools', import.meta.url);
const starsPath = new URL('../src/data/stars.json', import.meta.url);
const BATCH_SIZE = 100;
const GRAPHQL_URL = 'https://api.github.com/graphql';

const token = process.env.GITHUB_TOKEN;
if (!token) {
  console.error('GITHUB_TOKEN 환경변수가 필요합니다.');
  process.exit(1);
}

/** githubUrl → "owner/repo" (소문자). github.com 가 아니거나(gist 포함) 세그먼트<2면 null. */
function repoSlugFromUrl(url) {
  const prefix = 'https://github.com/';
  if (!url || !url.startsWith(prefix)) return null;
  const segments = url.slice(prefix.length).split('/').filter(Boolean);
  if (segments.length < 2) return null;
  const [owner, repo] = segments;
  return `${owner}/${repo.replace(/\.git$/, '')}`.toLowerCase();
}

/** 마크다운 frontmatter 에서 githubUrl 값만 추출(없으면 null). */
function extractGithubUrl(markdown) {
  const block = /^---\n([\s\S]*?)\n---/.exec(markdown);
  if (!block) return null;
  for (const line of block[1].split('\n')) {
    const m = /^githubUrl:\s*(.+)$/.exec(line.trim());
    if (m) return m[1].trim().replace(/^["']|["']$/g, '');
  }
  return null;
}

async function collectSlugs() {
  const files = (await readdir(contentDir)).filter((f) => f.endsWith('.md') && !f.startsWith('_'));
  const slugs = new Set();
  for (const file of files) {
    const md = await readFile(join(contentDir.pathname, file), 'utf8');
    const slug = repoSlugFromUrl(extractGithubUrl(md));
    if (slug) slugs.add(slug);
    else if (extractGithubUrl(md)) {
      // github repo 가 아닌 githubUrl(비-github 호스트·gist·세그먼트 부족) → skip
      console.warn(`skip(non-repo): ${basename(file)} → ${extractGithubUrl(md)}`);
    }
  }
  return [...slugs].sort();
}

async function fetchBatch(slugs) {
  // alias → slug 매핑. 각 repo를 r0,r1,... alias로 한 요청에 묶는다.
  const fields = slugs
    .map((slug, i) => {
      const [owner, name] = slug.split('/');
      return `r${i}: repository(owner: ${JSON.stringify(owner)}, name: ${JSON.stringify(name)}) { stargazerCount }`;
    })
    .join('\n');
  const query = `query {\n${fields}\n}`;

  const res = await fetch(GRAPHQL_URL, {
    method: 'POST',
    headers: {
      Authorization: `bearer ${token}`,
      'Content-Type': 'application/json',
      'User-Agent': 'agenthub-stars-bot',
    },
    body: JSON.stringify({ query }),
  });
  if (!res.ok) {
    throw new Error(`GraphQL HTTP ${res.status}: ${await res.text()}`);
  }
  const json = await res.json();
  // data 가 부분적으로 채워지고 errors 가 같이 올 수 있다(없는 repo 등). 둘 다 사용.
  const out = {};
  slugs.forEach((slug, i) => {
    const node = json.data?.[`r${i}`];
    if (node && typeof node.stargazerCount === 'number') out[slug] = node.stargazerCount;
  });
  if (json.errors?.length) {
    for (const e of json.errors) console.warn(`graphql warn: ${e.message}`);
  }
  return out;
}

function chunk(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) chunks.push(arr.slice(i, i + size));
  return chunks;
}

async function main() {
  const slugs = await collectSlugs();
  console.log(`대상 repo: ${slugs.length}개`);

  // 머지 베이스: 기존 stars.json
  let base = {};
  try {
    base = JSON.parse(await readFile(starsPath, 'utf8')).stars ?? {};
  } catch {
    /* 최초 실행 — 베이스 없음 */
  }

  const fetched = {};
  for (const part of chunk(slugs, BATCH_SIZE)) {
    Object.assign(fetched, await fetchBatch(part));
  }

  const failed = slugs.filter((s) => !(s in fetched));
  if (failed.length) console.warn(`수집 실패(직전 값 유지): ${failed.length}개 → ${failed.join(', ')}`);

  // 성공분만 덮어쓰기. 결과 키는 정렬해 diff 안정화.
  const merged = { ...base, ...fetched };
  const stars = {};
  for (const key of Object.keys(merged).sort()) stars[key] = merged[key];

  const payload = { updatedAt: new Date().toISOString(), stars };
  await writeFile(starsPath, JSON.stringify(payload, null, 2) + '\n');
  console.log(`갱신 완료: ${Object.keys(fetched).length}개 수집, ${Object.keys(stars).length}개 보관.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
