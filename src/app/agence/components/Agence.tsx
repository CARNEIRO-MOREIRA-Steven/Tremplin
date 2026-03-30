import React from 'react'
import AssociesAgenceImage from '../../../../public/TREMPLIN_POSING_COUPLE-11.jpg'
import './agence.css'
import MarionNameNeon from '../../../../public/marion-neon.png'
import FabriceNameNeon from '../../../../public/fabrice-neon.png'


const Agence = () => {
  return (
    <section className='agence-container'>
        <div className='agence-content-image'>
            <div className='fabrice-name'>
            <img id='fabrice-name-neon' src={FabriceNameNeon.src} alt="" />
            <p>Directeur artistique <br />graphiste & illustrateur</p>
            </div>
            <div className='marion-name'>
            <img id='marion-name-neon' src={MarionNameNeon.src} alt="" />
            <p>Cheffe de la direction stratégie de <br /> communication & consultante design</p>
            </div>
            <img src={AssociesAgenceImage.src} alt="Equipe de Tremplin poutr vos conseils en communication : une sonsultante en " />
        
        </div>
        <div className='agence-details'>
            <h2 className='agence-details-first-content'>Une agence, deux associés, une vision commune</h2>
            <p>Tremplin, c&apos;est avant tout deux experts en communication, complémentaires, réunis par une même conviction :
            <strong>une communication efficace commence toujours par de la clarté, du sens et de l&apos;alignement.</strong>
            </p>
            <p>À deux, <strong>on mêle stratégie, direction artistique et accompagnement, pour aider les entrepreneurs à construire une communication crédible, cohérente et durable.</strong>
            Chaque projet est suivi directement par nous 2 : pas d&apos;intermédiaire, pas de dilution, juste une relation de confiance.
            </p>
            <h3 className='agence-details-second-content'>Notre façon de travailler</h3>
            <p>Chez Tremplin, on <strong>prend le temps de comprendre ton activité,</strong> ton parcours et tes objectifs
            <strong>pour proposer une communication sur-mesure,</strong> pensée pour durer. <br />
            <strong>On travaille avec toi,</strong> pas à ta place. On t&apos;explique, on structure, on ajuste... pour que tu
            comprennes ce que tu fais et pourquoi tu le fais mais surtout que tu choisisses la direction de ton business.
            </p>
            <h3 className='agence-details-third-content'>Une équipe en plein développement</h3>
            <p>Autour de nous gravite une équipe de freelances experts, sélectionnés pour leurs talents et leur fiabilité : <br />
            photographe, vidéaste, développeur web, community manager et autres profils selon les besoins. <br />
            Cette organisation nous permet de <strong>rester agiles, exigeants et pertinents, tout en proposant une expertise complète.</strong></p>
        </div>
        <div className='agence-articles-container'>
            <article className='first-article'>
                <h4>A qui s&apos;adresse notre agence ?</h4>
                <p>Les <strong>dirigeants</strong> d&apos;entreprises, ceux qui sont <strong>déjà lancés</strong> ou en <strong>phase d&apos;évolution,</strong>
                qui sentent qu&apos;ils pourraient <strong>aller plus loin...</strong></p>
                <p>Nous travaillons avec <strong>des personnes qui veulent :</strong></p>
                <ul>
                    <li><strong>Une communication qui attire</strong>ses clients idéaux,</li>
                    <li>Une communication <strong>qui vise un objectif,</strong></li>
                    <li><strong>Une image professionnelle</strong> et cohérente,</li>
                    <li><strong>Une stratégie</strong> complète, claire et actionnable,</li>
                    <li><strong>Un accompagnement humain.</strong></li>
                </ul>
            </article>
            <article  className='second-article'>
                <h4>Notre approche</h4>
                <p>Chez Tremplin, <strong>on ne sépare pas le fond de la forme.</strong></p>
                <p>La communication sans la stratégie n&apos;a pas de sens pour nous. Ca raisonne lorsque ton message est vivant.</p>
                <p>C&apos;est pourquoi <strong>on commence :</strong> par une évaluation (un point de départ) et une stratégie de communication.</p>
                <p>Dans le but de refondre ton message principal (celui d&apos;ou découlera la suite).</p>
                <p>Et surtout : <strong>on explique tout. Tu comprends ce qu&apos;on fait,</strong> pourquoi on le fait et <strong>comment l&apos;utiliser ensuite.</strong></p>
            </article>
            <article  className='third-article'>
                <h4>Notre vision</h4>
                <p>La conviction que chaque entrepreneur <strong>peut réussir.</strong></p>
                <p>Une approche <strong>humaine et pédagogique.</strong></p>
                <p>Une vraie double vision <strong>stratégie + design</strong></p>
                <p>Un accompagnement <strong>sur-mesure,</strong> 100% adapté à ton business</p>
                <p>Une <strong>communication alignée à qui tu es,</strong> pas à une tendance.</p>
                <p>Un objectif clair : <strong>te rendre confiant(e), crédible et autonome.</strong></p>
            </article>
        </div>
        <a href="/contact">Travailler avec Tremplin</a>
    </section>
  )
}

export default Agence