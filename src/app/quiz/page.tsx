"use client";

import { useState } from "react";
import "./page.css";
import { questions, computeResult } from "../data/quiz";
import type { ProfileKey } from "../data/quiz";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

// ─── Types ─────────────────────────────────────────────────────────────────────
type ModalType = "pdf" | "contact" | null;

interface ContactForm {
  name: string;
  email: string;
  consentEmail: boolean;
  consentShare: boolean;
}

// ─── Descriptions des profils ──────────────────────────────────────────────────
const profileDescriptions: Record<ProfileKey, string> = {
  "🎤 Authentique Bridé·e":
    "Tu as une vraie voix, une vraie énergie — mais quelque chose te retient de l'assumer pleinement. Ton authenticité est ton plus grand atout : il s'agit maintenant de la libérer sans filtre.",
  "🔧 Technicien·ne":
    "Tu maîtrises ton métier sur le bout des doigts, mais la com' reste un outil que tu utilises à contrecœur. La clé : rendre ta expertise aussi visible que ta qualité de travail.",
  "💡 Visionnaire":
    "Tu vois grand, tu as des idées — mais elles restent floues pour ton audience. Structurer ta vision en messages clairs est ce qui transformera ton potentiel en impact réel.",
  "🌪 Caméléon":
    "Tu t'adaptes à tout… parfois au point de ne plus savoir qui tu es vraiment dans ta com'. Trouver ton fil rouge te permettra de créer une cohérence qui fidélise.",
  "🌱 Stratège Tétanisé":
    "Tu sais que tu pourrais tout déchirer — mais l'absence de plan clair te paralyse. Un cadre simple et actionnable est tout ce dont tu as besoin pour passer à l'action.",
  "🤹 Multicasquette":
    "Tu fais mille choses brillamment, mais ton audience ne sait plus où te suivre. Clarifier ta proposition de valeur unique est la clé pour tout aligner.",
};

const profileColors: Record<ProfileKey, string> = {
  "🎤 Authentique Bridé·e": "#FF2D78",
  "🔧 Technicien·ne": "#FF6B35",
  "💡 Visionnaire": "#FFD700",
  "🌪 Caméléon": "#00D4FF",
  "🌱 Stratège Tétanisé": "#00FF88",
  "🤹 Multicasquette": "#7B2FBE",
};

const ALL_PROFILES: ProfileKey[] = [
  "🎤 Authentique Bridé·e",
  "🔧 Technicien·ne",
  "💡 Visionnaire",
  "🌪 Caméléon",
  "🌱 Stratège Tétanisé",
  "🤹 Multicasquette",
];

