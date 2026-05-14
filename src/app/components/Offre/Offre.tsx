'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import './offre.css'

import AuditExpress from '../../../../public/auditExpress.png'
import Alignement from '../../../../public/alignement.png'
import Rebranding from '../../../../public/rebranding.png'

const Offre = () => {

  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {

    const section = sectionRef.current
    if (!section) return

    const cards = section.querySelectorAll<HTMLElement>('.offre-card')

    const observer = new IntersectionObserver((entries) => {

      entries.forEach((entry) => {

        if (!entry.isIntersecting) return

        cards.forEach((card, cardIndex) => {

          const title = card.querySelector<HTMLElement>('h3')
          const problemes = card.querySelector<HTMLElement>('.problemes')
          const obtiens = card.querySelector<HTMLElement>('.obtiens')
          const button = card.querySelector<HTMLElement>('a')

          const baseDelay = 0
          /* ---------------- */
          /* TITRE (typing) */
          /* ---------------- */

          setTimeout(() => {
            title?.classList.add('show-title')
          }, baseDelay)

          // /* ---------------- */
          // /* PROBLEMES BORDER */
          // /* ---------------- */

          setTimeout(() => {
            problemes?.classList.add('show-title')
          }, baseDelay + 1000)

          /* ---------------- */
          /* PROBLEMES CONTENT */
          /* ---------------- */

          setTimeout(() => {
            problemes?.classList.add('show-content')
          }, baseDelay + 2000)

          // /* ---------------- */
          // /* OBTIENS BORDER */
          // /* ---------------- */

          // setTimeout(() => {
          //   obtiens?.classList.add('draw')
          // }, baseDelay + 3300)

          /* ---------------- */
          /* OBTIENS CONTENT */
          /* ---------------- */

          setTimeout(() => {
            obtiens?.classList.add('show-content')
          }, baseDelay + 3000)

          /* ---------------- */
          /* BOUTON */
          /* ---------------- */

          setTimeout(() => {
            button?.classList.add('show-btn')
          }, baseDelay + 4000)

        })

        observer.disconnect()

      })

    }, { threshold: 0.2 })

    observer.observe(section)

    return () => observer.disconnect()

  }, [])

  return (
    <section ref={sectionRef} className='offre-container'>

      <h2 className='neon-title' data-neon>
        Les 3 offres de l&apos;agence
      </h2>

      <section className='offre-content'>

        {/* OFFRE 1 */}
        <section className='offre-card first-offre'>

          <Image className='image-offre' src={AuditExpress} alt='Audit Express' />

          <h3 className='offre-heading'>
            Le coup de projecteur express sur ta com.
          </h3>

          <section>

            <ul className='problemes'>
              <h4>Tes problèmes</h4>
              <li>Tu ne sais pas si ce que tu fais est &quot;bien&quot;</li>
              <li>Tu sens qu&apos;un truc bloque, mais tu ne sais pas quoi</li>
              <li>Tu as <strong>besoin de conseils pour mieux communiquer</strong></li>
            </ul>

            <ul className='obtiens'>
              <h4>Obtiens :</h4>
              <li>Un <strong>éclairage limpide sur ce qui freine ta com&apos;</strong></li>
              <li>Des <strong>pistes concrètes</strong> à activer immédiatement</li>
              <li>Le sentiment de savoir enfin où tu vas</li>
            </ul>

          </section>

          <a className='little-btn-white special' href='/audit'>
            Lire plus
          </a>

        </section>

        {/* OFFRE 2 */}
        <section className='offre-card second-offre'>

          <Image className='image-offre' src={Alignement} alt='Formule Alignement' />

          <h3 className='offre-heading'>
            Retrouve un cap clair, et avance avec assurance.
          </h3>

          <section>

            <ul className='problemes'>
              <h4>Tes problèmes</h4>
              <li><strong>Tu ne sais plus comment te présenter</strong>, parler de ton entreprise</li>
              <li><strong>Tu n&apos;as pas les bons mots</strong> et n&apos;attire pas les bons clients</li>
              <li>Tu sens que <strong>ton message manque de structure</strong></li>
              <li>Tu veux reprendre confiance et <strong>communiquer aisément</strong></li>
            </ul>

            <ul className='obtiens'>
              <h4>Obtiens :</h4>
              <li><strong>Une direction claire</strong> et assumée</li>
              <li>Une refonte <strong>totale de ta communication</strong>, alignée à ton business</li>
              <li>Une <strong>communication qui te ressemble</strong></li>
              <li>Une <strong>base cohérente pour communiquer</strong></li>
            </ul>

          </section>

          <a className='little-btn-white special' href='/com'>
            Lire plus
          </a>

        </section>

        {/* OFFRE 3 */}
        <section className='offre-card third-offre'>

          <Image className='image-offre' src={Rebranding} alt='Rebranding' />

          <h3 className='offre-heading'>
            La mue qui propulse ton image au niveau supérieur.
          </h3>

          <section>

            <ul className='problemes'>
                            <h4>Tes problèmes</h4>
              <li>Tu sens que <strong>ton image ne te ressemble plus</strong></li>
              <li><strong>Ton business a évolué</strong>, mais pas ta communication</li>
              <li><strong>Tu veux être perçu à la hauteur de ton expertise</strong></li>
            </ul>

            <ul className='obtiens'>
              <h4>Obtiens :</h4>
              <li><strong>Une image qui incarne ton évolution</strong></li>
              <li><strong>Une communication puissante</strong> qui marque les esprits</li>
              <li><strong>Un univers entier qui reflète exactement ce que tu es</strong></li>
            </ul>

          </section>

          <a className='little-btn-white special' href='/branding'>
            Lire plus
          </a>

        </section>

      </section>

      {/* CTA */}
      <section className='declic-section'>

        <h3>Et si c&apos;était maintenant, le vrai déclic ?</h3>

        <h4>30 minutes offertes, zéro engagement, 100% clarté.</h4>

        <a
          className='little-btn-white'
          href='https://calendly.com/email-tremplin-entreprendre/call-declic'
          target='_blank'
          rel='noopener noreferrer'
        >
          Réserver le Call Déclic
        </a>

      </section>

    </section>
  )
}

export default Offre