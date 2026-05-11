import LogoOAD from "../../../public/oh abby day.png"
import BeforLogoOAD from '../../../public/logo-oad-ancien.jpg'
import LogoMadaakin from '../../../public/madaakin.png'
import LogoAfterCharlotte from '../../../public/leveil-des-sens-logo.png'

import Madaakin from '../../../public/Sans titre76 1.png'
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
    name: "Madaakin",
    description: "Lionel a crée une marque avec un positionnement prenium",
    longDescription: "Audit de projet - Recherche de concept - Création de charte graphique - Création de logo",
    image: Madaakin.src,
    image1Details : [
      "Recherche d'identité"
    ],
    image2 : LogoMadaakin.src,
        image2Details : [
      "Création univers graphique"
    ],
    category: "Web",
    date: "2024",
    client: "Il a choisi de se positionner sur du haut de gamme dès le départ, ce qui a impliqué la création d'une identité visuelle puissante et des résultats dès le départ",
    technologies: ["Vue.js", "Laravel", "PostgreSQL"],
    results: ["Vente dès le premier salon, au prix fort", "Bon positionnement sur un marché concurentiel"],
    bestResult : "On l'a accompagné au lancemen de son produit",

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
    image2 : LogoBeforeCharlotte.src,
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
    description: "Minh a racheté une boite d'informatique vieille de 25 ans",
    longDescription: "Audit de communication - Création identité visuelle - Création présence en ligne (site - blog - linkedin) - Création de la stratégie de communication",
    image: DefiLogo.src,
        image1Details : [
      "Refonte de site",
    ],
    // image2 : PHOTO-2025-08-05-07-37-37.jpg.src,
        image2Details : [
      "Stratégie de contenu"
    ],
    category: "Web",
    date: "2024",
    client: "Grâce à la refonte de l'identité visuelle et la création de sa présence en ligne bien ciblée, cette entreprise a généré ses premiers clients en ligne et a intégré un réseau B2B qualifié.",
    technologies: ["Next.js", "Tailwind", "Framer Motion"],
    results: ["Retour sur son investissement immédiat", "Positionnement dans le top 3 Google dans un secteur concurentiel sur Paris"],
    bestResult : '',
  },
];