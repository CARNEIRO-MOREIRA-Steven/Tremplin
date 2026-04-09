// ─── Types ───────────────────────────────────────────────────────────────────

export type ProfileKey =
  | "🎤 Authentique Bridé·e"
  | "🔧 Technicien·ne"
  | "💡 Visionnaire"
  | "🌪 Caméléon"
  | "🌱 Stratège Tétanisé"
  | "🤹 Multicasquette";

export interface Answer {
  label: string;
  profiles: ProfileKey[];
}

export interface Question {
  id: number;
  question: string;
  type: "single" | "free";
  answers?: Answer[];
}

// ─── Questions ────────────────────────────────────────────────────────────────

export const questions: Question[] = [
  {
    id: 1,
    question: "Quand tu dois créer du contenu pour ton activité… tu te sens :",
    type: "single",
    answers: [
      {
        label: "Inspiré·e mais dispersé·e",
        profiles: ["🎤 Authentique Bridé·e", "🤹 Multicasquette"],
      },
      {
        label: "Bloqué·e ou à sec",
        profiles: ["🔧 Technicien·ne", "🌱 Stratège Tétanisé"],
      },
      {
        label: "Plein·e d'idées, mais rien n'est prêt",
        profiles: ["💡 Visionnaire", "🌱 Stratège Tétanisé"],
      },
      {
        label: "En mode automatique : je le fais parce qu'il faut",
        profiles: ["🔧 Technicien·ne"],
      },
      {
        label: "J'ai envie… mais je ne sais jamais par quoi commencer",
        profiles: ["🌪 Caméléon", "🤹 Multicasquette"],
      },
    ],
  },
  {
    id: 2,
    question: "Ton rapport à la communication de ton business, c'est plutôt :",
    type: "single",
    answers: [
      {
        label: "Je le vois comme une contrainte",
        profiles: ["🔧 Technicien·ne"],
      },
      {
        label: "J'adore ça, mais je manque de clarté",
        profiles: ["💡 Visionnaire"],
      },
      {
        label: "Je suis régulier·e… mais je doute toujours",
        profiles: ["🌪 Caméléon"],
      },
      {
        label: "J'aimerais que ce soit plus fluide, plus moi",
        profiles: ["🎤 Authentique Bridé·e"],
      },
      {
        label: "Je crois que je pourrais tout déchirer… si j'étais guidé·e",
        profiles: ["🌱 Stratège Tétanisé"],
      },
    ],
  },
  {
    id: 3,
    question: "Quand tu regardes les autres communiquer, tu te dis souvent :",
    type: "single",
    answers: [
      {
        label: "C'est hyper clair chez eux… chez moi c'est flou",
        profiles: ["💡 Visionnaire"],
      },
      {
        label: "Je ne me vois pas faire ça, c'est pas moi",
        profiles: ["🎤 Authentique Bridé·e"],
      },
      {
        label: "Je pourrais faire pareil, mais j'ose pas",
        profiles: ["🌪 Caméléon"],
      },
      {
        label: "Pourquoi je rame autant, alors que je suis bon·ne dans mon métier ?",
        profiles: ["🔧 Technicien·ne"],
      },
      {
        label: "Moi aussi j'ai des trucs à dire, mais comment les dire vraiment bien ?",
        profiles: ["🤹 Multicasquette"],
      },
    ],
  },
  {
    id: 4,
    question: "Niveau stratégie, on est où ?",
    type: "single",
    answers: [
      {
        label: "Je navigue au feeling (et je m'y perds)",
        profiles: ["🌪 Caméléon"],
      },
      {
        label: "J'ai des idées… mais ça reste dans mes carnets",
        profiles: ["🌱 Stratège Tétanisé"],
      },
      {
        label: "J'ai suivi des formations, mais rien ne s'aligne vraiment",
        profiles: ["💡 Visionnaire"],
      },
      {
        label: "J'ai une vision claire… mais je ne l'incarne pas",
        profiles: ["🎤 Authentique Bridé·e"],
      },
      {
        label: "Je pense avoir besoin d'un vrai cadre",
        profiles: ["🔧 Technicien·ne"],
      },
    ],
  },
  {
    id: 5,
    question: "Quand il s'agit de parler de toi ou de vendre :",
    type: "single",
    answers: [
      {
        label: "Je panique",
        profiles: ["🎤 Authentique Bridé·e"],
      },
      {
        label: "Je contourne le sujet subtilement 😅",
        profiles: ["🌪 Caméléon"],
      },
      {
        label: "Je le fais… mais c'est jamais naturel",
        profiles: ["🔧 Technicien·ne"],
      },
      {
        label: "Je culpabilise d'être trop ou pas assez",
        profiles: ["🎤 Authentique Bridé·e"],
      },
      {
        label: "Je me dis qu'un jour, je saurai comment",
        profiles: ["🌱 Stratège Tétanisé"],
      },
    ],
  },
  {
    id: 6,
    question: "Ton contenu, aujourd'hui, il est plutôt :",
    type: "single",
    answers: [
      {
        label: "Régulier mais tiède",
        profiles: ["🌪 Caméléon"],
      },
      {
        label: "Rare mais sincère",
        profiles: ["🎤 Authentique Bridé·e"],
      },
      {
        label: "Créatif mais bordélique",
        profiles: ["🤹 Multicasquette"],
      },
      {
        label: "Technique mais peu engageant",
        profiles: ["🔧 Technicien·ne"],
      },
      {
        label: "Carrément inexistant",
        profiles: ["🌱 Stratège Tétanisé"],
      },
    ],
  },
  {
    id: 7,
    question: "L'image que tu veux transmettre, c'est plutôt :",
    type: "single",
    answers: [
      {
        label: "Pro mais humain·e",
        profiles: ["🔧 Technicien·ne"],
      },
      {
        label: "Inspirant·e mais simple",
        profiles: ["💡 Visionnaire"],
      },
      {
        label: "Créatif·ve mais lisible",
        profiles: ["🤹 Multicasquette"],
      },
      {
        label: "Solide mais spontané·e",
        profiles: ["🌪 Caméléon"],
      },
      {
        label: "Juste : moi, en vrai",
        profiles: ["🎤 Authentique Bridé·e"],
      },
    ],
  },
  {
    id: 8,
    question:
      "Tu te reconnais dans cette phrase : \"J'ai tellement de casquettes… que je perds les gens (et moi avec).\"",
    type: "single",
    answers: [
      {
        label: "TELLEMENT !",
        profiles: ["🤹 Multicasquette"],
      },
      {
        label: "Un peu, mais j'essaie de structurer",
        profiles: ["💡 Visionnaire"],
      },
      {
        label: "Non, je suis très spécialisé·e",
        profiles: ["🔧 Technicien·ne"],
      },
      {
        label: "Oui, et ça me bloque au quotidien",
        profiles: ["🌱 Stratège Tétanisé"],
      },
      {
        label: "C'est toute ma vie, cette phrase",
        profiles: ["🤹 Multicasquette"],
      },
    ],
  },
  {
    id: 9,
    question: "Si on te donnait une baguette magique pour ta com', tu choisirais quoi ?",
    type: "single",
    answers: [
      {
        label: "Une clarté instantanée",
        profiles: ["💡 Visionnaire"],
      },
      {
        label: "Une offre ultra bien formulée",
        profiles: ["🔧 Technicien·ne"],
      },
      {
        label: "Des idées de contenu qui dépotent",
        profiles: ["🌪 Caméléon"],
      },
      {
        label: "Un ton assumé et impactant",
        profiles: ["🎤 Authentique Bridé·e"],
      },
      {
        label: "Un plan simple et actionnable",
        profiles: ["🌱 Stratège Tétanisé"],
      },
    ],
  },
  {
    id: 10,
    question: "Et si tu devais résumer ton vrai blocage en 1 mot ?",
    type: "free",
  },
];

// ─── Scoring helper ───────────────────────────────────────────────────────────

/**
 * Calcule le profil dominant à partir des réponses sélectionnées.
 * @param selectedProfiles - Tableau de tous les ProfileKey accumulés par les réponses
 * @returns Le profil avec le score le plus élevé
 */
export function computeResult(selectedProfiles: ProfileKey[]): ProfileKey {
  const scores: Record<ProfileKey, number> = {
    "🎤 Authentique Bridé·e": 0,
    "🔧 Technicien·ne": 0,
    "💡 Visionnaire": 0,
    "🌪 Caméléon": 0,
    "🌱 Stratège Tétanisé": 0,
    "🤹 Multicasquette": 0,
  };

  for (const profile of selectedProfiles) {
    scores[profile]++;
  }

  return (Object.entries(scores) as [ProfileKey, number][]).reduce((a, b) =>
    b[1] > a[1] ? b : a
  )[0];
}