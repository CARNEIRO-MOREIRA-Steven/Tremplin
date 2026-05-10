'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import Image, { StaticImageData } from 'next/image';
import Rebranding from '../../../public/rebranding.png';
import Audit from '../../../public/auditExpress.png';
import Alignement from '../../../public/alignement.png';

/* ─── données ─── */
const TABLE_SECTIONS = [
  {
    id: 'clarte',
    section: 'CLARTÉ & STRATÉGIE DE MARQUE',
    rows: [
      { label: 'Diagnostic stratégique', audit: '✓ version express', align: '✓', rebrand: '✓' },
      { label: 'Audit verbal (discours, message)', audit: '✓', align: '✓', rebrand: '✓' },
      { label: 'Audit visuel (logo, palette, photos, icônes, cohérence)', audit: '✓', align: '✓', rebrand: '✓' },
      { label: 'Analyse du positionnement actuel', audit: '✓ version express', align: '✓', rebrand: '✓' },
      { label: 'Définition du positionnement complet', audit: '✗', align: '✓', rebrand: '✓ niveau avancé' },
      { label: 'Message clé / pitch', audit: '✓', align: '✓', rebrand: '✓' },
      { label: 'Ton de la voix', audit: '✓', align: '✓', rebrand: '✓' },
      { label: "Repositionnement de l'entreprise par rapport à son marché", audit: '✗', align: '✓', rebrand: '✓' },
      { label: 'Apprendre à raconter son histoire pour mieux vendre', audit: '✗', align: '✓ base', rebrand: '✓ complet' },
      { label: 'Recommandations stratégiques de publication', audit: '✓', align: '✓ + assistance à la mise en place', rebrand: '✓ + assistance à la mise en place' },
      { label: 'Stratégie lancement nouveau produit', audit: '✗', align: '✓', rebrand: '✓' },
      { label: 'Stratégie de lancement / activation (événementiel / promotionnel)', audit: '✗', align: '✓', rebrand: '✓ avec suivi et supervision' },
      { label: 'Stratégie de communication en ligne et locale', audit: '✗', align: '✓', rebrand: '✓' },
      { label: "Plan d'action stratégique", audit: '✓', align: '✓', rebrand: '✓' },
    ],
  },
  {
    id: 'identite',
    section: 'IDENTITÉ VISUELLE & UNIVERS DE MARQUE',
    rows: [
      { label: 'Axes visuels', audit: '✗', align: '✓', rebrand: '✓' },
      { label: "Planche d'inspiration visuelle", audit: '✗', align: '✓', rebrand: '✓' },
      { label: 'Recommandations visuelles', audit: '✗', align: '✗', rebrand: '✓' },
      { label: "Choix d'une palette de couleurs", audit: '✗', align: '✓ conseils pour la nouvelle communication', rebrand: '✓' },
      { label: "Choix des types d'écritures", audit: '✗', align: '✗', rebrand: '✓' },
      { label: 'Identité visuelle complète', audit: '✗', align: '✗', rebrand: '✓' },
      { label: 'Univers graphique – Univers visuel', audit: '✗', align: '✗', rebrand: '✓' },
      { label: 'Icônes / Illustrations …', audit: '✗', align: '✗', rebrand: '✓' },
      { label: 'Modèles visuels utilisables sur les réseaux sociaux (Templates)', audit: '✗', align: '✓', rebrand: '✓ complet' },
      { label: 'Guide de communication de la marque (Charte graphique & livre de marque) en PDF', audit: '✗', align: '✗', rebrand: '✓' },
      { label: 'Fichiers sources de toutes les créations visuelles : icônes, logos, illustrations', audit: '✗', align: '✗', rebrand: '✓' },
    ],
  },
  {
    id: 'communication',
    section: 'COMMUNICATION & PRÉSENCE DIGITALE',
    rows: [
      { label: 'Analyse des canaux de communication (site, page Google, réseaux sociaux, pipeline…)', audit: '✓', align: '✓', rebrand: '✓' },
      { label: 'Analyse du parcours client', audit: '✗', align: '✓', rebrand: '✓' },
      { label: 'Optimisation du message commercial', audit: '✓ pistes / conseils', align: '✓', rebrand: '✓' },
      { label: 'Accroches avec invitation du client à réagir (Call to action)', audit: '✗', align: '✓', rebrand: '✓' },
      { label: 'Structure de contenu', audit: '✓ pistes / conseils', align: '✓', rebrand: '✓' },
      { label: 'Plan de publication de démarrage (calendrier éditorial)', audit: '✗', align: '✓', rebrand: '✓' },
      { label: 'Gestion réseaux sociaux (4 semaines) pour la mise en place de la nouvelle stratégie', audit: '✗', align: '✓', rebrand: '✓' },
      { label: 'Analyse de performance de la nouvelle communication avec ajustements', audit: '✗', align: '✓', rebrand: '✓' },
      { label: 'Supervision / formation sur la nouvelle communication (2 semaines)', audit: '✗', align: '✓', rebrand: '✓' },
      { label: 'Campagne de lancement', audit: '✗', align: '✗', rebrand: '✓' },
      { label: 'Création de supports de communication (carte de visite, menu, plaquette, flyers…)', audit: '✗', align: '✓', rebrand: '✓' },
      { label: 'Refonte des canaux de communication', audit: '✓ uniquement des conseils', align: '✓ complète', rebrand: '✓ complète' },
    ],
  },
  {
    id: 'sessions',
    section: 'SESSIONS & ACCOMPAGNEMENT',
    rows: [
      { label: 'Session stratégique 1h–2h', audit: '✓', align: '✓', rebrand: '✓' },
      { label: '3 sessions stratégiques', audit: '✗', align: '✓', rebrand: '✓' },
      { label: 'Sessions régulières (suivi)', audit: '✗', align: '✗', rebrand: '✓' },
      { label: '2 sessions de démarrage', audit: '✗', align: '✗', rebrand: '✓' },
      { label: 'Formation sur les outils et apprentissage à la communication', audit: '✗', align: '✓', rebrand: '✓' },
      { label: 'Session bilan', audit: '✗', align: '✓', rebrand: '✓' },
      { label: 'Suivi WhatsApp illimité', audit: '✗', align: '✓', rebrand: '✓' },
      { label: 'Suivi après accompagnement', audit: '✗', align: '✓ limité', rebrand: '✓ limité' },
      { label: 'Co-construction stratégie + design', audit: '✗', align: '✓ premiers jalons', rebrand: '✓ niveau premium' },
      { label: 'Ateliers personnalisés', audit: '✗', align: '✓', rebrand: '✓' },
      { label: 'Coaching communication', audit: '✗', align: '✓', rebrand: '✓' },
    ],
  },
  {
    id: 'livrables',
    section: 'LIVRABLES & OUTILS',
    rows: [
      { label: 'Synthèse audit', audit: '✓ résumé bref', align: '✓', rebrand: '✓' },
      { label: "Plan d'action", audit: '✓ actions à mettre en place immédiatement', align: '✓ court - moyen et long terme', rebrand: '✓ court - moyen et long terme' },
      { label: 'Espace de travail partagé et privé', audit: '✗', align: '✓', rebrand: '✓' },
      { label: "Planche d'inspiration / axes créatifs - PDF", audit: '✗', align: '✓', rebrand: '✓' },
      { label: 'Kit de communication', audit: '✓ outils essentiels pour commencer', align: '✓ tableau de bord + outils personnalisés + 4 modèles', rebrand: '✓ tableau de bord + outils personnalisés + 4 modèles' },
      { label: 'Tableau et mini-formation pour comprendre ses statistiques de communication en ligne', audit: '✗', align: '✓', rebrand: '✓' },
      { label: "Guide d'utilisation de la marque (mémo édito)", audit: '✗', align: '✓', rebrand: '✓' },
      { label: 'Stratégie de communication - PDF', audit: '✗', align: '✓', rebrand: '✓' },
      { label: 'Guide de communication de la marque : PDF + fichiers sources', audit: '✗', align: '✗', rebrand: '✓' },
    ],
  },
  {
    id: 'experience',
    section: "EXPÉRIENCE & NIVEAU D'ACCOMPAGNEMENT",
    rows: [
      { label: 'Format flash', audit: '✓', align: '✗', rebrand: '✗' },
      { label: 'Formule accompagnement', audit: '✗', align: '✓ 14 semaines au total - minimum', rebrand: '✓ 16 semaines au total - minimum' },
      { label: 'Stratégie', audit: '✗', align: '✓ premiers jalons', rebrand: '✓ complet' },
      { label: 'Lancement assisté', audit: '✗', align: '✓', rebrand: '✓' },
      { label: 'Accompagnement premium', audit: '✗', align: '✗', rebrand: '✓' },
      { label: 'Duo stratégie & direction artistique', audit: '✓ léger', align: '✓', rebrand: '✓' },
    ],
  },
];

