import LogoOAD from "../../../public/oh abby day.png"
import LogoMadaakin from '../../../public/madaakin.png'
import LeveilDesSens from '../../../public/leveil-des-sens-logo.png'

import DefiLogo from '../../../public/defilogo lumineux - sans fond.png'

import LogoAfterCharlotte from "../../../public/logo-after-charlotte.png"

export interface Project {
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
  bestResult : string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    name: "OH ABBY DAY",
    description: "Abbygaël a transformé son identité visuelle",
    longDescription: "Audit de communication - Refonte de son image - Création de la stratégie de communication",
    image: LogoOAD.src,
    image2: LogoAfterCharlotte.src,
    category: "Mobile",
    date: "2024",
    client: "Elle pensait que c'étais ''juste un problème d'Instagram.'' En réalité, c'était un positionnement mal posé. ",
    results: ["Prise de conscience", "positionnement cohérent avec la clientèle visée", "Clientes prêtes à payer le vrai prix de son expertise"],
    bestResult : 'Son entreprise a explosée',
  },
  {
    id: 2,
    name: "Madkin",
    description: "Lionel a créé une marque avec un pisitionnement prenium",
    longDescription: "Audit de communication - création d'identité viseulle - création de préence en ligne (site - blog - linkedin) - création de la stratégie de communication",
    image: LogoMadaakin.src,
    category: "Web",
    date: "2024",
    client: "Grâce",
    technologies: ["Vue.js", "Laravel", "PostgreSQL"],
    results: ["Retour sur invéstissement immédiat", "Positionnement dans le top 3 Google dans un secteur concurentiel sur Paris"],
    bestResult : "On l'a accompagné au lancement de son produit",

  },
  {
    id: 3,
    name: "Charlotte",
    description: "Une esthéticienne dans un milieu concurrentiel",
    longDescription: "Développement d'une application de finance décentralisée (DeFi) permettant le staking, le lending et les échanges de tokens.",
    image: LeveilDesSens.src,
    category: "Blockchain",
    date: "2024",
    client: "Crypto Startup",
    technologies: ["React", "Solidity", "Web3.js"],
    results: ["$2M+ en TVL", "5k+ utilisateurs actifs", "Audit sécurité réussi"],
    bestResult : 'A revu son image pour se positionner en experte et se démarquer des consurents',
  },
  {
    id: 4,
    name: "Defi",
    description: "Site vitrine luxe",
    longDescription: "Conception et développement d'un site vitrine haut de gamme pour une marque de luxe avec design épuré et animations subtiles.",
    image: DefiLogo.src,
    category: "Web",
    date: "2024",
    client: "Marque de Luxe",
    technologies: ["Next.js", "Tailwind", "Framer Motion"],
    results: ["Temps de chargement < 2s", "Taux de conversion +80%", "Design Award 2024"],
    bestResult : 'Son entreprise a explosée',
  },
];