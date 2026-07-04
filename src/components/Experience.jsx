import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import '../styles/Sections.css';

const experiences = [
  {
    title: 'Java / Full Stack Developer (Intern)',
    company: 'BerryBloomer Pvt Ltd',
    location: 'India',
    period: 'Jan 2026 - May 2026',
    description: [
      'Worked on MyPet, a full-stack pet marketplace mobile application using Spring Boot and React Native (Expo).',
      'Developed and secured RESTful APIs with JWT-based authentication, OTP verification, and Spring Security.',
      'Implemented core modules including pet listings, user management, subscriptions, payments, and media upload.',
      'Integrated Razorpay payment gateway and followed layered architecture (Controller–Service–Repository) for scalable backend design.'
    ],
    current: true,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section section--experience">
      <div className="section__container">
        <div className="section__header">
          <h2 className="section__title">Experience</h2>
          <div className="section__divider" />
        </div>

        <div className="experience__list">
          {experiences.map((exp, index) => (
            <div key={index} className={`experience__card ${exp.current ? 'experience__card--current' : ''}`}>
              <div className="experience__card-header">
                <div>
                  <h3 className="experience__card-title">{exp.title}</h3>
                  <p className="experience__card-company">{exp.company}</p>
                </div>
                {exp.current && (
                  <span className="experience__badge">Latest</span>
                )}
              </div>
              
              <div className="experience__metadata">
                <span className="experience__meta-item"><Calendar size={14} /> {exp.period}</span>
                <span className="experience__meta-item"><MapPin size={14} /> {exp.location}</span>
              </div>
              
              <ul className="experience__bullets">
                {exp.description.map((point, i) => (
                  <li key={i} className="experience__bullet">{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
