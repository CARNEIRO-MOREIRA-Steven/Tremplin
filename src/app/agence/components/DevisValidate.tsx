import React from 'react'
import ImageGroupeWhatsapp from '../../../../public/image-groupe-whatsapp.png'
import ImageJobboard from '../../../../public/image-jobboard.png'


const DevisValidate = () => {
  return (
    <section id='prochaine-etape'>
        <h2 className='etape-title'>J&apos;ai validé le devis <br /> J&apos;ai choisi un accompagnement  <br /> <span className='etape-bottom-title'>Prochaines étapes ?</span></h2>
        <ul>
            <li className='first-list'><h3>Fixation du 1er RDV</h3><p>Quelque soir l&apos;offre on commence par un premier RDV, celui qui nous permet d&apos;entrer dans tn projet.</p></li>
            <li className='second-list'><h3>Ouverture du groupe whatsapp</h3><p>Pour un suivi fluide, un espace rassurant et une disponibilité accrue de notre équipe.</p></li>
            <li className='third-list'><h3>Création de ton tableau de bord</h3><p>C&apos;est ton futur repère, celui ou l&apos;on centralisera tout le travail que nous allons fournir. Un espace de travail partagé.</p></li>
        </ul>
        <div>
            <img className='image-left' src={ImageGroupeWhatsapp.src} alt="Outils proposés par Tremplin : un espace d'échange ouvert 24/7, pour un suivi non stop." />
            <img className='image-right' src={ImageJobboard.src} alt="Outils proposés par Tremplin : un espace privé et un tableau de " />
        </div>
    </section>
  )
}

export default DevisValidate