import React from 'react'
import AssociesAgenceImage from '../../../../public/TREMPLIN_POSING_COUPLE-11.jpg'
import './agence.css'
import MarionNameNeon from '../../../../public/marion-neon.png'
import FabriceNameNeon from '../../../../public/fabrice-neon.png'
import Arrow from '../../../../public/icons/arrow-courbe.png'


const Agence = () => {
  return (
    <section className='agence-container'>
        <div className='agence-content-image'>
            <div className='fabrice-name'>
            <img src={Arrow.src} alt=""  id='arrow' className='left' />
            <img id='fabrice-name-neon' src={FabriceNameNeon.src} alt="" />
            <p>Directeur artistique <br />graphiste & illustrateur</p>
            </div>
            <div className='marion-name'>
            <img id='marion-name-neon' src={MarionNameNeon.src} alt="" />
            <p>Cheffe de la direction stratégie de <br /> communication & consultante design</p>
            <img src={Arrow.src} alt="" id='arrow' className='right' />
            </div>
            <img src={AssociesAgenceImage.src} alt="Equipe de Tremplin poutr vos conseils en communication : une sonsultante en " />
        
        </div>
        <div className='agence-details'>
            <h2>Le rôle d&apos;une agence de communication</h2>
            <p className='agence-details-first-content'>
            Une agence de communication accompagne les entreprises dans leur stratégie et le développement de leur image. Elle aide à structurer le projet et à rendre le message plus clair et cohérent. </p>

            <p>La création de stratégies efficaces permet de choisir les bons leviers : réseaux sociaux, contenus, campagnes, vidéo… afin d’améliorer la visibilité et le développement de l’activité. </p>

            <p>La gestion de l’image de marque repose sur du conseil et une vision globale, pour construire une communication durable et impactante.
            </p>
            <h2 className='agence-details-first-content'>Une agence, deux associés, une vision commune</h2>
            <p>Tremplin, c&apos;est avant tout deux  <strong>experts en communication,</strong> complémentaires, réunis par une même conviction : 
            une communication efficace commence toujours par de la clarté, du sens et de l&apos;alignement.
            </p>
            <p>À deux, on mêle<strong> stratégie, direction artistique</strong> et accompagnement, pour aider les entrepreneurs à construire une communication crédible, cohérente et durable.
            Chaque projet est suivi directement par nous deux : pas d&apos;intermédiaire, pas de dilution, juste une vraie relation de confiance.
            </p>
            <p>Mais avant Tremplin, il y a eu plusieurs années d’expérience sur le terrain. <br />
            <strong> Entrepreneurs depuis 2017,</strong> nous avons lancé, testé, raté, ajusté, recommencé. On a connu les périodes de doute, les projets qui stagnent, les idées difficiles à vendre malgré leur potentiel. Et surtout, on a compris une chose essentielle : aujourd’hui, avoir un bon produit ou un bon service ne suffit plus. Sans une <strong> communication claire,</strong> une <strong> image forte</strong> et un vrai <strong>positionnement,</strong>  même les meilleurs peuvent rester invisibles.</p>
            <p>Toutes ces expériences nous ont permis d’apprendre ce qui fait réellement grandir une entreprise : <strong> construire une marque </strong>cohérente, inspirer confiance et réussir à faire parler de son activité naturellement.</p>
            <p>C’est pour cette raison qu’en 2021, nous avons décidé de fermer nos micro-entreprises pour créer <strong> Tremplin : une agence de communication et de création de marque</strong> pensée pour accompagner les <strong> indépendants, entrepreneurs et dirigeants</strong> qui veulent développer leur visibilité, professionnaliser leur image et structurer une communication qui travaille enfin pour eux.</p>
            <p>Aujourd’hui, c’est le cœur de notre métier : aider des entreprises à transformer leurs idées, leur expertise et leur vision en une marque forte, crédible et mémorable.</p>
            <h3 className='agence-details-second-content'>Notre façon de travailler</h3>
            <p> Chez Tremplin, on prend le temps de comprendre ton activité,ton parcours et tes objectifs
            pour<strong> proposer une communication sur-mesure,</strong> pensée pour durer. <br />
            On travaille avec toi, pas à ta place. On t&apos;explique, on structure, on ajuste... pour que tu
            comprennes ce que tu fais et pourquoi tu le fais mais surtout que tu choisisses la direction de ton business.
            </p>
            <h3 className='agence-details-third-content'>Une équipe en plein développement</h3>
            <p>Autour de nous gravite une <strong> équipe de freelances experts,</strong> sélectionnés pour leurs talents et leur fiabilité : <br />
            photographe, vidéaste,  développeur web, community manager  et autres profils selon les besoins. <br />
            Cette organisation nous permet de rester agiles, exigeants et pertinents, tout en proposant une expertise complète.</p>
        </div>
        <div className='agence-articles-container'>
            <article className='first-article'>
                <h4>A qui s&apos;adresse notre agence ?</h4>
                <p>Les dirigeants d&apos;entreprises, ceux qui sont déjà lancés ou en phase d&apos;évolution,
                qui sentent qu&apos;ils pourraient aller plus loin...</p>
                <p>Nous travaillons avec <strong>des personnes qui veulent :</strong></p>
                <ul>
                    <li><strong>Une communication qui attire</strong> ses clients idéaux,</li>
                    <li>Une communication qui vise un objectif,</li>
                    <li><strong>Une image professionnelle</strong> et cohérente,</li>
                    <li><strong>Une stratégie complète, claire</strong> et actionnable,</li>
                    <li><strong>Un accompagnement humain.</strong></li>
                </ul>
            </article>
            <article  className='second-article'>
                <h4>Notre approche</h4>
                <p>Chez Tremplin, <strong>on ne sépare pas le fond de la forme.</strong></p>
                <p> <strong> La communication sans la stratégie n&apos;a pas de sens </strong> pour nous. Ca raisonne lorsque ton message est vivant.</p>
                <p>C&apos;est pourquoi on commence : par une évaluation (un point de départ) et une stratégie de communication.</p>
                <p>Dans le but de <strong> refondre ton message principal </strong>(celui d&apos;ou découlera la suite).</p>
                <p>Et surtout : on explique tout. Tu comprends ce qu&apos;on fait, pourquoi on le fait et comment l&apos;utiliser ensuite.</p>
            </article>
            <article  className='third-article'>
                <h4>Notre vision</h4>
                <p>La conviction que chaque entrepreneur peut réussir.</p>
                <p><strong>Une approche humaine et pédagogique.</strong></p>
                <p>Une vraie<strong> double vision stratégie + design.</strong></p>
                <p>Un <strong>accompagnement sur-mesure,</strong> 100% adapté à ton business.</p>
                <p>Une <strong>communication alignée à qui tu es,</strong> pas à une tendance.</p>
                <p> <strong>Un objectif clair : te rendre confiant(e), crédible et autonome.</strong></p>
            </article>
        </div>
        <a className='little-btn-blue' href="/contact">Travailler avec Tremplin</a>
    </section>
  )
}

export default Agence