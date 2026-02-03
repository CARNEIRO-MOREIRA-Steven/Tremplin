import React from 'react'
import './introagence.css'
import BureauLumineux from '../../../../public/un-bureau-lumineux.jpg'

const IntroAgence = () => {
  return (
    <section className='intro-agence-container'>
        <h2 className='intro-agence-title'>
            Une bonne communication peut tout changer
        </h2>
        <p className='intro-agence-texte'>LE MONDE N'A PAS BESOIN D'UNE ÉNIÈME AGENCE DE COMMUNICATION
        IL A BESOIN DE COMMUNICANTS QUI REVEILLENT, RECENTRENT ET RÉVÈLENT. CHEZ TREMPLIN, ON N'EMPILE PAS DES SERVICES: ON REVELE CE QUE TU AS DÉJÀ EN TOI, ET ON T'AIDE À LE TRADUIRE AVEC CLARTÉ, PUISSANCE ET STRATÉGIE</p>
    <img src={BureauLumineux.src} className='intro-agence-image' />
    </section>
  )
}

export default IntroAgence