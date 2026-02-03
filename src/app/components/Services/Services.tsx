import React from 'react'
import BackgroundBlue from '../../../../public/background-blue.png'
import './services.css'

const Services = () => {
  // Duplicate the list items to create a seamless scrolling effect
  const services = [
    "Branding",
    "Création d'identité visuelle",
    "Stratégie de communication",
    "Création de contenu",
    "Coaching communication",
    "Repositionnement de marque",
    "Strorytelling",
    "Création de supports print & digitaux",
    "Communication alignée",
    "Direction artistique",
    "Refonte d'image",
    "Communication 360°",
    "Plan d'action stratégique",
    "Audit de communication",
    "Clarification de positionnement",
    "Logo et identité"
  ];

  // Duplicate the array to allow seamless scrolling
  const duplicatedServices = [...services, ...services];

  return (
    <section className='services-container'>
      <img className='services-background' src={BackgroundBlue.src} />
      <ul className='services-list'>
        {duplicatedServices.map((service, index) => (
          <li key={index} className='services-texte'>
            {service}
            {index !== duplicatedServices.length - 1 && <span className="separator"> - </span>}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Services