"use client";

import { useState } from "react";
import Image from "next/image";
import { articles, Article } from "./articles";
import "./blog.css";
import Header from "../components/Header/Header";

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function ArticleCard({
  article,
  onOpen,
}: {
  article: Article;
  onOpen: (id: string) => void;
}) {
  return (
    <button className="article-card" onClick={() => onOpen(article.id)}>
      <div className="article-card__image-wrap">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="article-card__image"
        />
        <span className="article-card__category">{article.category}</span>
      </div>

      <div className="article-card__body">
        <h3 className="article-card__title">{article.title}</h3>
        <p className="article-card__subtitle">{article.subtitle}</p>
        <p className="article-card__excerpt">{article.excerpt}</p>
        <div className="article-card__meta">
          <span>{formatDate(article.date)}</span>
          <span>·</span>
          <span>{article.readingTime} de lecture</span>
        </div>
        <span className="little-btn-blue">Lire l'article</span>
      </div>
    </button>
  );
}

function ArticleExpanded({
  article,
  onClose,
}: {
  article: Article;
  onClose: () => void;
}) {
  return (
    <div className="article-expanded">
      <div className="article-expanded__image-wrap">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="article-expanded__image"
        />
        <button
          className="article-expanded__close"
          onClick={onClose}
          aria-label="Fermer l'article"
        >
          ✕
        </button>
        <span className="article-expanded__category">{article.category}</span>
      </div>

      <div className="article-expanded__content">
        <div className="article-expanded__meta">
          <span>{formatDate(article.date)}</span>
          <span>·</span>
          <span>{article.readingTime} de lecture</span>
        </div>
        <h2 className="article-expanded__title">{article.title}</h2>
        <p className="article-expanded__subtitle">{article.subtitle}</p>

        <div className="article-expanded__body">
          {article.content.split("\n\n").map((paragraph, i) => (
            <p key={i} className="article-expanded__paragraph">
              {paragraph}
            </p>
          ))}
        </div>

        <button className="little-btn-green article-expanded__back" onClick={onClose}>
          ← Retour aux articles
        </button>
      </div>
    </div>
  );
}

export default function BlogSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const openArticle = articles.find((a) => a.id === openId);
  const otherArticles = articles.filter((a) => a.id !== openId);

  return (
    <section className="blog">
      <Header />
      <div className="blog__container">
        <div className="blog__header">
          <h1 className="blog__title">Le blog Tremplin</h1>
        </div>

        {openArticle && (
          <div className="article-expanded-wrap">
            <ArticleExpanded
              article={openArticle}
              onClose={() => setOpenId(null)}
            />
          </div>
        )}

        <div className="blog__grid">
          {otherArticles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              onOpen={(id) => setOpenId(id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}