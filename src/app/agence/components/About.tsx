import React from 'react'
import BureauDesignImage from '../../../../public/bureau-design.png'
import './about.css'
import LogoColor from "../../../../public/logo-color.png"

import ArrowBlue from '../../../../public/arrow-blue.png'



const About = () => {
  return (
    <section className='about-agence'>
        <div className='about-agence-details'>
            <div className='detail-agence'>
            <p>On a créé Tremplin après un constat simple, beaucoup d&apos;entrepreneurs sont compétents, engagés, passionnés... mais invisibles : non pas parce qu&apos;ils ne sont pas bons mais parce que leur communication est floue, bancale ou mal alignée avec ce qu&apos;ils sont vraiment.</p>
            <p className='agence-details-second-texte'>Chez Tremplin, on est convaincus que :</p>
            <ul>
                <li>une bonne image fait (presque) tout le travail,</li>
                <li>on vend d&apos;abord qui on est, avant ce qu&apos;on fait,</li>
                <li>la réputation vaut plus que la publicité,</li>
                <li>et même les meilleurs peuvent rester discrets sans une communication juste.</li>
            </ul>
            <p>Notre rôle : remettre de la clarté là où il y a du flou, et transformer une expertise en une marque forte et crédible.</p>
            </div>
            <a className='little-btn-blue' href="/contact">Travailler avec Tremplin</a>
            <div>
            <img id='about-agence-logo' src={LogoColor.src} alt="logo tremplin" />
            {/* <img id='arrow-blue' src={ArrowBlue.src} alt="" /> */}
            </div>
            <aside>
                <div><p><span>2023</span><br />Création de l&apos;agence</p></div>
                <div><p><span>1290</span><br />Cafés pour nourir la créativité</p></div>
                <div><p><span>+350%</span><br />D&apos;activité sur nos comptes clients</p></div>
                <div><p><span>5/5</span><br />Note Google</p></div>
            </aside>
        </div>
        <img src={BureauDesignImage.src} alt="agence de communication moderne et accueillante, avec des néons " />
    </section>
  )
}

export default About