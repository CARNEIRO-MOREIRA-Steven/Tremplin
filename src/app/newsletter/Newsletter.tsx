"use client";

import { useEffect, useState } from "react";
import "./newsletter.css";

const MAILERLITE_SCRIPT =
  "https://groot.mailerlite.com/js/w/webforms.min.js?v83147fa8ce2d95cb73ece7f28b469519";

const MAILERLITE_TRACKING =
  "https://assets.mailerlite.com/jsonp/380716/forms/187256253161932155/takel";

export default function NewsletterCapture() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // --------------------------------------------------
    // Chargement du script MailerLite
    // --------------------------------------------------
    if (!document.querySelector(`script[src="${MAILERLITE_SCRIPT}"]`)) {
      const script = document.createElement("script");

      script.src = MAILERLITE_SCRIPT;
      script.async = true;

      document.body.appendChild(script);
    }

    // --------------------------------------------------
    // Tracking MailerLite
    // --------------------------------------------------
    fetch(MAILERLITE_TRACKING, {
      method: "GET",
      mode: "no-cors",
      keepalive: true,
    }).catch(() => {
      // Le tracking ne doit jamais bloquer le formulaire
    });
  }, []);

  const handleSubmit = () => {
    // On conserve le comportement actuel :
    // affichage du message de succès après 1 seconde.
    window.setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div
      id="mlb2-41185845"
      className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-41185845"
    >
      <div className="ml-form-align-center">
        <div className="ml-form-embedWrapper embedForm">

          {submitted ? (
            <div className="ml-form-successBody row-success">
              <div className="ml-form-successContent">
                <h4>Bravo !</h4>

                <p>
                  RDV dans ta boîte mail pour{" "}
                  <strong>confirmer ton mail</strong> et recevoir les
                  prochains numéros de Tremplin Hebdo.
                </p>
              </div>
            </div>
          ) : (
            <div className="ml-form-embedBody ml-form-embedBodyDefault row-form">

              <div className="ml-form-embedContent">
                <h4>Rejoins La Newsletter !</h4>
              </div>

              <form
                className="ml-block-form"
                action="https://assets.mailerlite.com/jsonp/380716/forms/187256253161932155/subscribe"
                data-code=""
                method="post"
                target="_blank"
                onSubmit={handleSubmit}
              >
                <div className="ml-form-formContent">

                  {/* Prénom */}
                  <div className="ml-form-fieldRow">
                    <div className="ml-field-group ml-field-name">
                      <input
                        aria-label="name"
                        type="text"
                        className="form-control"
                        name="fields[name]"
                        placeholder="Ton Prénom"
                        autoComplete="given-name"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="ml-form-fieldRow ml-last-item">
                    <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                      <input
                        aria-label="email"
                        aria-required="true"
                        type="email"
                        required
                        className="form-control"
                        name="fields[email]"
                        placeholder="Ton Email"
                        autoComplete="email"
                      />
                    </div>
                  </div>

                </div>

                {/* Consentement */}
                <div className="ml-form-checkboxRow ml-validate-required">
                  <label className="checkbox">
                    <input type="checkbox" required />

                    <div className="label-description">
                      <p>
                        J'accepte de recevoir des mails ultra fun de la part
                        de Tremplin
                      </p>
                    </div>
                  </label>
                </div>

                {/* Champs MailerLite */}
                <input
                  type="hidden"
                  name="ml-submit"
                  value="1"
                />

                <input
                  type="hidden"
                  name="anticsrf"
                  value="true"
                />

                {/* Bouton */}
                <div className="ml-form-embedSubmit">
                  <button
                    type="submit"
                    className="primary"
                  >
                    En avant !
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
              </form>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
