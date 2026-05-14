import React from 'react'
import './footer.css'

import LogoLocalisation from '../../../../public/icons/location-dot-solid-full.svg'
import LogoInstagram from '../../../../public/icons/instagram-brands-solid-full.svg'
import LogoLinkedin from '../../../../public/icons/linkedin-brands-solid-full.svg'
import LogoFacebook from '../../../../public/icons/facebook-f-brands-solid-full.svg'
import LogoPhone from '../../../../public/icons/phone-solid-full.svg'
import LogoMail from '../../../../public/icons/envelope-solid-full.svg'
import LogoWhatsapp from '../../../../public/icons/square-whatsapp-brands-solid-full.svg'
import Arrow from '../../../public/icons/arrow-courbe.png'

const Footer = () => {
  return (
    <footer>
        <h2>Tremplin - Agence de communication hybride et de branding à Saint-Quentin (02) dans les Hauts-de-France.</h2>
        <div className='footer-grid'>
        <aside>
          <p>Tremplin-entreprendre est au service des entrepreneurs. Révélateurs de puissances invisibles, nous allions stratégie, création et coaching pour propulser ton business grâce à ta communication.</p>
        </aside>
        <div className='contact-reseau'>
            <a target='blanck' href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x6b30328a877e9bff:0xe01d7ce34c83b88b?sa=X&ved=1t:8290&ictx=111"><img src={LogoLocalisation.src} alt="Icon de localisation de Tremplin" /></a>
            <a target='blanck' href="tel:0676200099"><img src={LogoPhone.src} alt="Icon de téléphone de l'agence Tremplin" /></a>
            <a target='blanck' href="mailto:email@tremplin-entreprendre.fr"><img src={LogoMail.src} alt="Icon mail de l'agence Tremplin" /></a>
            <a target='blanck' href=""><img src={LogoWhatsapp.src} alt="Icon Whatsapp de l'agence Tremplin" /></a>
            <a target='blanck' href="https://www.instagram.com/tremplin.entreprendre?fbclid=IwY2xjawQs4tJleHRuA2FlbQIxMABicmlkETJiZ0QzY1QzYUlobkVwSzB3c3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHv2vnZDULHmC2AuyaiU8Iex0nnUshg7ip2_KBUpr5XFIflVtkwhLkAip1THL_aem_jmq43JAJgArxaJm1pP6emg"><img src={LogoInstagram.src} alt="Icon Instagram de l'agence Tremplin" /></a>
            <a target='blanck' href="https://www.linkedin.com/company/tremplin-entreprendre/"><img src={LogoLinkedin.src} alt="Icon Linkedin de l'agence Tremplin" /></a>
            <a target='blanck' href="https://www.facebook.com/p/Tremplinentreprendre-100090948333418/"><img src={LogoFacebook.src} alt="Icon Facebook de l'agence Tremplin" /></a>
          </div>
        <nav>
<ul>
          <li><a href="./">Accueil</a></li>
          <li><a href="/agence">Notre Agence</a></li>
          <li><a href="/audit">Audit de com&apos;</a></li>
          <li className="dropdown">
            <a href="/accompagnement">Nos accompagnements</a>

        <li>
            <a href="/branding">
                Rebranding
            </a>
        </li>

        <li>
            <a href="/com">
                Réalignement de com&apos;
            </a>
        </li>
          </li>
          {/* <li><a href="/com">Refondre ma com&apos;</a></li>
          <li><a href="/branding">Me creer une image de marque</a></li> */}
          <li><a href="/contact">Contact</a></li>
          {/* <li><a href="/faq">J&apos;ai des questions</a></li> */}
        </ul>
        </nav>
        </div>
        <p className='copyright'>&copy; 2026 Tremplin Entreprendre - Création par CodeMeta Solutions <br />
        Mentions Légales - Conditions générales de ventes</p>
    </footer>
  )
}

export default Footer