// ─── Composant principal ───────────────────────────────────────────────────────
export default function Quiz() {
  // ── Quiz state ─────────────────────────────────────────────────────────────
  const [currentIndex, setCurrentIndex] = useState(0);
  const [freeAnswer, setFreeAnswer] = useState("");
  const [result, setResult] = useState<ProfileKey | null>(null);
  const [collectedProfiles, setCollectedProfiles] = useState<ProfileKey[]>([]);

  // ── UI state ───────────────────────────────────────────────────────────────
  const [modal, setModal] = useState<ModalType>(null);
  const [pdfLoading, setPdfLoading] = useState(false);
  const [pdfError, setPdfError] = useState("");
  const [sendLoading, setSendLoading] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);
  const [sendError, setSendError] = useState("");

  // ── PDF form state ─────────────────────────────────────────────────────────
  const [pdfForm, setPdfForm] = useState<ContactForm>({
    name: "",
    email: "",
    consentEmail: false,
    consentShare: false,
  });

  // ── Contact form state ─────────────────────────────────────────────────────
  const [contactForm, setContactForm] = useState<ContactForm>({
    name: "",
    email: "",
    consentEmail: false,
    consentShare: false,
  });

  // ── Calcul des scores ──────────────────────────────────────────────────────
  const computedScores = (): Record<ProfileKey, number> => {
    const scores: Record<ProfileKey, number> = {
      "🎤 Authentique Bridé·e": 0,
      "🔧 Technicien·ne": 0,
      "💡 Visionnaire": 0,
      "🌪 Caméléon": 0,
      "🌱 Stratège Tétanisé": 0,
      "🤹 Multicasquette": 0,
    };
    for (const p of collectedProfiles) scores[p]++;
    return scores;
  };

  // ── Quiz handlers ──────────────────────────────────────────────────────────
  const currentQuestion = questions[currentIndex];
  const isLast = currentIndex === questions.length - 1;
  const progress = (currentIndex / questions.length) * 100;

  function handleAnswer(profiles: ProfileKey[]) {
    const updated = [...collectedProfiles, ...profiles];
    if (isLast) {
      setResult(computeResult(updated));
      return;
    }
    setCollectedProfiles(updated);
    setCurrentIndex((i) => i + 1);
  }

  function handleFreeSubmit() {
    setResult(computeResult(collectedProfiles));
  }

  function restartQuiz() {
    setCurrentIndex(0);
    setCollectedProfiles([]);
    setFreeAnswer("");
    setResult(null);
    setModal(null);
    setSendSuccess(false);
    setSendError("");
    setPdfError("");
  }

  // ── PDF download ───────────────────────────────────────────────────────────
  async function handleDownloadPdf() {
    if (!result) return;
    setPdfLoading(true);
    setPdfError("");

    try {
      const res = await fetch("/api/generate-pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          result,
          scores: computedScores(),
          freeAnswer,
          userName: pdfForm.name,
          // Envoi vers Tremplin si consentShare coché
          ...(pdfForm.consentShare && { shareWithTremplin: true }),
        }),
      });

      if (!res.ok) throw new Error("Erreur génération PDF");

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "profil-communication-tremplin.pdf";
      a.click();
      URL.revokeObjectURL(url);

      // Si partage consenti, on envoie aussi les données
      if (pdfForm.consentShare && pdfForm.email && pdfForm.name) {
        await fetch("/api/send-results", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: pdfForm.name,
            email: pdfForm.email,
            result,
            scores: computedScores(),
            freeAnswer,
            consentEmail: false,
            consentShare: true,
          }),
        });
      }

      setModal(null);
    } catch {
      setPdfError("Impossible de générer le PDF. Réessaie dans quelques instants.");
    } finally {
      setPdfLoading(false);
    }
  }

  // ── Send results ───────────────────────────────────────────────────────────
  async function handleSendResults() {
    if (!result) return;
    setSendLoading(true);
    setSendError("");

    try {
      const res = await fetch("/api/send-results", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: contactForm.name,
          email: contactForm.email,
          result,
          scores: computedScores(),
          freeAnswer,
          consentEmail: contactForm.consentEmail,
          consentShare: contactForm.consentShare,
        }),
      });

      if (!res.ok) throw new Error();
      setSendSuccess(true);
    } catch {
      setSendError("Erreur lors de l'envoi. Réessaie dans quelques instants.");
    } finally {
      setSendLoading(false);
    }
  }

  // ── Écran résultat ─────────────────────────────────────────────────────────
  if (result) {
    const scores = computedScores();
    const color = profileColors[result];
    const maxScore = Math.max(...Object.values(scores), 1);

    return (
      <section>
        <Header />
        <div className="result-screen">

          {/* Profil dominant */}
          <div className="result-card" style={{ borderColor: color }}>
            <p className="result-label" style={{ color }}>✦ PROFIL DOMINANT ✦</p>
            <h2 style={{ borderColor: color && color}} className="profile-label">{result}</h2>
          </div>

          {/* Scores */}
          <div className="scores-section">
            <p className="scores-title">Répartition de tes résultats</p>
            {ALL_PROFILES.sort((a, b) => scores[b] - scores[a]).map((p) => {
              const pct = (scores[p] / 10) * 100;
              const isWinner = p === result;
              return (
                <div key={p} className={`score-row ${isWinner ? "score-row--active" : ""}`}>
                  <span className="score-label" style={{ color: isWinner ? profileColors[p] : undefined }}>
                    {p}
                  </span>
                  <div className="score-bar-track">
                    <div
                      className="score-bar-fill"
                      style={{ width: `${pct}%`, background: profileColors[p] }}
                    />
                  </div>
                  <span className="score-value" style={{ color: profileColors[p] }}>
                    {scores[p]}/10
                  </span>
                </div>
              );
            })}
          </div>

          {/* 3 boutons d'action */}
          <div className="result-actions">

            {/* PDF */}
            <button className="action-btn action-btn--pink" onClick={() => setModal("pdf")}>
              <span className="action-btn__icon">📄</span>
              Télécharger mon PDF
            </button>

            {/* Calendly */}
            <a
              href="https://calendly.com/PLACEHOLDER"
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn action-btn--blue"
            >
              <span className="action-btn__icon">📞</span>
              Je prends mon call découverte
            </a>

            {/* Formulaire contact */}
            <button className="action-btn action-btn--purple" onClick={() => setModal("contact")}>
              <span className="action-btn__icon">✉️</span>
              Recevoir mes résultats par mail
            </button>

          </div>

          <button className="little-btn-pink restart-btn" onClick={restartQuiz}>
            Recommencer
          </button>
        </div>

        {/* ── Modal PDF ──────────────────────────────────────────────────────── */}
        {modal === "pdf" && (
          <div className="modal-overlay" onClick={() => setModal(null)}>
            <div className="modal-box" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setModal(null)}>✕</button>
              <h3 className="modal-title">Télécharger ton profil PDF</h3>
              <p className="modal-desc">
                Ton PDF est généré localement. Tu peux aussi choisir de le partager avec Tremplin.
              </p>

              <label className="form-label">Prénom (optionnel)
                <input
                  className="form-input"
                  type="text"
                  placeholder="Marie"
                  value={pdfForm.name}
                  maxLength={50}
                  onChange={(e) => setPdfForm({ ...pdfForm, name: e.target.value })}
                />
              </label>

              {/* Consent partage */}
              <label className="consent-row">
                <input
                  type="checkbox"
                  checked={pdfForm.consentShare}
                  onChange={(e) => setPdfForm({ ...pdfForm, consentShare: e.target.checked })}
                />
                <span>
                  J&apos;accepte de partager mes résultats avec Tremplin afin d&apos;être recontacté·e.
                  <br />
                  <small className="rgpd-note">Données utilisées uniquement dans le cadre du suivi Tremplin, non revendues.</small>
                </span>
              </label>

              {pdfForm.consentShare && (
                <label className="form-label">Email (pour être recontacté·e)
                  <input
                    className="form-input"
                    type="email"
                    placeholder="marie@exemple.fr"
                    value={pdfForm.email}
                    onChange={(e) => setPdfForm({ ...pdfForm, email: e.target.value })}
                  />
                </label>
              )}

              <p className="rgpd-footer">
                🔒 Conformément au RGPD, tes données ne sont collectées qu&apos;avec ton consentement explicite.
                Tu peux te désinscrire à tout moment via contact@tremplin.fr.
              </p>

              {pdfError && <p className="form-error">{pdfError}</p>}

              <button
                className="little-btn-pink modal-submit"
                onClick={handleDownloadPdf}
                disabled={pdfLoading || (pdfForm.consentShare && !pdfForm.email)}
              >
                {pdfLoading ? "Génération en cours…" : "Télécharger mon PDF →"}
              </button>
            </div>
          </div>
        )}

        {/* ── Modal Contact ──────────────────────────────────────────────────── */}
        {modal === "contact" && (
          <div className="modal-overlay" onClick={() => setModal(null)}>
            <div className="modal-box" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setModal(null)}>✕</button>

              {sendSuccess ? (
                <div className="send-success">
                  <p className="send-success__icon">✅</p>
                  <h3 className="modal-title">C&apos;est envoyé !</h3>
                  <p className="modal-desc">
                    Tes résultats sont dans ta boîte mail.
                    {contactForm.consentShare && " Tremplin a également reçu une copie."}
                  </p>
                  <button className="little-btn-pink" onClick={() => setModal(null)}>Fermer</button>
                </div>
              ) : (
                <>
                  <h3 className="modal-title">Recevoir tes résultats par mail</h3>
                  <p className="modal-desc">
                    Reçois ton profil directement dans ta boîte mail. Tu choisis ce que tu partages.
                  </p>

                  <label className="form-label">Prénom *
                    <input
                      className="form-input"
                      type="text"
                      placeholder="Marie"
                      value={contactForm.name}
                      maxLength={50}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    />
                  </label>

                  <label className="form-label">Email *
                    <input
                      className="form-input"
                      type="email"
                      placeholder="marie@exemple.fr"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    />
                  </label>

                  {/* Consent email obligatoire */}
                  <label className="consent-row consent-row--required">
                    <input
                      type="checkbox"
                      checked={contactForm.consentEmail}
                      onChange={(e) => setContactForm({ ...contactForm, consentEmail: e.target.checked })}
                    />
                    <span>
                      J&apos;accepte de recevoir mes résultats par email. *
                      <br />
                      <small className="rgpd-note">Email utilisé uniquement pour l&apos;envoi de ce résultat.</small>
                    </span>
                  </label>

                  {/* Consent partage optionnel */}
                  <label className="consent-row">
                    <input
                      type="checkbox"
                      checked={contactForm.consentShare}
                      onChange={(e) => setContactForm({ ...contactForm, consentShare: e.target.checked })}
                    />
                    <span>
                      J&apos;accepte de partager mes résultats avec Tremplin pour être recontacté·e. (optionnel)
                      <br />
                      <small className="rgpd-note">Données conservées 12 mois, non revendues, supprimables sur demande.</small>
                    </span>
                  </label>

                  <p className="rgpd-footer">
                    🔒 Conformément au RGPD, tes données sont protégées. Aucun spam, désinscription à tout moment via contact@tremplin.fr.
                    Consulte notre <a href="/politique-confidentialite" className="rgpd-link">politique de confidentialité</a>.
                  </p>

                  {sendError && <p className="form-error">{sendError}</p>}

                  <button
                    className="little-btn-pink modal-submit"
                    onClick={handleSendResults}
                    disabled={
                      sendLoading ||
                      !contactForm.name.trim() ||
                      !contactForm.email.trim() ||
                      !contactForm.consentEmail
                    }
                  >
                    {sendLoading ? "Envoi en cours…" : "Envoyer mes résultats →"}
                  </button>
                </>
              )}
            </div>
          </div>
        )}

        <Footer />
      </section>
    );
  }

  // ── Quiz ─────────────────────────────────────────────────────────────────────
  return (
    <section className="quiz-page">
      <Header />
      <div className="quiz-wrapper">
        <div className="quiz-container">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
          <p className="question-counter">
            {currentIndex + 1} / {questions.length}
          </p>

          <h2 className="question-text neon-title">{currentQuestion.question}</h2>

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
              <button
                className="little-btn-blue"
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
    </section>
  );
}
