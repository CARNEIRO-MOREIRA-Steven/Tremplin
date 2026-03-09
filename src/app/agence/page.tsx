import React from 'react';
import Banner from './components/Banner';
import Header from '../components/Header/Header';
import About from './components/About';
import AgenceDetails from './components/Agence';
import ReviewsClient from '../components/Reviews/ReviewsClient';
import ProcessProjet from './components/ProcessProjet';
import DevisValidate from './components/DevisValidate';
import AtoutTremplin from '../components/AtoutTremplin/AtoutTremplin'
import Footer from '../components/Footer/Footer'

import './page.css'

const Agence = () => {
  return (
    <section>
    <Header />
    <Banner />
    <About />
    <AgenceDetails />
    <h2>Ils nous ont fait confiance</h2>
    <ReviewsClient />
    <ProcessProjet />
    <DevisValidate />
    <AtoutTremplin />
    <Footer />
    </section>

  )
}

export default Agence