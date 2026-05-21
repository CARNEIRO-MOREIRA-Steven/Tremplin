'use client'
import React, { useEffect, useRef, useState } from 'react'
import BureauDesignImage from '../../../../public/bureau-design.png'
import './about.css'
import LogoColor from '../../../../public/logo-color.png'
import LogoOff from '../../../../public/logo-black.png'

const About = () => {
  const divRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [logoLit, setLogoLit] = useState(false)

  useEffect(() => {
    const section = divRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // 1. Logo s'allume en premier
          setTimeout(() => setLogoLit(true), 100)
          // 2. Stats arrivent après (100ms + 700ms fade logo + 200ms pause)
          setTimeout(() => setVisible(true), 1000)
          observer.disconnect()
        }
      },
      { threshold: 0.25,
        rootMargin: '0px 0px -100px 0px'
       }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  const statItems = [
    { value: '2023',  label: "Création de l'agence" },
    { value: '1290',  label: 'Cafés pour nourrir la créativité' },
    { value: '+350%', label: "D'activité sur nos comptes clients" },
    { value: '5/5',   label: 'Note Google' },
  ]

  return (
    <section className='about-agence' >
      <div className='about-agence-details'>

        <div className='detail-agence'>
          <p>On a créé Tremplin après un constat simple, beaucoup d&apos;entrepreneurs sont compétents,
          engagés, passionnés... mais invisibles : non pas parce qu&apos;ils ne sont pas bons mais parce
          que leur communication est floue, bancale ou mal alignée avec ce qu&apos;ils sont vraiment.</p>
          <p className='agence-details-second-texte'>Chez Tremplin, on est convaincus que :</p>
          <ul>
            <li>une bonne image fait (presque) tout le travail,</li>
            <li>on vend d&apos;abord qui on est, avant ce qu&apos;on fait,</li>
            <li>la réputation vaut plus que la publicité,</li>
            <li>et même les meilleurs peuvent rester discrets sans une communication juste.</li>
          </ul>
          <p>Notre rôle : remettre de la clarté là où il y a du flou, et transformer une expertise
          en une marque forte et crédible.</p>
        </div>

        <a className='little-btn-blue' href='/contact'>Travailler avec Tremplin</a>

        {/* Logo : éteint → allumé, les deux empilés l'un sur l'autre */}
        <section className='about-logo-wrap' ref={divRef}>
          {/* Logo éteint : part en fondu quand logoLit = true */}
          <img
            src={LogoOff.src}
            alt='logo tremplin éteint'
            className={`about-logo about-logo-off ${logoLit ? 'logo-fade-out' : ''}`}
          />
          {/* Logo allumé : arrive en fondu quand logoLit = true */}
          <img
            src={LogoColor.src}
            alt='logo tremplin'
            className={`about-logo about-logo-on ${logoLit ? 'logo-fade-in' : ''}`}
          />
        </section>

        {/* Stats en cascade */}
        <aside>
          {statItems.map((item, i) => (
            <div
              key={i}
              className={`stat-card ${visible ? 'stat-visible' : ''}`}
              style={{ transitionDelay: visible ? `${i * 150}ms` : '0ms' }}
            >
              <p><span>{item.value}</span><br />{item.label}</p>
            </div>
          ))}
        </aside>

      </div>

      <img src={BureauDesignImage.src} alt='agence de communication moderne et accueillante, avec des néons' />
    </section>
  )
}

export default About