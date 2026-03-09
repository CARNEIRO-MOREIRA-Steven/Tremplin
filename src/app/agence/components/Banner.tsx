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
                    <p>Grâce à un discours clair et une image alignée, ton audience te fait enfin confiance. Fini de courir après les clients : <strong>ta communication travaille pour toi</strong></p>
                    <p>Ici, pas de recettes toutes faites, pas de jargon marketing, pas de solutions hots-sol. Juste du sens, de l&apos;humain et une vision stratégique long terme pour construire une marque solide.</p>
                    <p>Sur cette page, tu découvriras qui nous sommes, comment on travaille et <strong>comment on peut t&apos; à construire une communication qui te ressemble - et qui vend.</strong></p>
                </aside>
                <img src={MarionFabrice.src} alt="" className='banner-marionfabrice'/>
            </div>
        </div>
        <div className='banner-logo'>
            <h2>Les projets de refonte de communication qu&apos;on a accompagné</h2>
            <div>
            <img src={DefiLogo.src} alt="" />
            <img src={LogoCasamance.src} alt="" />
            <img src={DressingLogo.src} alt="" />
            <img src={LeveilDesSensLogo.src} alt="" />
            <img src={SalonIntuitionLogo.src} alt="" />
            <img src={BeYouLogo.src} alt="" />
            </div>
            <a href="./#cas-clients">Découvrir nos cas clients</a>
        </div>
    </section>
  )
}

export default Banner