'use client'
import React, { useEffect, useRef, useState } from 'react'
import './quizz.css'
import Fichequizz from '../../../../public/fiche-quizz.png'

const ITEM_HEIGHT = 50
const ITEMS = [
  { text: 'LE VISIONNAIRE', className: 'quizz-visionnaire' },
  { text: "L'AUTHENTIQUE BRIDÉ.E", className: 'quizz-authentique' },
  { text: 'LE MULTICASQUETTE DÉROUTÉ', className: 'quizz-multicasquette' },
  { text: 'LA STRATÈGE TÉTANISÉE', className: 'quizz-stratege' },
  { text: 'LE CAMÉLÉON', className: 'quizz-cameleon' },
]

// Nombre de copies pour avoir assez de marge de scroll
const COPIES = 6

const Quizz = () => {
  const listRef = useRef<HTMLUListElement>(null)
  const outerRef = useRef<HTMLDivElement>(null)
  const animRef = useRef<number | null>(null)
  const [running, setRunning] = useState(false)
  const [launched, setLaunched] = useState(false)

  // Construit la liste avec COPIES répétitions
  const buildItems = () => {
    const result: { key: string; text: string; className: string }[] = []
    for (let c = 0; c < COPIES; c++) {
      ITEMS.forEach((item, i) => {
        result.push({ ...item, key: `${c}-${i}` })
      })
    }
    return result
  }

  const allItems = buildItems()
  const totalItems = allItems.length // COPIES * 5

  // Highlight dynamique : trouve le <li> le plus proche du centre du conteneur
  const highlightCenter = () => {
    const outer = outerRef.current
    const list = listRef.current
    if (!outer || !list) return

    const outerRect = outer.getBoundingClientRect()
    const centerY = outerRect.top + outerRect.height / 2
    const lis = list.querySelectorAll('li')

    let closest: Element | null = null
    let minDist = Infinity

    lis.forEach(li => {
      const r = li.getBoundingClientRect()
      const liCY = r.top + r.height / 2
      const dist = Math.abs(liCY - centerY)
      if (dist < minDist) {
        minDist = dist
        closest = li
      }
    })

    lis.forEach(li => li.classList.remove('active'))
    if (closest) (closest as Element).classList.add('active')
  }

  // Place la liste pour que l'item `index` (dans la copie du milieu) soit centré
  const getYForIndex = (globalIndex: number) => {
    // L'outer fait 250px, le centre est à 125px
    // On veut que l'item soit centré : translateY = -(globalIndex * ITEM_HEIGHT) + (250/2 - ITEM_HEIGHT/2)
    return -(globalIndex * ITEM_HEIGHT) + (250 / 2 - ITEM_HEIGHT / 2)
  }

  const runSpin = () => {
    if (running) return
    setRunning(true)
    setLaunched(true)

    const list = listRef.current
    if (!list) return

    // Tirage aléatoire dans la 3e ou 4e copie (milieu de la liste) pour avoir de la marge
    const targetCopy = 3 // copie index 3 (0-based)
    const randomItem = Math.floor(Math.random() * ITEMS.length)
    const targetGlobalIndex = targetCopy * ITEMS.length + randomItem

    const targetY = getYForIndex(targetGlobalIndex)

    // Position de départ : copie 0, item 0 (haut de liste, centré)
    const startGlobalIndex = 0
    const startY = getYForIndex(startGlobalIndex)

    list.style.transition = 'none'
    list.style.transform = `translateY(${startY}px)`
    highlightCenter()

    // Petit délai pour que le navigateur applique la position initiale
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const duration = 2600 // ms
        const startTime = performance.now()

        const easeOut = (t: number) => 1 - Math.pow(1 - t, 4)

        const frame = (now: number) => {
          const elapsed = now - startTime
          const t = Math.min(elapsed / duration, 1)
          const eased = easeOut(t)

          const currentY = startY + (targetY - startY) * eased
          list.style.transition = 'none'
          list.style.transform = `translateY(${currentY}px)`
          highlightCenter()

          if (t < 1) {
            animRef.current = requestAnimationFrame(frame)
          } else {
            // Snap final sur position exacte
            list.style.transform = `translateY(${targetY}px)`
            highlightCenter()
            setRunning(false)
          }
        }

        animRef.current = requestAnimationFrame(frame)
      })
    })
  }

  useEffect(() => {
    // Position initiale : centrer sur le 1er item de la copie 1
    const list = listRef.current
    if (!list) return
    const startY = getYForIndex(ITEMS.length) // copie 1, item 0
    list.style.transition = 'none'
    list.style.transform = `translateY(${startY}px)`
    highlightCenter()

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current)
    }
  }, [])

  return (
    <section className='quizz-container'>
      <h2 className='quizz-intro special-title'>Qu&apos;est ce qui t&apos;empêche (encore) de cartonner avec ta com&apos; ?</h2>
      <section className='quizz-section-title'>
        <p className='quizz-title'>FAIS LE QUIZ <br />
          <span>&quot;QUEL COMMUNIQUANT ES-TU ?&quot;</span>
        </p>
      </section>
      <section className='quizz-content'>
        <section className='quizz-details'>
          <div className='quizz-roulette-outer' ref={outerRef}>
            <ul ref={listRef} className='quizz-personna'>
              {allItems.map(item => (
                <li key={item.key} className={item.className}>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          <button
            className='quizz-launch-btn little-btn-blue'
            onClick={runSpin}
            disabled={running}
          >
            {running ? '...' : launched ? '🎰 RELANCER' : '🎰 LANCE LA ROUE'}
          </button>

          <p className='details-background'>UN QUIZ AUSSI FUN QU&apos;UTILE POUR LEVER LE VOILE SUR TON STYLE... ET TES BLOCAGES INVISIBLES.</p>
          <ul className='list-details-quizz'>
            <li>10 QUESTIONS</li>
            <li>2 MINUTES</li>
            <li>ZÉRO BLABLA</li>
          </ul>
        </section>
        <section className='quizz-image-container'>
          <img className='quizz-image' src={Fichequizz.src} alt="Fiche quiz" />
        </section>
      </section>
      <h3 className='quizz-resultat'>RÉSULTAT 100% PERSONNALISÉ + DES PISTES CONCRÈTES POUR (RE)PRENDRE LE LEAD</h3>
      <a className='little-btn-white' href="/quiz">Je fais le quiz</a>
    </section>
  )
}

export default Quizz