import React from 'react';

const EXPERIENCE_DATA = [
  {
    role: 'AI Developer Intern',
    company: 'Yaane Technologies',
    duration: 'Dec 2023 - Jan 2024',
    description: [
      'Developed and optimized core LLM orchestration pipelines using LangChain, OpenAI, and Gemini APIs, enhancing reasoning accuracy for document analysis.',
      'Implemented advanced Retrieval-Augmented Generation (RAG) pipelines with optimized chunking strategies, reducing hallucinations by 32%.',
      'Created custom vector storage pipelines and metadata filtering layers using MongoDB and Pinecone, ensuring fast, semantic query resolution.',
      'Built a high-performance backend infrastructure with FastAPI to handle concurrent deep learning model inference requests.'
    ]
  },
  {
    role: 'AI & Backend Engineering Intern',
    company: 'Digital Mantras',
    duration: 'Aug 2024 - Sep 2024',
    description: [
      'Built and maintained scalable RESTful web APIs using Flask and FastAPI to expose computer vision models to React clients.',
      'Developed a robust Checkbox Detection System utilizing OpenCV contour analysis, achieving a 99.1% detection precision on scanned documents.',
      'Integrated OCR engines (Tesseract, PaddleOCR) for extracting tabular data from multi-format financial reports.',
      'Engineered clean database schemas in MongoDB, optimizing index lookups and speeding up queries by 45%.'
    ]
  },
  {
    role: 'Web Dev Intern',
    company: 'Trip Engineering Pvt. Ltd.',
    duration: 'May 2025 - Oct 2025',
    description: [
      'Developed and deployed responsive frontend interfaces and integrated backend APIs to improve website performance and user experience.',
      
      'Collaborated with the development team to optimize UI components, enhance responsiveness, and maintain cross-browser compatibility.',
      
      'Implemented modern web development practices, improving page loading efficiency and ensuring smooth user interaction across devices.',
      
      'Participated in debugging, testing, and deployment workflows while assisting in maintaining scalable and production-ready web solutions.'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience">
      <div className="section-header">
        <h2>Experience</h2>
        <p className="text-muted">Work history, technical internships, and collaborative software development</p>
      </div>

      <div className="timeline">
        {EXPERIENCE_DATA.map((exp, idx) => (
          <div key={idx} className="timeline-item">
            
            {/* Timeline center line dot */}
            <div className="timeline-dot">
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--primary-blue)' }} />
            </div>

            {/* Content card */}
            <div className="timeline-content">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-role">{exp.role}</h3>
                  <span className="timeline-company">{exp.company}</span>
                </div>
                <span className="timeline-duration">{exp.duration}</span>
              </div>

              <ul className="timeline-desc">
                {exp.description.map((bullet, bulletIdx) => (
                  <li key={bulletIdx}>{bullet}</li>
                ))}
              </ul>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
