/* eslint-disable @next/next/no-img-element */
import React from 'react'
import './banner.css'
import MarionFabrice from '../../../../../public/marion&fabrice.png'
import LogoCasamance from '../../../../../public/casamance-logoenseigne.png'
const Banner = () => {
  return (
    <section>
         <div className='banner-agence'>
            <div>
           <h1 className=''>Communication & création de marque <br /> <span> L&apos;agence tremplin <br /></span></h1>
           <h2>L&apos;agence qui propulse ton business</h2>
           <div className='banner-avis'>
           <img className='banner-image' src="/tremplin-agence.png" alt="Image de l'agence" />
            <div className='banner-avis-texte'>
                <p>5/5 Avis Google</p>
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
        <div>
            <img src={LogoCasamance.src} alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
        </div>
    </section>
  )
}

export default Banner