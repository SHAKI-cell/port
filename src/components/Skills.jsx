import React from 'react';
import '../styles/Sections.css';

const skillCategories = [
  {
    title: 'Programming',
    skills: ['Java', 'C', 'Python', 'JavaScript', 'TypeScript'],
    colorClass: 'skills__icon-box--blue',
  },
  {
    title: 'Frameworks',
    skills: ['Spring Boot', 'FastAPI', 'LangChain', 'React', 'Next.js'],
    colorClass: 'skills__icon-box--purple',
  },
  {
    title: 'AI & Data',
    skills: ['OpenAI', 'Gemini', 'Ollama', 'ChromaDB', 'RAG', 'Vector Embeddings'],
    colorClass: 'skills__icon-box--green',
  },
  {
    title: 'Tools & DB',
    skills: ['SQL', 'Git', 'GitHub', 'Eclipse IDE', 'Visual Studio', 'Uvicorn', 'Pytest'],
    colorClass: 'skills__icon-box--orange',
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section section--skills">
      <div className="section__container">
        <div className="section__header">
          <h2 className="section__title">Skills</h2>
          <div className="section__divider" />
        </div>

        <div className="skills__grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skills__card">
              <div className={`skills__icon-box ${category.colorClass}`}>
                <span className="skills__icon-text">{category.title[0]}</span>
              </div>
              <h3 className="skills__card-title">{category.title}</h3>
              <div className="skills__list">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skills__tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
