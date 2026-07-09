import React from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import '../styles/Sections.css';

const Contact = () => {
  return (
    <section id="contact" className="section section--contact">
      <div className="section__container">
        <div className="section__header scroll-reveal">
          <h2 className="section__title">Get in Touch</h2>
          <div className="section__divider" />
          <p className="section__subtitle">
            Looking for a Java Full Stack Developer, Backend Developer, or AI/ML Engineer? Let's connect and build something amazing together.
          </p>
        </div>

        <div className="contact__content scroll-reveal sr-delay-1">
          <div className="contact__info">
            {/* Clickable Email Button Card */}
            <a href="mailto:alamtaqui@gmail.com" className="contact__button-card contact__button-card--blue">
              <Mail size={22} className="contact__card-icon" />
              <span className="contact__card-text">alamtaqui@gmail.com</span>
            </a>

            {/* Clickable Phone Button Card */}
            <a href="tel:+916306597320" className="contact__button-card contact__button-card--purple">
              <Phone size={22} className="contact__card-icon" />
              <span className="contact__card-text">+91 - 6306597320</span>
            </a>

            {/* Location (non-clickable info item) */}
            <div className="contact__info-item">
              <div className="contact__info-icon contact__info-icon--green">
                <MapPin size={22} />
              </div>
              <div>
                <h3 className="contact__info-title">Location</h3>
                <p className="contact__info-text">Meerut, Uttar Pradesh, India</p>
              </div>
            </div>
          </div>

          <form className="contact__form" onSubmit={(e) => e.preventDefault()}>
            <div className="contact__form-row">
              <input
                type="text"
                placeholder="Name"
                className="contact__input"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="contact__input"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="contact__input"
              required
            />
            <textarea
              rows={4}
              placeholder="Message"
              className="contact__textarea"
              required
            />
            <button type="submit" className="contact__submit-btn">
              <Send size={18} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
