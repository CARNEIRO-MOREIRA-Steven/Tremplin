import React from 'react'
import BannerImage from '../../../../public/banner-image.jpg'
import ArrowRight from '../../../../public/arrow-right.svg'
import './banner.css'

const Banner = () => {
  return (
    <section className='banner-container'>
      <p className='banner-top'>Pas de panique : on a une vision claire sur l'intelligence artificielle dans la communication - et on l'intègre déjà dans nos accompagnements </p>
        <img className='banner-image' src={BannerImage.src}></img>
    <aside className='decoration-banner'></aside>
    <section className='banner-section-texte'>
        <h1 className='banner-title'>La communication pour <span>propulser ton business</span>.</h1>
        <p className='banner-texte'>La communication n'a rien de mystérieux et elle peut même être ton levier de croissance. Tu peux avoir une communication qui vend.
          Tu peux te faire connaitre grâce à la communication. Et on peut t'apprendre à communiquer sur les réseaux sociaux pour en faire un vrai
          canal d'aquisition : <span>Audit de communication - Stratégie de communication - Création de marque</span>
        </p>
        <div className='banner-cta'>
          <a > Tu veux bosser avec l'agence </a>
          <img src={ArrowRight.src} alt="flèche droite" />
        </div>
    </section>
    </section>
  )
}

export default Banner