import React from 'react'
import TremplinAuBureau from '../../../../public/tremplin-au-bureau.jpg'

const ProcessProjet = () => {
  return (
    <section className='process-container' id='process'>
        <h2 className='neon-title'>Comment ça ce passe quand tu nous confies un projet ?</h2>
        <div className='process-details'>
            <aside>
                <h3><span className='neon-num'>1</span> Prise de contact</h3>
                <p>Tu <a href="/contact">remplis le formualire</a> et tu nous explique ton projet et tes besoins.</p>
                <h3><span className='neon-num'>2</span> Proposition de rendez-vous</h3>
                <p>Dès qu&apos;on reçoit ta demande, on l&apos;étudie et on te recontacte pour te proposer un rendez-vous en visio ou en physique.</p>
                <h3><span className='neon-num'>3</span> Devis & planning</h3>
                <p>Lors de notre entretien nous définisons ensemble les actions à prioriser et nous t&apos;établissons un devis avec l&apos;accompagnement le plus adapté à ta situation</p>
                <h3><span className='neon-num'>4</span> Paiement de l&apos;accompte</h3>
                <p>C&apos;est ok pour toi suite au devis - tu n&apos;as plus qu&apos;à régler l&apos;accompte et signer le devis pour démarrer notre collaboration.</p>
                <h3><span className='neon-num'>5</span> on démarre</h3>
                <p>L&apos;équipe se met en acion et on démarre</p>
            </aside>
            <div className=''>
            <img src={TremplinAuBureau.src} alt="Tremplin pour ta communication, l'agence au service des entrepreneurs" />
            </div>
        </div>
        <p className='texte-give'>Sinon tu peux directement booker ton appel téléphonique pour discuter de ton projet.</p>
        <a className='btn-pink' href="./">Prendre mon rdv</a>
    </section>
  )
}

export default ProcessProjet