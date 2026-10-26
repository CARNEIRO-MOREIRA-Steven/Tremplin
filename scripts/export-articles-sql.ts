import { writeFileSync } from "node:fs";
import { articles } from "../src/app/blog/articles";

function sqlText(value: string | null | undefined): string {
  if (value == null) return "NULL";

  const hex = Buffer.from(value, "utf8").toString("hex");
  return `CONVERT(UNHEX('${hex}') USING utf8mb4)`;
}

function sqlDate(value: string | null | undefined): string {
  if (!value) return "NULL";
  return sqlText(`${value.slice(0, 10)} 00:00:00`);
}

const statements = [
  "SET NAMES utf8mb4;",
  "",
  ...articles.map((article) => {
    const values = [
      sqlText(article.title),
      sqlText(article.subtitle),
      sqlText(article.slug),
      sqlText(article.excerpt),
      sqlText(article.image),
      sqlText(JSON.stringify(article.content)),
      sqlText(article.category),
      sqlText("published"),
      sqlText(article.title),
      sqlText(article.metaDescription),
      sqlText(article.readingTime),
      sqlDate(article.date),
    ];

    return `
INSERT INTO articles (
  title, subtitle, slug, excerpt, cover_image, content,
  category, status, meta_title, meta_description,
  reading_time, published_at
)
VALUES (${values.join(", ")})
ON DUPLICATE KEY UPDATE
  title = VALUES(title),
  subtitle = VALUES(subtitle),
  excerpt = VALUES(excerpt),
  cover_image = VALUES(cover_image),
  content = VALUES(content),
  category = VALUES(category),
  status = VALUES(status),
  meta_title = VALUES(meta_title),
  meta_description = VALUES(meta_description),
  reading_time = VALUES(reading_time),
  published_at = VALUES(published_at);
`;
  }),
  "",
].join("\n");

writeFileSync("scripts/import-articles.sql", statements, "utf8");

console.log(
  `Fichier SQL créé : scripts/import-articles.sql (${articles.length} articles).`
);
