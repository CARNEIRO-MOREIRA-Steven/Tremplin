
import mysql from "mysql2/promise";
import { articles } from "../src/app/blog/articles";

async function importArticles() {
  const {
    DB_HOST,
    DB_USER,
    DB_PASSWORD,
    DB_NAME,
    DB_PORT,
  } = process.env;

  if (!DB_HOST || !DB_USER || !DB_NAME) {
    throw new Error(
      "Variables DB_HOST, DB_USER et DB_NAME requises."
    );
  }

  const connection = await mysql.createConnection({
    host: DB_HOST,
    port: Number(DB_PORT || 3306),
    user: DB_USER,
    password: DB_PASSWORD || "",
    database: DB_NAME,
    charset: "utf8mb4",
  });

  try {
    for (const article of articles) {
      const publishedAt = article.date
        ? `${article.date} 00:00:00`
        : null;

      const content = JSON.stringify(article.content);

      await connection.execute(
        `INSERT INTO articles (
          title,
          subtitle,
          slug,
          excerpt,
          cover_image,
          content,
          category,
          status,
          meta_title,
          meta_description,
          reading_time,
          published_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
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
          published_at = VALUES(published_at)`,
        [
          article.title,
          article.subtitle || null,
          article.slug,
          article.excerpt || null,
          article.image || null,
          content,
          article.category || null,
          "published",
          article.title,
          article.metaDescription || null,
          article.readingTime || null,
          publishedAt,
        ]
      );

      console.log(`Article importé : ${article.slug}`);
    }

    console.log(`Import terminé : ${articles.length} article(s).`);
  } finally {
    await connection.end();
  }
}

importArticles().catch((error) => {
  console.error("Échec de l'import :", error);
  process.exitCode = 1;
});
