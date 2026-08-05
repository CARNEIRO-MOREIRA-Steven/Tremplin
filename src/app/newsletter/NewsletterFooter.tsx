"use client";

import { FormEvent, useEffect, useState } from "react";
import "./newsletter-footer.css";

const MAILERLITE_SCRIPT =
  "https://groot.mailerlite.com/js/w/webforms.min.js?v83147fa8ce2d95cb73ece7f28b469519";

export default function NewsletterFooter() {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const existing = document.querySelector(
      'script[src="' + MAILERLITE_SCRIPT + '"]'
    );

    if (existing) return;

    const script = document.createElement("script");
    script.src = MAILERLITE_SCRIPT;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // On navigation, leave the shared MailerLite script in place.
    };
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    // MailerLite's webforms script handles the actual submission.
    // This callback only provides a fallback success state after native submit
    // is intercepted by MailerLite.
    const form = event.currentTarget;
    if (!form.checkValidity()) return;

    window.setTimeout(() => {
      const successBody = form.parentElement?.parentElement?.querySelector(
        ".row-success"
      );
      if (!successBody) setSuccess(true);
    }, 1200);
  };

  if (success) {
    return (
      <div id="mlb2-41184158" className="ml-form-embedContainer ml-subscribe-form-41184158">
        <div className="ml-form-align-center">
          <div className="ml-form-embedWrapper embedForm">
            <div className="ml-form-successBody row-success">
              <div className="ml-form-successContent">
                <h4>Bravo !</h4>
                <p>
                  👉 RDV dans ta boîte mail pour <strong>confirmer ton mail</strong> et recevoir
                  les prochains numéros de Tremplin Hebdo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="mlb2-41184158" className="ml-form-embedContainer ml-subscribe-form-41184158">
      <div className="ml-form-align-center">
        <div className="ml-form-embedWrapper embedForm">
          <div className="ml-form-embedBody ml-form-embedBodyDefault row-form">
            <div className="ml-form-embedContent">
              <h4 className="newsletter-footer-texte">Rejoins TREMPLIN HEBDO !</h4>
              <p>&nbsp;</p>
              <p>
                <span className="newsletter-footer-texte" style={{ fontSize: "16px" }}>
                  Le journal qui ne remplit pas ta boîte mail et qui fait avancer ton business !
                </span>
              </p>
              <p>&nbsp;</p>
            </div>

            <form
              className="ml-block-form"
              action="https://assets.mailerlite.com/jsonp/380716/forms/187253947722892706/subscribe"
              data-code=""
              method="post"
              target="_blank"
              onSubmit={handleSubmit}
            >
              <div className="ml-form-formContent">
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

                <div className="ml-form-fieldRow ml-last-item">
                  <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                    <input
                      aria-label="email"
                      aria-required="true"
                      type="email"
                      required
                      className="form-control"
                      name="fields[email]"
                      placeholder="Email"
                      autoComplete="email"
                    />
                  </div>
                </div>
              </div>

              <div className="ml-form-checkboxRow ml-validate-required">
                <label className="checkbox">
                  <input type="checkbox" required />
                  <div className="label-description">
                    <p className="newsletter-footer-texte">J'accepte de recevoir des mails incroyables de la part de Tremplin</p>
                  </div>
                </label>
              </div>

              <input type="hidden" name="ml-submit" value="1" />
              <input type="hidden" name="anticsrf" value="true" />

              <div className="ml-form-embedSubmit">
                <button type="submit" className="primary">
                  Je veux rejoindre la Newsletter&nbsp;&nbsp;➡
                </button>
                <button
                  disabled
                  style={{ display: "none" }}
                  type="button"
                  className="loading"
                >
                  <div className="ml-form-embedSubmitLoad" />
                  <span className="sr-only">Loading...</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}