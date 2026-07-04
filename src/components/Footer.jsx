import React from 'react';
import { Heart } from 'lucide-react';
import '../styles/Sections.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">
          Made with <Heart size={16} className="footer__heart" /> using React
        </p>
        <p className="footer__copyright">
          © 2026 Mohammad Taqui. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
