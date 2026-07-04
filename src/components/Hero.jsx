import React, { useEffect, useRef } from 'react';
import '../styles/Hero.css';

function Hero() {
  const blobRef = useRef(null);
  const textRef = useRef(null);
  const roleText = 'Competitive Programmer';
  
  useEffect(() => {
    const element = textRef.current;
    if (!element) return;
    
    let index = 0;
    element.textContent = '';
    
    const typeInterval = setInterval(() => {
      if (index < roleText.length) {
        element.textContent += roleText.charAt(index);
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 80);
    
    return () => clearInterval(typeInterval);
  }, []);

  const techStack = [
    { name: 'React', icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    )},
    { name: 'Node.js', icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    )},
    { name: 'Python', icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10"/><path d="M16 22l5-5"/><path d="M21 22v-5h-5"/>
      </svg>
    )},
    { name: 'TypeScript', icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>
      </svg>
    )},
  ];

  return (
    <section id="home" className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <p className="hero__greeting">Hi, I'm</p>
          
          <h1 className="hero__name">Shakib</h1>
          
          <h2 className="hero__role">
            <span ref={textRef} className="hero__role-text"></span>
            <span className="hero__role-cursor">|</span>
          </h2>
          
          <div className="hero__tech-stack">
            {techStack.map((tech) => (
              <span key={tech.name} className="hero__tech-tag">
                <span className="hero__tech-icon">{tech.icon}</span>
                {tech.name}
              </span>
            ))}
          </div>
          
          <p className="hero__description">
            Full-Stack Developer and competitive programmer with strong DSA fundamentals, 
            backend developer experienced in building scalable web applications and AI-powered 
            products using modern tech stacks.
          </p>
          
          <div className="hero__cta">
            <a href="#work" className="hero__btn hero__btn--primary">
              <span className="hero__btn-text">View My Work</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
            </a>
            <a href="#contact" className="hero__btn hero__btn--secondary">
              <span className="hero__btn-text">Get In Touch</span>
            </a>
          </div>
          
          <div className="hero__social">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                <path d="M9 18c-4.51 2-5-2-7-2"/>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="mailto:email@example.com" className="hero__social-link" aria-label="Email">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="hero__image-wrapper">
          <div className="hero__blob-container" ref={blobRef}>
            <div className="hero__blob-glow"></div>
            
            <div className="hero__blob">
              <img 
                src="./pfp.jpg" 
                alt="Shakib" 
                className="hero__blob-image"
              />
            </div>
            
            <div className="hero__particle hero__particle--1"></div>
            <div className="hero__particle hero__particle--2"></div>
            <div className="hero__particle hero__particle--3"></div>
            <div className="hero__particle hero__particle--4"></div>
          </div>
        </div>
      </div>
      
      <div className="hero__scroll">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel" />
        </div>
        <span className="hero__scroll-text">SCROLL TO EXPLORE</span>
      </div>
    </section>
  );
}

export default Hero;
