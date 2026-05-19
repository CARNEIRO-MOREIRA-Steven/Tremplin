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
            <div className="testi-item">Cet audit tient toutes ses promesses »</div>
            <div className="testi-item second-item-left">Ça m&apos;a permis d&apos;avoir une perspective tout autre que ce que je faisais jusque là »</div>
            <div className="testi-item">J&apos;ai de suite appliqué les conseils qui m&apos;ont été donnés et je ne m&apos;attendais pas à un tel résultat. Dès le premier post, j&apos;ai observé des changements. »</div>
            </div>

          <div className="testimonials-grid-right">
            <div className="testi-item">Cet audit m&apos;a donné les clés nécessaires pour apporter du changement et booster ma communication »</div>
            <div className="testi-item second-item-right">Cet audit à été un véritable déclencheur de ce que je voulais faire depuis longtemps »</div>
            <div className="testi-item">Il m&apos;a permis d&apos;y voir plus clair et de corriger ma façon de communiquer !»</div>
          </div>
          </div>

            <Link href="/contact" className="little-btn-white">
              Je réserve mon audit maintenant
            </Link>

      </section>
  )
}

export default AccessAudit




