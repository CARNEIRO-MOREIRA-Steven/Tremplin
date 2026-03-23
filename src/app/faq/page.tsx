'use client';
import { useState } from 'react';
import Link from 'next/link';
import './page.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const FAQ_ITEMS = [
  { q: "EST-CE QUE VOTRE AGENCE EST FAITE POUR MOI ?", a: "Tremplin est fait pour toi si tu sais que tu as de la valeur, mais que ta communication ne la montre pas encore. Si tu manques de clarté, de cohérence ou de confiance dans ton message, tu es au bon endroit." },
  { q: "QUELLE EST LA DIFFÉRENCE ENTRE VOS OFFRES (AUDIT, ALIGNEMENT, REBRANDING) ?", a: "L'audit te donne un diagnostic clair. L'Alignement t'aide à poser un message fort et une direction juste. Le Rebranding transforme en profondeur ton image pour qu'elle reflète ton niveau réel. Chaque offre correspond à un moment précis de ton business." },
  { q: "J'AI DÉJÀ UN LOGO / UNE IDENTITÉ : EST-CE QUE JE DOIS TOUT REFAIRE ?", a: "Pas forcément. On garde ce qui fonctionne et on améliore le reste. L'objectif n'est jamais de « tout casser », mais de rendre ton image plus juste, plus cohérente et plus crédible." },
  { q: "EN COMBIEN DE TEMPS VAIS-JE VOIR DES RÉSULTATS ?", a: "Les premiers déclics arrivent souvent dès les premières semaines. Plus de clarté, plus d'assurance, des messages plus fluides. Les vrais résultats s'installent dans la durée, parce que ta communication repose enfin sur des bases solides." },
  { q: "EST-CE QUE VOUS TRAVAILLEZ AVEC DES ENTREPRENEURS DÉBUTANTS OU DÉJÀ INSTALLÉS ?", a: "On travaille avec les deux. Des entrepreneurs qui lancent leur activité, comme des entreprises déjà en place mais en perte de clarté. Ce qui compte, c'est ta volonté de construire quelque chose de solide." },
  { q: "EST-CE QUE JE VAIS ÊTRE ACCOMPAGNÉ(E) OU SIMPLEMENT RECEVOIR DES LIVRABLES ?", a: "Tu es accompagné(e) du début à la fin. On t'explique, on échange, on ajuste ensemble. Tu ne repars pas avec des fichiers « à utiliser seul(e) », mais avec une vraie compréhension de ta communication." },
  { q: "COMMENT SE PASSE CONCRÈTEMENT L'ACCOMPAGNEMENT ?", a: "On avance étape par étape. On commence par comprendre ta situation, puis on construit une stratégie claire, avant de travailler ton message et ton image. Tu sais toujours où tu en es, ce qu'on fait et pourquoi, grâce à l'espace de travail partagé." },
  { q: "EST-CE QUE JE POURRAI GÉRER MA COMMUNICATION SEUL(E) APRÈS ?", a: "Oui, et c'est même l'objectif. On te donne une méthode, des outils et une vision claire. Tu gagnes en autonomie, sans te sentir perdu(e) ni dépendant(e)." },
  { q: "TRAVAILLEZ-VOUS AVEC TOUS LES SECTEURS D'ACTIVITÉ ?", a: "Oui. Ce qui nous intéresse, ce n'est pas ton secteur, mais ton positionnement, ta vision et ton ambition. Une stratégie de communication fonctionne dans tous les domaines et s'adapte à chaque secteur d'activité." },
  { q: "POURQUOI INVESTIR DANS LE BRANDING PLUTÔT QUE DANS LA PUBLICITÉ ?", a: "La publicité attire. Le branding fait rester et fait choisir. Sans une image claire et un message fort, la pub amplifie… la confusion. Un bon branding travaille pour toi sur le long terme, même quand tu ne communiques pas." },
  { q: "ET SI JE NE SUIS PAS SÛR(E) DE MON POSITIONNEMENT AUJOURD'HUI ?", a: "C'est très courant. Dans ce cas, on commence par un Audit Express ou un alignement. Ces offres sont justement là pour t'aider à y voir clair avant d'aller plus loin." },
  { q: "EST-CE QUE VOUS PROPOSEZ DES SOLUTIONS « CLÉ EN MAIN » OU DU SUR-MESURE ?", a: "Tout est 100 % sur-mesure. Pas de template, pas de recette toute faite. Chaque stratégie et chaque image sont construites à partir de toi, de ton activité et de tes objectifs." },
  { q: "PAR QUOI COMMENCER SI JE NE SAIS PAS ENCORE CE DONT J'AI BESOIN ?", a: "Commence par un Call Déclic : un échange pour comprendre ta situation et t'orienter. Si tu préfères avancer sans engagement important, on démarre avec l'Audit Express." },
  { q: "COMMENT S'ARTICULENT LA STRATÉGIE ET LA CRÉATION CHEZ TREMPLIN ?", a: "Chez Tremplin, la stratégie vient toujours avant le visuel. On définit d'abord ce que tu veux dire, à qui et pourquoi. Ensuite, on crée une image qui soutient ton message — pas l'inverse." },
  { q: "COMMENT PRENDRE RENDEZ-VOUS ET PAR QUOI COMMENCER ?", a: "Tu peux réserver un Call Déclic directement. C'est un premier échange pour comprendre ta situation et t'orienter vers l'offre la plus adaptée. Simple, sans pression." },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <li className={`faq-item${open ? ' open' : ''}`}>
      <button className="faq-question" onClick={() => setOpen(!open)}>
        {q} <span className="faq-chevron">▶</span>
      </button>
      <div className="faq-answer"><p className="faq-answer-inner">{a}</p></div>
    </li>
  );
}

export default function FAQPage() {
  return (
    <div className="faq-page">

      {/* ── HERO ── */}
      <section className="hero">
          <Header />
          <h1 className="hero-title texte-give">La foire à questions</h1>
      </section>

      {/* ── FAQ ── */}
      <section className="faq-main">
          <ul className="faq-list">
            {FAQ_ITEMS.map(item => <FaqItem key={item.q} q={item.q} a={item.a} />)}
          </ul>
      </section>

      <section className="cta-final">
            <Link href="/contact" className="btn-main btn-pink">
              JE ME LANCE
            </Link>
      </section>
      
      {/* ── FOOTER ── */}
      <Footer />

    </div>
  );
}
