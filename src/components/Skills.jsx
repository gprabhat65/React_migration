import React from 'react';
import { BrainCircuit, Database, Cpu } from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    title: 'Artificial Intelligence & GenAI',
    icon: <BrainCircuit size={20} />,
    skills: [
      { name: 'LLM Orchestration', level: 85 },
      { name: 'RAG Architectures', level: 98 },
      { name: 'LangChain & LlamaIndex', level: 92 },
      { name: 'OpenAI / Gemini APIs', level: 96 },
      { name: 'NLP & Deep Learning', level: 88 },
      { name: 'TensorFlow & PyTorch', level: 75 },
      { name: 'Semantic Search Embeddings', level: 97 },
    ]
  },
  {
    title: 'Backend Engineering & Data',
    icon: <Database size={20} />,
    skills: [
      { name: 'Python (OOP & Scripting)', level: 75 },
      { name: 'FastAPI (High Throughput)', level: 65 },
      { name: 'Flask / RESTful APIs', level: 60 },
      { name: 'MongoDB & SQL Databases', level: 70 },
      { name: 'Asynchronous Tasks (Celery)', level: 60 },
      { name: 'Vector DBs (Chroma, Pinecone)', level: 85 },
      { name: 'System Design & Docker', level: 60 },
    ]
  },
  {
    title: 'Frontend & Specialized Vision',
    icon: <Cpu size={20} />,
    skills: [
      { name: 'OpenCV (Image Processing)', level: 75 },
      { name: 'OCR & Document Parsers', level: 80 },
      { name: 'JavaScript & ES6+', level: 65 },
      { name: 'React.js & State Management', level: 85 },
      { name: 'CSS3 / Modern Layouts', level: 84 },
      { name: 'Git & Agile Workflows', level: 90 },
      { name: 'Linux System Admin', level: 50 },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="section-header">
        <h2>Technical Core</h2>
        <p className="text-muted">High-performance AI modeling, data pipelines, and backend infrastructure</p>
      </div>

      <div className="skills-container" style={{ animation: 'fadeInUp 0.8s ease-out' }}>
        {SKILL_CATEGORIES.map((category, catIdx) => (
          <div key={category.title} className="skills-category">
            <h3>
              <span className="text-accent">{category.icon}</span>
              <span>{category.title}</span>
            </h3>

            <div className="skills-grid">
              {category.skills.map((skill) => (
                <div key={skill.name} className="skill-card">
                  <div className="skill-icon-wrap">
                    <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--primary-blue)' }}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className="skill-info">
                    <div className="skill-name">{skill.name}</div>
                    <div className="skill-level-bar">
                      <div 
                        className="skill-level-fill" 
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
