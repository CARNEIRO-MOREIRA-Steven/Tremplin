"use client";

import { useState } from "react";
import "../globals.css";
import "./page.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import LogoLocalisation from "../../../public/icons/location-dot-solid-full.svg";
import LogoInstagram from "../../../public/icons/instagram-brands-solid-full.svg";
import LogoLinkedin from "../../../public/icons/linkedin-brands-solid-full.svg";
import LogoFacebook from "../../../public/icons/facebook-f-brands-solid-full.svg";
import LogoPhone from "../../../public/icons/phone-solid-full.svg";
import LogoMail from "../../../public/icons/envelope-solid-full.svg";
import LogoWhatsapp from "../../../public/icons/square-whatsapp-brands-solid-full.svg";
import Arrow from "../../../public/icons/arrow-courbe.png";

const page = () => {
  const [form, setForm] = useState({
    company: "",
    name: "",
    activity: "",
    need: "",
    offer: "audit",
    phone: "",
    email: "",
    contactPrefs: [] as string[],
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  function togglePref(value: string) {
    setForm((f) => ({
      ...f,
      contactPrefs: f.contactPrefs.includes(value)
        ? f.contactPrefs.filter((p) => p !== value)
        : [...f.contactPrefs, value],
    }));
  }

  async function handleSubmit(e: React.MouseEvent) {
    e.preventDefault();
    if (!form.company || !form.name || !form.email) {
      setError("Merci de remplir au moins : boîte, nom et email.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setSuccess(true);
    } catch {
      setError("Erreur lors de l'envoi. Réessaie dans quelques instants.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Header />
        <section className='form-container'>
          <h1>Reste focus ! tu touches ton but :</h1>

          {success ? (
            <p style={{ color: "#00FF88", marginTop: "20px" }}>
              ✅ Ta demande a bien été envoyée ! On revient vers toi très vite.
            </p>
          ) : (
            <form action="">
              <div className='group-form'>
                <div>
                  <label htmlFor="entreprise">Nom de ta boîte</label>
                  <input type="text" value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })} />
                </div>
                <div>
                  <label htmlFor="name">Ton nom et prénom</label>
                  <input type="text" value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })} />
                </div>
              </div>
              <div>
                <label htmlFor="activity">Activité</label>
                <input type="text" value={form.activity}
                  onChange={(e) => setForm({ ...form, activity: e.target.value })} />
              </div>
              <div>
                <label htmlFor="besoin">Tes besoins ou blocage actuel</label>
                <input className='besoin' type="text" value={form.need}
                  onChange={(e) => setForm({ ...form, need: e.target.value })} />
              </div>
              <div>
                <label htmlFor="offre">Offre souhaitée</label>
                <select name="offre" id="select-offre" value={form.offer}
                  onChange={(e) => setForm({ ...form, offer: e.target.value })}>
                  <option value="audit">Audit Express</option>
                  <option value="realignement">Réalignement</option>
                  <option value="branding">Rebranding</option>
                  <option value="sur-mesure">Prestation sur mesure</option>
                </select>
              </div>
              <div className='group-form'>
                <div>
                  <label htmlFor="phone">Téléphone</label>
                  <input type="text" value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                </div>
                <div>
                  <label htmlFor="mail">Mail</label>
                  <input type="text" value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </div>
              </div>
              <div>
                <label>Tu préfères être contacté :</label>
                <div className='group-form checkbox'>
                  <div>
                    <input type="checkbox" id="contactChoice1" name="contact" value="SMS"
                      checked={form.contactPrefs.includes("SMS")}
                      onChange={() => togglePref("SMS")} />
                    <label htmlFor="contactChoice1">Par SMS</label>
                  </div>
                  <div>
                    <input type="checkbox" id="contactChoice2" name="contact" value="Téléphone"
                      checked={form.contactPrefs.includes("Téléphone")}
                      onChange={() => togglePref("Téléphone")} />
                    <label htmlFor="contactChoice2">Par téléphone</label>
                  </div>
                  <div>
                    <input type="checkbox" id="contactChoice3" name="contact" value="WhatsApp"
                      checked={form.contactPrefs.includes("WhatsApp")}
                      onChange={() => togglePref("WhatsApp")} />
                    <label htmlFor="contactChoice3">Par WhatsApp</label>
                  </div>
                  <div>
                    <input type="checkbox" id="contactChoice4" name="contact" value="Email"
                      checked={form.contactPrefs.includes("Email")}
                      onChange={() => togglePref("Email")} />
                    <label htmlFor="contactChoice4">Par e-mail</label>
                  </div>
                </div>
              </div>

              {error && <p style={{ color: "#FF2D78", fontSize: "13px" }}>{error}</p>}

              <button className='little-btn-black' onClick={handleSubmit} disabled={loading}>
                {loading ? "Envoi en cours…" : "J'envoie ma demande"}
              </button>
            </form>
          )}
        </section>

        <aside className='aside-contact'>
          <p>Rempli le formulaire ou utilise un de nos moyens de communication ici</p>
          <img className='arrow-contact' src={Arrow.src} alt="" />
          <div className='contact-reseau'>
            <a target='blanck' href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x6b30328a877e9bff:0xe01d7ce34c83b88b?sa=X&ved=1t:8290&ictx=111"><img src={LogoLocalisation.src} alt="Icon de localisation de Tremplin" /></a>
            <a target='blanck' href="tel:0676200099"><img src={LogoPhone.src} alt="Icon de téléphone de l'agence Tremplin" /></a>
            <a target='blanck' href="mailto:email@tremplin-entreprendre.fr"><img src={LogoMail.src} alt="Icon mail de l'agence Tremplin" /></a>
            <a target='blanck' href="https://api.whatsapp.com/send/?phone=33676200099&text&type=phone_number&app_absent=0"><img src={LogoWhatsapp.src} alt="Icon Whatsapp de l'agence Tremplin" /></a>
            <a target='blanck' href="https://www.instagram.com/tremplin.entreprendre?fbclid=IwY2xjawQs4tJleHRuA2FlbQIxMABicmlkETJiZ0QzY1QzYUlobkVwSzB3c3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHv2vnZDULHmC2AuyaiU8Iex0nnUshg7ip2_KBUpr5XFIflVtkwhLkAip1THL_aem_jmq43JAJgArxaJm1pP6emg"><img src={LogoInstagram.src} alt="Icon Instagram de l'agence Tremplin" /></a>
            <a target='blanck' href="https://www.linkedin.com/in/marion-tshibangu-%F0%9F%A6%84-89aa1324b/"><img src={LogoLinkedin.src} alt="Icon Linkedin de l'agence Tremplin" /></a>
            <a target='blanck' href="https://www.facebook.com/p/Tremplinentreprendre-100090948333418/"><img src={LogoFacebook.src} alt="Icon Facebook de l'agence Tremplin" /></a>
          </div>
        </aside>
      {/* <Footer /> */}
    </>
  );
};

export default page;