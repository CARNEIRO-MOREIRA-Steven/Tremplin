import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles } from "../articles";
import ArticleContent from "../ArticleContent";
import Header from "../../components/Header/Header";
import "../blog.css";

type Props = {
  params: Promise<{ slug: string }>;
};

// Génère les pages statiques pour chaque article (URL propre, indexable)
export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

// Meta description + Open Graph spécifiques à chaque article (essentiel pour le partage sur les réseaux)
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};

  return {
    title: `${article.title} | Tremplin`,
    description: article.metaDescription,
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      url: `https://www.tremplin-entreprendre.fr/blog/${article.slug}`,
      images: [{ url: article.image }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.metaDescription,
      images: [article.image],
    },
  };
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const otherArticles = articles.filter((a) => a.slug !== slug);

  return (
    <>
      <Header />
      <section className="blog">
      <div className="blog__container">
        <article className="article-expanded">
          <div className="article-expanded__image-wrap">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="article-expanded__image"
            />
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

            {/* Le titre de base devient ici le H1 unique de la page */}
            <h1 className="article-expanded__title">{article.title}</h1>
            <p className="article-expanded__subtitle">{article.subtitle}</p>

            <ArticleContent blocks={article.content} />

            <Link href="/blog" className="little-btn-green article-expanded__back">
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
                    <Image
                      src={other.image}
                      alt={other.title}
                      fill
                      className="article-card__image"
                    />
                    <span className="article-card__category">
                      {other.category}
                    </span>
                  </div>
                  <div className="article-card__body">
                    <p className="article-card__title">{other.title}</p>
                    <p className="article-card__subtitle">{other.subtitle}</p>
                    <p className="article-card__excerpt">{other.excerpt}</p>
                    <div className="article-card__meta">
                      <span>{formatDate(other.date)}</span>
                      <span>·</span>
                      <span>{other.readingTime} de lecture</span>
                    </div>
                    <span className="little-btn-blue">Lire l'article</span>
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