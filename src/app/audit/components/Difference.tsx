import React from 'react'
import './difference.css'

const Difference = () => {
  return (
    <section className="difference">
        <div className="wrap-wide">
          <div className="difference-title">
            <h2 className="section-title">
              Pourquoi cet audit de communication est différent de ce que<br />
              je peux trouver dans une autre agence de communication ?
            </h2>
          </div>

          <div className="difference-grid">
            {[
              { desc: "Uniquement le vocabulaire afin que tu comprennes ce qu'on t'explique. Tu repars avec des clés claires et un plan pratique à utiliser immédiatement." },
              {  desc: "Tu profiteras des conseils de deux experts en chaque partie (communication & design). Une approche désorientation à notre carnet et le besoin des créatifs." },
              {  desc: "Un format court, efficace, sans engagement minimal. C'est un point de départ, une amorce ou bilan de là où tu es." },
            ].map((card) => (
              <div key={card.desc} className="diff-card">
                {card.desc}
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Difference