/* ─── helper rendu cellule ─── */
function renderCell(val: string) {
  if (val === '✓') return <span className="check">✓</span>;
  if (val === '✗') return <span className="cross">✗</span>;
  if (val.startsWith('✓'))
    return (
      <>
        <span className="check">✓</span>{' '}
        <span className="note">{val.slice(1).trim()}</span>
      </>
    );
  if (val.startsWith('✗')) return <span className="cross">✗</span>;
  return <span className="note">{val}</span>;
}

/* ─── config colonnes ─── */
const COLS = [
  { key: 'audit', label: 'audit express', price: '239€', img: Audit, color: '#3FB3E3' },
  { key: 'align', label: 'alignement',    price: '1290€', img: Alignement, color: '#B64F98' },
  { key: 'rebrand', label: 'rebranding',  price: '2190€', img: Rebranding, color: '#568C52' },
] as const;

/* ─── composant principal ─── */
export default function TableComparatif() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const colRefs = useRef<(HTMLTableCellElement | null)[]>([null, null, null]);
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  /* détecte mobile */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  /* synchro dots au scroll */
  const onScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const LABEL_W = 130;
    let closest = 0;
    let minDist = Infinity;
    colRefs.current.forEach((th, i) => {
      if (!th) return;
      const dist = Math.abs(th.offsetLeft - LABEL_W - el.scrollLeft);
      if (dist < minDist) { minDist = dist; closest = i; }
    });
    setActive(closest);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  /* navigation flèches / dots */
  const goTo = useCallback((idx: number) => {
    const el = scrollRef.current;
    const th = colRefs.current[idx];
    if (!el || !th) return;
    const LABEL_W = 130;
    el.scrollTo({ left: th.offsetLeft - LABEL_W, behavior: 'smooth' });
    setActive(idx);
  }, []);

  return (
    <section className="compare">
      <h2 id='compare' className="compare-title">Comparez les offres</h2>

      {/* ── UX navigation mobile ── */}
      {isMobile && (
        <div className="table-nav">
          <div className="table-nav-dots">
            {COLS.map((col, i) => (
              <button
                key={col.key}
                className={`table-nav-dot${active === i ? ' active' : ''}`}
                style={{ '--dot-color': col.color } as React.CSSProperties}
                onClick={() => goTo(i)}
                aria-label={`Voir ${col.label}`}
              />
            ))}
          </div>
          <div className="table-nav-arrows">
            <button
              className="table-nav-arrow"
              onClick={() => goTo(Math.max(0, active - 1))}
              disabled={active === 0}
              aria-label="Colonne précédente"
            >
              ←
            </button>
            <span className="table-nav-label" style={{ color: COLS[active].color }}>
              {COLS[active].label}
            </span>
            <button
              className="table-nav-arrow"
              onClick={() => goTo(Math.min(2, active + 1))}
              disabled={active === 2}
              aria-label="Colonne suivante"
            >
              →
            </button>
          </div>
          <p className="table-scroll-hint">← glisse pour comparer →</p>
        </div>
      )}

      <div className="table-wrap">
        <div className="table-scroll" ref={scrollRef}>
          <table>
            <thead>
              <tr>
                {/* cellule vide sticky coin */}
                <th className="th-label-corner" />
                {COLS.map((col, i) => (
                  <th
                    key={col.key}
                    ref={(el) => { colRefs.current[i] = el; }}
                    className={`th-offer${active === i && isMobile ? ' th-active' : ''}`}
                    style={{ '--col-color': col.color } as React.CSSProperties}
                  >
                    <Image src={col.img as StaticImageData} alt={col.label} width={80} height={40} style={{ objectFit: 'contain' }} />
                    <div className="th-name" style={{ color: col.color }}>{col.label}</div>
                    <span className="th-price">{col.price}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_SECTIONS.map((section) => (
                <>
                  <tr key={section.id} className={`section-row ${section.id}`}>
                    <td colSpan={4}>{section.section}</td>
                  </tr>
                  {section.rows.map((row) => (
                    <tr key={row.label}>
                      <td className="td-label">{row.label}</td>
                      <td>{renderCell(row.audit)}</td>
                      <td>{renderCell(row.align)}</td>
                      <td>{renderCell(row.rebrand)}</td>
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}