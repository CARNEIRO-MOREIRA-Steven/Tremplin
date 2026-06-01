import React from 'react'
import './about.css'
import MarionFabrice from '../../../../public/marion&fabrice.png'
import Marion from '../../../../public/marion.png'
import Fabrice from '../../../../public/fabrice.png'
import "../../globals.css";


const About = () => {
  return (
    <section className='about-container'>
      <div className='about-dirigeant'>
        {/* <img src={Bureaux.src} className='about-image' /> */}
        <section className='about-section-texte'>
        <h2 className='about-title'>Qui sommes nous</h2>
        <p className='about-texte'>Tremplin est une agence créative - Agence de branding sur saint quentin (02) <br />
        Fondée et dirigée par :</p>
        <aside className='dirigeant-desktop'>        
          <h3 className='texte-left'>Cheffe de la stratégie de communication & consultante design</h3>
          <img src={MarionFabrice.src} className='about-image-dirigeant-desktop' alt='Illustration de Marion & Fabrice fondateurs et dirigeants de Tremplin'/>
          <h3 className='texte-right'>Directeur artistique graphiste & illustrateur</h3>
          <h3 className='texte-center'>Un duo expert en communication</h3>
        </aside>
        <aside className='dirigeant-mobile'>
          <div className='marion-container'>
            <h3 className='texte-left'>Cheffe de la stratégie de communication & consultante design</h3>
            <img src={Marion.src} className='about-image-dirigeant-mobile' alt='Illustration de Marion fondateurs et dirigeants de Tremplin'/>
          </div>
          <div className='fabrice-container'>
            <img src={Fabrice.src} className='about-image-dirigeant-mobile' alt='Illustration de Marion fondateurs et dirigeants de Tremplin'/>
            <h3 className='texte-right'>Directeur artistique graphiste & illustrateur</h3>
          </div>       
        </aside>
       </section>
      </div>
       
       <section className='about-mission'>
        <p className='neon-title' data-neon>Notre mission</p>
        <p className='about-mission-subtitle'>Propulser ton business en révélant la puissance de ton offre grâce à <br></br> une communication claire, alignée et autonome. <br /> <br /><span className='texte-neon'>Tremplin au service des entreprneurs</span></p>
        <a href="/agence" className='little-btn-white'>En savoir plus</a>
       </section>
       </section>
  )
}

export default About