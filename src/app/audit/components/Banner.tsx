import React from 'react'
import AuditIcon from "../../../../public/auditExpress.png"
import './banner.css'

import ImageAudit from '../../../../public/auditExpress.png'
import ImageAuditExpress from '../../../../public/audit-express.png';



const Banner = () => {
  return (
    <section className='banner-container'>

        <div className="wrap">
          <img src={ImageAudit.src} alt="Audit de communication" className='audit-image-hero' />
          <h1>
            Faire un audit<br />de communication
          </h1>

          <div className="hero-tu-te-demandes">
            <p>Tu te demandes :</p>
            <p>
              Le <strong>site</strong> internet est-il <strong>obligatoire</strong> pour communiquer ?<br />
              <strong>Par où commencer</strong> pour communiquer ?<br />
              <strong>Comment</strong> coupler de ses <strong>réseaux sociaux</strong> ?<br />
              Comment <strong>m&apos;organiser</strong> pour une communication régulière ?<br />
              Faut-il communiquer de la même façon sur ses différents réseaux ?
            </p>
          </div>

          <div className="hero-media">
            <img src={ImageAuditExpress.src} alt="Pourquoi faire un audit de communication" />
          </div>

          <p className="hero-analyse texte-opensans">
            Obtiens une analyse rapide et efficace de ta communication
            pour <strong>faire le point</strong>, puis comprends{' '}
            <strong>comment la transformer</strong> en une communication qui te permet d&apos;atteindre tes objectifs
          </p>
        </div>
    </section>
  )
}

export default Banner