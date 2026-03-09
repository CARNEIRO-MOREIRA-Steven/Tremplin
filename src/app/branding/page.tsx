'use client';
import { useState } from 'react';
import Link from 'next/link';
import './page.css';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const FAQ_ITEMS = [
  { q: "QUELLE EST LA DIFFÉRENCE ENTRE VOS OFFRES (AUDIT, ALIGNEMENT, REBRANDING) ?", a: "L'audit te donne un diagnostic clair. L'Alignement t'aide à poser un message fort et une direction juste. Le Rebranding transforme en profondeur ton image pour qu'elle reflète ton niveau réel. Chaque offre correspond à un moment précis de ton business." },
  { q: "J'AI DÉJÀ UN LOGO / UNE IDENTITÉ : EST-CE QUE JE DOIS TOUT REFAIRE ?", a: "Pas forcément. On garde ce qui fonctionne et on améliore le reste. L'objectif n'est jamais de « tout casser », mais de rendre ton image plus juste, plus cohérente et plus crédible." },
  { q: "EN COMBIEN DE TEMPS VAIS-JE VOIR DES RÉSULTATS ?", a: "Les premiers déclics arrivent souvent dès les premières semaines. Plus de clarté, plus d'assurance, des messages plus fluides. Les vrais résultats s'installent dans la durée, parce que ta communication repose enfin sur des bases solides." },
  { q: "EST-CE QUE JE VAIS ÊTRE ACCOMPAGNÉ(E) OU SIMPLEMENT RECEVOIR DES LIVRABLES ?", a: "Tu es accompagné(e) du début à la fin. On t'explique, on échange, on ajuste ensemble. Tu ne repars pas avec des fichiers « à utiliser seul(e) », mais avec une vraie compréhension de ta communication." },
  { q: "COMMENT SE PASSE CONCRÈTEMENT L'ACCOMPAGNEMENT ?", a: "On avance étape par étape. On commence par comprendre ta situation, puis on construit une stratégie claire, avant de travailler ton message et ton image. Tu sais toujours où tu en es, ce qu'on fait et pourquoi, grâce à l'espace de travail partagé." },
  { q: "POURQUOI INVESTIR DANS LE BRANDING PLUTÔT QUE DANS LA PUBLICITÉ ?", a: "La publicité attire. Le branding fait rester et fait choisir. Sans une image claire et un message fort, la pub amplifie… la confusion. Un bon branding travaille pour toi sur le long terme, même quand tu ne communiques pas." },
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

export default function BrandingPage() {
  return (
    <div className="rebranding-page">

      {/* ── HERO ── */}
      <section className="hero">
        <Header />
        <div className="wrap">
          <div className="hero-top">
            <span className="hero-photo-caption">Boîte de la photo : &apos;Création et stratégie de marque&apos;</span>
          </div>
          <h1 className="hero-title">Offre Rebranding</h1>
          <p className="hero-subtitle">La signature qui <strong>te positionne plus haut</strong></p>
          <div className="hero-box">
            <div className="hero-box-text">
              <h2>Tu as grandi. Ton expertise a évolué. Tes ambitions aussi.</h2>
              <p><em>Mais ton image, elle, tourne encore à la version &apos;début&apos; de ton activité.</em></p>
              <p>L&apos;<strong>offre Rebranding</strong> sert à reconstruire ton image de A à Z : stratégie, message, univers visuel, identité complète.</p>
              <p>C&apos;est un &apos;reset&apos; haut de gamme qui te remet au bon niveau de crédibilité, d&apos;impact et de légitimité.</p>
              <p><em>L&apos;objectif : que ton image parle AVANT toi — et mieux que toi.</em></p>
            </div>
            <div className="hero-box-img">Boîte de la photo : duo d&apos;experts Tremplin</div>
          </div>
        </div>
      </section>

      {/* ── POURQUOI ── */}
      <section className="pourquoi">
        <div className="wrap">
          <div className="neon-wrap">
            <div className="logo-pill"><span className="menu">menu</span> Tremplin</div>
            <div>
              <p className="title-text">Pourquoi faire un rebranding de mon entreprise ?</p>
              <span className="sub">Aussi appelé &apos;Création de marque&apos;</span>
            </div>
          </div>
          <div className="green-btns">
            {["Pour aligner ton image avec ta vraie valeur","Pour attirer des clients plus alignés (et prêts à acheter)","Pour gagner en crédibilité dans ton marché","Pour structurer et faire évoluer ta stratégie de marque"].map(t => (
              <button key={t} className="green-btn">{t}</button>
            ))}
          </div>
          <div className="pourquoi-body">
            <p>Parce qu&apos;à un moment, <strong>ton image n&apos;est plus à la hauteur</strong> de ce que tu es devenu(e).</p>
            <p>Ton business a évolué, ton expertise aussi… mais ton image est restée bloquée à ta version &apos;début&apos;. Ton univers visuel ne raconte plus ton niveau.</p>
            <p>Ton identité manque de force, de cohérence ou de singularité.</p>
            <p>Résultat : tu inspires la bonne énergie… mais <strong>pas la bonne perception.</strong> Tu te retrouves à convaincre, expliquer, justifier… alors qu&apos;une image juste ferait le travail à ta place.</p>
            <p>L&apos;offre rebranding sert à te redonner un visuel qui dit vrai, qui impressionne sans en faire trop, et qui reflète enfin ta valeur réelle.</p>
            <p>On repart de <strong>ton essence</strong>, on clarifie ton positionnement, on crée un univers graphique qui t&apos;incarne, <strong>et on construit une image de marque</strong> qui ouvre des portes avant même que tu parles.</p>
          </div>
          <div style={{ textAlign: 'center', marginTop: 24 }}>
            <Link href="/contact" className="btn-main">Je veux une image à ma hauteur <span className="arr">→</span></Link>
            <p className="btn-sub">Lien vers la page contact</p>
          </div>
        </div>
      </section>

      {/* ── POUR QUI ── */}
      <section className="pour-qui">
        <div className="wrap">
          <div className="neon-wrap">
            <div className="logo-pill"><span className="menu">menu</span> Tremplin</div>
            <p className="title-text">Transformer l&apos;identité de mon entreprise en image de marque — comment savoir si c&apos;est pour moi ?</p>
          </div>
          <div className="pour-qui-grid">
            {[
              "Tu sens que tu pourrais viser plus haut… si seulement ça se voyait.",
              "Ton identité actuelle te bloque clairement dans ta croissance.",
              "Tu veux une image premium, cohérente, signature et arrêtée de bricoler.",
              "Tu as changé d'ambition, de direction, de posture.",
              "Tes clients idéaux ne te remarquent pas ou ne voient pas ton plein potentiel.",
              "Tu veux que stratégie + design travaillent ensemble, au millimètre près.",
            ].map((t, i) => <div key={i} className={`pq-card${i % 2 === 0 ? ' cyan-bg' : ''}`}>{t}</div>)}
          </div>
          <p style={{ textAlign: 'center', fontStyle: 'italic', fontSize: '0.88rem', color: 'var(--gray)', margin: '12px 0 0' }}>Si tu veux que ton image devienne un accélérateur, c&apos;est la bonne offre.</p>
        </div>
      </section>

      {/* ── NOTRE FORCE ── */}
      <section className="methode">
        <div className="wrap">
          <p>On a accompagné plusieurs entreprises dans la refonte de leurs images ce qui nous permet de savoir aujourd&apos;hui comment transformer une entreprise en marque, comment aller plus loin que le design et précisément l&apos;identité visuelle.</p>
          <p>Notre force c&apos;est la finesse du regard. <strong>On identifie les angles morts, les incohérences et les leviers cachés qu&apos;on ne voit pas quand on a &apos;la tête dans son business&apos;.</strong></p>
          <p>Ce qui fait la différence chez nous, c&apos;est la double vision stratégie + design.<br /><strong className="methode-bold">Une méthode qui te permet d&apos;avancer avec plus de clarté, plus d&apos;impact et une image qui travaille enfin pour toi.</strong></p>
          <Link href="/contact" className="btn-main">Je veux me faire accompagner <span className="arr">→</span></Link>
          <p className="btn-sub">Lien vers la page contact</p>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="process">
        <div className="wrap-wide">
          <div className="neon-wrap">
            <div className="logo-pill"><span className="menu">menu</span> Tremplin</div>
            <p className="title-text">Comment se passe un accompagnement chez Tremplin — sur l&apos;offre Rebranding ?</p>
          </div>
          <div className="process-grid">
            <div className="step-block">
              <div className="step-num">1</div>
              <div className="step-content">
                <p className="step-title">Audit complet</p>
                <div className="step-body">
                  <p>À cette étape on va chercher à comprendre ce qui bloque (et ce qui fonctionne déjà).</p>
                  <p>Cet audit comprend : un entretien, l&apos;analyse de ton parcours client, de tes chiffres, de ta présence en ligne et de la concurrence.</p>
                  <p>On va chercher à identifier clairement :</p>
                  <ul><li>les axes forts,</li><li>les axes d&apos;amélioration,</li><li>les urgences à corriger.</li></ul>
                  <p>Objectif : comprendre pourquoi ton image ne reflète plus ton expertise et ce qu&apos;il faut transformer pour viser plus haut.</p>
                </div>
              </div>
            </div>
            <div className="step-block">
              <div className="step-num">2</div>
              <div className="step-content">
                <p className="step-title">Stratégie de communication</p>
                <div className="step-body">
                  <p>On clarifie tes objectifs et on t&apos;aide à faire les bons choix.</p>
                  <p>On explore toutes les options stratégiques : présence en ligne, événementiel, promotion, lancement, prospection… selon ce qui sera vraiment ton activité.</p>
                  <p>Tu repars avec un carnet PDF de stratégie de marque, c&apos;est à dire qui tu es, à qui tu parles, ce qui te rend unique, comment tu veux te montrer, ce que tu veux dire + un plan d&apos;action pour mettre en place cette stratégie.</p>
                </div>
              </div>
            </div>
            <div className="step-block">
              <div className="step-num">3</div>
              <div className="step-content">
                <p className="step-title">Créer ton image signature</p>
                <div className="step-body">
                  <p>À partir de ton repositionnement, on crée graphiquement une identité visuelle 100% sur-mesure :</p>
                  <ul><li>logo + variations</li><li>palette couleurs</li><li>logo + variations,</li><li>typographies,</li><li>univers graphiques,</li><li>premiers visuels réseaux,</li><li>mini charte d&apos;utilisation.</li></ul>
                  <p>On co-crée avec toi : questionnaire émotionnel, retours guidés, ajustements.</p>
                  <p>Objectif : créer une image qui te ressemble vraiment et qui porte ton niveau d&apos;expert(e).</p>
                </div>
              </div>
            </div>
            <div className="step-block">
              <div className="step-num">4</div>
              <div className="step-content">
                <p className="step-title">Refonte complète de ta communication</p>
                <div className="step-body">
                  <p>On réorganise toute ta communication autour de :</p>
                  <ul><li>la stratégie validée,</li><li>ton nouvel univers graphique,</li><li>tes objectifs.</li></ul>
                  <p>Et afin on te propose un calendrier de contenu qui suive tes exigences, les demandes et tes besoins : tu remplis un court questionnaire et on crée pour toi un calendrier éditorial d&apos;un mois pour lancer la nouvelle communication.</p>
                </div>
              </div>
            </div>
            <div className="step-block large">
              <div className="step-num">5</div>
              <div className="step-content">
                <p className="step-title">Test, supervision, ajustements & livraison finale</p>
                <div className="step-body">
                  <p>On gère tes réseaux pendant 4 semaines : on teste, on mesure, on ajuste.</p>
                  <p>Pendant ce temps :</p>
                  <ul><li>on crée ton tableau de bord de communication personnalisé,</li><li>on t&apos;installe des outils simples et efficaces,</li><li>on te forme pour reprendre ta communication sereinement.</li></ul>
                  <p>En fin d&apos;accompagnement tu reçois : ton Brand Book complet, tous les fichiers sources, les règles d&apos;utilisation, les déclinaisons nécessaires, ton plan d&apos;action court terme.</p>
                  <p>Ces éléments te permettent d&apos;utiliser ta nouvelle image en autonomie totale sans perte de cohérence.</p>
                </div>
              </div>
            </div>
            <div className="step-block large">
              <div className="step-num">6</div>
              <div className="step-content">
                <p className="step-title">Suivi illimité : tu n&apos;es jamais seul(e)</p>
                <div className="step-body">
                  <p>Après un dernier bilan pour clôturer ton parcours, tu gardes un accès illimité à nos conseils, ajustements, retours et soutien.</p>
                  <p>Le but : que tu deviennes totalement autonome tout en étant rassuré(e).</p>
                </div>
              </div>
            </div>
          </div>
          <p className="process-note">L&apos;accompagnement dure environ 16 semaines.<br />Il dépend de nos plannings respectifs. Cette durée est la moyenne relevée sur nos accompagnements précédents.</p>
        </div>
      </section>

      {/* ── RÉSULTATS ── */}
      <section className="resultats">
        <div className="wrap">
          <h2 className="resultats-title">À partir de quand verrai-je des résultats ?</h2>
          <div className="resultats-box">
            <p>Dès <strong>les premières semaines</strong>, tu resssentiras un gain de clarté, de confiance et de cohérence.</p>
            <p>Les retours clients et l&apos;impact sur ton positionnement <strong>deviennent visibles dès la mise en ligne</strong> de ta nouvelle image, souvent accompagnés de :</p>
            <ul>
              <li>Plus de réponses à tes posts,</li>
              <li>Meilleure perception &apos;pro&apos;,</li>
              <li>Des clients plus alignés,</li>
              <li>Positionnement naturel plus haut de gamme.</li>
            </ul>
            <p><strong>La puissance de l&apos;offre rebranding réside dans le fait que ton image va enfin refléter qui tu es, ce qui rendra ta communication magnétique et puissante.</strong></p>
          </div>
        </div>
      </section>

      {/* ── DURÉE ── */}
      <section className="duree">
        <div className="wrap">
          <h2 className="duree-title">Combien de temps dure l&apos;accompagnement ?</h2>
          <div className="duree-box">
            <p>Le Réalignement <strong>se déroule sur environ 16 semaines.</strong></p>
            <ul>
              <li>2 sessions de démarrage</li>
              <li>3 sessions stratégiques</li>
              <li>Suivi entre chaque étape</li>
              <li>Accompagnement WhatsApp continu</li>
              <li>4 semaines de gestion de la communication – BONUS</li>
              <li>Temps de formation sur les nouveaux outils</li>
              <li>Bilan de fin d&apos;accompagnement pour s&apos;assurer que tu es au clair pour la suite</li>
            </ul>
            <p><strong>À la fin, tu repars avec une direction claire,</strong> un message solide et un plan d&apos;action que tu sauras continuer à suivre.</p>
          </div>
        </div>
      </section>

      {/* ── INCLUS ── */}
      <section className="inclus">
        <div className="wrap-wide">
          <div className="neon-wrap" style={{ marginBottom: 28 }}>
            <p className="title-text">Dans tous nos accompagnements, c&apos;est inclus :</p>
          </div>
          <div className="inclus-grid">
            {[
              { title: 'Suivi WhatsApp illimité', body: "Tu n'avances jamais seul. Tu peux nous écrire à tout moment pour poser une question, valider une idée ou débloquer une situation. Réactivité, clarté et soutien en continu." },
              { title: 'Accompagnement humain et pédagogique', body: "On t'explique tout avec des mots simples. Pas de jargon, pas de posture experte. Tu comprends ce qu'on fait, pourquoi on le fait, et comment l'utiliser ensuite par toi-même." },
              { title: 'Formation + co-création', body: "On construit avec toi, pas à ta place. Tu es impliqué(e) dans chaque étape pour que ta communication soit alignée, authentique et vraiment à ton image. Puis nous te formons aux outils inconnus." },
              { title: 'Accès illimité aux ressources et outils', body: "Tu as accès à nos supports, méthodes et modèles, en plus d'un espace de travail partagé (sur Notion) qui centralise ta stratégie, ton univers visuel et les documents essentiels." },
              { title: 'Ajustement stratégique continu', body: "Ta communication évolue, et ta stratégie aussi. On ajuste en temps réel selon les retours, ton activité et les résultats obtenus pour rester toujours pertinent et efficace." },
              { title: 'RDV bilan', body: "Un rendez-vous dédié en fin d'accompagnement pour faire le point, sur la suite de ta communication et l'organisation que tu as prévue afin de sécuriser la continuité de ta communication." },
            ].map((c, i) => (
              <div key={i} className="inclus-card">
                <p className="inclus-card-title">{c.title}</p>
                <p className="inclus-card-body">{c.body}</p>
              </div>
            ))}
          </div>
          <div className="inclus-cta">
            <Link href="/contact" className="btn-main">Je veux un accompagnement Tremplin <span className="arr">→</span></Link>
            <p className="btn-sub">ENVOI VERS NOTRE PAGE CONTACT</p>
          </div>
        </div>
      </section>

      {/* ── TÉMOIGNAGES ── */}
      <section className="temoignages">
        <div className="wrap">
          <p className="temo-label">Témoignages</p>
          <h2 className="temo-title">Ils ont choisi de refondre leur communication<br />Ils ont choisis l&apos;offre Rebranding</h2>
          <div className="temo-grid">
            {[
              { activite: 'Fiscaliste', probleme: 'Pour se spécialiser dans son domaine d\'expertise', prenom: 'Charlotte' },
              { activite: 'Boutique de prêt-à-porter féminin', probleme: 'Je me dis que qu\'elle pourra m\'aider à être plusieurs fois mieux que ce dont je me suis', prenom: 'Marie Louise' },
            ].map((t, i) => (
              <div key={i} className="temo-card">
                <div className="temo-tags">
                  <span className="temo-tag pink">Activité : {t.activite}</span>
                  <span className="temo-tag gray-t">Positif travail : {t.probleme}</span>
                </div>
                <p className="temo-words">Ses mots<br />&apos;témoignage {t.prenom}&apos;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RDV ── */}
      <section className="rdv">
        <div className="wrap">
          <div className="neon-wrap">
            <p className="title-text">Comment prendre rendez-vous ?</p>
          </div>
          <div className="rdv-inner">
            <div className="rdv-steps">
              {[
                { n: '1', t: 'Prise de contact', b: <>Tu <a href="/contact">remplis le formulaire</a> et tu nous expliques ton projet et tes besoins. <span style={{color:'var(--pink)'}}>Lien vers la page de contact</span></> },
                { n: '2', t: 'Proposition de rendez-vous', b: "Dès qu'on reçoit ta demande, on l'étudie et on te recontacte pour te proposer un rendez-vous en visio ou en physique." },
                { n: '3', t: 'Devis & Planning', b: "Lors de notre entretien nous définissons ensemble les actions à prioriser et nous l'établissons un devis." },
                { n: '4', t: "Paiement de l'acompte", b: "C'est pour toi aussi au delà – tu n'as plus qu'à régler l'acompte et signer le devis pour démarrer notre collaboration." },
                { n: '5', t: 'On démarre', b: "L'équipe se met en action et on démarre l'étape 1 comme expliqué et validé lors de l'explication de l'offre." },
              ].map((s) => (
                <div key={s.n} className="rdv-step">
                  <span className="rdv-num">{s.n}</span>
                  <div>
                    <p className="rdv-step-title">{s.t}</p>
                    <p className="rdv-step-body">{s.b}</p>
                  </div>
                </div>
              ))}
              <div className="rdv-cta">
                <Link href="/contact" className="btn-main">Parler de mon projet <span className="arr">→</span></Link>
                <p className="btn-sub">ENVOI VERS NOTRE PAGE CALENDLY</p>
              </div>
            </div>
            <div className="rdv-photo">Boîte de la photo : &apos;Es-tu prêt à révéler le plein potentiel de ta boîte ? Tremplin communication est là pour ça.&apos;</div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="faq">
        <div className="wrap">
          <h2 className="faq-title">J&apos;ai des questions…</h2>
          <ul className="faq-list">
            {FAQ_ITEMS.map(item => <FaqItem key={item.q} q={item.q} a={item.a} />)}
          </ul>
          <div className="faq-footer">
            <Link href="/faq" className="faq-btn">J&apos;AI D&apos;AUTRES QUESTIONS</Link>
            <p className="faq-link">ENVOI VERS NOTRE PAGE <a href="/faq">&apos;foire aux questions&apos;</a></p>
          </div>
        </div>
      </section>

      {/* ── CTA + FOOTER ── */}
      <section className="cta-final">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <Link href="/contact" className="btn-main">Je me lance <span className="arr">→</span></Link>
          <p className="btn-sub">ENVOI VERS NOTRE PAGE Contact</p>
        </div>
      </section>

<Footer />
    </div>
  );
}
