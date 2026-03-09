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

import LogoAfterCharlotte from "../../../../public/logo-after-charlotte.png"
import LogoBeforeCharlotte from "../../../../public/logo-before-charlotte.jpg"

import { ChevronLeft, ChevronRight, X, ExternalLink, Calendar, Users, Tag } from 'lucide-react'

// Interface TypeScript pour les services
interface Service {
  id: number;
  name: string;
  image: string;
  description: string;
}

// Interface TypeScript pour les projets
interface Project {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  image: string;
  image2 ?: string;
  image3 ?: string;
  category: string;
  date: string;
  client: string;
  technologies?: string[];
  link?: string;
  results: string[];
}

// Données des services
const servicesData: Service[] = [
  {
    id: 1,
    name: "Transparence",
    image: Transparence.src,
    description: "Nous sommes transparents dans nos méthodes et nos tarifs."
  },
  {
    id: 2,
    name: "Expertise",
    image: Expertise.src,
    description: "Notre expertise nous permet de vous accompagner efficacement."
  },
  {
    id: 3,
    name: "Agilité",
    image: Agilite.src,
    description: "Nous adaptons nos stratégies à vos besoins en temps réel."
  },
  {
    id: 4,
    name: "Créativité",
    image: Creativite.src,
    description: "Notre créativité apporte une touche unique à vos projets."
  }
];

// Données des projets (à connecter plus tard avec votre backend)
const projectsData: Project[] = [
  {
    id: 1,
    name: "Charlotte",
    description: "Une esthéticienne dans un milieu concurentiel  -> mobile e-commerce",
    longDescription: "Audit de communication - Refonte de son image - Création de la stratégie de communication",
    image: LogoBeforeCharlotte.src,
    image2: LogoAfterCharlotte.src,
    category: "Mobile",
    date: "2024",
    client: "Elle pensait que c'étais ''juste un problème d'Instagram.'' En réalité, c'était un positionnement mal posé. ",
    results: ["Prise de conscience", "positionnement cohérent avec la clientèle visée", "Clientes prêtes à payer le vrai prix de son expertise"]
  },
  {
    id: 2,
    name: "Madkin",
    description: "MIHN a racheté une boite d'informatique vieille de 25 ans",
    longDescription: "Audit de communication - création d'identité viseulle - création de préence en ligne (site - blog - linkedin) - création de la stratégie de communication",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    category: "Web",
    date: "2024",
    client: "Grâce",
    technologies: ["Vue.js", "Laravel", "PostgreSQL"],
    results: ["Retour sur invéstissement immédiat", "Positionnement dans le top 3 Google dans un secteur concurentiel sur Paris"]
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
        <div className='banner-cta'>
          <a href="">Je veux bosser avec l&apos;agence</a>
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
                      {project.name}
                    </h2>
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
      <p> Prochaine étape : On construit ensemble</p>
    </section>
  )
}

export default ListServices