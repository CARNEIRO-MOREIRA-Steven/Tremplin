'use client'
import React, { useEffect, useRef } from 'react'
import Link from 'next/link'

const DetailsAudit = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return
          // Ajoute .draw à tous les éléments animables dans la section
          section.querySelectorAll('.promise-intro, .promise-content').forEach((el, i) => {
            setTimeout(() => el.classList.add('draw'), i * 300)
          })
          observer.disconnect()
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="promise">
      <div className="wrap">

        <div className="promise-intro">
          <p>
            Tu es un entrepreneur(se) ou dirigeant(e) <strong>déjà lancé(e)</strong> mais qui stagne.<br />
            Tu sais que <strong>tu as du potentiel mais tu manques de structure</strong>.<br />
            Tu veux comprendre pourquoi ça ne marche pas comme tu voudrais et quoi changer.
          </p>
        </div>

        <div className="promise-grid">

          <div className='promise-content'>
            <h2 className="promise-col-title">Ce que tu obtiens</h2>
            {[
              { title: 'Une vision claire',                desc: 'De la communication et de ton image' },
              { title: 'La conscience de tes forces',      desc: 'Et la lucidité sur ce qui te freine' },
              { title: "Un plan d'action simple",          desc: "Et concret pour savoir exactement quoi faire après" },
              { title: 'La confiance de reprendre la main', desc: 'Sur ta communication' },
              { title: 'Une boîte à outils personnalisée', desc: "Pour appliquer directement les bonnes pratiques et avancer dès maintenant" },
            ].map((item) => (
              <div key={item.title} className="promise-item">
                <p className="promise-item-title">{item.title}</p>
                <p className="promise-item-desc">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className='promise-content'>
            <h2 className="promise-col-title">Pourquoi cet audit ?</h2>
            {[
              { title: 'Rapide & efficace :',   desc: "En quelques jours, tu obtiens une vision claire de ta communication et un plan concret pour l'améliorer (contre plusieurs semaines pour un audit complet)." },
              { title: 'Un prix accessible :', desc: "L'Audit express à 239€, alors qu'un audit complet coûte généralement aux alentours de 1000€ !" },
              { title: 'Un regard expert :',   desc: "Bénéficie de l'expertise de deux spécialistes en communication (stratégie et design)" },
            ].map((item) => (
              <div key={item.title} className="promise-item">
                <p className="promise-item-title">{item.title}</p>
                <p className="promise-item-desc">{item.desc}</p>
              </div>
            ))}

            <div className="price-badge">
              <div className="price-badge-inner">
                <span className="price-badge-label">Mini prix</span>
                <span className="price-badge-num">239€</span>
                <span className="price-badge-unit">euros</span>
              </div>
            </div>
          </div>

        </div>

        <Link href="/contact" className="little-btn-white">
          Réserve ton audit maintenant
        </Link>

      </div>
    </section>
  )
}

export default DetailsAudit