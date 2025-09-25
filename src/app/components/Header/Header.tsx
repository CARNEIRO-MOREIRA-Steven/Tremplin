"use client"
import React, { useState } from "react";
import "./header.css";
import LogoBlack from "../../../../public/logo-black.png";
import LogoColor from "../../../../public/logo-color.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="header">
      {/* Logo qui change selon l'état du menu */}
      <img
        src={menuOpen ? LogoColor.src : LogoBlack.src}
        alt="Logo"
        className="logo"
        onClick={toggleMenu} // click pour ouvrir/fermer le menu
      />

      {/* Menu simple */}
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><a href="#home">Accueil</a></li>
          <li><a href="#offre">Offres</a></li>
          <li><a href="#about">Présentation de nous</a></li>
          <li><a href="#processus">Processus</a></li>
          <li><a href="#home">Contact</a></li>
          <li><a href="#about">Blog</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
