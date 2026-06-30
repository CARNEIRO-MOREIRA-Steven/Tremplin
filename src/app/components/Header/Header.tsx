/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState } from "react";
import "./header.css";
import LogoBlack from "../../../../public/logo-black.png";
import LogoColor from "../../../../public/logo-color.png";

import LogoAlume from "../../../../public/logoallume.png"
import LogoEteint from "../../../../public/logoeteint.png"


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
          <li><a href="/audit">Audit de com&apos;</a></li>
          <li className="dropdown">
            <a href="/accompagnement" className="dropdown-link">
              Nos accompagnements
              <span className="arrow">▼</span>
            </a>

            <ul className="submenu">
              <li>
                <a href="/com">
                  Réalignement de com&apos;
                </a>
              </li>

              <li>
                <a href="/branding">
                  Rebranding
                </a>
              </li>
            </ul>
          </li>
          {/* <li><a href="/com">Refondre ma com&apos;</a></li>
          <li><a href="/branding">Me creer une image de marque</a></li> */}
          <li><a href="/blog">Blog</a></li>
          <li><a href="/contact">Contact</a></li>
          {/* <li><a href="/faq">J&apos;ai des questions</a></li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
