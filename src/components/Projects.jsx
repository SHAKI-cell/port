import React from 'react';
import { ExternalLink, Star } from 'lucide-react';
import '../styles/Sections.css';

const projects = [
  {
    title: 'IntelliRAG',
    description: 'Production-ready RAG backend using FastAPI, LangChain, and ChromaDB with end-to-end PDF ingestion pipeline. Pluggable multi-LLM architecture supporting OpenAI, Gemini, HuggingFace, and Ollama.',
    tags: ['Python', 'FastAPI', 'LangChain', 'ChromaDB', 'Next.js', 'Pytest'],
    github: 'https://github.com/TaquiAlam',
    live: '#',
    highlights: [
      'Context-aware question answering with vector similarity search',
      'Async FastAPI backend with Pydantic v2 and structured logging',
      'Next.js (React/TypeScript) frontend with Pytest test suite'
    ],
  },
  {
    title: 'MyPet Marketplace',
    description: 'Full-stack pet marketplace mobile app built with Spring Boot backend and React Native (Expo) frontend. JWT auth, Razorpay payments, and layered architecture.',
    tags: ['Spring Boot', 'React Native', 'JWT', 'Razorpay', 'REST API'],
    github: 'https://github.com/TaquiAlam',
    live: '#',
    highlights: [
      'Secured RESTful APIs with JWT + OTP + Spring Security',
      'Core modules: pet listings, user management, subscriptions',
      'Integrated Razorpay payment gateway'
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section section--projects">
      <div className="section__container">
        <div className="section__header">
          <h2 className="section__title">Featured Projects</h2>
          <div className="section__divider" />
        </div>

        <div className="projects__grid projects__grid--two">
          {projects.map((project, index) => (
            <div key={index} className="projects__card">
              <div className="projects__card-visual">
                <Star className="projects__card-star" size={48} />
              </div>
              <div className="projects__card-content">
                <h3 className="projects__card-title">
                  {project.title}
                </h3>
                <p className="projects__card-description">
                  {project.description}
                </p>
                {project.highlights && (
                  <ul className="projects__highlights">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="projects__highlight">{h}</li>
                    ))}
                  </ul>
                )}
                <div className="projects__tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="projects__tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="projects__links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="projects__link">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                      <path d="M9 18c-4.51 2-5-2-7-2"/>
                    </svg>
                    Code
                  </a>
                  <a href={project.live} className="projects__link">
                    <ExternalLink size={16} /> Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
