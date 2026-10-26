
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getPublishedArticles } from "../../lib/articles";
import "./blog.css";
import Header from "../components/Header/Header";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog | Tremplin",
  description:
    "Conseils, coulisses et bonnes pratiques pour une communication qui te ressemble vraiment.",
};

function formatDate(dateString: string) {
  if (!dateString) return "";

  return new Date(`${dateString}T12:00:00`).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPage() {
  const articles = await getPublishedArticles();

  return (
    <section className="blog">
      <Header />

      <div className="blog__container">
        <div className="blog__header">
          <h2 className="blog__title">Le blog Tremplin</h2>
          <p className="blog__subtitle">
            Conseils, coulisses et bonnes pratiques pour une communication qui
            te ressemble vraiment.
          </p>
        </div>

        <div className="blog__grid">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/blog/${article.slug}`}
              className="article-card"
            >
              <div className="article-card__image-wrap">
                {article.image ? (
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="article-card__image"
                  />
                ) : null}

                <span className="article-card__category">
                  {article.category}
                </span>
              </div>

              <div className="article-card__body">
                <p className="article-card__title">{article.title}</p>
                <p className="article-card__subtitle">{article.subtitle}</p>
                <p className="article-card__excerpt">{article.excerpt}</p>

                <div className="article-card__meta">
                  <span>{formatDate(article.date)}</span>
                  <span>·</span>
                  <span>{article.readingTime} de lecture</span>
                </div>

                <span className="little-btn-blue">Lire l'article</span>
              </div>
            </Link>
          ))}
        </div>

        {articles.length === 0 && (
          <p>Aucun article publié pour le moment.</p>
        )}
      </div>
    </section>
  );
}
