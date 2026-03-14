import React from 'react'
import ReviewsClient from '@/app/components/Reviews/ReviewsClient'

const AgenceReview = () => {
  return (
    <section className='agence-review'>
    <ReviewsClient 
    title = {
          <h2 className='neon-title'>Ils nous ont fait confiance</h2>
    } 
    subtitle=''
    details=''
    link=''/>
    </section>
  )
}

export default AgenceReview