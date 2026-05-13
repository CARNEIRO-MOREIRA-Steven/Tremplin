import React from 'react'
import AuditIcon from "../../../../public/auditExpress.png"
import './banner.css'

import ImageAudit from '../../../../public/audit express 1.png'
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
            <h2 className='neon'>Tu te demandes :</h2>
            <p>
              <strong>Le site internet est-il obligatoire</strong> pour communiquer ?<br />
              <strong>Par où commencer pour communiquer ?</strong><br />
              <strong>Comment s&apos;occuper de ses réseaux sociaux</strong> ?<br />
              Comment m&apos;organiser<strong> pour une communication régulière ?</strong><br />
              Faut-il communiquer de la même façon sur ses différents réseaux ?
            </p>
          </div>

          <div className="hero-media">
            <img src={ImageAuditExpress.src} alt="Pourquoi faire un audit de communication" />
          </div>

          <p className="hero-analyse">
            Obtiens une analyse rapide et efficace de ta communication
            pour faire le point, puis comprends{' '}
            comment la transformer en une communication qui te permet d&apos;atteindre tes objectifs
          </p>
        </div>
    </section>
  )
}

export default Banner