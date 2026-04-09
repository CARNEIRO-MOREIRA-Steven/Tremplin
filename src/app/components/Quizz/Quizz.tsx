'use client'
import React, { useEffect, useRef } from 'react'
import { animate } from 'animejs'
import BannerGreen from '../../../../public/banner-green.jpg'
import './quizz.css'
import Fichequizz from '../../../../public/fiche-quizz.png'

const ITEM_HEIGHT = 50

const Quizz = () => {
  const listRef = useRef<HTMLUListElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const hasAnimatedDown = useRef(false)
  const hasAnimatedUp = useRef(false)
  const lastScrollY = useRef(0)
  const currentOffset = useRef(0)

  useEffect(() => {
    lastScrollY.current = window.scrollY

    const observer = new IntersectionObserver(
      ([entry]) => {
        const scrollingDown = window.scrollY > lastScrollY.current
        lastScrollY.current = window.scrollY

        // Scroll vers le bas — attend que toute la section soit visible
        if (
          scrollingDown &&
          entry.intersectionRatio >= 0.9 &&
          !hasAnimatedDown.current
        ) {
          hasAnimatedDown.current = true
          hasAnimatedUp.current = false
          runAnimation('down')
        }

        // Scroll vers le haut — se déclenche quand le haut de la section réapparaît
        if (
          !scrollingDown &&
          entry.intersectionRatio >= 0.9 &&
          !hasAnimatedUp.current
        ) {
          hasAnimatedUp.current = true
          hasAnimatedDown.current = false
          runAnimation('up')
        }
      },
      { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0] }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const runAnimation = (direction: 'up' | 'down') => {
    const list = listRef.current
    if (!list) return

    document.body.style.overflow = 'hidden'

    // Nettoie les clones du passage précédent
    const allItems = Array.from(list.querySelectorAll('li'))
    const originals = allItems.slice(0, 5)
    allItems.slice(5).forEach(li => li.remove())

    // Remet la liste à sa position de départ selon la direction
    if (direction === 'down') {
      // Repart de 0 vers le bas (translateY négatif)
      currentOffset.current = 0
      animate(list, { translateY: 0, duration: 0 })

      // Clone 3x pour avoir du contenu en bas
      for (let r = 0; r < 3; r++) {
        originals.forEach(li => list.appendChild(li.cloneNode(true)))
      }
    } else {
      // Repart de la fin de l'animation down (offset = -15 * ITEM_HEIGHT)
      // et remonte vers 0
      const endOffset = -(15 * ITEM_HEIGHT)
      currentOffset.current = endOffset
      animate(list, { translateY: endOffset, duration: 0 })

      // Clone 3x en prepend pour avoir du contenu en haut
      for (let r = 0; r < 3; r++) {
        originals.slice().reverse().forEach(li => {
          list.insertBefore(li.cloneNode(true), list.firstChild)
        })
      }
    }

    const totalSteps = 15
    let step = 0
    const stepDir = direction === 'down' ? -1 : 1

    const tick = () => {
      step++
      currentOffset.current += stepDir * ITEM_HEIGHT

      const progress = step / totalSteps
      const duration = 200 + progress * progress * 600

      animate(list, {
        translateY: currentOffset.current,
        duration,
        ease: 'out(2)',
        onComplete: () => {
          if (step < totalSteps) {
            tick()
          } else {
            // Remet les items originaux bien en place
            animate(list, { translateY: 0, duration: 0 })
            currentOffset.current = 0
            // Nettoie les clones
            Array.from(list.querySelectorAll('li'))
              .slice(5)
              .forEach(li => li.remove())

            setTimeout(() => {
              document.body.style.overflow = ''
            }, 400)
          }
        }
      })
    }

    tick()
  }

  return (
    <section ref={sectionRef} className='quizz-container'>
      <section className='quizz-section-title'>
        <h2 className='quizz-title'>FAIS LE QUIZ <br />
          <span>&quot;QUEL COMMUNIQUANT ES-TU ?&quot;</span>
        </h2>
      </section>
      <section className='quizz-content'>
        <section className='quizz-details'>
          <div className='quizz-roulette-outer'>
            <ul ref={listRef} className='quizz-personna'>
              <li className='quizz-visionnaire'>LE VISIONNAIRE</li>
              <li className='quizz-authentique'>L&apos;AUTHENTIQUE BRIDÉ.E</li>
              <li className='quizz-multicasquette'>LE MULTICASQUETTE DÉROUTÉ</li>
              <li className='quizz-stratege'>LA STRATÈGE TÉTANISÉE</li>
              <li className='quizz-cameleon'>LE CAMÉLÉON</li>
            </ul>
          </div>
          <p className='details-background'>UN QUIZ AUSSI FUN QU&apos;UTILE POUR LEVER LE VOILE SUR TON STYLE... ET TES BLOCAGES INVISIBLES.</p>
          <ul className='list-details-quizz'>
            <li>10 QUESTIONS</li>
            <li>2 MINUTES</li>
            <li>ZÉRO BLABLA</li>
          </ul>
        </section>
        <section className='quizz-image-container'>
          <img className='quizz-image' src={Fichequizz.src} />
        </section>
      </section>
      <h3 className='quizz-resultat'>RÉSULTAT 100% PERSONNALISÉ + DES PISTES CONCRÈTES POUR (RE)PRENDRE LE LEAD</h3>
      <a className='little-btn-white' href="/quiz">Je fais le quiz</a>
      {/* <img className='banner-green' src={BannerGreen.src} /> */}
    </section>
  )
}

export default Quizz