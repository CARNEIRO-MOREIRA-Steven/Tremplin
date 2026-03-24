import React from 'react'
import AuditIcon from "../../../../public/auditExpress.png"
import './banner.css'

import Alignement from '../../../../public/alignement.png'
import MarionFabriceAlignement from '../../../../public/marion-fabrice-alignement.png'



const Banner = () => {
  return (
    <section className='banner-container'>

          <img src={Alignement.src} alt="refonte de communication et création d'une stratégie de communication." className='audit-image-hero' />
          <h1>
            Réalignement de com&apos;
          </h1>
          <h2>
            <strong>Clarifier</strong> ton positionnement et <strong>harmoniser</strong><br /> ta communication pour <strong>attirer</strong> les bons clients
          </h2>

        <div className='hero-details'>
            <div className='hero-div-details'>
                <h2>Tu avances, et ta <br /> communication te semble <br />inefficace ou floue.</h2>
                <p>Avec notre <strong>offre alignement</strong>, on remet tes fondations au clair : <br /> ton message, ton identité, ta présence en ligne et la cohérence de l&apos;ensemble.</p>
                <p className='Give-text'>L&apos;objectif : repositionner ton entreprise sans repartir de zéro,<br /> pour communiquer avec assurance, impact <br /> et stratégie.</p></div>
            <div className='hero-div-image'>
                <img src={MarionFabriceAlignement.src} alt="Duo d'experts en communication sur Saint-Quentin : Tremplin propulse ton business" />
            </div>
        </div>

    </section>
  )
}

export default Banner