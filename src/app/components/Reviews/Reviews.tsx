import React from 'react'
import './reviews.css'
import SmileIcon from '../../../../public/smile-icon.png'

const Reviews = () => {
  return (
    <section className='reviews-container'>
    <section>
        <h2 className='reviews-title'>Tu peux te projeter, ou écouter ce qui sont déjà passé par la.</h2>
        <h3 className='reviews-subtitle'>Voici ce qu&apos;ils ont vécu, <img className="icon-smile" src={SmileIcon.src}/> et ce que <br></br> tremplin à changé pour eux</h3>
    </section>
    <section className='reviews-content'>
        <aside className='first-review'>
          <h3>Stéphanie - Salon de coiffure et SPA pour cheveux</h3>
          <p>J&apos;ai fait appel à Tremplin pour m&apos;aider à structurer mes idées et à clarifier ce qui est réalisable pour mon entreprise. <br /> <br />
Je tiens à souligner à quel point Marion et Fabrice ont été d&apos;un grand soutien tout au long de ce processus. <br /> <br />
Leur écoute attentive, leur motivation et leur compréhension ont véritablement fait la différence. Ils ne se contentent pas d&apos;être des prestataires ; ils deviennent de véritables partenaires dans le développement de votre projet. <br /> <br />
Grâce à leur expertise et à leur approche collaborative, j&apos;ai pu transformer mes idées en un plan concret et réalisable. <br /> <br />
Merci à Tremplin pour cette expérience enrichissante.</p>
        </aside>
        <aside className='second-review'>
          <h3>Abby - Wedding planner</h3>
          <p>J&apos;ai eu la chance d&apos;être accompagnée par Marion et Fabrice. Ils ont été de bons conseils et de bonne écoute ce qui m&apos;a permis de relancer mon entreprise. Mais surtout de lui donner un nouvel élan. <br /><br />
        Le contenu de leur accompagnement a été pour moi un moteur et m&apos;a aidé à developper mon business de nouveau. <br /><br />
        Ils sont là pour déconstruire les idées reçues et te pousser à t&apos;améliorer, t&apos;affirmer et  à te mettre en avant au sein de ton entreprise. <br /><br />
        Je les recommande 100%.
        </p>
</aside>
        <aside className='third-review'>
          <h3>Minh - Entreprise de solutions informatiques sur Paris</h3>
          <p>Je tiens à remercier Marion et Fabrice pour l&apos;excellent service qu’ils nous ont offert. <br /><br />
        Toute l’équipe et moi-même sommes totalement satisfaits de la qualité du travail accompli et de leur professionnalisme. Ils ont vraiment dépassé nos attentes et nous apprécions sincèrement leur diligence, leur attention aux détails, et leur écoute.La créativité de Fabrice et les précieux conseils de Marion tout au long de ce suivi sont un combo parfait pour une réussite totale !  <br /><br />
        A cela, si l’on ajoute leur bienveillance, leur gentillesse, et surtout leur disponibilité, il n’y a plus à hésiter, vous pouvez leur faire confiance. Allez y les yeux fermés !
        </p>
        </aside>
    </section>
    <h3>100% des clients sont conquis</h3>
    <a>Lire + d&apos;avis vérifiés</a>
    </section>
  )
}

export default Reviews