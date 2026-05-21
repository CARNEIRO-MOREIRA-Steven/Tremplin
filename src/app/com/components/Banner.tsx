import React from 'react'
import AuditIcon from "../../../../public/auditExpress.png"
import './banner.css'

import Alignement from '../../../../public/alignement 1.png'
import MarionFabriceAlignement from '../../../../public/marion-fabrice-alignement.png'



const Banner = () => {
  return (
    <section className='banner-container'>

          <img src={Alignement.src} alt="une consultante en communication et un directeur artistique pour les projets de communication des entreprises " className='audit-image-hero' />
          <h1>
            Réalignement de communication
          </h1>
          <h2>
            Clarifier ton positionnement et harmoniser ta communication pour attirer les bons clients
          </h2>

        <div className='hero-details'>
            <div className='hero-div-details'>
                <h2>Tu avances, et ta <br /> communication te semble <br />inefficace ou floue.</h2>
                <p>Avec notre offre alignement, on remet tes fondations au clair : <br /> ton message, ton identité, ta présence en ligne et la cohérence de l&apos;ensemble.</p>
                <p className='Give-text'>L&apos;objectif : repositionner ton entreprise sans repartir de zéro,<br /> pour communiquer avec assurance, impact <br /> et stratégie.</p></div>
            <div className='hero-div-image'>
                <img src={MarionFabriceAlignement.src} alt="Duo d'experts en communication sur Saint-Quentin : Tremplin propulse ton business" />
            </div>
        </div>

    </section>
  )
}

export default Banner