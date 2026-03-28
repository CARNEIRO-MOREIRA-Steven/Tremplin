'use client'
import React from 'react';
import Banner from './components/Banner';
import Header from '../components/Header/Header';
import About from './components/About';
import AgenceDetails from './components/Agence';
import AgenceReview from './components/AgenceReview';
import ProcessProjet from './components/ProcessProjet';
import DevisValidate from './components/DevisValidate';
import AtoutTremplin from '../components/AtoutTremplin/AtoutTremplin'
import Footer from '../components/Footer/Footer'
import Modal from '../components/Modal/Modal';

import './page.css'

const Agence = () => {
  return (
    <section>
    <Header />
    <Banner />
    <Modal 
    title = { <h2 className='neon-title'>Découvrez nos cas clients</h2>}
    />
    <About />
    <AgenceDetails />
    <AgenceReview />
    <ProcessProjet />
    <DevisValidate />
    <AtoutTremplin />
    <Footer />
    </section>

  )
}

export default Agence