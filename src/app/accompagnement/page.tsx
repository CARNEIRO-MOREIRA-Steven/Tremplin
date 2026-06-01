import Link from 'next/link';
import './page.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Rebranding from '../../../public/rebranding.png';
import Audit from '../../../public/auditExpress.png';
import Alignement from '../../../public/alignement.png';
import TableComparatif from './TableComparatif';

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
        <h2 className="hero-subtitle">
          <span>Chaque accompagnement</span> = une étape à ton prochain niveau
        </h2>
        <div className="hero-desc">
          <p><strong>3 niveaux pour propulser ton entreprise vers sa pleine puissance.</strong></p>
          <p>
            Que tu souhaites relancer ta communication, que tu aies besoin d&apos;un nouveau souffle,{' '}
            de monter un step ou d&apos;une stratégie complète, on a pensé trois offres adaptées à ta réalité.
          </p>
        </div>
      </section>

      {/* ── 3 OFFRES ── */}
      <section className="offers">
        <div className="wrap-wide">
          <div className="offers-grid">

            {/* Audit Express */}
            <div className="offer-card first">
              <span className="offer-tag">Le prix mini</span>
              <div className="offer-title-group">
              <div className="offer-name">audit express</div>
              </div>
              <p className="offer-desc">
                Tu sens que quelque chose cloche dans ta communication mais tu ne sais pas quoi.
                Tu veux <strong>un diagnostic franc</strong>, rapide et concret.
              </p>
              <div className="offer-price">239e</div>
              <p className="offer-tagline">Identifier ce qui t&apos;empêche de décoller et comprendre comment ajuster…</p>
              <p className="offer-subtagline">
                Tu vas enfin <strong>comprendre ce qui ne fait pas passer ton audience à l&apos;action.</strong><br />
                Tu vas enfin pouvoir changer de cap avec une feuille de route pour <strong>arrêter de t&apos;éparpiller.</strong>
              </p>
              <a className='little-btn-black' href="/audit">Je choisis l&apos;audit express</a>
              <span className="border-offer" />
              <ul className="offer-includes">
                <li>2h d&apos;entretien (visio)</li>
                <li>Audit de ta communication visuelle et verbale</li>
                <li>Analyse express de ton positionnement</li>
                <li>Compte rendu en PDF</li>
                <li>Plan d&apos;action immédiatement</li>
                <li>Recommandations stratégiques</li>
                <li>Outils pour organiser et gérer ta com&apos;</li>
              </ul>
              <a className="offer-details-link"  href='#compare'>Découvrir tout ce qui est inclus</a>
            </div>

            {/* Alignement */}
            <div className="offer-card second highlight">
              <span className="offer-tag">Refonte de communication</span>
              <div className="offer-title-group">
                <div className="offer-name green">alignement</div>
                <div className="offer-subtitle">physique ou visio</div>
              </div>
              <p className="offer-desc">
                Tu veux <strong>(re)formuler ton positionnement et clarifier ton message</strong> pour enfin attirer les bons clients.{' '}
                <strong>Tu veux monter d&apos;un step</strong>
              </p>
              <div className="offer-price"><span>A partir de </span>3 x 430e<span>1290e</span></div>
              <p className="offer-tagline">Structurer ta vision, ton message et tes fondations pour communiquer avec cohérence.</p>
              <p className="offer-subtagline">
                Tu vas être soulagé(e) <strong>d&apos;avoir enfin une direction</strong> avec ta communication.<br />
                Tu vas te <strong>sentir clair(e)</strong> dans ce que tu proposes et <strong>te reconnaître dans ta communication.</strong>
              </p>
              <a className='little-btn-black' href="/com">Je choisis l&apos;offre alignement</a>
              <span className="border-offer" />
              <ul className="offer-includes">
                <li>14 semaines minimum d&apos;accompagnement</li>
                <li>3 RDV pour travailler la stratégie</li>
                <li>Mise en place de la stratégie en collaboration avec toi</li>
                <li>1 RDV bilan en fin d&apos;accompagnement pour amorcer la suite</li>
                <li>Suivi illimité sur WhatsApp (même après l&apos;accompagnement)</li>
                <li>Espace de travail partagé privé</li>
              </ul>
              <a className="offer-details-link"  href='#compare'>Découvrir tout ce qui est inclus</a>
            </div>

            {/* Rebranding */}
            <div className="offer-card three">
              <span className="offer-tag">Création image de marque</span>
              <div className="offer-title-group">
                <div className="offer-name cyan">rebranding</div>
                <div className="offer-subtitle">physique ou visio</div>
              </div>
              <p className="offer-desc">
                <strong>Ton image ne colle plus à qui tu es devenu(e).</strong> Tu veux <strong>refondre ton image,</strong>{' '}
                ton univers, créer ta légitimité. Tu veux <strong>être reconnu(e) pour ton expertise.</strong>
              </p>
              <div className="offer-price"><span> A partir de</span>4 x 550e<span>2190e</span></div>
              <p className="offer-tagline">Recréer une identité complète, alignée et ambitieuse – à ton image.</p>
              <p className="offer-subtagline">
                <strong>Ton image va enfin parler pour toi,</strong> ce qui va te rendre confiant(e) et crédible.<br />
                Ta communication va refléter ce que tu es et <strong>va attirer à toi naturellement tes clients idéaux.</strong>
              </p>
              <a className='little-btn-black' href="/branding">Je choisis l&apos;offre rebranding</a>
              <span className="border-offer" />
              <ul className="offer-includes">
                <li>16 semaines minimum d&apos;accompagnement</li>
                <li>2 sessions de démarrage : Audit + Bilan de départ</li>
                <li>RDV réguliers pour créer et monter ensemble la nouvelle stratégie de marque</li>
                <li>Création d&apos;un univers graphique</li>
                <li>Accompagnement au lancement de la nouvelle stratégie</li>
                <li>Suivi illimité sur WhatsApp (même après l&apos;accompagnement)</li>
                <li>Espace de travail partagé privé</li>
              </ul>
              <a className="offer-details-link" href='#compare'>Découvrir tout ce qui est inclus</a>
            </div>

          </div>
        </div>
      </section>

      {/* ── TABLEAU COMPARATIF (composant client avec UX mobile) ── */}
      <TableComparatif />

      {/* ── CTA FINAL ── */}
      <section className="cta-final">
        <p className="subtitle">T&apos;es intéressé(e) par une de ces offres ?</p>
        <Link href="/agence#process" className="little-btn-white">Voilà comment ça se passe</Link>
      </section>

      {/* ── FOOTER ── */}
      <Footer />

    </div>
  );
}