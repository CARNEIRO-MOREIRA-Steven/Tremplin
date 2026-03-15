import Link from 'next/link';
import './page.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const TABLE_SECTIONS = [
  {
    section: 'CLARTÉ & STRATÉGIE DE MARQUE',
    rows: [
      { label: 'Diagnostic stratégique', audit: '✓ version express', align: '✓', rebrand: '✓' },
      { label: 'Audit verbal (discours, message)', audit: '✓', align: '✓', rebrand: '✓' },
      { label: 'Audit visuel (logo, palette, photos, icônes, cohérence)', audit: '✓', align: '✓', rebrand: '✓' },
      { label: 'Analyse du positionnement actuel', audit: '✓ version express', align: '✓', rebrand: '✓' },
      { label: 'Définition du positionnement complet', audit: '✗', align: '✓', rebrand: '✓ niveau avancé' },
      { label: 'Message clé / pitch', audit: '✓', align: '✓', rebrand: '✓' },
      { label: 'Ton de la voix', audit: '✓', align: '✓', rebrand: '✓' },
      { label: "Repositionnement de l'entreprise par rapport à son", audit: '✗', align: '✓', rebrand: '✓' },
      { label: 'Apprendre à raconter son histoire pour mieux vendre', audit: '✗', align: '✓ base', rebrand: '✓ complet' },
      { label: 'Recommandations stratégiques de publication', audit: '✓', align: '✓ + assistance à la mise en place', rebrand: '✓ + assistance à la mise en place' },
      { label: 'Stratégie lancement nouveau produit', audit: '✗', align: '✓', rebrand: '✓' },
      { label: 'Stratégie de lancement / activation (événementiel / communautaire)', audit: '✗', align: '✓', rebrand: '✓ avec suivi et supervision' },
      { label: 'Stratégie de communication en ligne et locale', audit: '✗', align: '✓', rebrand: '✓' },
      { label: 'Plan d\'action stratégique', audit: '✓', align: '✓', rebrand: '✓' },
    ],
  },
  {
    section: 'IDENTITÉ VISUELLE & UNIVERS DE MARQUE',
    rows: [
      { label: 'Axes visuels', audit: '✗', align: '✓', rebrand: '✓' },
      { label: 'Planche d\'inspiration visuelle', audit: '✗', align: '✓', rebrand: '✓' },
      { label: 'Recommandations visuelles', audit: '✗', align: '✗', rebrand: '✓' },
      { label: 'Choix d\'une palette de couleurs', audit: '✗', align: '✓ conseils pour la nouvelle communication', rebrand: '✓' },
      { label: 'Choix des types d\'écritures', audit: '✗', align: '✗', rebrand: '✓' },
      { label: 'Identité visuelle complète', audit: '✗', align: '✗', rebrand: '✓' },
      { label: 'Univers graphique – Univers visuel', audit: '✗', align: '✗', rebrand: '✓' },
      { label: 'Icônes / Illustrations …', audit: '✗', align: '✗', rebrand: '✓' },
      { label: 'Modèles visuels utilisables sur les réseaux sociaux (Templates)', audit: '✗', align: '✓', rebrand: '✓ complet' },
      { label: 'Guide de communication de la marque (Charte graphique & livre de marque) en PDF', audit: '✗', align: '✗', rebrand: '✓' },
      { label: 'Fichiers sources de toutes les créations visuelles : icônes, logos, illustrations', audit: '✗', align: '✗', rebrand: '✓' },
    ],
  },
  {
    section: 'COMMUNICATION & PRÉSENCE DIGITALE',
    rows: [
      { label: 'Analyse des canaux de communication (site, page Google, réseaux sociaux, pipeline…)', audit: '✓', align: '✓', rebrand: '✓' },
      { label: 'Analyse du parcours client', audit: '✗', align: '✓', rebrand: '✓' },
      { label: 'Optimisation du message commercial', audit: '✓ pistes / conseils', align: '✓', rebrand: '✓' },
      { label: "Accroches avec invitation du client à réagir (Call to action)", audit: '✗', align: '✓', rebrand: '✓' },
      { label: 'Structure de contenu', audit: '✓ pistes / conseils', align: '✓', rebrand: '✓' },
      { label: 'Plan de publication de démarrage (calendrier éditorial)', audit: '✗', align: '✓', rebrand: '✓' },
      { label: 'Gestion réseaux sociaux (4 semaines) pour la mise en place de la nouvelle stratégie', audit: '✗', align: '✓', rebrand: '✓' },
      { label: 'Analyse de performance de la nouvelle communication avec ajustements', audit: '✗', align: '✓', rebrand: '✓' },
      { label: 'Supervision / formation sur la nouvelle communication (2 semaines)', audit: '✗', align: '✓', rebrand: '✓' },
      { label: 'Campagne de lancement', audit: '✗', align: '✗', rebrand: '✓' },
      { label: 'Création de supports de communication (carte de visite, menu, carte de services / soins, plaquette, flyers…)', audit: '✗', align: '✓', rebrand: '✓' },
      { label: 'Refonte des canaux de communication', audit: '✓ uniquement des conseils', align: '✓ complète', rebrand: '✓ complète' },
    ],
  },
  {
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
    section: 'LIVRABLES & OUTILS',
    rows: [
      { label: 'Synthèse audit', audit: '✓ résumé bref', align: '✓', rebrand: '✓' },
      { label: "Plan d'action", audit: '✓ actions à mettre en place immédiatement', align: '✓ court - moyen et long terme', rebrand: '✓ court - moyen et long terme' },
      { label: 'Espace de travail partagé et privé', audit: '✗', align: '✓', rebrand: '✓' },
      { label: "Planche d'inspiration / axes créatifs - PDF", audit: '✗', align: '✓', rebrand: '✓' },
      { label: 'Kit de communication', audit: '✓ outils essentiels pour commencer', align: '✓ tableau de bord + outils personnalisés pour organiser et gérer sa com + 4 modèles', rebrand: '✓ tableau de bord + outils personnalisés pour organiser et gérer sa com + 4 modèles' },
      { label: 'Tableau et mini-formation pour apprendre à lire et comprendre ses statistiques de communication en ligne', audit: '✗', align: '✓', rebrand: '✓' },
      { label: "Guide d'utilisation de la marque pour rester dans la nouvelle directive de communication (mémo édito)", audit: '✗', align: '✓', rebrand: '✓' },
      { label: 'Stratégie de communication - PDF', audit: '✗', align: '✓', rebrand: '✓' },
      { label: 'Guide de communication de la marque : PDF + fichiers sources de la nouvelle identité', audit: '✗', align: '✗', rebrand: '✓' },
    ],
  },
  {
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

function renderCell(val: string) {
  if (val === '✓') return <span className="check">✓</span>;
  if (val === '✗') return <span className="cross">✗</span>;
  if (val.startsWith('✓')) return <><span className="check">✓</span> <span className="note">{val.slice(1).trim()}</span></>;
  if (val.startsWith('✗')) return <span className="cross">✗</span>;
  return <span className="note">{val}</span>;
}

export default function AccompagnementsPage() {
  return (
    <div className="accompagnements-page">

      {/* ── HERO ── */}
      <section className="hero">
        <Header />
          <h1 className="hero-title">
            Nos accompagnements pour<br />
            monter une communication<br />
            qui attire des clients.
          </h1>
          <p className="hero-subtitle">
            <strong>Chaque accompagnement = une étape à ton prochain niveau</strong>
          </p>
          <p className="hero-desc">
            3 niveaux pour propulser ton entreprise vers sa pleine puissance.<br />
            Que tu souhaites relancer ta communication, que tu aies besoin d&apos;un nouveau souffle, de
            monter un step ou d&apos;une stratégie complète, on a pensé trois offres adaptées à ta réalité.
          </p>
      </section>

      {/* ── 3 OFFRES ── */}
      <section className="offers">
        <div className="wrap-wide">
          <p className="offers-note">Les blocs arrivent de gauche - droite et celui du milieu d&apos;en bas</p>

          <div className="offers-grid">
            {/* Audit Express */}
            <div className="offer-card first">
              <span className="offer-tag">Le pack mini</span>
              <div className="offer-name">audit express</div>
              <div className="offer-subtitle">physique du visio</div>
              <div className="offer-price">239 euros</div>
              <p className="offer-tagline">Identifier ce qui t&apos;empêche de décoller et comprendre comment ajuster…</p>
              <p className="offer-desc">
                Tu sens que quelque chose cloche dans ta communication mais tu ne sais pas quoi.
                Tu veux un <em>diagnostic franc</em>, rapide et concret.
              </p>
              <ul className="offer-includes">
                <li>2h d&apos;entretien (visio)</li>
                <li>Vision de la comm&apos; visuelle + verbale</li>
                <li>Analyse express de ton positionnement</li>
                <li>Rapport rendu en PDF</li>
                <li>Plan d&apos;action immédiatement</li>
                <li>Recommandations stratégiques</li>
                <li>Outils pour organiser et gérer ta com&apos;</li>
              </ul>
              <span className="offer-details-link">Découvrir tout ce qui est inclus</span>
            </div>

            {/* Alignement */}
            <div className="offer-card second highlight">
              <span className="offer-tag">Refonte de communication</span>
              <div className="offer-name green">alignement</div>
              <div className="offer-subtitle">physique ou visio</div>
              <div className="offer-price">1290 euros</div>
              <p className="offer-tagline">Structurer ta vision, ton message et tes fondations pour communiquer avec cohérence.</p>
              <p className="offer-desc">
                Tu veux trouver la clarté de formuler ton message à ta communication et te sentir dans ce que tu proposes et te reconnaître dans ta communication.
                Tu veux avoir enfin une direction avec ce que tu proposes.
              </p>
              <ul className="offer-includes">
                <li>14 semaines minimum d&apos;accompagnement</li>
                <li>3 RDV pour travailler la stratégie</li>
                <li>Mise en place de la stratégie en collaboration avec toi</li>
                <li>1 RDV bilan en fin d&apos;accompagnement pour amorcer la suite</li>
                <li>Suivi illimité sur WhatsApp (même après l&apos;accompagnement)</li>
                <li>Espace de travail partagé privé</li>
              </ul>
              <span className="offer-details-link">Découvrir tout ce qui est inclus</span>
            </div>

            {/* Rebranding */}
            <div className="offer-card three">
              <span className="offer-tag">Création image de marque</span>
              <div className="offer-name cyan">rebranding</div>
              <div className="offer-subtitle">physique ou visio</div>
              <div className="offer-price">2 100 euros</div>
              <p className="offer-tagline">Recréer une identité complète, alignée et ambitieuse – à ton image.</p>
              <p className="offer-desc">
                Ton image ne colle plus à qui tu es devenu(e). Tu veux refondre ton image, tout repartir, créer la singularité. Tu veux être reconnu pour ton expertise.
              </p>
              <ul className="offer-includes">
                <li>16 semaines minimum d&apos;accompagnement</li>
                <li>2 sessions de démarrage : Audit + Bilan de départ</li>
                <li>RDV réguliers pour créer et monter ensemble la nouvelle stratégie de marque</li>
                <li>Création d&apos;un univers graphique</li>
                <li>Accompagnement au lancement de la nouvelle stratégie</li>
                <li>Suivi illimité sur WhatsApp (même après l&apos;accompagnement)</li>
                <li>Espace de travail partagé privé</li>
              </ul>
              <span className="offer-details-link">Découvrir tout ce qui est inclus</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── TABLEAU COMPARATIF ── */}
      <section className="compare">
        <div className="wrap-wide">
          <p className="compare-title">Comparez les offres</p>
          <p className="compare-intro">
            Quand le visiteur descend sur le site : le tableau déroule mais les titres des colonnes restent en place
          </p>

          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th className="col-pink">Audit Express<br /><span style={{fontSize:'0.75rem', fontWeight:400}}>239€</span></th>
                  <th className="col-green">Réalignement<br /><span style={{fontSize:'0.75rem', fontWeight:400}}>1290€</span></th>
                  <th className="col-cyan">Rebranding<br /><span style={{fontSize:'0.75rem', fontWeight:400}}>2100€</span></th>
                </tr>
              </thead>
              <tbody>
                {TABLE_SECTIONS.map((section) => (
                  <>
                    <tr key={section.section} className="section-row">
                      <td colSpan={4}>{section.section}</td>
                    </tr>
                    {section.rows.map((row) => (
                      <tr key={row.label}>
                        <td>{row.label}</td>
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

      {/* ── CTA FINAL ── */}
      <section className="cta-final">
        <div className="wrap">
          <p>Tu es intéressé(e) par une de ces offres ?</p>
          <h2 className="cta-final-title">Voilà comment ça se passe</h2>
          <Link href="/contact" className="btn-main">
            Parler de mon projet <span className="arr">→</span>
          </Link>
          <p className="btn-sub" style={{marginTop:10}}>
            quand on survole ce bouton il y a une animation pour qu&apos;on puisse comprendre que c&apos;est un lien cliquable. Ce lien renvoie à &apos;notre agence&apos; ancre &gt; &apos;notre process&apos;
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
                <Footer />

    </div>
  );
}