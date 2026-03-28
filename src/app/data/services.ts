import Transparence from '../../../public/transparence.png'
import Expertise from '../../../public/expertise.png'
import Creativite from '../../../public/creativite.png'
import Agilite from '../../../public/agilite.png'

export interface Service {
  id: number;
  name: string;
  image: string;
  description: string;
}

// Données des services
export const servicesData: Service[] = [
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