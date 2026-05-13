/* eslint-disable @next/next/no-img-element */
import React from 'react'
import BannerImage from '../../../../public/Photo-accueil.png'
import LogoTremplin from '../../../../public/logo-color.png'
import ArrowRight from '../../../../public/arrow-right.svg'
import './banner.css'

const Banner = () => {
  return (
    <section className='banner-container'>
      <p className='banner-top'> 🤪 <strong>Pas de panique </strong> : on a une vision claire sur l&apos;intelligence artificielle dans la communication - et on l&apos;intègre déjà dans nos accompagnements </p>
        <img className='banner-image' src={BannerImage.src} alt=''/>
        <div className='bloc-title'>
        <h1 className='banner-title'>La communication pour <br /> propulser ton business.</h1>
        <img src={LogoTremplin.src} alt="" />
        </div>
        <section className='banner-section-texte'>
        <p className='banner-texte'>La communication n&apos;a rien de mystérieux et elle peut même être ton levier de croissance. Tu peux avoir une communication qui vend.
          Tu peux te faire connaitre grâce à la communication. Et on peut t&apos;apprendre à communiquer sur les réseaux sociaux pour en faire un vrai
          canal d&apos;aquisition : <span>Audit de communication - Stratégie de communication - Création de marque</span>
        </p>
          <a className='little-btn-white' href='/agence'> Tu veux bosser avec l&apos;agence </a>
    </section>
    </section>
  )
}

export default Banner