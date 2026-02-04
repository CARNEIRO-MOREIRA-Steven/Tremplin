import React from 'react'
import './about-agence.css'
import FranceIcon from '../../../../public/icon-france.png'
import DigitalIcon from '../../../../public/icon-digital.png'
import MessageIcon from '../../../../public/icon-message.png'

const AboutAgence = () => {
  return (
    <section className='about-agence-container'>
        <section className='about-agence-content'>
            <section>
                <img src={FranceIcon.src}/>
                <h2>Une agence implantée à Saint-Quentin (02)</h2>
                <p>On est là, vraiment là. Créé par des entrepreneurs, pour les entrepreneurs. On connaît le terrain, les enjeux, et les dirigeants d&apos;ici.</p>
                <h3>Même fuseau horaire, même vibes.</h3>
                <a href="">Lire plus</a>
            </section>
            <section>
                <img src={DigitalIcon.src}/>
                <h2>Une messagerie rien que pour toi</h2>
                <p>Tu as accès à un canal privé pour poser tes questions, débloquer un point, partager une idée. Pas besoin d&apos;attendre le prochain RDV : tu avances à ton rythme, sans pression.</p>
                <h3>Moins de mails, plus de déclics.</h3>
                <a href="">Lire plus</a>
            </section>
            <section>
                <img src={MessageIcon.src}/>
                <h2>Un tableau de bord pour tout piloter</h2>
                <p>Un espace simple, structuré et rien qu&apos;à toi, pour centraliser ton plan d&apos;action, tes contenus, et voir ta com&apos; se construire pas à pas. Tout est là, tout est clair.
Tu sais quoi faire, et quand.</p>
                <h3>Le GPS de ta communnication.</h3>
                <a href="">Lire plus</a>
            </section>
        </section>
        <section className='about-agence-cta'>
            <aside className='about-agence-cta-left'>
                <p>PRET A FAIRE LE GRAND SAUT ?</p>
            </aside>
            <aside className='about-agence-cta-right'>
                <p>Deux chemins, un seul objectif: te révéler.</p>
                <a href="">Je réserve mon Call Déclic - GRATUIT-</a>
                <a href="">Je passe par le formulaire de contact</a>
            </aside>
        </section>
    </section>
  )
}

export default AboutAgence