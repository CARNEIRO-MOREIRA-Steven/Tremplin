import React from 'react'
import NewsletterCapture from './Newsletter'
import '../globals.css'
import './page.css'
import Header from '../components/Header/Header'
import vache from '../../../public/vache.png'
import tremplinHebdo from '../../../public/tremplin-hebdo.png'
import MarionFabriceAgence from '../../../public/marion&fabrice-agence.png'
import Arrow from '../../../public/arrow.png'



const page = () => {
  return (
    <section>
        <Header />
        <section className='newsletter-container'>
        <h1 className='title'>Rejoins Tremplin Hebdo !</h1>
        <h2>La Newsletter qui fait avancer ton business
            et qui ne remplit pas ta boîte mail !</h2>
            <div className='details-newsletter-container'>
            <div className='details-newsletter'>
            <p>CHAQUE LUNDI, ON TE PARTAGE DE QUOI MAÎTRISER <br />
            TA COM’ POUR FAIRE LA DIFFÉRENCE ET IMPACTER :</p>
    <ul>
        <li>DES STRATÉGIES MARKETING EXPLIQUÉES SIMPLEMENT</li>
        <li>DES ACTUS DÉCRYPTÉES POUR COMPRENDRE CE QUI FONCTIONNE AUJOURD’HUI EN COM’</li>
        <li>DES ASTUCES CONCRÈTES APPLICABLES RAPIDEMENT POUR LEVEL UP TA COM</li>
        <li>ET AUSSI… DES DÉFIS POUR PASSER À L’ACTION !</li>
    </ul>           
    <img src={tremplinHebdo.src} alt="image tremplin hebdo - newsletter" />

    </div>
    <div className='inscription-container'>
    <p className='fun-detail'>DE LA BONNE HUMEUR ET DU FUN POUR APPRENDRE !</p>
        <img className='image-vache' src={vache.src} alt="vache tremplin" />
        <NewsletterCapture />
        </div>
    </div>
    <div className='tremplin-details'>
    <img src={MarionFabriceAgence.src} alt="" />
    <div className='tremplin-details-texte'>
    <h2>TREMPLIN <br /></h2>
    <h3>UNE AGENCE DE COM’ PAS COMME LES AUTRES</h3>
    <p>NOTRE MISSION : <br />
    T’AIDER À RÉVÉLER LE PLEIN POTENTIEL<br />
    DE TA BOITE, GRÂCE À UNE COM’<br />
    QUI FAIT GRANDIR TON BUSINESS<br />
    POUR DE BON !</p>

<img id='arrow' src={Arrow.src} alt="" />
    <p className='special-texte'>C’EST NOUS ! <br />
    MARION & FABRICE !</p>
    </div>
    </div>
    </section>
    </section>
  )
}

export default page