import React from 'react';
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation();

  // Vérifiez si l'utilisateur est sur la page "À Propos"
  const isAboutPage = location.pathname === '/about';

  return (
    <nav className="nav-header">
      <Link
        to="/"
        className={`nav-header_link-home ${isAboutPage ? 'nav-link-black' : ''}`}
      >
        Accueil
      </Link>
      <Link
        to="/about"
        className={`nav-header_link-about ${isAboutPage ? 'nav-link-black' : ''}`}
      >
        A Propos
      </Link>
    </nav>
  );
}
