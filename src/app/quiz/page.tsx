"use client";

import { useState } from "react";
import './page.css'
import { questions, computeResult } from "../data/quiz"; // adapte le chemin selon ton projet
import type { ProfileKey } from "../data/quiz";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function Quiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [freeAnswer, setFreeAnswer] = useState("");

  const [result, setResult] = useState<ProfileKey | null>(null);
    const [collectedProfiles, setCollectedProfiles] = useState<ProfileKey[]>([]);

  const currentQuestion = questions[currentIndex];
  const isLast = currentIndex === questions.length - 1;
  const progress = ((currentIndex) / questions.length) * 100;

  // ── Réponse à choix unique ─────────────────────────────────────────────────
  function handleAnswer(profiles: ProfileKey[]) {
    const updated = [...collectedProfiles, ...profiles];

    if (isLast) {
      setResult(computeResult(updated));
      return;
    }

    setCollectedProfiles(updated);
    setCurrentIndex((i) => i + 1);
  }

  // ── Réponse libre (Q10) ────────────────────────────────────────────────────
  function handleFreeSubmit() {
    // La Q10 n'influe pas sur le scoring — on calcule directement
    setResult(computeResult(collectedProfiles));
  }

  // ── Résultat ───────────────────────────────────────────────────────────────
  if (result) {
    return (
      <section>
      <Header />
      <div className="result-screen">
        <h2 className="neon-title">Ton profil comm&apos; :</h2>
        <p className="profile-label">{result}</p>
        <p className="profile-desc">{profileDescriptions[result]}</p>
        <button className="little-btn-pink" onClick={() => {
          setCurrentIndex(0);
          setCollectedProfiles([]);
          setFreeAnswer("");
          setResult(null);
        }}>
          Recommencer
        </button>
      </div>
      <Footer />
      </section>
    );
  }

  // ── Quiz ───────────────────────────────────────────────────────────────────
  return (
    <section className="quiz-page"> 
    <Header />
    <div className="quiz-wrapper">
      {/* Barre de progression */}
      <div className="quiz-container">
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>
      <p className="question-counter">
        {currentIndex + 1} / {questions.length}
      </p>

      {/* Question */}
      <h2 className="question-text neon-title">{currentQuestion.question}</h2>

      {/* Réponses */}
      {currentQuestion.type === "single" && (
        <ul className="answers-list">
          {currentQuestion.answers?.map((answer, idx) => (
            <li key={idx}>
              <button
                className="little-btn-pink"
                onClick={() => handleAnswer(answer.profiles)}
              >
                {answer.label}
              </button>
            </li>
          ))}
        </ul>
      )}

      {currentQuestion.type === "free" && (
        <div className="free-answer">
          <input
            type="text"
            placeholder="Texte libre"
            value={freeAnswer}
            onChange={(e) => setFreeAnswer(e.target.value)}
            maxLength={60}
          />
          <button className="little-btn-blue"
            onClick={handleFreeSubmit}
            disabled={freeAnswer.trim().length === 0}
          >
            Voir mon profil →
          </button>
        </div>
      )}
    </div>
    </div>
    <Footer />
    </ section>
  );
}

// ─── Descriptions des profils ──────────────────────────────────────────────────
// À compléter avec tes vrais textes !

/** @type {Record<ProfileKey, string>} */
const profileDescriptions = {
  "🎤 Authentique Bridé·e":
    "Tu as une vraie voix, une vraie énergie — mais quelque chose te retient de l'assumer pleinement.",
  "🔧 Technicien·ne":
    "Tu maîtrises ton métier sur le bout des doigts, mais la com' reste un outil que tu utilises à contrecœur.",
  "💡 Visionnaire":
    "Tu vois grand, tu as des idées — mais elles restent floues pour ton audience.",
  "🌪 Caméléon":
    "Tu t'adaptes à tout… parfois au point de ne plus savoir qui tu es vraiment dans ta com'.",
  "🌱 Stratège Tétanisé":
    "Tu sais que tu pourrais tout déchirer — mais l'absence de plan clair te paralyse.",
  "🤹 Multicasquette":
    "Tu fais mille choses brillamment, mais ton audience ne sait plus où te suivre.",
};