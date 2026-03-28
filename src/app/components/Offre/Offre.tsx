import React from 'react'
import './offre.css'
import AuditExpress from '../../../../public/auditExpress.png'
import Alignement from '../../../../public/alignement.png'
import Rebranding from '../../../../public/rebranding.png'
import ArrowRight from '../../../../public/arrow-right.svg'
const Offre = () => {
  return (
    <section className='offre-container'>
      <h2 className='neon-title'>Les 3 offres de l&apos;agence</h2>
      <section className='offre-content'>
        <section className='first-offre'>
        <img className='image-offre' src={AuditExpress.src}/>
        <h3>Le coup de projecteur express sur ta com.</h3>
        <section>
        <ul className='problemes'>
        <li>Tu ne sais pas ce que tu fais est &apos;&apos;bien&apos;&apos; </li>
        <li>Tu sens qu&apos;un truc bloque, mais tu ne sais pas quoi</li>
        <li>Tu as <strong>besoin de conseils pour mieux communiquer</strong></li>
        </ul>
        <ul className='obtiens'>Obtiens : 
        <li>Un <strong>éclairage limpide sur ce qui freine ta com&apos;</strong></li>
        <li>Des <strong>pistes concrètes </strong> à activer immédiatement.</li>
        <li>Le sentiment de savoir enfin ou tu vas.</li>
        </ul>
        </section>
          <a className='little-btn-white' href='/audit'> Lire plus</a>
        </section>
        <section className='second-offre'>
        <img className='image-offre' src={Alignement.src} alt='image de la formule alignement'/>
        <h3>Retrouve un cap clair, et avance avec assurance.</h3>
        <section>
        <ul className='problemes'>
        <li> <strong>Tu ne sais plus comment te présenter,</strong> parler de ton entreprise</li>
        <li><strong>Tu n&apos;as pas les bons mots</strong> et n&apos;attire pas les bons clients à toi</li>
        <li>Tu sens que <strong>ton message manque de structure</strong></li>
        <li>Tu veux reprendre confiance et <strong>communiquer aisément</strong></li>
        </ul>
        <ul className='obtiens'>Obtiens : 
        <li><strong>Une direction claire </strong> et assumée</li>
        <li>Une refonte <strong>totale de ta communication,</strong> 100% alignée à ton business</li>
        <li>Une <strong>communication qui te ressemble</strong> et qui parle enfin de toi</li>
        <li>Une <strong>base pour communiquer avec cohérence</strong></li>
        </ul>
        </section>
          <a className='little-btn-white' href='/com' > Lire plus</a>
        </section>
        <section className='third-offre'><img className='image-offre' src={Rebranding.src}/><h3>La mue qui propulse ton image au niveau supérieur.</h3>
        <section>
        <ul className='problemes'>
        <li>Tu sens que <strong>ton image ne te ressemble plus</strong></li>
        <li><strong>Ton business a évolué,</strong> mais pas ta communication.</li>
        <li><strong>Tu veux être perçu à la hauteur de ton expertise.</strong></li>
        </ul>
        <ul className='obtiens'>Obtiens : 
        <li><strong>Une image qui incarne ton évolution</strong> et parle à ta place</li>
        <li><strong>Une communication puissante</strong> qui marque les esprits.</li>
        <li><strong>Un univers entier qui reflète exactement ce que tu es</strong> et ce que tu vise</li>
        </ul>
        </section>
          <a className='little-btn-white' href='branding' > Lire plus</a>
        </section>
        </section>

        <section className='declic-section'> <h3>Et si c&apos;était maintenant, le vrai declic ?</h3>
        <h4>30 minutes offertes, zéro engagement, 100% clarté.</h4>
        <a className='little-btn-white' href='https://calendly.com/email-tremplin-entreprendre/call-declic?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleAQvm3lleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAafUKgy4fU_A_xLz1RLZ0ixkNu5TOz2gAAJhdXgTFKMSQrJ-bKqMTQAcOKJTIA_aem_ozoWz0D6AS_5QGgulviPJw&month=2026-03
' target='blanck'>Réserver le Call Déclic</a></section>
    </section>
  )
}

export default Offre