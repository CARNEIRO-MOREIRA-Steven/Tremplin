"use client"
import React, { useState, useRef } from 'react'
import './list-services.css'
import BackgroundPink from '../../../../public/background-pink.png'
import Transparence from '../../../../public/transparence.png'
import Expertise from '../../../../public/expertise.png'
import Creativite from '../../../../public/creativite.png'
import Agilite from '../../../../public/agilite.png'
import ArrowRight from '../../../../public/arrow-right.svg'

import marionfabrice from "../../../../public/marion&fabrice-agence.png"


import { ChevronLeft, ChevronRight, X, ExternalLink, Calendar, Users, Tag } from 'lucide-react'

// Interface TypeScript pour les projets
interface Project {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  image: string;
  category: string;
  date: string;
  client: string;
  technologies: string[];
  link?: string;
  results: string[];
}

// Données des projets (à connecter plus tard avec votre backend)
const projectsData: Project[] = [
  {
    id: 1,
    name: "Abby",
    description: "Application mobile e-commerce",
    longDescription: "Développement d'une application mobile e-commerce complète avec système de paiement intégré, gestion des stocks en temps réel et interface utilisateur intuitive.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
    category: "Mobile",
    date: "2024",
    client: "Startup Fashion",
    technologies: ["React Native", "Node.js", "MongoDB"],
    link: "https://example.com/abby",
    results: ["Augmentation des ventes de 150%", "50k+ téléchargements", "Note 4.8/5 sur les stores"]
  },
  {
    id: 2,
    name: "Madkin",
    description: "Plateforme SaaS marketing",
    longDescription: "Création d'une plateforme SaaS complète pour la gestion de campagnes marketing multi-canaux avec tableaux de bord analytiques.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    category: "Web",
    date: "2024",
    client: "Agence Marketing",
    technologies: ["Vue.js", "Laravel", "PostgreSQL"],
    results: ["ROI client +200%", "Temps de gestion réduit de 60%", "15 entreprises adoptées"]
  },
  {
    id: 3,
    name: "Defi",
    description: "App finance décentralisée",
    longDescription: "Développement d'une application de finance décentralisée (DeFi) permettant le staking, le lending et les échanges de tokens.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop",
    category: "Blockchain",
    date: "2024",
    client: "Crypto Startup",
    technologies: ["React", "Solidity", "Web3.js"],
    results: ["$2M+ en TVL", "5k+ utilisateurs actifs", "Audit sécurité réussi"]
  },
  {
    id: 4,
    name: "Charlotte",
    description: "Site vitrine luxe",
    longDescription: "Conception et développement d'un site vitrine haut de gamme pour une marque de luxe avec design épuré et animations subtiles.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
    category: "Web",
    date: "2024",
    client: "Marque de Luxe",
    technologies: ["Next.js", "Tailwind", "Framer Motion"],
    results: ["Temps de chargement < 2s", "Taux de conversion +80%", "Design Award 2024"]
  },
  {
    id: 5,
    name: "EcoTrack",
    description: "App gestion RSE",
    longDescription: "Application web pour le suivi et la gestion des initiatives RSE en entreprise avec tableaux de bord personnalisés.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop",
    category: "Web",
    date: "2024",
    client: "Groupe industriel",
    technologies: ["Angular", "Python", "MySQL"],
    results: ["30% réduction empreinte carbone", "100+ entreprises utilisatrices", "Certification ISO obtenue"]
  },
  {
    id: 6,
    name: "MediConnect",
    description: "Plateforme télémédecine",
    longDescription: "Plateforme de télémédecine sécurisée permettant consultations vidéo, gestion des dossiers patients et prescription électronique.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
    category: "Santé",
    date: "2024",
    client: "Cabinet médical",
    technologies: ["React", "Node.js", "MongoDB"],
    results: ["1000+ consultations/mois", "95% satisfaction patients", "Temps d'attente réduit de 70%"]
  },
  {
    id: 7,
    name: "EduFlow",
    description: "LMS éducation en ligne",
    longDescription: "Learning Management System complet avec création de cours interactifs, suivi des progressions et outils collaboratifs.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
    category: "Education",
    date: "2024",
    client: "Institut formation",
    technologies: ["Vue.js", "Django", "PostgreSQL"],
    results: ["500+ étudiants formés", "Taux de completion 85%", "Note moyenne 4.7/5"]
  },
  {
    id: 8,
    name: "SmartHome",
    description: "IoT maison connectée",
    longDescription: "Application de contrôle pour maison connectée avec gestion des appareils IoT et automatisations personnalisées.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    category: "IoT",
    date: "2024",
    client: "Tech innovante",
    technologies: ["React Native", "Python", "MQTT"],
    results: ["40% économie énergie", "Integration 50+ devices", "99.9% uptime"]
  }
];

const ListServices: React.FC = () => {
  const [projects] = useState<Project[]>(projectsData);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const projectsPerView = 4;
  const maxIndex = Math.max(0, projects.length - projectsPerView);

  // Navigation du carrousel
  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

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
        <li><img src={Transparence.src}/>Transparence</li>
        <li><img src={Expertise.src}/>Expertise</li>
        <li><img src={Agilite.src}/>Agilité</li>
        <li><img src={Creativite.src}/>Créativité</li>
      </ul>

      <section className='about-marionfabrice'>
        <img className='marionfabrice' src={marionfabrice.src} alt="" />
        <div>
          <aside>
            <p>A la tête de Tremplin, il y a deux passionnées de communication et d'humains.</p><br></br>
            <p>"On a créé cette agence pour partager notre expérience, soutenir les entrepreneurs dans leurs défis et leur donner les bons outils pour réussir "</p><br/>
            <p>Notre moteur : transmettre, encourager, et surtout aider celles et ceux qui doutent à prendre confiance et à trouver leur voix.</p>
          </aside>
        <div className='banner-cta'>
          <a href="">Je veux bosser avec l'agence</a>
          <img src={ArrowRight.src} alt="flèche droite" />
        </div>
        </div>
      </section>
      
      <h2>100% de nos clients satisfaits</h2>
      
      <section className='list-services-details'>
        {/* Carrousel avec navigation */}
        <div className="carousel-container">
          {/* Boutons de navigation */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="carousel-btn carousel-btn-prev"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className="carousel-btn carousel-btn-next"
          >
            <ChevronRight size={20} />
          </button>

          {/* Container des projets */}
          <div 
            className="projects-carousel"
          >
            <div 
              ref={carouselRef}
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
                    
                    <div className="project-info">
                      <h2 className="project-name">
                        {project.name}
                      </h2>
                      <p className="project-description">
                        {project.description}
                      </p>
                      <div className="project-footer">
                        <span className="project-date">{project.date}</span>
                        <ExternalLink className="project-link-icon" size={12} />
                      </div>
                    </div>
                  </div>
                </aside>
              ))}
            </div>
          </div>
        </div>
        
        <img className="background-services" src={BackgroundPink.src} />
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

              <div className="modal-header-info">
                <div className="modal-header-tags">
                  <span className="modal-tag">
                    {selectedProject.date}
                  </span>
                </div>
                <h2 className="modal-title">
                  {selectedProject.name}
                </h2>
              </div>
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

                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-cta-button"
                    >
                      <ExternalLink size={16} />
                      Voir le projet
                    </a>
                  )}
                </div>

                {/* Sidebar informations */}
                <div className="modal-sidebar">
                  <div className="modal-info-card">
                    <h4 className="modal-info-title">
                      <Users size={16} />
                      Client
                    </h4>
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
      <p> Prochaine étape : On construit ensemble</p>
    </section>
  )
}

export default ListServices