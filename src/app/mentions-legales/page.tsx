import React from 'react'
import './mentions-legales.css'

import Header from '../components/Header/Header'

const Page = () => {
  return (
    <>
      <Header />

      {/* MENTIONS LÉGALES */}
      <section className="legal-container">
        <div className="legal-content">

          <h1>Mentions Légales</h1>

          <article>
            <p>
              Conformément aux dispositions de la loi n°2004-575 du 21 juin 2004
              pour la confiance dans l’économie numérique (LCEN), il est précisé
              aux utilisateurs du site l’identité des différents intervenants dans
              le cadre de sa réalisation et de son suivi.
            </p>

            <p>
              Le présent site est édité par :<br />
              Société Tremplin, personne morale,<br />
              12 rue Pierre et Marie Curie, 02100 Saint-Quentin,<br />
              Immatriculée sous le numéro 953 495 553 00018,<br />
              Représentée par M. TSHIBANGU Kalonda Fabrice,<br />
              en qualité de co-fondateur,<br />
              et Mme TSHIBANGU Marion, en qualité de co-fondatrice.
            </p>

            <p>
              Contact : 06 76 20 00 99<br />
              Email : email@tremplin-entreprendre.fr
            </p>

            <p>
              Hébergeur du site : à compléter (ex : OVH, Vercel, etc.)
            </p>
          </article>

          <article>
            <h2>Propriété intellectuelle</h2>
            <p>
              L’ensemble des éléments présents sur ce site (textes, images,
              graphismes, logo, vidéos, icônes, etc.) sont protégés par le droit
              de la propriété intellectuelle et restent la propriété exclusive de
              la société Tremplin, sauf mentions contraires.
            </p>
          </article>

        </div>
      </section>

      {/* POLITIQUE DE CONFIDENTIALITÉ */}
      <section className="legal-container">
        <div className="legal-content">

          <h1>Politique de Confidentialité</h1>

          <article>
            <h2>Collecte des données</h2>
            <p>
              Dans le cadre de son activité, la société Tremplin peut être amenée
              à collecter des données personnelles via ses formulaires de contact,
              demandes de devis ou outils d’analyse de trafic.
            </p>

            <p>
              Les données collectées peuvent inclure : nom, prénom, adresse email,
              numéro de téléphone et toute information communiquée volontairement
              par l’utilisateur.
            </p>
          </article>

          <article>
            <h2>Utilisation des données</h2>
            <p>
              Les données personnelles sont utilisées uniquement dans le cadre de :
              la gestion des demandes clients, la relation commerciale, et
              l’amélioration des services proposés.
            </p>
          </article>

          <article>
            <h2>Durée de conservation</h2>
            <p>
              Les données sont conservées pour une durée maximale de 3 ans à compter
              du dernier contact, sauf obligation légale contraire.
            </p>
          </article>

          <article>
            <h2>Partage des données</h2>
            <p>
              Les données personnelles ne sont jamais vendues. Elles peuvent être
              transmises uniquement à des prestataires techniques (hébergement,
              outils CRM) dans le strict cadre du service.
            </p>
          </article>

          <article>
            <h2>Droits de l’utilisateur</h2>
            <p>
              Conformément au RGPD, vous disposez d’un droit d’accès, de rectification,
              de suppression et d’opposition concernant vos données personnelles.
              Vous pouvez exercer ces droits en contactant :
              email@tremplin-entreprendre.fr
            </p>
          </article>

        </div>
      </section>

    </>
  )
}

export default Page