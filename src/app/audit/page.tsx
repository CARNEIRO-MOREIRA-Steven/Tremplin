'use client';

import { useState } from 'react';
import Link from 'next/link';
import './audit-page.css';
import Header from '../components/Header/Header';
import Banner from './components/Banner';
import DetailsAudit from './components/DetailsAudit';
import Difference from './components/Difference';
import AccessAudit from './components/AccessAudit';
import ContentAudit from './components/ContentAudit';
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
    a: "Commencer par un Call Déclic : un échange pour comprendre la situation et l'orienter. Si tu préfères avancer sans engagement important, on démarre avec l'Audit Express.",
  },
  {
    q: "Comment prendre rendez-vous et par quoi commencer ?",
    a: "Tu peux réserver le Call Déclic directement. C'est un premier échange pour comprendre la situation et t'orienter vers l'offre la plus adaptée. Simple, sans pression.",
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

export default function AuditPage() {
  return (
    <section className="audit-page">
      <Header />
      <Banner />
      <DetailsAudit />
      <Difference />
      <AccessAudit />
      <ContentAudit />


      {/* ══════════════════════════════════════════════════════
          SECTION 5 — CONTENU DE L'AUDIT
      ══════════════════════════════════════════════════════ */}



      {/* ══════════════════════════════════════════════════════
          SECTION 6 — FAQ
      ══════════════════════════════════════════════════════ */}
      <section className="faq">
        <div className="faq-container">

          <h2 className="faq-title texte-give">J&apos;ai des questions…</h2>

          <ul className="faq-list">
            {FAQ_ITEMS.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </ul>

          <div className="faq-footer">
            <Link href="/faq" className="little-btn-black">
              J&apos;ai d&apos;autres questions
            </Link>
          </div>

        </div>
      </section>


      {/* ══════════════════════════════════════════════════════
          SECTION 7 — CTA FINAL + JE ME LANCE
      ══════════════════════════════════════════════════════ */}
      <section className='final-cta'>        
        <Link href="/contact" className="little-btn-pink">Je me lance</Link>
      </section>

        <Footer />


    </section>
  );
}
