"use client"
import React, { useState, useRef } from 'react'
import '../ListServices/list-services.css'

import './modal.css'


import { X, MoveRight } from 'lucide-react'

import { projectsData, Project } from '../../data/projets'



const Modal = (props:{ title: React.ReactNode}) => {
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
      
      <section className='satisfaction-title'>
      <h2>{props.title} </h2>
      </section>
      
      <section className='list-services-details'>
        {/* Carrousel avec navigation */}
        <div className="carousel-container">
        

          {/* Container des projets */}
          <div 
            className="projects-carousel"
          >
            <div 
              ref={carouselRef}
              id='cas-clients'
              className="projects-track"
              style={{
                transform: `translateX(-${currentIndex * (100 / projectsPerView)}%)`
              }}
            >
              {projects.map((project) => (
                <aside 
                  key={project.id}
                  className='list-intervention-detail project-card'
                  onClick={() => openProjectModal(project)}
                >
                  <div className="project-card-content">
                    <div className="project-image-container">
                      <img 
                        src={project.image} 
                        alt={project.name}
                        className="project-image"
                      />
                    </div>
                    <h2 className="project-name">
                      {project.description}
                    </h2>
                    <p>{project.bestResult}</p>
                  </div>
                </aside>
              ))}
            </div>
          </div>
        </div>
        
        {/* <img className="background-services" src={BackgroundPink.src} /> */}
      </section>

      {/* Modal Popup */}
      {selectedProject && (
        <div 
          className="project-modal"
          onClick={closeModal}
        >
          <div 
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header avec image */}
            <div className="modal-header">
              <h2>{selectedProject.description}</h2>
              <img 
                src={selectedProject.image} 
                alt={selectedProject.name}
                className="modal-header-image"
              />
              <div className="modal-header-overlay" />
              
              <button
                onClick={closeModal}
                className="modal-close-btn"
              >
                <X size={18} />
              </button>
            </div>

            {/* Contenu */}
            <div className="modal-body">
              <div className="modal-grid">
                {/* Colonne principale */}
                <div className="modal-main-content">
                  <h3 className="modal-section-title">
                    À propos du projet
                  </h3>
                  <p className="modal-description">
                    {selectedProject.longDescription}
                  </p>

                  <h4 className="modal-subsection-title">
                    Résultats obtenus
                  </h4>
                  <ul className="modal-results-list">
                    {selectedProject.results.map((result, index) => (
                      <li key={index} className="modal-result-item">
                        <div className="modal-result-bullet" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sidebar informations */}
                <div className="modal-sidebar">
                  <div className="modal-info-card">
                    <p className="modal-info-text">
                      {selectedProject.client}
                    </p>
                  </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
      )}
      <a className='modal-cta' href='/contact' target='blank'> 
      <MoveRight />
        Prochaine étape : On construit ensemble</a>
    </section>
  )
}

export default Modal