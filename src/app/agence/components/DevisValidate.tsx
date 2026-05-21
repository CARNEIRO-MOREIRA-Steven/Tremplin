'use client'
import React, { useEffect, useRef, useState } from 'react'
import ImageGroupeWhatsapp from '../../../../public/image-groupe-whatsapp.png'
import ImageJobboard from '../../../../public/image-jobboard.png'

const steps = [
  {
    className: 'first-list',
    title: '1er RDV',
    text: "Quelque soit l'offre on commence par un premier RDV, celui qui nous permet d'entrer dans ton projet.",
  },
  {
    className: 'second-list',
    title: 'Ouverture du groupe whatsapp',
    text: "Pour un suivi fluide, un espace rassurant et une disponibilité accrue de notre équipe.",
  },
  {
    className: 'third-list',
    title: 'Création de ton tableau de bord',
    text: "C'est ton futur repère, celui ou l'on centralisera tout le travail que nous allons fournir. Un espace de travail partagé.",
  },
]

const DevisValidate = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [visibleCount, setVisibleCount] = useState(0)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Fait apparaître chaque li avec 250ms d'écart
          steps.forEach((_, i) => {
            setTimeout(() => setVisibleCount(i + 1), 200 + i * 250)
          })
          observer.disconnect()
        }
      },
      { threshold: 0.25, rootMargin: '0px 0px -80px 0px' }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section id='prochaine-etape' ref={sectionRef}>
      <h2 className='etape-title'>
        J&apos;ai validé le devis <br />
        J&apos;ai choisi un accompagnement <br />
        <span className='etape-bottom-title'>Prochaines étapes ?</span>
      </h2>

      <ul>
        {steps.map((step, i) => (
          <li
            key={i}
            className={`${step.className} step-li ${visibleCount > i ? 'step-visible' : ''}`}
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </li>
        ))}
      </ul>

      <div>
        <img className='image-left' src={ImageGroupeWhatsapp.src} alt="Outils proposés par Tremplin : un espace d'échange ouvert 24/7, pour un suivi non stop." />
        <img className='image-right' src={ImageJobboard.src} alt="Outils proposés par Tremplin : un espace privé et un tableau de bord partagé." />
      </div>
    </section>
  )
}

export default DevisValidate