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
            <div className="contact__info-item">
              <div className="contact__info-icon contact__info-icon--blue">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="contact__info-title">Email</h3>
                <p className="contact__info-text">
                  <a href="mailto:alamtaqui@gmail.com" className="contact__info-link">alamtaqui@gmail.com</a>
                </p>
              </div>
            </div>
            <div className="contact__info-item">
              <div className="contact__info-icon contact__info-icon--purple">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="contact__info-title">Phone</h3>
                <p className="contact__info-text">
                  <a href="tel:+916306597320" className="contact__info-link">+91 - 6306597320</a>
                </p>
              </div>
            </div>
            <div className="contact__info-item">
              <div className="contact__info-icon contact__info-icon--green">
                <MapPin size={24} />
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
