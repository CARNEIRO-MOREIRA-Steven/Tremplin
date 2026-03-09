import React from 'react'
import TremplinAuBureau from '../../../../public/tremplin-au-bureau.jpg'

const ProcessProjet = () => {
  return (
    <section>
        <h2>Comment ça ce passe quand tu nous confies un projet ?</h2>
        <div>
            <div>
                <h3>1 Prise de contact</h3>
                <p>Tu <a href="/contact">remplis le formualire</a> et tu nous explique ton projet et tes besoins.</p>
                <h3>2 Proposition de rendez-vous</h3>
                <p>Dès qu&apos;on reçoit ta demande, on l&apos;étudie et on te recontacte pour te proposer un rendez-vous en visio ou en physique.</p>
                <h3>3 Devis & planning</h3>
                <p>Lors de notre entretien nous définisons ensemble les actions à prioriser et nous t&apos;établissons un devis avec l&apos;accompagnement le plus adapté à ta situation</p>
                <h3>4 Paiement de l&apos;accompte</h3>
                <p>C&apos;est ok pour toi suite au devis - tu n&apos;as plus qu&apos;à régler l&apos;accompte et signer le devis pour démarrer notre collaboration.</p>
                <h3>5 on démarre</h3>
                <p>L&apos;équipe se met en acion et on démarre</p>
            </div>
            <img src={TremplinAuBureau.src} alt="" />
        </div>
        <a href="./">Prendre mon rdv</a>
    </section>
  )
}

export default ProcessProjet