import Link from 'next/link';
import './page.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Rebranding from '../../../public/rebranding.png'
import Audit from '../../../public/auditExpress.png'
import Alignement from '../../../public/alignement.png'



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
      { label: "Repositionnement de l'entreprise par rapport à son", audit: '✗', align: '✓', rebrand: '✓' },
      { label: 'Apprendre à raconter son histoire pour mieux vendre', audit: '✗', align: '✓ base', rebrand: '✓ complet' },
      { label: 'Recommandations stratégiques de publication', audit: '✓', align: '✓ + assistance à la mise en place', rebrand: '✓ + assistance à la mise en place' },
      { label: 'Stratégie lancement nouveau produit', audit: '✗', align: '✓', rebrand: '✓' },
      { label: 'Stratégie de lancement / activation (événementiel / promotionnel)', audit: '✗', align: '✓', rebrand: '✓ avec suivi et supervision' },
      { label: 'Stratégie de communication en ligne et locale', audit: '✗', align: '✓', rebrand: '✓' },
      { label: 'Plan d\'action stratégique', audit: '✓', align: '✓', rebrand: '✓' },
    ],
  },
  {
    id: 'identite',
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
    id: 'communication',
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
      { label: 'Kit de communication', audit: '✓ outils essentiels pour commencer', align: '✓ tableau de bord + outils personnalisés pour organiser et gérer sa com + 4 modèles', rebrand: '✓ tableau de bord + outils personnalisés pour organiser et gérer sa com + 4 modèles' },
      { label: 'Tableau et mini-formation pour apprendre à lire et comprendre ses statistiques de communication en ligne', audit: '✗', align: '✓', rebrand: '✓' },
      { label: "Guide d'utilisation de la marque pour rester dans la nouvelle directive de communication (mémo édito)", audit: '✗', align: '✓', rebrand: '✓' },
      { label: 'Stratégie de communication - PDF', audit: '✗', align: '✓', rebrand: '✓' },
      { label: 'Guide de communication de la marque : PDF + fichiers sources de la nouvelle identité', audit: '✗', align: '✗', rebrand: '✓' },
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
            <span>Chaque accompagnement</span> = une étape à ton prochain niveau
          </p>
          <div className="hero-desc">
            <p><strong>3 niveaux pour propulser ton entreprise vers sa pleine puissance.</strong><br /></p>
            <p>Que tu souhaites relancer ta communication, que tu aies besoin d&apos;un nouveau souffle, <br /> de
            monter un step ou d&apos;une stratégie complète, on a pensé trois offres adaptées à ta réalité.</p>
          </div>
      </section>

      {/* ── 3 OFFRES ── */}
      <section className="offers">
        <div className="wrap-wide">

          <div className="offers-grid">
            {/* Audit Express */}
            <div className="offer-card first">
              <span className="offer-tag">Le prix mini</span>
              <div className="offer-name">audit express</div>
              <p className="offer-desc">
                Tu sens que quelque chose cloche dans ta communication mais tu ne sais pas quoi.
                Tu veux <strong>un diagnostic franc</strong>, rapide et concret.
              </p>
              <div className="offer-price">239 euros</div>
              <p className="offer-tagline">Identifier ce qui t&apos;empêche de décoller et comprendre comment ajuster…</p>
              <p className='offer-subtagline'>Tu vas enfin <strong>comprendre ce qui ne fait pas passer ton audiance à l&apos;action.</strong><br /> Tu vas enfin pouvoir changer de cap avec une feuille de route pour <strong>arrêter de t&apos;éparpiller.</strong></p>
              <a href="">Je choisis l&apos;audit express</a>
              <span className='border-offer'></span>
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
              <div className='offer-title-group'>
              <div className="offer-name green">alignement</div>
              <div className="offer-subtitle">physique ou visio</div>
              </div>
              <p className="offer-desc">
                Tu veux <strong>(re)formuler ton positionnement et clarifier ton message</strong> pour enfin attirer les bons clients. <br /><strong>Tu veux monter d&apos;un step</strong> 
              </p>
              <div className="offer-price">1290 euros</div>
              <p className="offer-tagline">Structurer ta vision, ton message et tes fondations pour communiquer avec cohérence.</p>
              <p className='offer-subtagline'>Tu vas être soulagé(e)<strong>d&apos;avoir enfin une direction</strong>avec ta communication. <br /> Tu vas te <strong>sentir clair(e)</strong> dans ce que tu proposes et <strong>te reconnaitre dans ta communication.</strong></p>
              <a href="">Je choisis l&apos;offre alignement</a>
              <span className='border-offer'></span>
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
              <div className='offer-title-group'>
                <div className="offer-name cyan">rebranding</div>
                <div className="offer-subtitle">physique ou visio</div>
              </div>
              <p className="offer-desc">
               <strong>Ton image ne colle plus à qui tu es devenu(e).</strong> Tu veux <strong>refondre ton image,</strong>  ton univers, créer ta légitimité. Tu veux
               <strong> être reconnu(e) pour ton expertise.</strong>
              </p>
              <div className="offer-price">2190 euros</div>
              <p className="offer-tagline">Recréer une identité complète, alignée et ambitieuse – à ton image.</p>
              <p className='offer-subtagline'><strong>Ton image va enfin parler pour toi,</strong>ce qui va te rendre confiant(e) et crédible. <br /> Ta communication va refléter ce que tu es et <strong>va attirer à toi naturellement tes clients idéaux.</strong></p>
              <a href="">Je choisis l&apos;offre rebranding</a>
              <span className='border-offer'></span>
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
          <h2 className="compare-title">Comparez les offres</h2>

          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th><img src={Audit.src} alt="" /><br /><div className="offer-name-audit">audit express</div><span>239€</span></th>
                  <th><img src={Alignement.src} alt="" /><br /><div className="offer-name-alignement">alignement</div>
                  <span>1290€</span></th>
                  <th><img src={Rebranding.src} alt="" /><br /><div className="offer-name-rebranding">rebranding</div><span>2100€</span></th>
                </tr>
              </thead>
              <tbody>
                {TABLE_SECTIONS.map((section) => (
                  <>
                    <tr
                      key={section.section}
                      className={`section-row ${section.id}`}
                    >
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
      </section>

      {/* ── CTA FINAL ── */}
      <section className="cta-final">
          <p className='subtitle'>T&apos;es intéressé(e) par une de ces offres ?</p>
          <Link href="/agence#process" className="cta-final-title">Voilà comment ça se passe</Link>
      </section>

      {/* ── FOOTER ── */}
                <Footer />

    </div>
  );
}