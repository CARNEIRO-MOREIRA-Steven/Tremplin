import React from 'react'
import './about.css'
import Bureaux from '../../../../public/un-bureau-lumineux.jpg'
import MarionFabrice from '../../../../public/marion&fabrice.png'
const About = () => {
  return (
    <section className='about-container'>
        <img src={Bureaux.src} className='about-image' />
        <section className='about-section-texte'>
        <h2 className='about-title'>Qui sommes nous</h2>
        <p className='about-texte'>Tremplin est une agence de communication hybride - Agence de branding sur saint quentin (02) <br />
        Fondée et dirigée par :</p>
        <aside>        
          <h3 className='texte-left'>hybrid entre la stratégie de communication & la direction artistique</h3>
          <img src={MarionFabrice.src} className='about-image-dirigeant' />
          <h3 className='texte-right'>Graphiste & illustrateur expert en  image de marque</h3>
        </aside>
       </section>
       <section className='about-mission'>
        <h2 className='about-mission-title'>Notre mission</h2>
        <h3 className='about-mission-subtitle'>Propulser ton business en révélant la puissance de ton offre grâce à <br></br> une communication claire, alignée et autonome. <br />Tremplin au service des entreprneurs</h3>
       </section>
       </section>
  )
}

export default About