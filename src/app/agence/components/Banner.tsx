/* eslint-disable @next/next/no-img-element */
import React from 'react'
import './banner.css'
import MarionFabrice from '../../../../public/marion&fabrice.png'
import LogoCasamance from '../../../../public/casamance-logoenseigne.png'
import DefiLogo from '../../../../public/defilogo lumineux - sans fond.png'
import DressingLogo from '../../../../public/dressing_logo.png'
import LeveilDesSensLogo from '../../../../public/leveil-des-sens-logo.png'
import SalonIntuitionLogo from '../../../../public/salon-intuition-logo.png'
import BeYouLogo from '../../../../public/be-you-logo.png'
import GoogleLogo from '../../../../public/google_logo.png'
import AntonyMDC from '../../../../public/antony-MDC.jpg'
import CoralieImmo from '../../../../public/IMMOBILIER-CORALIE.png'
import Charlene from '../../../../public/Charlene.png'
import ChicEtPailette from '../../../../public/Chic-et-paillettes.png'
import Linstitut from '../../../../public/linstitut-logo.png'


const Banner = () => {
  return (
    <section>
         <div className='banner-agence'>
            <div>
           <h1 className=''>Communication & création de marque <br /> <span> L&apos;agence tremplin <br /></span></h1>
           <h2>L&apos;agence qui propulse ton business</h2>
           <div className='banner-avis'>
            <div className='avis-glass-effect'>
           <img className='banner-image' src={GoogleLogo.src} alt="Image de l'agence" />
            <div className='banner-avis-texte'>
                ⭐️⭐️⭐️⭐️⭐️
                <p>5/5 Avis Google</p>
            </div>
            </div>
            </div> 
            </div>
            <div className='banner-agence-texte'>
                <aside>
                    <p>Nous serons tes meilleurs alliés pour <strong>reprendre les bases de ta communication</strong> et passer au niveau supérieur.</p>
                    <p>Grâce à un discours clair et une image alignée, ton audience te fait enfin confiance. Fini de courir après les clients : <strong>ta communication travaille pour toi.</strong></p>
                    <p>Ici, pas de recettes toutes faites, pas de jargon marketing, pas de solutions hors-sol. Juste du sens, de l&apos;humain et une vision stratégique long terme pour <strong>construire une marque solide.</strong></p>
                    <p>Sur cette page, tu découvriras qui nous sommes, comment on travaille et <strong>comment on peut t&apos;aider à construire une communication qui te ressemble - et qui vend.</strong></p>
                </aside>
                <img src={MarionFabrice.src} alt="" className='banner-marionfabrice'/>
            </div>
        </div>
<div className="banner-logo">
  <h2>Les projets de refonte de communication qu&apos;on a accompagné</h2>

  <div className="logo-marquee">
  <div className="logo-track">

    <div className="logo-group">
      <img src={DefiLogo.src} alt="" />
      <img src={LogoCasamance.src} alt="" />
      <img src={LeveilDesSensLogo.src} alt="" />
      <img src={DressingLogo.src} alt="" />
      <img src={SalonIntuitionLogo.src} alt="" />
      <img src={BeYouLogo.src} alt="" />
      <img src={AntonyMDC.src} alt="" />
      <img src={Charlene.src} alt="" />
      <img src={CoralieImmo.src} alt="" />
      <img src={ChicEtPailette.src} alt="" />
      <img src={Linstitut.src} alt="" />
    </div>

    {/* duplication */}
    <div className="logo-group">
      <img src={DefiLogo.src} alt="" />
      <img src={LogoCasamance.src} alt="" />
      <img src={LeveilDesSensLogo.src} alt="" />
      <img src={DressingLogo.src} alt="" />
      <img src={SalonIntuitionLogo.src} alt="" />
      <img src={BeYouLogo.src} alt="" />
      <img src={AntonyMDC.src} alt="" />
      <img src={Charlene.src} alt="" />
      <img src={CoralieImmo.src} alt="" />
      <img src={ChicEtPailette.src} alt="" />
      <img src={Linstitut.src} alt="" />
    </div>

  </div>
</div>
            <a href="./#cas-client">Découvrez nos cas clients</a>
        </div>
    </section>
  )
}

export default Banner