import React from 'react'
import BannerGreen from '../../../../public/banner-green.jpg'
import './quizz.css'
import Fichequizz from '../../../../public/fiche-quizz.png'


const Quizz = () => {
  return (
    <section className='quizz-container'> 
    <h2 className='quizz-intro special-title'>Qu&apos;est ce qui t&apos;empêche (encore) de cartonner avec ta com&apos; ?</h2>   
    <section className='quizz-section-title'>
        <h2 className='quizz-title'>FAIS LE QUIZZ <br></br>
<span>&quot;QUEL COMMUNIQUANT ES-TU ?&quot;</span></h2></section>
<section className='quizz-content'>
<section className='quizz-details'>
<ul className='quizz-personna'>
<li className='quizz-visionnaire'>LA VISIONNAIRE</li>
<li className='quizz-authentique'>L&apos;AUTHENTIQUE BRIDÉ.E</li>
<li className='quizz-multicasquette'>LE MULTICASQUETTE DÉROUTÉ</li>
<li className='quizz-stratege'>LA STRATÈGE TÉTANISÉE</li>
<li className='quizz-cameleon'>LE CAMÉLÉON</li></ul>
<p className='details-background'>UN QUIZZ AUSSI FUN QU&apos;UTILE POUR LEVER LE VOILE SUR TON STYLE... ET TES BLOCAGES INVISIBLES.</p>
<ul className='list-details-quizz'><li>10 QUESTIONS</li>
<li>2 MINUTES</li>
<li>ZÉRO BLABLA</li></ul>
</section>
<section className='quizz-image-container'>
<img className='quizz-image' src={Fichequizz.src} />
</section>
        </section>      
        <h3 className='quizz-resultat'>RÉSULTAT 100% PERSONNALISÉ + DES PISTES CONCRÈTES POUR (RE)PRENDRE LE LEAD</h3>  
        <a className='quizz-button' href="/quizz">Je fais le quizz</a>
        <img className='banner-green' src={BannerGreen.src}></img>
    </section>
  )
}

export default Quizz