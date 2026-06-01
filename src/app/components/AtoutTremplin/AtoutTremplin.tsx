import React from 'react'
import './atout-tremplin.css'
import FranceIcon from '../../../../public/icon-france.png'
import DigitalIcon from '../../../../public/icon-digital.png'
import MessageIcon from '../../../../public/icon-message.png'

const AtoutTremplin = () => {
  return (
    <section className='about-agence-container'>
        <p className='neon-title' data-neon>Les atouts de tremplin</p>
        <section className='about-agence-content'>
            <section>
                <img src={FranceIcon.src} alt='icon france'/>
                <h2>Une agence de branding à Saint-Quentin (02)</h2>
                <p>On est là, vraiment là. Créé par des entrepreneurs, au services des entrepreneurs. On connaît le terrain, les enjeux, et les dirigeants d&apos;ici.</p>
                <p className='texte-give'>Même fuseau horaire, même vibe.</p>
                <a className='little-btn-white' href="/agence#prochaine-etape">Lire plus</a>
            </section>
            <section>
                <img src={MessageIcon.src} alt='icon message'/>
                <p className='about-agence-title'>Une proximitée et un suivi personnalisé</p>
                <p>Tu as accès à un canal privé pour poser tes questions, débloquer un point, partager une idée. Pas besoin d&apos;attendre le prochain RDV : tu avances à ton rythme, sans pression.</p>
                <p className='texte-give'>Moins de mails, plus de déclics.</p>
                <a className='little-btn-white' href="/agence#prochaine-etape">Lire plus</a>
            </section>
            <section>
                <img src={DigitalIcon.src} alt='icon digital'/>
                <p className='about-agence-title'>Un tableau de bord pour suivre facilement</p>
                <p>Un espace simple, structuré et rien qu&apos;à toi, pour centraliser ton plan d&apos;action, tes documents, et voir ta com&apos; se construire pas à pas. Tout est là, tout est clair.
                Tu sais quoi faire, et quand.</p>
                <p className='texte-give'>Le GPS de ta communnication.</p>
                <a className='little-btn-white' href="/agence#prochaine-etape">Lire plus</a>
            </section>
        </section>
        <p className='subtitle-atout texte-give'>Tremplin c&apos;est ton agence de communication hybrid une version 2.0 des agences de com&apos; que tu connais. Tremplin devient ton allié réussite, c&apos;est ton nouveau collaborateur.</p>
        <section className='about-agence-cta'>
            <aside className='about-agence-cta-left'>
                <h2 className='neon-white'>PRET A révéler le plein potentiel de ta marque ?</h2>
            </aside>
            <aside className='about-agence-cta-right'>
                <p>Deux chemins, un seul objectif: te révéler.</p>
                <a className='little-btn-white' href="https://calendly.com/email-tremplin-entreprendre/call-declic">Je réserve mon Call Déclic - OFFERT-</a>
                <a className='little-btn-white' href="/contact">Je passe par le formulaire de contact</a>
            </aside>
        </section>
    </section>
  )
}

export default AtoutTremplin