import React from 'react'
import './about.css'
import Bureaux from '../../../../public/un-bureau-lumineux.jpg'
import MarionFabrice from '../../../../public/marion&fabrice.png'
import Marion from '../../../../public/marion.png'
import Fabrice from '../../../../public/fabrice.png'

const About = () => {
  return (
    <section className='about-container'>
      <div className='about-dirigeant'>
        <img src={Bureaux.src} className='about-image' />
        <section className='about-section-texte'>
        <h2 className='about-title'>Qui sommes nous</h2>
        <p className='about-texte'>Tremplin est une agence de communication hybride - Agence de branding sur saint quentin (02) <br />
        Fondée et dirigée par :</p>
        <aside className='dirigeant-desktop'>        
          <h3 className='texte-left'>Hybrid entre la stratégie de communication & la direction artistique</h3>
          <img src={MarionFabrice.src} className='about-image-dirigeant-desktop' alt='Illustration de Marion & Fabrice fondateurs et dirigeants de Tremplin'/>
          <h3 className='texte-right'>Graphiste & illustrateur expert en  image de marque</h3>
        </aside>
        <aside className='dirigeant-mobile'>
          <div className='marion-container'>
            <h3 className='texte-left'>Hybrid entre la stratégie de communication & la direction artistique</h3>
            <img src={Marion.src} className='about-image-dirigeant-mobile' alt='Illustration de Marion fondateurs et dirigeants de Tremplin'/>
          </div>
          <div className='fabrice-container'>
            <img src={Fabrice.src} className='about-image-dirigeant-mobile' alt='Illustration de Marion fondateurs et dirigeants de Tremplin'/>
            <h3 className='texte-right'>Graphiste & illustrateur expert en  image de marque</h3>
          </div>       
        </aside>
       </section>
      </div>
       
       <section className='about-mission'>
        <h2 className='about-mission-title'>Notre mission</h2>
        <h3 className='about-mission-subtitle'>Propulser ton business en révélant la puissance de ton offre grâce à <br></br> une communication claire, alignée et autonome. <br />Tremplin au service des entreprneurs</h3>
       </section>
       </section>
  )
}

export default About