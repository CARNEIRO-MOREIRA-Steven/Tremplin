
import "server-only";
import type { RowDataPacket } from "mysql2";
import pool from "./db";

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading2"; text: string }
  | { type: "heading3"; text: string }
  | { type: "heading4"; text: string }
  | { type: "list"; items: string[] };

export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  metaDescription: string;
  category: string;
  image: string;
  excerpt: string;
  date: string;
  readingTime: string;
  content: ContentBlock[];
}

interface ArticleRow extends RowDataPacket {
  id: number;
  slug: string;
  title: string;
  subtitle: string | null;
  meta_description: string | null;
  category: string | null;
  cover_image: string | null;
  excerpt: string | null;
  published_at: Date | string | null;
  reading_time: string | null;
  content: string | ContentBlock[];
}

function toArticle(row: ArticleRow): Article {
  const content =
    typeof row.content === "string"
      ? (JSON.parse(row.content) as ContentBlock[])
      : row.content;

  const date = row.published_at
    ? row.published_at instanceof Date
      ? row.published_at.toISOString().slice(0, 10)
      : String(row.published_at).slice(0, 10)
    : "";

  return {
    id: String(row.id),
    slug: row.slug,
    title: row.title,
    subtitle: row.subtitle ?? "",
    metaDescription: row.meta_description ?? "",
    category: row.category ?? "",
    image: row.cover_image ?? "",
    excerpt: row.excerpt ?? "",
    date,
    readingTime: row.reading_time ?? "",
    content,
  };
}

export async function getPublishedArticles(): Promise<Article[]> {
  const [rows] = await pool.execute<ArticleRow[]>(
    `SELECT
      id, slug, title, subtitle, meta_description,
      category, cover_image, excerpt, published_at, reading_time
    FROM articles
    WHERE status = 'published'
    ORDER BY published_at DESC, created_at DESC`
  );

  return rows.map(toArticle);
}

export async function getPublishedArticleBySlug(
  slug: string
): Promise<Article | null> {
  const [rows] = await pool.execute<ArticleRow[]>(
    `SELECT
      id, slug, title, subtitle, meta_description,
      category, cover_image, excerpt, published_at, reading_time, content
    FROM articles
    WHERE slug = ? AND status = 'published'
    LIMIT 1`,
    [slug]
  );

  return rows.length ? toArticle(rows[0]) : null;
}
