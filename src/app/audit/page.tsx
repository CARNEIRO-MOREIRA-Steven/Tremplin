'use client';

import { useState } from 'react';
import Link from 'next/link';
import './audit-page.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';



/* ─── FAQ accordéon ─────────────────────────────────────────────────────────── */
const FAQ_ITEMS = [
  {
    q: "Est-ce que votre agence est faite pour moi ?",
    a: "Tremplin est fait pour toi si tu as de la valeur mais que la communication est la pièce qui te manque. Tu as du potentiel, de la confiance ou de la confiance dans ton message, tu es au bon endroit.",
  },
  {
    q: "Quelle est la différence entre vos offres (Audit, Alignement, Rebranding) ?",
    a: "L'audit te donne un diagnostic clair. L'Alignement t'aide à poser un message fort et une direction juste. Le Rebranding transforme en profondeur ton image pour une présence sur tes réseaux. Chaque offre correspond à un moment précis de ton avancée.",
  },
  {
    q: "Est-ce que je pourrai gérer ma communication seul(e) après ?",
    a: "Oui, c'est même l'objectif ! Après l'audit express on te donne des outils et des conseils clairs. Tu repars avec des atouts pour gérer et organiser ta com. Sur les accompagnements signés Tremplin nous proposons une session « formation » qui te rend réellement autonome et formé(e) à la com.",
  },
  {
    q: "Travaillez-vous avec tous les secteurs d'activité ?",
    a: "Oui. Ce qui nous attire c'est pas ton secteur, mais ta vision et ton ambition. Une stratégie de communication fonctionne dans tous les domaines et s'adapte à chaque secteur d'activité.",
  },
  {
    q: "Par quoi commencer si je ne sais pas encore ce dont j'ai besoin ?",
    a: "Commencer par un Call Début : un échange pour comprendre la situation et l'orienter. Si tu préfères avancer sans engagement important, on démarre avec l'Audit Express.",
  },
  {
    q: "Comment prendre rendez-vous et par quoi commencer ?",
    a: "Tu peux réserver le Call Début directement. C'est un premier échange pour comprendre la situation et t'orienter vers l'offre la plus adaptée. Simple, sans pression.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <li className={`faq-item${open ? ' open' : ''}`}>
      <button className="faq-question" onClick={() => setOpen(!open)}>
        <span className="faq-chevron">▶</span>
        {q}
      </button>
      <div className="faq-answer">
        <p className="faq-answer-inner">{a}</p>
      </div>
    </li>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────────────── */
export default function AuditPage() {
  return (
    <div className="audit-page">

      {/* ══════════════════════════════════════════════════════
          SECTION 1 — HERO
      ══════════════════════════════════════════════════════ */}
      <section className="hero">
                <Header />

        <div className="wrap">
        

          {/* Grand titre */}
          <h1 className="big-title">
            Faire un audit<br />de communication
          </h1>

          {/* Encadré "tu te demandes" */}
          <div className="hero-tu-te-demandes">
            <p>
              Le <strong>site</strong> internet est-il <strong>obligatoire</strong> pour communiquer ?<br />
              <strong>Par où commencer</strong> pour communiquer ?<br />
              <strong>Comment</strong> coupler de ses <strong>réseaux sociaux</strong> ?<br />
              Comment <strong>m&apos;organiser</strong> pour une communication régulière ?<br />
              Faut-il communiquer de la même façon sur ses différents réseaux ?
            </p>
          </div>

          {/* Bandeau "L'Audit Express de ta comm" */}
          <div className="hero-media">
            <div className="hero-media-badge">
              GRANDE<br />EFFICACITÉ ET<br />PETIT BUDGET
            </div>
            <div className="hero-media-content">
              <h2 className="hero-media-title">L&apos;Audit Express de ta Comm&apos;</h2>
              <p className="hero-media-desc">
                Ne laisse pas ta communication au hasard !<br />
                Réserve ton audit express dès maintenant<br />
                et passe à la vitesse supérieure.
              </p>
            </div>
          </div>

          {/* Accroche analyse */}
          <p className="hero-analyse">
            Obtiens une analyse rapide et efficace de ta communication
            pour <strong>faire le point</strong>, puis comprends{' '}
            <strong>comment la transformer</strong> en une communication qui te permet d&apos;atteindre tes objectifs
          </p>

        </div>
      </section>


      {/* ══════════════════════════════════════════════════════
          SECTION 2 — POUR QUI + PROMESSE
      ══════════════════════════════════════════════════════ */}
      <section className="promise">
        <div className="wrap">

          {/* Intro */}
          <div className="promise-intro">
            <p className="logo-small">↳ Tremplin</p>
            <p>
              Tu es un entrepreneur(e) ou dirigeant(e) <strong>déjà lancé(e)</strong> mais qui stagne.<br />
              Tu sais que <strong>tu as du potentiel</strong> mais tu <strong>manques de structure</strong>.<br />
              Tu veux comprendre pourquoi ça ne marche pas comme tu voudrais et quoi changer.
            </p>
            <p>
              <em>les cadres arrivent de façon animée : le bord du cadre se dessine</em><br />
              <em>Voir si on peut le faire avec un mini effet néon et si oui voir si ça donne bien</em>
            </p>
          </div>

          {/* Grille Ce que tu obtiens / Pourquoi cet audit */}
          <div className="promise-grid">

            <div>
              <p className="promise-col-title">Ce que tu obtiens</p>
              {[
                { title: 'Une vision claire', desc: 'de la communication et de ton image' },
                { title: 'La conscience de tes forces', desc: 'et la lucidité sur ce qui te freine' },
                { title: "Un plan d'action simple", desc: "et concret pour savoir exactement quoi faire après" },
                { title: 'La confiance de reprendre la main', desc: 'sur ta communication' },
                { title: 'Une boîte à outils personnalisée', desc: "pour appliquer directement les bonnes pratiques et avancer dès maintenant" },
              ].map((item) => (
                <div key={item.title} className="promise-item">
                  <p className="promise-item-title">{item.title}</p>
                  <p className="promise-item-desc">{item.desc}</p>
                </div>
              ))}
            </div>

            <div>
              <p className="promise-col-title">Pourquoi cet audit ?</p>
              {[
                { title: 'Rapide & efficace :', desc: "En quelques jours, tu obtiens une vision claire de ta communication et un plan concret pour l'améliorer (contre plusieurs semaines pour un audit complet)." },
                { title: 'Un prix accessible :', desc: "L'Audit express à 239€, alors qu'un audit complet coûte généralement aux alentours de 1000€ !" },
                { title: 'Un regard expert :', desc: "Bénéficie de l'expertise de deux spécialistes en communication (stratégie et design)" },
              ].map((item) => (
                <div key={item.title} className="promise-item">
                  <p className="promise-item-title">{item.title}</p>
                  <p className="promise-item-desc">{item.desc}</p>
                </div>
              ))}

              {/* Badge prix */}
              <div className="price-badge">
                <div className="price-badge-inner">
                  <span className="price-badge-label">Mini prix</span>
                  <span className="price-badge-num">239€</span>
                  <span className="price-badge-unit">euros</span>
                </div>
              </div>
            </div>

          </div>

          {/* CTA */}
          <div className="promise-cta">
            <Link href="/contact" className="btn-main">
              Réserve ton audit maintenant
              <span className="arrow">→</span>
            </Link>
            <p className="btn-sub">renvoie vers le formulaire de contact</p>
          </div>

        </div>
      </section>


      {/* ══════════════════════════════════════════════════════
          SECTION 3 — DIFFÉRENCE (fond vert)
      ══════════════════════════════════════════════════════ */}
      <section className="difference">
        <div className="wrap-wide">
          <div className="difference-title">
            <h2 className="section-title">
              Pourquoi cet audit de communication est différent de ce que<br />
              je peux trouver dans une autre agence de communication ?
            </h2>
          </div>

          <div className="difference-grid">
            {[
              { desc: "Uniquement le vocabulaire afin que tu comprennes ce qu'on t'explique. Tu repars avec des clés claires et un plan pratique à utiliser immédiatement." },
              {  desc: "Tu profiteras des conseils de deux experts en chaque partie (communication & design). Une approche désorientation à notre carnet et le besoin des créatifs." },
              {  desc: "Un format court, efficace, sans engagement minimal. C'est un point de départ, une amorce ou bilan de là où tu es." },
            ].map((card) => (
              <div key={card.desc} className="diff-card">
                {card.desc}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════
          SECTION 4 — PREUVES SOCIALES / VIDÉO
      ══════════════════════════════════════════════════════ */}
      <section className="social-proof">
        <div className="wrap">


          {/* Labels 3 colonnes rose */}
          <div className="proof-labels">
            <div className="proof-label">TU PASSES DE LA CONFUSION À LA CLARTÉ</div>
            <div className="proof-label">TU REPARS RASSURÉ(E) ET LÉGITIME DANS TES CHOIX</div>
            <div className="proof-label">TU SAIS EXACTEMENT QUOI DIRE, OÙ LE DIRE ET COMMENT LE DIRE</div>
          </div>

          <p className="proof-video-note">La vidéo est en lecture automatique et fait une lecture en boucle</p>

          {/* Témoignages */}
          <div className="testimonials-grid">
            <div className="testi-item">Cet audit tient tout ses promesses »</div>
            <div className="testi-item">Cet audit m&apos;a donné les clés nécessaires pour apporter le changement et booster sa communication »</div>
            <div className="testi-item">Ça m&apos;a permis d&apos;avoir une perspective bien autre que ce que je faisais jusqu&apos;à là »</div>
            <div className="testi-item">Cet audit est un véritable déclencheur si se veut faire depuis longtemps »</div>
            <div className="testi-item">J&apos;ai su appliquer les conseils qui m&apos;ont été donnés et je me suis rendu compte que les résultats étaient là… j&apos;ai observé des changements »</div>
            <div className="testi-item">Il n&apos;y avait d&apos;yeux plus clair et de me ranger mes idées comment le communiqué à la communauté signé Tremplin»</div>
          </div>

          {/* Mockup audit */}
          <div className="audit-mockup">
            <div className="audit-mockup-text">
            </div>
          </div>

          {/* <p className="proof-caption">
            Boîte de la vidéo : Les positifs sur l&apos;audit de communication signée Tremplin
          </p> */}

          {/* 2ème CTA */}
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <Link href="/contact" className="btn-main">
              Je réserve mon audit maintenant
              <span className="arrow">→</span>
            </Link>
          </div>

        </div>
      </section>


      {/* ══════════════════════════════════════════════════════
          SECTION 5 — CONTENU DE L'AUDIT
      ══════════════════════════════════════════════════════ */}
      <section className="audit-content">
        <div className="wrap">

          <div className="audit-content-header">
            <h2 className="section-title">
              Ce que contient l&apos;Audit de Communication Express®{' '}
              <em>Signé Tremplin</em>
            </h2>
          </div>

          <div className="audit-content-grid">

            {/* Colonne gauche — liste des points */}
            <div className="audit-col-left">
              <p>Pendant 2h on fait le point sur :</p>
              <ol className="audit-steps-list">
                {[
                  'Toi et ton activité',
                  'Ton marché actuel',
                  "L'identité de ton entreprise",
                  'Ce que tu as mis en place',
                  'Ton plan et la communication',
                  'Ton/Ta client(e) idéal(e)',
                  'Ton organisation et la gestion de la com',
                  'Les objectifs et la vision',
                ].map((step, i) => (
                  <li key={i} className="audit-step">
                    <span className="audit-step-num">{i + 1}—</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            {/* Colonne droite — détails */}
            <div className="audit-col-right">

              <div className="audit-detail-box">
                <p className="audit-detail-box-title">Durée</p>
                <p>2 entretiens<br />Livraison de l&apos;audit sous 48h</p>
              </div>

              <div className="audit-detail-box">
                <p className="audit-detail-box-title">Contenu</p>
                <ul>
                  <li>Entretiens — analyse questions</li>
                  <li>Audit par Urgence</li>
                  <li>Séance conseil spécifique questions / audit par Urgence</li>
                </ul>
              </div>

              <div className="audit-detail-box">
                <p className="audit-detail-box-title">Livraison</p>
                <p>
                  Document<br />
                  Rapport com + plan de com<br />
                  Lien vers ton document PDF ou PDF
                </p>
              </div>

              <div className="audit-detail-box">
                <p className="audit-detail-box-title">Plus</p>
                <p>
                  Dans le document tu trouveras :<br />
                  Tes analyses de communication<br />
                  Plan d&apos;action + recommandations<br />
                  Ressources complémentaires
                </p>
              </div>

              <div className="audit-bonus">
                <p className="audit-bonus-title">Bonus : Boîte à outils personnalisée</p>
                <p>Accès à des ressources supplémentaires sélectionnées selon tes besoins spécifiques.</p>
              </div>

              {/* CTA dans la section */}
              <div style={{ textAlign: 'center', marginTop: 8 }}>
                <Link href="/contact" className="btn-main">
                  Je réserve mon audit express
                  <span className="arrow">→</span>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════
          SECTION 6 — FAQ
      ══════════════════════════════════════════════════════ */}
      <section className="faq">
        <div className="wrap">

          <h2 className="faq-title">J&apos;ai des questions…</h2>

          <ul className="faq-list">
            {FAQ_ITEMS.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </ul>

          <div className="faq-footer">
            <Link href="/contact" className="faq-footer-btn">
              J&apos;AI D&apos;AUTRES QUESTIONS
            </Link>
          </div>

        </div>
      </section>


      {/* ══════════════════════════════════════════════════════
          SECTION 7 — CTA FINAL + JE ME LANCE
      ══════════════════════════════════════════════════════ */}
      <section className="cta-final">
        <div className="wrap">

          <div className="cta-final-btn-wrap">
            <Link href="/contact" className="btn-main">
              JE ME LANCE
              <span className="arrow">→</span>
            </Link>
          </div>

        </div>
      </section>

        <Footer />


    </div>
  );
}
