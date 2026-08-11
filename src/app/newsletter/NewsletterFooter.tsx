"use client";
import { useEffect } from "react";
import "./newsletter-footer.css";
const MAILERLITE_SCRIPT =
  "https://groot.mailerlite.com/js/w/webforms.min.js?v83147fa8ce2d95cb73ece7f28b469519";
const MAILERLITE_TRACKING =
  "https://assets.mailerlite.com/jsonp/380716/forms/187253947722892706/takel";
export default function NewsletterFooter() {
  useEffect(() => {
    /*
     * ---------------------------------------------------------
     * 1. Chargement du script MailerLite
     * ---------------------------------------------------------
     */
    const existingScript = document.querySelector(
      `script[src="${MAILERLITE_SCRIPT}"]`
    );
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = MAILERLITE_SCRIPT;
      script.async = true;
      document.body.appendChild(script);
    }
    /*
     * ---------------------------------------------------------
     * 2. Tracking MailerLite
     * ---------------------------------------------------------
     */
    const trackingKey = "mailerlite-tracking-41184158";
    if (!sessionStorage.getItem(trackingKey)) {
      fetch(MAILERLITE_TRACKING, {
        method: "GET",
        mode: "no-cors",
        credentials: "omit",
      })
        .then(() => {
          sessionStorage.setItem(trackingKey, "true");
        })
        .catch(() => {
          // Le tracking ne doit jamais bloquer le formulaire.
        });
    }
  }, []);
  return (
    <div
      id="mlb2-41184158"
      className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-41184158"
    >
      <div className="ml-form-align-center">
        <div className="ml-form-embedWrapper embedForm">
          {/* FORMULAIRE */}
          <div className="ml-form-embedBody ml-form-embedBodyDefault row-form">
            <div className="ml-form-embedContent">
              <h4>Rejoins TREMPLIN HEBDO !</h4>
              <p>
                <br />
              </p>
              <p>
                <span style={{ fontSize: "16px" }}>
                  Le journal qui ne remplit pas ta boîte mail et qui fait
                  avancer ton business !
                </span>
              </p>
              <p>
                <br />
              </p>
            </div>
            <form
              className="ml-block-form"
              action="https://assets.mailerlite.com/jsonp/380716/forms/187253947722892706/subscribe"
              data-code=""
              method="post"
            >
              <div className="ml-form-formContent">
                {/* PRÉNOM */}
                <div className="ml-form-fieldRow">
                  <div className="ml-field-group ml-field-name">
                    <input
                      aria-label="name"
                      type="text"
                      className="form-control"
                      name="fields[name]"
                      placeholder="Prénom"
                      autoComplete="given-name"
                    />
                  </div>
                </div>
                {/* EMAIL */}
                <div className="ml-form-fieldRow ml-last-item">
                  <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                    <input
                      aria-label="email"
                      aria-required="true"
                      type="email"
                      className="form-control"
                      name="fields[email]"
                      placeholder="Email"
                      autoComplete="email"
                      required
                    />
                  </div>
                </div>
              </div>
              {/* CONSENTEMENT */}
              <div className="ml-form-checkboxRow ml-validate-required">
                <label className="checkbox">
                  <input
                    type="checkbox"
                    name="consent"
                    value="newsletter"
                    required
                  />
                  <div className="label-description">
                    <p>
                      J'accepte de recevoir des mails ultra fun de la part de Tremplin pour me partager du contenu et me parler de ses offres, ainsi que l’utilisation de pixels de suivi permettant de mesurer l’ouverture des mails, d'en personnaliser le contenu et  la fréquence.</p>
                  
                  </div>
                </label>
              </div>
              {/* MAILERLITE SUBMIT */}
              <input
                type="hidden"
                name="ml-submit"
                value="1"
              />
              <div className="ml-form-embedSubmit">
                <button
                  type="submit"
                  className="primary"
                >
                  Je veux rejoindre la Newsletter&nbsp;&nbsp;➡
                </button>
                <button
                  disabled
                  style={{ display: "none" }}
                  type="button"
                  className="loading"
                >
                  <div className="ml-form-embedSubmitLoad" />
                  <span className="sr-only">
                    Loading...
                  </span>
                </button>
              </div>
              <input
                type="hidden"
                name="anticsrf"
                value="true"
              />
            </form>
          </div>
          {/* SUCCÈS MAILERLITE */}
          <div
            className="ml-form-successBody row-success"
            style={{ display: "none" }}
          >
            <div className="ml-form-successContent">
              <h4>Bravo !</h4>
              <p>
                👉 RDV dans ta boîte mail pour{" "}
                <strong>confirmer ton mail</strong> et recevoir les
                prochains numéros de Tremplin Hebdo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}