/**
 * AgentHub 블로그 — `blog` 콘텐츠 컬렉션 단일 진실 공급원.
 *
 * 글은 src/content/blog/<slug>.md 한 파일로 발행한다(frontmatter + 마크다운 본문).
 * 본문은 Obsidian 위키 문법(![[...]], [!callout], [[link]], screenshots/ 경로)을
 * 포함할 수 있어 Astro 기본 렌더 대신 renderWikiMarkdown 으로 변환한다.
 * 모든 소비처는 getBlogPosts()/getBlogPost()를 거친다.
 */
import { getCollection } from 'astro:content';
import { marked } from 'marked';

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  html: string;
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

let _cache: BlogPost[] | null = null;

/** 모든 블로그 글(날짜 내림차순, 동일 날짜는 slug 내림차순). */
export async function getBlogPosts(): Promise<BlogPost[]> {
  if (_cache) return _cache;
  const entries = await getCollection('blog');
  _cache = entries
    .map((entry) => ({
      slug: entry.id,
      title: entry.data.title,
      description: entry.data.description,
      date: entry.data.date,
      readTime: entry.data.readTime,
      category: entry.data.category,
      tags: entry.data.tags,
      // assetFolder = slug — public/blog-assets/<slug>/ 폴더 규칙과 일치.
      html: renderWikiMarkdown(entry.body ?? '', entry.id),
    }))
    .sort((a, b) => b.date.localeCompare(a.date) || b.slug.localeCompare(a.slug));
  return _cache;
}

export async function getBlogPost(slug: string): Promise<BlogPost | undefined> {
  return (await getBlogPosts()).find((post) => post.slug === slug);
}
