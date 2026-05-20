import React from 'react'
import './introagence.css'
import ImageVisio from '../../../../public/image-visio.png'

const IntroAgence = () => {
  return (
    <section className='intro-agence-container'>
      <p className='intro-agence-texte'>Une bonne communication ne repose pas uniquement sur le visuel.</p>
      <p className='intro-agence-texte'>Elle repose sur une stratégie claire, des messages cohérents et une vraie compréhension de votre entreprise.</p>
        <h2 className='neon-title' data-neon>
            Importance de la communication digitale
        </h2>
        <p className='intro-agence-texte'>Aujourd’hui, une entreprise peut proposer un excellent service… mais rester invisible sans une vraie communication. <br />
La communication digitale permet de transmettre le bon message, de partager la bonne information et de créer une relation de confiance durable avec les bonnes personnes. <br /><br />

Réseaux sociaux, site internet, identité visuelle, contenus, supports : tous ces moyens participent à l’image que votre entreprise renvoie. Une communication claire facilite les échanges, améliore la compréhension de votre activité et renforce votre crédibilité.</p>
        <h2 className='neon-title' data-neon>
            Stratégies de communication efficace
        </h2>
        <p className='intro-agence-texte'>Une stratégie de communication efficace ne consiste pas à “poster plus”.
Elle consiste à transmettre la bonne information, avec le bon message, au bon moment. <br /><br />

Chez Tremplin, nous aidons les entreprises à structurer leur communication pour créer une vraie relation avec leurs clients et rendre leurs actions plus cohérentes. <br /><br />

Grâce à des moyens adaptés à votre activité, votre communication devient plus simple, plus claire et surtout plus impactante. <br /><br />

Nous avons créé 3 offres pour répondre à vos besoins, incluant les services des meilleures agences :
campagnes de publicité, community management, stratégie digitale, événementiel, création de contenus, shooting photo et vidéo… <br /><br />

<a href="/contact">👉 Pour une prestation sur mesure : contactez-nous via le formulaire de contact</a></p>
    {/* <img src={ImageVisio.src} className='intro-agence-image' alt="Présenation de l'agece de communication et de branding à Saint-Quentin" /> */}
    </section>
  )
}

export default IntroAgence