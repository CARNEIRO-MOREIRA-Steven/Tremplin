/* eslint-disable @next/next/no-img-element */
import React from 'react'
import './reviews.css'
import SmileIcon from '../../../../public/smile-icon.png'
import ReviewsClient from './ReviewsClient'

const Reviews = () => {
  return (
    <section className='reviews-container'>
    <section>
        <h2 className='reviews-title'>Tu peux te projeter, ou écouter ce qui sont déjà passé par la.</h2>
        <h2 className='reviews-subtitle'>Voici ce qu&apos;ils ont vécu, <img className="icon-smile" src={SmileIcon.src} alt='Icon smile'/> et ce que <br></br> tremplin à changé pour eux</h2>
    </section>
    <ReviewsClient />
    <h3>100% des clients sont conquis</h3>
    <a>Lire + d&apos;avis vérifiés</a>
    </section>
  )
}

export default Reviews