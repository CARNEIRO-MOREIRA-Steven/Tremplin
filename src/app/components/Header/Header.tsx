/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState } from "react";
import "./header.css";
import LogoBlack from "../../../../public/logo-black.png";
import LogoColor from "../../../../public/logo-color.png";

import LogoAlume from "../../../../public/logo-eteint.png"
import LogoEteint from "../../../../public/logo-alumé.png"


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="header">
      {/* Logo qui change selon l'état du menu */}
      <img
        src={menuOpen ? LogoAlume.src : LogoEteint.src}
        alt="Logo"
        className="logo"
        onClick={toggleMenu} // click pour ouvrir/fermer le menu
      />

      {/* Menu simple */}
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><a href="./">Accueil</a></li>
          <li><a href="/agence">Notre Agence</a></li>
          <li><a href="/audit">Faire un audit de ma com&apos;</a></li>
          <li><a href="/accompagnement">Me faire accompagner</a></li>
          <li><a href="/com">Refondre ma com&apos;</a></li>
          <li><a href="/branding">Me creer une image de marque</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/faq">J&apos;ai des questions</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
