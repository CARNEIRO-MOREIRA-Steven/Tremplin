import React from 'react'
import "../globals.css";
import "./page.css"
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
 

const page = () => {
  return (
    <>
      <Header />
        <section className='form-container'>
          <h1>Reste focus, tu touches ton but :</h1>
          <form action="">
            
          </form>
        </section>
      <Footer />
    </>
  )
}

export default page