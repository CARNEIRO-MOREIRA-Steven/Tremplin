"use client"
import React, { useState, useRef } from 'react'
import '../ListServices/list-services.css'

import './modal.css'


import { X, MoveRight } from 'lucide-react'

import { projectsData, Project } from '../../data/projets'



const Modal = (props: { title: React.ReactNode }) => {
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
    <section className='list-services' id='cas-client'>

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
            >
                  {[...projects, ...projects].map((project, index) => (                
                <aside
                  key={`${project.id}-${index}`}                  
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
                    {/* <p>
                      <MoveRight />
                      {project.bestResult}
                      </p> */}
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
              <div className='modal-title'>
                <h2>{selectedProject.description}</h2>
                <h3>
                  <MoveRight />
                  {selectedProject.bestResult}</h3>
              </div>
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
              <section className='group-image-details'>
                <aside className='group-image'>
                  <img
                    src={selectedProject.image2}
                    alt={selectedProject.name}
                    className="modal-header-image"
                  />
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.name}
                    className="modal-header-image"
                  />
                </aside>
                <aside className='group-detail'>
                  <div className='detail-projet-before'>
                    {selectedProject.image1Details?.map((detail, index) => (
                      <p key={index} className='detail-projet-tag'>{detail}</p>
                    ))
                    }
                  </div>
                  <div className='detail-projet-after'>
                    {selectedProject.image2Details?.map((detail, index) => (
                      <p key={index} className='detail-projet-tag'>{detail}</p>
                    ))
                    }
                  </div>

                </aside>
              </section>
              <div className="modal-objectif-results">
                {/* Colonne principale */}
                <div className="modal-main-content">
                  <div>
                  <h2 className="modal-section-title">
                    Ce qu&apos;on a fait
                  </h2>
                  <p className="modal-description">
                    {selectedProject.longDescription}
                  </p>
                  </div>
                  <div>
                  <h2 className="modal-subsection-title">
                    Résultats
                  </h2>
                  <ul className="modal-results-list">
                    {selectedProject.results.map((result, index) => (
                      <li key={index} className="modal-result-item">
                        <span>
                          <MoveRight />
                          {result}</span>
                      </li>
                    ))}
                  </ul>
                  </div>
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