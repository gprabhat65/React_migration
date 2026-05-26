import React from 'react';
import { User, BookOpen, Award, Globe, Code2 } from 'lucide-react';
import TiltCard from './TiltCard';

const About = () => {
  return (
    <section id="about">
      <div className="section-header">
        <h2>About Me</h2>
        <p className="text-muted">Research-driven AI/ML Developer & Backend Systems Engineer</p>
      </div>

      <div className="about-grid">
        
        {/* About info details */}
        <div className="about-details" style={{ animation: 'fadeInUp 0.8s ease-out' }}>
          <h3 className="text-gradient" style={{ fontSize: '1.8rem', marginBottom: '10px' }}>
            Engineering Intelligent Systems
          </h3>
          <p className="text-muted" style={{ fontSize: '1.05rem' }}>
            I am an Artificial Intelligence & Data Science specialist with deep expertise in optimizing retrieval models, developing advanced RAG applications, and architecting lightning-fast RESTful APIs. My engineering philosophy lies at the intersection of rigorous research and robust production code.
          </p>

          <div className="about-highlight-box">
            <h4 style={{ color: 'var(--accent-ice)', marginBottom: '6px', fontSize: '1.05rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Code2 size={16} /> Research Highlight
            </h4>
            <p className="text-muted" style={{ fontSize: '0.92rem' }}>
              Designed a novel **Constant-Time Semantic Retrieval Model (HLRM)** using customized vector clustering, reducing inference latency by **93.2%** while retaining dense semantic alignment. Accepted for Conference & Publication at ICTIS 2026. (Thailand)
            </p>
          </div>

          <p className="text-muted">
            Beyond semantic engines, I construct asynchronous server layers (FastAPI, Flask) designed to handle dense embeddings, deploy automated document parsers (OCR, Computer Vision), and build highly interactive client interfaces using React.
          </p>

          {/* Stats Grid */}
          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-val">1</div>
              <div className="stat-label"> Research & Publications</div>
            </div>
            <div className="stat-item">
              <div className="stat-val">2nd</div>
              <div className="stat-label">ICSW - 2025 Rank</div>
            </div>
            <div className="stat-item">
              <div className="stat-val">10+</div>
              <div className="stat-label">Systems Built</div>
            </div>
          </div>
        </div>

        {/* Dynamic Card showcasing resume profile details */}
        <div className="about-visual">
          <TiltCard maxTilt={6} className="project-card" style={{ width: '100%', maxWidth: '380px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', borderBottom: '1px solid rgba(170,205,220,0.1)', paddingBottom: '16px' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'rgba(129,166,198,0.1)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--primary-blue)' }}>
                  <User size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', color: '#fff' }}>Prabhat Kumar Gupta</h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--accent-ice)' }}>AI & Backend Developer</span>
                </div>
              </div>

              {/* Education */}
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <BookOpen size={16} className="text-accent" style={{ marginTop: '2px' }} />
                <div>
                  <h5 style={{ fontSize: '0.9rem', color: '#fff', fontWeight: '600' }}>Education</h5>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(243,227,208,1)' }}>KPR Institute of Engineering and Technology, Coimbatore, Tamil-Nadu, India</p>
                  <ul>
                    <li>
                      <p style={{ fontSize: '0.85rem', color: 'rgba(243,227,208,0.7)' }}>B.Tech in Artificial Intelligence & Data Science, 22-26</p>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Certifications */}
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <Award size={16} className="text-accent" style={{ marginTop: '2px' }} />
                <div>
                  <h5
                    style={{
                      fontSize: '0.9rem',
                      color: '#fff',
                      fontWeight: '600'
                    }}
                  >
                    Certifications
                  </h5>

                  <ul
                    style={{
                      fontSize: '0.85rem',
                      color: 'rgba(243,227,208,0.7)',
                      paddingLeft: '18px',
                      marginTop: '8px',
                      lineHeight: '1.8'
                    }}
                  >
                    <li>AI Fundamentals (ASCEND – Level 1) — NASSCOM FutureSkills</li>

                    <li>IBM AI Foundation for Business (Specialization) — Coursera</li>

                    <li>Exploratory Data Analysis for Machine Learning — Coursera</li>

                    <li>Machine Learning: Introduction for Everyone — Coursera</li>
                  </ul>
                </div>
              </div>

              {/* Languages */}
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <Globe
                  size={16}
                  className="text-accent"
                  style={{ marginTop: '2px' }}
                />

                <div>
                  <h5
                    style={{
                      fontSize: '0.9rem',
                      color: '#fff',
                      fontWeight: '600'
                    }}
                  >
                    Languages
                  </h5>

                  <ul
                    style={{
                      fontSize: '0.85rem',
                      color: 'rgba(243,227,208,0.7)',
                      paddingLeft: '18px',
                      marginTop: '8px',
                      lineHeight: '1.8'
                    }}
                  >
                    <li>English (Professional)</li>

                    <li>Nepali (Native)</li>

                    <li>Hindi (Professional)</li>

                    <li>Bhojpuri (Native)</li>
                  </ul>
                </div>
              </div>
            </div>
          </TiltCard>
        </div>

      </div>
    </section>
  );
};

export default About;
