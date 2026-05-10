'use client';
import { useState } from 'react';
import Link from 'next/link';
import './page.css';

import Footer from '../components/Footer/Footer';
import Banner from './components/Banner';
import Header from '../components/Header/Header';
import TremplinAuBureau from '../../../public/tremplin-au-bureau.jpg'

const FAQ_ITEMS = [
  { q: "QUELLE EST LA DIFFÉRENCE ENTRE VOS OFFRES (AUDIT, ALIGNEMENT, REBRANDING) ?", a: "L'audit te donne un diagnostic clair. L'Alignement t'aide à poser un message fort et une direction juste. Le Rebranding transforme en profondeur ton image pour qu'elle reflète ton niveau réel. Chaque offre correspond à un moment précis de ton business." },
  { q: "J'AI DÉJà un logo / une identité : est ce que je dois tout refaire ?", a: "Pas forcément, On garde ce qui fonctionne et on améliore le reste. L'objectif n'est jamais de 'tout casser', mais de rendre ton image plus juste, plus cohérante et plus crédible." },
  { q: "EN COMBIEN DE TEMPS VAIS-JE VOIR DES RÉSULTATS ?", a: "Les premiers déclics arrivent souvent dès les premières semaines. Plus de clarté, plus d'assurance, des messages plus fluides. Les vrais résultats s'installent dans la durée, parce que ta communication repose enfin sur des bases solides." },
  { q: "EST-CE QUE JE VAIS ÊTRE ACCOMPAGNÉ(E) OU SIMPLEMENT RECEVOIR DES LIVRABLES ?", a: "Tu es accompagné(e) du début à la fin. On t'explique, on échange, on ajuste ensemble. Tu ne repars pas avec des fichiers à utiliser seul(e), mais avec une vraie compréhension de ta communication." },
  { q: "COMMENT SE PASSE CONCRÈTEMENT L'ACCOMPAGNEMENT ?", a: "On avance étape par étape. On commence par comprendre ta situation, puis on construit une stratégie claire, avant de travailler ton message et ton image. Tu sais toujours où tu en es, ce qu'on fait et pourquoi, grâce à l'espace de travail partagé." },
  { q: "Pourquoi investir dans le branding plutôt que dans la publicité ?", a: "La publicité attire. Le branding fait rester et fait choisir. Sans une image claire et un message fort, la pub amplifie... la confusion. Un bon branding travaille pour toi sur le long termer, même quand tu ne communiques pas." },
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

export default function ComPage() {
  return (
    <div className="com-page">

      {/* ── HERO ── */}
      <section className="hero">
        <Header />
        <Banner />
      </section>

      {/* ── POURQUOI ── */}
      <section className="refonte">
        <h2 className="neon-title">Pourquoi faire un rebranding de mon entreprise ? <br /><span className="sub">Aussi appelé &apos;création de marque&apos;</span></h2>
        

          <div className="green-btns">
            {["Pour aligner ton image avec ta vraie valeur", "Pour attirer des clients plus alignés (et prêts à acheter)", "Pour gagner en crédibilité dans ton marché", "Pour structurer et faire évoluer ta stratégie de marque"].map(t => (
              <p key={t} className="green-btn">{t}</p>
            ))}
          </div>

          <div className="pourquoi-body">
            <p>Parce qu&apos;à un moment, <strong>ton image n&apos;est plus à la hauteur</strong> de ce que tu es devenu(e)</p>
            <p>
            Ton business a évolué, ton expertise aussi... mais ton image est restée bloquée à ta version &apos;debut&apos;. Ton univers visuel ne raconte plus ton niveau.</p>
            <p><strong>Résultat :</strong> tu inspires la bonne énergie... mais <strong>pas la bonne perception.</strong> Tu te retrouve à convaincre, expliquer, justifier... <strong>alors qu&apos;une image juste ferait le travail à ta place.</strong></p>
            <p><strong>L&apos;offre rebranding  sert à te redonner un visuel qui dit vrai, qui impressionne sans en faire trop, et qui reflète enfin ta valeur réelle.</strong></p>
            <p>On repart de <strong>ton essence</strong>, on <strong>clarifie ton positionnement</strong>, on <strong>crée un univers</strong> graphique qui t&apos;incarne et <strong>on construit une image de marque </strong>qui ouvre des portes avant même que tu parles.</p>
          </div>

            <Link href="/contact" className="little-btn-green">Je veux une image à ma hauteur</Link>
      </section>

      {/* ── POUR QUI ── */}
      <section className="pour-qui">

            <p className="neon-title">Transformer l&apos;identité de mon entreprise en image de marque <br /> comment savoir si c&apos;est pour moi ?</p>
          <div className="pour-qui-grid">
            {[
              "Tu sens que tu pourrais viser plus haut... si seulement ça se voyait.",
              "Ton identité actuelle te bloque clairement dans ta croissance.",
              "Tu veux une image prenium, cohérente, signature et arrêter de bricoler.",
              "Tu as changé d'ambition, de direction, de posture.",
              "Tes clients idéaux ne te remarquent pas ou ne voient pas ton plein potentiel.",
              "Tu veux une stratégie + design travaillent ensemble, au milimètre près.",
            ].map((t, i) => <div key={i} className="pour-qui-card">{t}</div>)}
          </div>
          <p className='Give-texte'>Si tu veux que ton image devienne un accélérateur c&apos;est la bonne offre.</p>
      </section>

      {/* ── NOTRE FORCE ── */}
      <section className="methode">
        <div className='methode-content'>
          <p>On a accompagné plusieurs entreprise dans la refonte de leurs images ce qui nous permet de savoir aujourd&apos;hui comment transformer une entreprise en marque, comment aller plus loin grâce au design et précisément dans l&apos;identité visuelle.</p>
          <p>Notre force c&apos;est la finesse du regard. <strong>On identifie les angles morts, les incohérences et les leviers cachés qu&apos;on ne voit pas quand on a &apos;la tête dans son business&apos;.</strong></p>
          <p>Ce qui fait la différence chez nous, c&apos;est la double vision : stratégie + design.</p>
          <p className="methode-bold">Une méthode qui te permet d&apos;avancer avec plus de clarté, plus d&apos;impact et une image qui travaille enfin pour toi.</p>
          
          <Link href="/contact" className="little-btn-blue">
          Je veux me faire accompagner
          </Link>
        </div>
      </section>

      {/* ── PROCESS 6 ÉTAPES ── */}
 <section className="process">

  <p className="neon-title">
    Comment se passe un accompagnement chez <br />
    Tremplin — sur l&apos;offre rebranding ?
  </p>

  <div className='process-content'>
    <div className="process-grid">

      {/* COLONNE GAUCHE */}
      <div className="col">

        <div className="step-block">
          <div className="step-num">1</div>
          <div className="step-content">
            <p className="step-title">Audit complet</p>
            <div className="step-body">
              <p>À cette étape on va chercher à comprendre ce qui bloque (et ce qui fonctionne déjà).</p>
              <p>Cet audit comprend : un entretien, l&apos;analyse de ton parcours client, de tes chiffres, de ta présence en ligne et de la concurrence.</p>
              <p>On va chercher à identifier clairement :</p>
              <ul>
                <li>tes points forts,</li>
                <li>les axes d&apos;amélioration,</li>
                <li>les urgences à corriger.</li>
              </ul>
              <p>Objectif : comprendre pourquoi ton image ne reflète plus ton expertise - et ce qu&apos;il faut transfomer pour viser plus haut.</p>
            </div>
          </div>
        </div>

        <div className="step-block">
          <div className="step-num">3</div>
          <div className="step-content">
            <p className="step-title">Créer ton image signature</p>
            <div className="step-body">
              <p>À partir de ton repositionnement, Fabrice, graphiste, conçoit une identité visuelle 100% sur-mesure :</p>
              <p>- logo + variations,<br />
              - palette couleurs,<br />
              - typographies,<br />
              - univers graphique,<br />
              - premiers visuels réseaux,<br />
              - mini charte d&apos;utilisation,<br /></p>
              <p>On co-créer avec toi : questionnaire émotionnel, retours guidés, ajustements...</p>
              <p>Objectif : créer une image qui te ressemble vraiment et qui pote ton niveau d&apos;expertise.</p>
            </div>
          </div>
        </div>

        <div className="step-block">
          <div className="step-num">5</div>
          <div className="step-content">
            <p className="step-title">Test, supervision, ajustements & livraison finale</p>
            <div className="step-body">
              <p>On gère tes réseaux pendant 4 semaines : on teste, on mesure, on ajuste.</p>
              <p>Pendant ce temps :</p>
              <ul>
                <li>on crée ton tableau de bord personnalisé,</li>
                <li>on t&apos;installe des outils simples et efficaces,</li>
                <li>on te forme pour reprendre ta communication sereinement.</li>
              </ul>
            </div>
            <p>En fin d&apos;accompagnement, tu reçois :</p>
            <p>- ton Brand Book complet,<br />
              - tous les fichiers sources,<br />
              - les règles d&apos;utilisation,<br />
              - les déclinaisons nécessaires,<br />
              - ton plan d&apos;action court terme.<br /></p>
              <p>Ces éléments te permettent d&apos;utiliser ta nouvelle image en autonomie totale, sans perte de cohérence</p>
          </div>
        </div>

      </div>

      {/* COLONNE DROITE */}
      <div className="col">

        <div className="step-block">
          <div className="step-num">2</div>
          <div className="step-content">
            <p className="step-title">Stratégie de communication</p>
            <div className="step-body">
              <p>On clarifie tes objectifs et on t&apos;aide à faire les bons choix.</p>
              <p>Tu prends des décisions éclairées grâce à nos conseils simples et concrets.</p>
              <p>On explore toutes les options stratégiques : présence en ligne, événementiel, promotion, lancement, prospection… selon ce qui sera vraiment ton activité.</p>
              <p>Tu repars avec un carnet PDF de stratégie de marque, c&apos;est à dire qui tu es, à qui tu parles, ce qui te rend unique, comment tu veux te montrer, ce que tu veux dire + un plan d&apos;action pour mettre en place cette stratégie.</p>
            </div>
          </div>
        </div>

        <div className="step-block">
          <div className="step-num">4</div>
          <div className="step-content">
            <p className="step-title">Refonte complète de ta communication</p>
            <div className="step-body">
              <p>On réorganise toute ta communication autour de :</p>
              <ul>
                <li>la stratégie validée,</li>
                <li>ton nouvel univers graphique,</li>
                <li>tes objectifs.</li>
              </ul>
              <p>On créé des visuels qui correspondent à ta nouvelle identité. Au delà des mots on te reconnaitra par l&apos;apparence et le design.</p>
              <p>Et afin qu&apos;on puisse te porposer un calendrier de contenu qui suive tes exigences, tes demandes et tes attentes, tu remplis un court questionnaire et on crée pour toi un calendrier éditorial d&apos;un mois pour lancer ta nouvelle communication.</p>
            </div>
          </div>
        </div>

        <div className="step-block">
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

    </div>
  </div>

  <p className='process-texte-bottom'>
    L&apos;accompagnement dure environ 16 semaines.<br />
    Il dépend de nos plannings respectifs. Cette durée est la moyenne <br /> relevée sur nos accompagnements précédents.
  </p>

</section>

       <section className='start-projet' id='start-projet'>
        <h2 className='neon-title'>Comment prendre rendez-vous ?</h2>
        <div className='start-projet-details'>
            <aside>
                <p className='number'>1 </p>
                <h3>Prise de contact</h3>
                <p>Tu <a href="/contact">remplis le formualire</a> et tu nous explique ton projet et tes besoins.</p>
                <p className='number'>2 </p>
                <h3>Proposition de rendez-vous</h3>
                <p>Dès qu&apos;on reçoit ta demande, on l&apos;étudie et on te recontacte pour te proposer un rendez-vous en visio ou en physique.</p>
                <p className='number'>3 </p>
                <h3>Devis & planning</h3>
                <p>Lors de notre entretien nous définisons ensemble les actions à prioriser et nous t&apos;établissons le devis.</p>
                <p className='number'>4 </p>
                <h3>Paiement de l&apos;accompte</h3>
                <p>C&apos;est ok pour toi suite au devis - tu n&apos;as plus qu&apos;à régler l&apos;accompte et signer le devis pour démarrer notre collaboration.</p>
                <p className='number'>5 </p>
                <h3>on démarre</h3>
                <p>L&apos;équipe se met en acion et on démarre l&apos;étape 1 comme expliqué et validé lors de l&apos;explication de l&apos;offre.</p>
            </aside>
            <div className=''>
            <img src={TremplinAuBureau.src} alt="Es-tu prêt à révéler le plein potentiel de ta boite ? Tremplin communication est là pour ça." />
            </div>
        </div>
        <p className='texte-give'>Sinon tu peux directement booker ton appel téléphonique pour discuter de ton projet.</p>
        <a className='btn-pink' href="./">Parler de mon projet</a>
    </section>

      <section className="inclus" >
        <div className='inclus-container'>
            <p className="neon-title">Dans tous nos accompagnements, c&apos;est inclus :</p>
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
            <Link href="/contact" className="little-btn-green">Je veux un accompagnement Tremplin
            </Link>
            </div>
      </section>

      {/* ── TÉMOIGNAGES ── */}
      <section className="temoignages">
        <div className='temoignage-container'>
        <div className='div-title'>
          <p className="texte-give intro-title">Témoignages</p>
          <h2 className="intro-subtitle">Ils ont choisi de refondre leur communication<br />Ils ont choisis l&apos;offre alignement</h2>
        </div>
          <div className="temoignage-grid">
        
            {[
              { activite: 'Fascialiste', probleme: "Peur de se spécialisé dans son domaine d'expertise", prenom: 'Aurélie' },
              { activite: 'Boutique de prêt à porter féminin', probleme: "Ne réalise pas qu'elle incarne son entreprise et est le meilleure atout de sa boutique", prenom: 'Marie' },
            ].map((t, i) => (
              <div key={i} className="temoignage-card">
                <div className="temoignage-tags">
                  <span className="temoignage-tag-activite">Activité<br /><p>{t.activite}</p></span>
                  <span className="temoignage-tag-probleme">Problème essentiel trouvé<br /><p>{t.probleme}</p></span>
                </div>
                <p className="temoignage-words">Ses mots<br />&apos;témoignage {t.prenom}&apos;</p>
              </div>
            ))}
          </div>
          </div>
      </section>

          <section className="resultats">
            <h2 className="neon-title">
              A partir de quand verrai-je des résultats ?
            </h2>
            <div className='resultats-container'>
              <aside>
                <p>Dès <strong>les premières semaines, tu ressentiras</strong> un gain de clarté, de confiance et de cohérence. </p>
                <ul><p>Les retours clients et l&apos;impact sur ton positionnement <strong>deviennent visibles dès la mise en ligne</strong> de ta nouvelle image, souvent accompagnés de :</p>
                  <li>Plus de réponse à tes posts,</li>
                  <li>Meilleure perception &apos;pro&apos;,</li>
                  <li>Des clients plus alignés,</li>
                  <li>Positionnement naturel plus haut de gamme.</li>
                </ul>
                <p><strong>La puissance de l&apos;offre rebranding réside dans le fait que ton image va enfin refléter qui tu es, ce qui rendra ta communication magnétique et puissante.</strong></p>
              </aside>
            </div>
          </section>

          <section className="duree">
            <h2 className="neon-title">
              A partir de quand verrai-je des résultats ?
            </h2>
            <div className='duree-container'>
              <aside>
                <p>Le Réalignement<strong> se déroule sur environ 16 semaines.</strong></p>
                <ul>
                  <li>- 2 sessions de démarrage</li>
                  <li>- 3 sessions stratégiques</li>
                  <li>- Suivi entre chaque étape</li>
                  <li>- Accompagnement WhatsApp continu</li>
                  <li>- 4 semaines de gestion de ta communication - BONUS</li>
                  <li>- Temps de formation sur tes nouveaux outils</li>
                  <li>- Bilan de fin d&apos;accompagnement pour s&apos;assurer que tu es au clair pour la suite</li>
                </ul>
                <p><strong>à la fin, tu repars avec une direction claire,</strong>un message solide et un plan d&apos;action que tu sauras continuer à suivre.</p>
              </aside>
            </div>
          </section>

  

      {/* ── FAQ ── */}
      <section className="faq">
        <div className="faq-container">
          <h2 className="faq-title texte-give">J&apos;ai des questions…</h2>
          <ul className="faq-list">
            {FAQ_ITEMS.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </ul>
          <div className="faq-footer">
            <Link href="/contact" className="little-btn-black">
              J&apos;ai d&apos;autres questions
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className='final-cta'>        
        <Link href="/contact" className="little-btn-pink">Je me lance</Link>
      </section>
      
      <Footer />
    </div>
  );
}
