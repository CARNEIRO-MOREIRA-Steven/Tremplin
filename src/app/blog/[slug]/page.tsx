
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getPublishedArticles,
  getPublishedArticleBySlug,
} from "../../../lib/articles";
import ArticleContent from "../ArticleContent";
import Header from "../../components/Header/Header";
import "../blog.css";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getPublishedArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article introuvable | Tremplin",
    };
  }

  return {
    title: `${article.title} | Tremplin`,
    description: article.metaDescription,
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      url: `https://www.tremplin-entreprendre.fr/blog/${article.slug}`,
      ...(article.image ? { images: [{ url: article.image }] } : {}),
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.metaDescription,
      ...(article.image ? { images: [article.image] } : {}),
    },
  };
}

function formatDate(dateString: string) {
  if (!dateString) return "";

  return new Date(`${dateString}T12:00:00`).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;

  const [article, articles] = await Promise.all([
    getPublishedArticleBySlug(slug),
    getPublishedArticles(),
  ]);

  if (!article) notFound();

  const otherArticles = articles.filter(
    (other) => other.slug !== article.slug
  );

  return (
    <>
      <Header />

      <section className="blog">
        <div className="blog__container">
          <article className="article-expanded">
            <div className="article-expanded__image-wrap">
              {article.image ? (
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="article-expanded__image"
                  priority
                />
              ) : null}

              <span className="article-expanded__category">
                {article.category}
              </span>
            </div>

            <div className="article-expanded__content">
              <div className="article-expanded__meta">
                <span>{formatDate(article.date)}</span>
                <span>·</span>
                <span>{article.readingTime} de lecture</span>
              </div>

              <h1 className="article-expanded__title">{article.title}</h1>

              <p className="article-expanded__subtitle">
                {article.subtitle}
              </p>

              <ArticleContent blocks={article.content} />

              <Link
                href="/blog"
                className="little-btn-green article-expanded__back"
              >
                ← Retour aux articles
              </Link>
            </div>
          </article>

          {otherArticles.length > 0 && (
            <div className="blog__more">
              <h2 className="blog__more-title">Plus d'articles</h2>

              <div className="blog__grid">
                {otherArticles.map((other) => (
                  <Link
                    key={other.id}
                    href={`/blog/${other.slug}`}
                    className="article-card"
                  >
                    <div className="article-card__image-wrap">
                      {other.image ? (
                        <Image
                          src={other.image}
                          alt={other.title}
                          fill
                          className="article-card__image"
                        />
                      ) : null}

                      <span className="article-card__category">
                        {other.category}
                      </span>
                    </div>

                    <div className="article-card__body">
                      <p className="article-card__title">{other.title}</p>
                      <p className="article-card__subtitle">
                        {other.subtitle}
                      </p>
                      <p className="article-card__excerpt">
                        {other.excerpt}
                      </p>

                      <div className="article-card__meta">
                        <span>{formatDate(other.date)}</span>
                        <span>·</span>
                        <span>{other.readingTime} de lecture</span>
                      </div>

                      <span className="little-btn-blue">
                        Lire l'article
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
