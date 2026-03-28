import React from 'react'
import './introagence.css'
import ImageVisio from '../../../../public/image-visio.png'

const IntroAgence = () => {
  return (
    <section className='intro-agence-container'>
        <h2 className='neon-title'>
            Prêt.e à révéler le plein potentiel de ta boite ?
        </h2>
        <p className='intro-agence-texte'>LE MONDE N&apos;A PAS BESOIN D&apos;UNE ÉNIÈME <strong>AGENCE DE COMMUNICATION </strong>
        IL A BESOIN D&apos;une <strong>entreprise de communication </strong> QUI RéVEILLENT, RECENTRENT ET RÉVÈLENT. CHEZ TREMPLIN, ON N&apos;EMPILE PAS DES SERVICES: ON <strong>RéVèLE CE QUE TU AS DÉJÀ EN TOI,</strong> ET ON T&apos;AIDE À LE TRADUIRE AVEC CLARTÉ, PUISSANCE ET STRATÉGIE
        On est là pour t&apos;aider à <strong>propulser ton business.</strong> Tremplin c&apos;est ta future agence de branding, c&apos;est l&apos;entreprise de communication qu&apos;il te faut. </p>
    <img src={ImageVisio.src} className='intro-agence-image' alt="Présenation de l'agece de communication et de branding à Saint-Quentin" />
    </section>
  )
}

export default IntroAgence