import React from 'react'
import AuditIcon from "../../../../public/auditExpress.png"
import './banner.css'

import Branding from '../../../../public/rebranding.png'
import MarionFabriceAlignement from '../../../../public/marion-fabrice-alignement.png'



const Banner = () => {
  return (
    <section className='banner-container'>

          <img src={Branding.src} alt="refonte de communication et création d'une stratégie de communication." className='audit-image-hero' />
          <h1>
            Offre Rebranding
          </h1>
          <h2>
            La signature qui <strong>te positionne plus haut</strong>
          </h2>

        <div className='hero-details'>
            <div className='hero-div-details'>
                <h2>Tu as grandi. Ton expertise a évolué. Tes ambitions aussi.</h2>
                <p className='Give-text'>Mais ton image elle, raconte encore la version &apos;début&apos; de ton activité.</p>
                <p>L&apos;<strong>offre Rebranding</strong> sert à reconstruire ton image de A à Z : stratégie, message, univers visuel, identité complète.</p>
                <p>C&apos;est un &apos;reset&apos; haut de gamme qui te remet au bon niveau de crédibilité, d&apos;impact et de légitimité.</p>
                <p className='Give-text'>L&apos;obectif : que ton image parle <span className='texte-uppercase'>avant</span> toi - et mieux que toi.</p>
            </div>
            <div className='hero-div-image'>
                <img src={MarionFabriceAlignement.src} alt="Duo d'experts en communication sur Saint-Quentin : Tremplin propulse ton business" />
            </div>
        </div>

    </section>
  )
}

export default Banner