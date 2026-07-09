import React from 'react';
import { Heart } from 'lucide-react';
import '../styles/Sections.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container footer__container--single">
        <p className="footer__copyright">
          All rights reserved by Taqui Alam &nbsp;·&nbsp; Made with <Heart size={14} className="footer__heart" /> &nbsp;·&nbsp; © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
