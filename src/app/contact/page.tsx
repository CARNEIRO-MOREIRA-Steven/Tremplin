import React from 'react'
import "../globals.css";
import "./page.css"
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import LogoLocalisation from '../../../public/icons/location-dot-solid-full.svg'
import LogoInstagram from '../../../public/icons/instagram-brands-solid-full.svg'
import LogoLinkedin from '../../../public/icons/linkedin-brands-solid-full.svg'
import LogoFacebook from '../../../public/icons/facebook-f-brands-solid-full.svg'
import LogoPhone from '../../../public/icons/phone-solid-full.svg'
import LogoMail from '../../../public/icons/envelope-solid-full.svg'
import LogoWhatsapp from '../../../public/icons/square-whatsapp-brands-solid-full.svg'
import Arrow from '../../../public/icons/arrow-courbe.png'


const page = () => {
  return (
    <>
      <Header />
        <section className='form-container'>
          <h1>Reste focus ! tu touches ton but :</h1>
          <form action="">
            <div className='group-form'>
            <div>
              <label htmlFor="entreprise">Nom de ta boîte</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="name">Ton nom et prénom</label>
              <input type="text" />
            </div>
            </div>
            <div>
              <label htmlFor="activity">Activité</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="besoin">Tes besoins ou blocage actuel</label>
              <input className='besoin' type="text" />
            </div>
            <div>
              <label htmlFor="offre">Offre souhaitée</label>
              <select name="offre" id="select-offre">
                <option value="audit">Audit Express</option>
                <option value="realignement">Offre réalignement</option>
                <option value="branding">Rebranding</option>
              </select>
            </div>
            <div className='group-form'>
            <div>
              <label htmlFor="phone">Téléphone</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="mail">Mail</label>
              <input type="text" />
            </div>
            </div>
            <div>
              <label>Tu préfères être contacté :</label>
              <div className='group-form checkbox'>
                <div>
                <input type="checkbox" id="contactChoice1" name="contact" value="email" />
                <label htmlFor="contactChoice1">Par SMS</label>
                </div>
                <div>
                <input type="checkbox" id="contactChoice2" name="contact" value="telephone" />
                <label htmlFor="contactChoice2">Par téléphone</label>
                </div>
                <div>
                <input type="checkbox" id="contactChoice3" name="contact" value="courrier" />
                <label htmlFor="contactChoice3">Par WhatsApp</label>
                </div>
                <div>
                <input type="checkbox" id="contactChoice4" name="contact" value="courrier" />
                <label htmlFor="contactChoice4">Par e-mail</label>
                </div>
              </div>
            </div>
            <button className='little-btn-black' type='submit'>J&apos;envoie ma demande</button>
          </form>
        </section>
        <aside className='aside-contact'>
          <p>Rempli le formulaire ou utilise un de nos moyens de communication ici</p>
          <div className='contact-reseau'>
            <a target='blanck' href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x6b30328a877e9bff:0xe01d7ce34c83b88b?sa=X&ved=1t:8290&ictx=111"><img src={LogoLocalisation.src} alt="Icon de localisation de Tremplin" /></a>
            <a target='blanck' href="tel:0676200099"><img src={LogoPhone.src} alt="Icon de téléphone de l'agence Tremplin" /></a>
            <a target='blanck' href="mailto:email@tremplin-entreprendre.fr"><img src={LogoMail.src} alt="Icon mail de l'agence Tremplin" /></a>
            <a target='blanck' href=""><img src={LogoWhatsapp.src} alt="Icon Whatsapp de l'agence Tremplin" /></a>
            <a target='blanck' href="https://www.instagram.com/tremplin.entreprendre?fbclid=IwY2xjawQs4tJleHRuA2FlbQIxMABicmlkETJiZ0QzY1QzYUlobkVwSzB3c3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHv2vnZDULHmC2AuyaiU8Iex0nnUshg7ip2_KBUpr5XFIflVtkwhLkAip1THL_aem_jmq43JAJgArxaJm1pP6emg"><img src={LogoInstagram.src} alt="Icon Instagram de l'agence Tremplin" /></a>
            <a target='blanck' href="https://www.linkedin.com/company/tremplin-entreprendre/"><img src={LogoLinkedin.src} alt="Icon Linkedin de l'agence Tremplin" /></a>
            <a target='blanck' href="https://www.facebook.com/p/Tremplinentreprendre-100090948333418/"><img src={LogoFacebook.src} alt="Icon Facebook de l'agence Tremplin" /></a>
          </div>
        </aside>
      {/* <Footer /> */}
    </>
  )
}

export default page