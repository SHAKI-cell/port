import React from 'react';
import { MapPin, GraduationCap, Briefcase, Heart } from 'lucide-react';
import '../styles/Sections.css';

const About = () => {
  const details = [
    { icon: MapPin, label: 'Location', value: 'Meerut, India' },
    { icon: GraduationCap, label: 'Education', value: 'B.Tech CSE' },
    { icon: Briefcase, label: 'Focus', value: 'Java Full Stack' },
    { icon: Heart, label: 'Interests', value: 'DSA, AI/ML, Backend' },
  ];

  return (
    <section id="about" className="section section--about">
      <div className="section__container">
        <div className="section__header">
          <h2 className="section__title">About Me</h2>
          <div className="section__divider" />
        </div>

        <div className="about__content">
          <div className="about__text">
            <p>
              Computer Science student with strong programming fundamentals, 
              leadership abilities, and a problem-solving mindset. Skilled in writing clean, 
              efficient code and applying creative and critical thinking to real-world projects.
            </p>
            <p>
              Achieved a 5-Star HackerRank rating in Java and solved 500+ problems on CodeChef 
              with a 1400 rating. Nominated at college level for the Smart India Hackathon (SIH) 
              by presenting an innovative and practical solution.
            </p>
            <p>
              Actively contributed to management, event operations, and communication, 
              serving as a core member of SIO NGO. Seeking opportunities to learn, contribute, 
              and add value to organizational goals.
            </p>
          </div>

          <div className="about__grid">
            {details.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="about__card">
                  <Icon className="about__card-icon" size={32} />
                  <span className="about__card-label">{item.label}</span>
                  <span className="about__card-value">{item.value}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
