'use client'
import React, { useEffect, useRef } from 'react'
import { animate } from 'animejs'
import './reviews.css'

import SmileIcon from '../../../../public/smile-icon.png'


const ReviewsClient = (props: {
  title: React.ReactNode
  subtitle: React.ReactNode
  details: string
  link: React.ReactNode
}) => {
  const titleRef    = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLHeadingElement>(null)
  const smileRef    = useRef<HTMLImageElement>(null)
  const firstRef    = useRef<HTMLElement>(null)
  const secondRef   = useRef<HTMLElement>(null)
  const thirdRef    = useRef<HTMLElement>(null)

  useEffect(() => {
    const title    = titleRef.current
    const subtitle = subtitleRef.current
    const smile    = smileRef.current
    const cards    = [firstRef.current, secondRef.current, thirdRef.current]

    // ── États initiaux ──────────────────────────────────────────
    if (title)    animate(title,    { opacity: 0, translateX: -80, duration: 0 })
    if (subtitle) animate(subtitle, { opacity: 0, translateX:  80, duration: 0 })
    cards.forEach(card => {
      if (card) animate(card, { opacity: 0, duration: 0 })
    })

    // ── Titre + subtitle : arrivent de gauche / droite ──────────
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        animate(title!, {
          opacity:    [0, 1],
          translateX: [-80, 0],
          duration:   2000,
          ease:       'out(3)',
        })
        animate(subtitle!, {
          opacity:    [0, 1],
          translateX: [80, 0],
          duration:   1500,
          delay:      1000,
          ease:       'out(3)',
        })

        // Smile icon : rotation continue dès que le subtitle arrive
        if (smile) {
          setTimeout(() => {
            const spin = () => {
              animate(smile, {
                rotate:   360,
                duration: 2000,
                ease:     'linear',
                onComplete: () => {
                  animate(smile, { rotate: 0, duration: 0 })
                  spin()
                },
              })
            }
            spin()
          }, 200) // même délai que le subtitle
        }

        headerObserver.disconnect()
      },
      { threshold: 0.9 }
    )
    if (title) headerObserver.observe(title)

    // ── Cartes : alternance haut / bas / haut ───────────────────
    const directions = [-80, 80, -80] // 1er d'en haut, 2e d'en bas, 3e d'en haut

    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return
          const card  = entry.target as HTMLElement
          const index = cards.indexOf(card)
          animate(card, {
            opacity:    [0, 1],
            translateY: [directions[index], 0],
            duration:   2000,
            delay:      index * 1000, // décalage progressif
            ease:       'out(3)',
          })
          cardObserver.unobserve(card)
        })
      },
      { threshold: 0.5 }
    )
    cards.forEach(card => { if (card) cardObserver.observe(card) })

    return () => {
      headerObserver.disconnect()
      cardObserver.disconnect()
    }
  }, [])

  return (
    <section className='reviews-container'>
      <h2 ref={titleRef} className='reviews-title'>{props.title}</h2>
      <h2 ref={subtitleRef} className='reviews-subtitle'>
        {/* On réécrit le subtitle ici pour accéder au ref du smile */}
        Voici ce que nos clients ont vécu,{' '}
        <img ref={smileRef} className='icon-smile' src={SmileIcon.src} />{' '}
        et ce <br /> que l&apos;agence tremplin a changé pour eux
      </h2>
      <section className='reviews-content'>
        <aside ref={firstRef} className='first-review'>
          <h3><span>Stéphanie</span> - Salon de coiffure et SPA pour cheveux</h3>
          <p>J&apos;ai fait appel à Tremplin pour m&apos;aider à structurer mes idées et à clarifier ce qui est réalisable pour mon entreprise. <br /><br />
            Je tiens à souligner à quel point Marion et Fabrice ont été d&apos;un grand soutien tout au long de ce processus. <br /><br />
            Leur écoute attentive, leur motivation et leur compréhension ont véritablement fait la différence. Ils ne se contentent pas d&apos;être des prestataires ; ils deviennent de véritables partenaires dans le développement de votre projet. <br /><br />
            Grâce à leur expertise et à leur approche collaborative, j&apos;ai pu transformer mes idées en un plan concret et réalisable. <br /><br />
            Merci à Tremplin pour cette expérience enrichissante.</p>
        </aside>
        <aside ref={secondRef} className='second-review'>
          <h3><span>Abby</span> - Wedding planner</h3>
          <p>J&apos;ai eu la chance d&apos;être accompagnée par Marion et Fabrice. Ils ont été de bons conseils et de bonne écoute ce qui m&apos;a permis de relancer mon entreprise. Mais surtout de lui donner un nouvel élan. <br /><br />
            Le contenu de leur accompagnement a été pour moi un moteur et m&apos;a aidé à developper mon business de nouveau. <br /><br />
            Ils sont là pour déconstruire les idées reçues et te pousser à t&apos;améliorer, t&apos;affirmer et à te mettre en avant au sein de ton entreprise. <br /><br />
            Je les recommande 100%.</p>
        </aside>
        <aside ref={thirdRef} className='third-review'>
          <h3><span>Minh</span> - Entreprise de solutions informatiques sur Paris</h3>
          <p>Je tiens à remercier Marion et Fabrice pour l&apos;excellent service qu&apos;ils nous ont offert. <br /><br />
            Toute l&apos;équipe et moi-même sommes totalement satisfaits de la qualité du travail accompli et de leur professionnalisme. Ils ont vraiment dépassé nos attentes et nous apprécions sincèrement leur diligence, leur attention aux détails, et leur écoute. La créativité de Fabrice et les précieux conseils de Marion tout au long de ce suivi sont un combo parfait pour une réussite totale ! <br /><br />
            A cela, si l&apos;on ajoute leur bienveillance, leur gentillesse, et surtout leur disponibilité, il n&apos;y a plus à hésiter, vous pouvez leur faire confiance. Allez y les yeux fermés !</p>
        </aside>
      </section>
    </section>
  )
}

export default ReviewsClient