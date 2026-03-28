"use client"
import React, { useState, useRef } from 'react'
import './list-services.css'



import marionfabrice from "../../../../public/marion&fabrice-agence.png"



import { projectsData, Project } from '../../data/projets'
import {servicesData, Service } from '@/app/data/services'



const ListServices: React.FC = () => {
const projects = projectsData;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const projectsPerView = 4;
  const maxIndex = Math.max(0, projects.length - projectsPerView);


  // Ouvrir la popup
  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
  };

  // Fermer la popup
  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className='list-services'>
      <ul className='list-services-ul'>
        {servicesData.map((service) => (
          <li key={service.id}>
            <img src={service.image} alt={service.name} />
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </li>
        ))}
      </ul>

      <section className='about-marionfabrice'>
        <img className='marionfabrice' src={marionfabrice.src} alt="" />
        <div>
          <aside>
            <p>A la tête de Tremplin, il y a deux passionnées de communication et d&apos;humains.</p><br></br>
            <p>&quot;On a créé cette agence pour partager notre expérience, soutenir les entrepreneurs dans leurs défis et leur donner les bons outils pour réussir &quot;</p><br/>
            <p>Notre moteur : transmettre, encourager, et surtout aider celles et ceux qui doutent à prendre confiance et à trouver leur voix.</p>
          </aside>
          <a href="/agence#process" className='little-btn-white'>Je veux bosser avec l&apos;agence</a>
        </div>
      </section>
      
      
    </section>
  )
}

export default ListServices