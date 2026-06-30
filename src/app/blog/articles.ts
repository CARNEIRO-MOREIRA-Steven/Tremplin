export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  excerpt: string;
  content: string;
  date: string;
  readingTime: string;
}

export const articles: Article[] = [
  {
    id: "1",
    slug: "communication-digitale-erreurs-eviter",
    title: "Les 5 erreurs qui plombent ta communication digitale",
    subtitle: "Et comment les corriger sans tout recommencer à zéro",
    category: "Stratégie",
    image: "/un-bureau-lumineux.jpg",
    excerpt:
      "Poster pour poster, parler de tout sans jamais dire l'essentiel, copier ce que fait la concurrence... On a listé les erreurs les plus fréquentes.",
    content:
      "Poster pour poster, parler de tout sans jamais dire l'essentiel, copier ce que fait la concurrence sans se demander si ça te ressemble : ce sont les pièges classiques d'une communication qui tourne en rond.\n\nLa première erreur, c'est de vouloir parler à tout le monde. Une communication efficace s'adresse à quelqu'un de précis, pas à une foule indéfinie.\n\nLa deuxième, c'est l'absence de fil rouge. Sans message clair et répété, ton audience oublie ce que tu fais en moins de trois secondes.\n\nLa troisième, c'est de négliger la régularité au profit de la perfection. Mieux vaut une publication imparfaite mais constante qu'un contenu parfait publié une fois par trimestre.\n\nLa quatrième, c'est de ne pas mesurer ce qui fonctionne. Sans retour sur ce qui engage réellement ton audience, tu avances à l'aveugle.\n\nEnfin, la cinquième erreur est de confondre visibilité et conversion. Être vu ne suffit pas : il faut donner envie d'agir.",
    date: "2026-04-12",
    readingTime: "4 min",
  },
  {
    id: "2",
    slug: "creer-identite-visuelle-qui-ressemble",
    title: "Créer une identité visuelle qui te ressemble vraiment",
    subtitle: "Au-delà du logo : construire un univers cohérent",
    category: "Branding",
    image: "/un-bureau-lumineux.jpg",
    excerpt:
      "Une identité visuelle, ce n'est pas qu'un logo posé sur une carte de visite. C'est un univers entier qui doit raconter qui tu es.",
    content:
      "Une identité visuelle, ce n'est pas qu'un logo posé sur une carte de visite. C'est un univers entier : couleurs, typographies, ton, photographie, qui doit raconter qui tu es avant même que tu aies prononcé un mot.\n\nLe piège classique est de partir directement sur le visuel sans avoir clarifié le positionnement. Le logo n'est que la partie visible d'un travail de fond sur ce que l'entreprise représente.\n\nUne bonne identité visuelle répond à trois questions : qui es-tu, à qui tu t'adresses, et qu'est-ce qui te différencie. Une fois ces réponses posées, chaque choix visuel devient évident plutôt qu'arbitraire.\n\nLa cohérence est la clé. Un univers visuel fort se reconnaît immédiatement, sur n'importe quel support, sans même voir le logo.",
    date: "2026-03-28",
    readingTime: "5 min",
  },
  {
    id: "3",
    slug: "reseaux-sociaux-canal-acquisition",
    title: "Transformer tes réseaux sociaux en vrai canal d'acquisition",
    subtitle: "Arrêter de poster pour exister, commencer à poster pour vendre",
    category: "Réseaux sociaux",
    image: "/un-bureau-lumineux.jpg",
    excerpt:
      "Beaucoup d'entrepreneurs publient par obligation plutôt que par stratégie. Voici comment inverser la tendance.",
    content:
      "Beaucoup d'entrepreneurs publient par obligation plutôt que par stratégie. Résultat : du temps investi, peu de résultats concrets.\n\nPour transformer un réseau social en canal d'acquisition, il faut d'abord choisir une seule plateforme et s'y consacrer pleinement plutôt que de se disperser.\n\nEnsuite, chaque contenu doit avoir un objectif précis : informer, créer du lien, ou convertir. Mélanger les trois dans une seule publication dilue le message.\n\nLa régularité du calendrier éditorial compte autant que la qualité du contenu. Un algorithme récompense la constance, pas les coups d'éclat ponctuels.\n\nEnfin, l'appel à l'action est trop souvent oublié. Un bon contenu donne envie, mais c'est l'appel à l'action qui transforme l'envie en geste concret.",
    date: "2026-03-15",
    readingTime: "6 min",
  },
  {
    id: "4",
    slug: "rebranding-quand-changer-image",
    title: "Rebranding : comment savoir si c'est le bon moment",
    subtitle: "Les signaux qui ne trompent pas",
    category: "Branding",
    image: "/un-bureau-lumineux.jpg",
    excerpt:
      "Ton entreprise a évolué mais ton image est restée figée ? Voici les signes qui montrent qu'un rebranding s'impose.",
    content:
      "Ton entreprise a évolué mais ton image est restée figée ? C'est l'un des signes les plus clairs qu'un rebranding s'impose.\n\nLe premier signal est le décalage entre ce que tu proposes aujourd'hui et ce que ton image visuelle raconte encore. Si tes clients sont surpris en découvrant ton offre réelle, le problème vient souvent de l'image.\n\nLe deuxième signal est l'absence de reconnaissance immédiate. Si les gens ne se souviennent pas de toi après avoir vu ton contenu, ton identité manque de force.\n\nLe troisième est interne : tu n'es plus fier de montrer ton image. Ce ressenti, souvent minimisé, est pourtant un excellent indicateur.\n\nUn rebranding n'est pas un coup de peinture. C'est une remise à plat complète du positionnement avant de toucher au visuel.",
    date: "2026-02-22",
    readingTime: "5 min",
  },
  {
    id: "5",
    slug: "message-clair-clients-ideaux",
    title: "Pourquoi un message flou repousse tes clients idéaux",
    subtitle: "La clarté n'est pas optionnelle, elle est stratégique",
    category: "Stratégie",
    image: "/un-bureau-lumineux.jpg",
    excerpt:
      "Plus un message est flou, plus il demande d'effort à comprendre. Et un client qui doit fournir un effort passe son chemin.",
    content:
      "Plus un message est flou, plus il demande d'effort à comprendre. Et un client qui doit fournir un effort pour comprendre ce que tu proposes passe simplement son chemin.\n\nLa clarté n'est pas une option esthétique, c'est une nécessité stratégique. Un message clair filtre naturellement : il attire les bonnes personnes et n'intéresse pas les mauvaises, ce qui est tout aussi précieux.\n\nPour clarifier un message, il faut répondre à une question simple : si quelqu'un n'a que cinq secondes pour comprendre ce que tu fais, que doit-il retenir ?\n\nCette contrainte oblige à trancher, à hiérarchiser, à abandonner l'envie de tout dire. Et c'est précisément ce qui rend un message mémorable.",
    date: "2026-02-08",
    readingTime: "3 min",
  },
  {
    id: "6",
    slug: "storytelling-entreprise-pourquoi",
    title: "Le storytelling, un outil business avant d'être un outil créatif",
    subtitle: "Raconter une histoire pour créer de la confiance",
    category: "Création de contenu",
    image: "/un-bureau-lumineux.jpg",
    excerpt:
      "On pense souvent storytelling comme un exercice créatif. C'est avant tout un outil de conversion redoutablement efficace.",
    content:
      "On pense souvent storytelling comme un exercice créatif réservé aux grandes marques. C'est avant tout un outil de conversion redoutablement efficace, accessible à toutes les entreprises.\n\nUne histoire bien racontée crée de la mémorisation là où une liste de caractéristiques techniques ne le permet pas. Le cerveau retient les histoires, pas les arguments.\n\nLe storytelling d'entreprise repose sur une structure simple : un point de départ, un obstacle rencontré, une transformation. Cette structure rassure car elle est universellement reconnaissable.\n\nL'erreur fréquente est de se mettre soi-même au centre de l'histoire. Le client doit pouvoir s'identifier au héros, l'entreprise n'étant que le guide qui l'aide à avancer.",
    date: "2026-01-19",
    readingTime: "4 min",
  },
];