import LogoOAD from "../../../public/oh abby day.png"
import BeforLogoOAD from '../../../public/logo-oad-ancien.jpg'
import LogoMadaakin from '../../../public/madaakin.png'
import LogoAfterCharlotte from '../../../public/leveil-des-sens-logo.png'

import DefiLogo from '../../../public/defilogo lumineux - sans fond.png'

import LogoBeforeCharlotte from '../../../public/logo-before-charlotte.jpg'

export interface Project {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  image: string;
  image1Details ?: string[];
  image2 ?: string;
  image2Details ? : string[];
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
    longDescription: "Refonte de son identité visuelle - Création de son site internet et d'un parcours utilisateur - Structuration de son offre - Mise en place de stratégie de communication",
    image: LogoOAD.src,
    image1Details : [
      "Design bas de gamme","Manque de structure"
    ],
    image2: BeforLogoOAD .src,
    image2Details : [
      "Identité visuelle forte", "Positionnement marqué"
    ],
    category: "Mobile",
    date: "2024",
    client: "Elle a créé une entreprise de personnalisation d'évènements pour la transformer en organisation de mariage à travers le monde entier. Elle se positionne aujourd'hui sur des mariages haut de gamme et vends régulièrement ses services avec une image qui est alignée à sa clientèle.",
    results: ["Premières présations haut de gamme vendues sur les réseaux - sans pub", "Premières ventes d'un produit digital (e-book) pour augmenter les sources de revenues"],
    bestResult : 'Son entreprise a explosée',
  },
  {

    id: 2,
    name: "projet client : création d'une marque, refonte du logo et identité visuelle",
    description: "Une esthéticienne dans un milieu concurentiel",
    longDescription: "Audit de communication - création d'identité viseulle - création de préence en ligne (site - blog - linkedin) - création de la stratégie de communication",
    image: LogoBeforeCharlotte.src,
    image1Details : [
      "Design bas de gamme"
    ],
    image2 : LogoAfterCharlotte.src,
        image2Details : [
      "Identité visuelle forte"
    ],
    category: "Web",
    date: "2024",
    client: "Grâce",
    technologies: ["Vue.js", "Laravel", "PostgreSQL"],
    results: ["Retour sur invéstissement immédiat", "Positionnement dans le top 3 Google dans un secteur concurentiel sur Paris"],
    bestResult : "Se positionne en experte visage et bien être et se démarque des autres entreprises",

  },
  {
    id: 3,
    name: "Charlotte",
    description: "Une esthéticienne dans un milieu concurrentiel",
    longDescription: "Développement d'une application de finance décentralisée (DeFi) permettant le staking, le lending et les échanges de tokens.",
    image: LogoAfterCharlotte.src,
        image1Details : [
      "Design bas de gamme"
    ],
        image2Details : [
      "Identité visuelle forte", "Positionnement marqué"
    ],
    category: "Blockchain",
    date: "2024",
    client: "Crypto Startup",
    technologies: ["React", "Solidity", "Web3.js"],
    results: ["$2M+ en TVL", "5k+ utilisateurs actifs", "Audit sécurité réussi"],
    bestResult : "Se positionne en experte visage et bien être et se démarque des autres entreprises",
  },
  {
    id: 4,
    name: "Defi",
    description: "Site vitrine luxe",
    longDescription: "Conception et développement d'un site vitrine haut de gamme pour une marque de luxe avec design épuré et animations subtiles.",
    image: DefiLogo.src,
        image1Details : [
      "Design bas de gamme",
    ],
        image2Details : [
      "Identité visuelle forte", "Positionnement marqué"
    ],
    category: "Web",
    date: "2024",
    client: "Marque de Luxe",
    technologies: ["Next.js", "Tailwind", "Framer Motion"],
    results: ["Temps de chargement < 2s", "Taux de conversion +80%", "Design Award 2024"],
    bestResult : 'Son entreprise a explosée',
  },
];