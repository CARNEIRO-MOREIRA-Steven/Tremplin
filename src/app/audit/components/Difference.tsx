import React from 'react'
import './difference.css'

const Difference = () => {
  return (
    <section className="difference">
          <div className="difference-title">
            <h2 className="section-title">
              Pourquoi cet audit de communication est différent de ce que<br />
              je peux trouver dans une autre agence de communication ?
            </h2>
          </div>

          <div className="difference-grid">
            {[
              { desc: "Uniquement du vocabulaire que tu comprends ou qu’on t’explique. Tu repars avec des clés concrètes et un plan d’action que tu pourras mettre en place immédiatement." },
              {  desc: "Tu profiteras des conseils de deux experts aux casquettes différentes : un regard porté design et un regard porté stratégie." },
              {  desc: "Un format court, efficace, sans engagement, ni blabla. C’est un RDV de 2H et une livraison du bilan sous 48h." },
            ].map((card) => (
              <div key={card.desc} className="diff-card">
                {card.desc}
              </div>
            ))}
          </div>
      </section>
  )
}

export default Difference