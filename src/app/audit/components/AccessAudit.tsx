"use client";

import { useState, useEffect, useRef } from "react";
import Link from 'next/link'
import Video from './Video'


const AccessAudit = () => {

  return (
     <section className="social-proof">


          <div className="proof-labels">
            <div className="proof-label">TU PASSES DE LA CONFUSION À LA CLARTÉ</div>
            <div className="proof-label">TU REPARS RASSURÉ(E) ET LÉGITIME DANS TES CHOIX</div>
            <div className="proof-label">TU SAIS EXACTEMENT QUOI DIRE, OÙ LE DIRE ET COMMENT LE DIRE</div>
          </div>

          <div className="video-details">
          <Video />


          {/* Témoignages */}
          <div className="testimonials-grid-left">
            <div className="testi-item">Cet audit tient tout ses promesses »</div>
            <div className="testi-item second-item-left">Ça m&apos;a permis d&apos;avoir une perspective bien autre que ce que je faisais jusqu&apos;à là »</div>
            <div className="testi-item">J&apos;ai su appliquer les conseils qui m&apos;ont été donnés et je me suis rendu compte que les résultats étaient là… j&apos;ai observé des changements »</div>
            </div>

          <div className="testimonials-grid-right">
            <div className="testi-item">Cet audit m&apos;a donné les clés nécessaires pour apporter le changement et booster sa communication »</div>
            <div className="testi-item second-item-right">Cet audit est un véritable déclencheur si se veut faire depuis longtemps »</div>
            <div className="testi-item">Il n&apos;y avait d&apos;yeux plus clair et de me ranger mes idées comment le communiqué à la communauté signé Tremplin»</div>
          </div>
          </div>

            <Link href="/contact" className="little-btn-white">
              Je réserve mon audit maintenant
            </Link>

      </section>
  )
}

export default AccessAudit




