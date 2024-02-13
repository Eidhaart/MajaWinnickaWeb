import React from "react";
import "./Footer.css"; // Ensure this path is correct
import { FaInstagram, FaFacebookF, FaEtsy } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>© 2024 Maja Winnicka. All rights reserved.</p>
        <div className="footer-social-links">
          <a
            href="https://www.instagram.com/winnickamaja/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/Majawinnick"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://inmyforestshop.etsy.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Etsy Shop"
          >
            <FaEtsy />
          </a>
        </div>
        {/* Designed by Eidhaart Text */}
        <div className="footer-design-credit">Designed by Eidhaart</div>
      </div>
    </footer>
  );
}

export default Footer;
