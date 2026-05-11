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
  const container = sectionRef.current
  if (!container) return

  let loopActive = false
  let stopRequested = false

  const runLoop = () => {
    if (stopRequested) {
      loopActive = false
      document.body.style.overflow = ''
      return
    }

    const list = listRef.current
    if (!list) return

    const allItems = Array.from(list.querySelectorAll('li'))
    const originals = allItems.slice(0, 5)
    allItems.slice(5).forEach(li => li.remove())

    currentOffset.current = 0
    animate(list, { translateY: 0, duration: 0 })

    for (let r = 0; r < 3; r++) {
      originals.forEach(li => list.appendChild(li.cloneNode(true)))
    }

    const totalSteps = 15
    let step = 0

    const tick = () => {
      if (stopRequested) {
        // Remet en place proprement
        animate(list, { translateY: 0, duration: 200, ease: 'out(2)', onComplete: () => {
          currentOffset.current = 0
          Array.from(list.querySelectorAll('li')).slice(5).forEach(li => li.remove())
          loopActive = false
          document.body.style.overflow = ''
        }})
        return
      }

      step++
      currentOffset.current -= ITEM_HEIGHT

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
            // Fin d'un cycle → relance si toujours en hover
            animate(list, { translateY: 0, duration: 0 })
            currentOffset.current = 0
            Array.from(list.querySelectorAll('li')).slice(5).forEach(li => li.remove())
            // Petit délai avant de relancer
            setTimeout(() => {
              if (!stopRequested) runLoop()
              else {
                loopActive = false
                document.body.style.overflow = ''
              }
            }, 300)
          }
        }
      })
    }

    tick()
  }

  const handleMouseEnter = () => {
    stopRequested = false
    if (!loopActive) {
      loopActive = true
      runLoop()
    }
  }

  const handleMouseLeave = () => {
    stopRequested = true
  }

  container.addEventListener('mouseenter', handleMouseEnter)
  container.addEventListener('mouseleave', handleMouseLeave)

  return () => {
    container.removeEventListener('mouseenter', handleMouseEnter)
    container.removeEventListener('mouseleave', handleMouseLeave)
  }
}, [])

  return (
    <section className='quizz-container'>
      <h2 className='quizz-intro special-title'>Qu&apos;est ce qui t&apos;empêche (encore) de cartonner avec ta com&apos; ?</h2>
      <section className='quizz-section-title'>
        <h2 className='quizz-title'>FAIS LE QUIZ <br />
          <span>&quot;QUEL COMMUNIQUANT ES-TU ?&quot;</span>
        </h2>
      </section>
      <section  ref={sectionRef} className='quizz-content'>
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