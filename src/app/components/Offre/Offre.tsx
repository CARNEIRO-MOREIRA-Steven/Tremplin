import React from 'react'
import './offre.css'
import AuditExpress from '../../../../public/auditExpress.png'
import Alignement from '../../../../public/alignement.png'
import Rebranding from '../../../../public/rebranding.png'
import ArrowRight from '../../../../public/arrow-right.svg'
const Offre = () => {
  return (
    <section className='offre-container'>
      <section className='offre-content'>
        <section className='first-offre'>
        <img className='image-offre' src={AuditExpress.src}/>
        <h3>Le coup de projecteur express sur ta com.</h3>
        <section>
        <ul> Pour toi si : 
        <li>Tu postes sur les réseaux sociaux au hasard.</li>
        <li>Tu sens qu&apos;un truc bloque, mais tu ne sais pas quoi.</li>
        <li>Ton image ne reflète pas vraiment qui tu es.</li>
        </ul>
        <ul> Tu repars avec : 
        <li>Un éclairage limpide sur ce qui freine ta com&apos;</li>
        <li>Des pistes concrètes à activer immédiatement.</li>
        <li>Le sentiment de savoir enfin ou tu vas.</li>
        </ul>
        </section>
                <div className='banner-cta'>
          <a > Lire plus</a>
          <img src={ArrowRight.src} alt="flèche droite" />
        </div>
        </section>
        <section className='second-offre'>
        <img className='image-offre' src={Alignement.src} alt='image de la formule alignement'/>
        <h3>Retrouve un cap clair, et avance avec assurance.</h3>
        <section>
        <ul> Pour toi si : 
        <li>Tu ne sais plus comment te présenter, parler de ton entreprise</li>
        <li>Tes offres manquent sont floues et ça bloque dans ta com&apos;</li>
        <li>Tu veux reprendre confiance et communiquer aisément</li>
        </ul>
        <ul> Tu repars avec : 
        <li>Un positionnement clair et assumé.</li>
        <li>Un plan d&apos;action clair pour structurer ta communication.</li>
        <li>Un pitch magnétique qui attire manuellement tes clients idéaux.</li>
        </ul>
        </section>
        <div className='banner-cta'>
          <a > Lire plus</a>
          <img src={ArrowRight.src} alt="flèche droite" />
        </div>
        </section>
        <section className='third-offre'><img className='image-offre' src={Rebranding.src}/><h3>La mue qui propulse ton image au niveau supérieur.</h3>
        <section>
        <ul> Pour toi si : 
        <li>Tu sens que ton image ne te ressemble plus.</li>
        <li>Ton business a évolué, mais pas ta communication.</li>
        <li>Tu veux être perçu à la hauteur de ton expertise.</li>
        </ul>
        <ul> Tu repars avec : 
        <li>Une identité visuelle complète qui incarne ton évolution.</li>
        <li>Un storytelling puissant qui marque les esprits.</li>
        <li>Des outils prêts à l&apos;emploi pour déployer ta com&apos; sans perdre de temps.</li>
        </ul>
        </section>
                        <div className='banner-cta'>
          <a > Lire plus</a>
          <img src={ArrowRight.src} alt="flèche droite" />
        </div>
        </section>
        </section>

        <section className='declic-section'> <h3>Et si c&apos;était maintenant, le vrai declic ?</h3>
        <h4>30 minutes offertes, zéro engagement, 100% clarté.</h4>
        <a>Réserver le Call Déclic</a></section>
    </section>
  )
}

export default Offre