import React from 'react'
import Link from 'next/link'
import TremplinTabeltte from "../../../../public/tremplin-sur-tablette.jpg"

const ContentAudit = () => {
  return (
        <section className="audit-content">



        <div className='content-audit-right'>
          <div className="audit-content-header">
            <h2 className="neon-title">
              Ce que contient l&apos;Audit de Communication Express 
              Signé Tremplin
            </h2>
          </div>

                  <div className='content-audit-left'>
            <img src={TremplinTabeltte.src} alt="Tremplin communication, au service des entreprises" />
            <div className="audit-col-left">
              <p>Pendant 2h on fait le point sur :</p>
              <ol className="audit-steps-list">
                {[
                  'Toi et ton activité',
                  'Ton marché actuel',
                  "L'identité de ton entreprise",
                  'Ce que tu as mis en place',
                  'Ton plan et la communication',
                  'Ton/Ta client(e) idéal(e)',
                  'Ton organisation et la gestion de la com',
                  'Les objectifs et la vision',
                ].map((step, i) => (
                  <li key={i} className="audit-step">
                    <span className="audit-step-num">{i + 1}—</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
        </div>

          <div className='glass'>


          <div className="audit-content-grid">
            {/* Colonne droite — détails */}
            <div className="audit-col-right">

              <div className="audit-detail-box">
                <p className="audit-detail-box-title">
                    - En visio ou en présentiel -
                </p>
              </div>

              <div className="audit-detail-box">
                <p className="audit-detail-box-title">Durée :</p>
                <p>2h entretiens<br />Livraison de l&apos;audit sous 48h</p>
              </div>

              <div className="audit-detail-box">
                <p className="audit-detail-box-title">Déroulé :</p>
                <p>
                  Entretien - temps de questions<br />
                  Audit par l&apos;agence<br />
                  Remise du bilan sous 48h - en PDF
                </p>
              </div>

              <div className="audit-detail-box">
                <p className="audit-detail-box-title">Livraison :</p>
                <p>
                 Bilan complet<br />
                  Point sur chaque canal de communication <br />
                  Plan d&apos;action à mettre en place immédiatement<br />
                  Conseils personnalisés
                </p>
              </div>
              </div>
              </div>
              </div>

              <div className="audit-bonus">
                <p className="audit-bonus-title">Bonus : Boîte à outils personnalisée</p>
              </div>

                <Link href="/contact" className="little-btn-white">
                  Je réserve mon audit express
                </Link>

          </div>
      </section>
  )
}

export default ContentAudit