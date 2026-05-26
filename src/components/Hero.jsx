import React, { useState, useEffect } from 'react';
import { ArrowRight, Search, Sparkles, Terminal } from 'lucide-react';
import bannerImage from '../assets/banner-01.webp';

const SUGGESTIONS = [
  { label: 'RAG Systems', query: 'rag' },
  { label: 'Backend APIs', query: 'backend' },
  { label: 'Computer Vision', query: 'vision' },
  { label: 'GenAI Tools', query: 'genai' },
];

const SIMULATED_RESPONSES = {
  rag: {
    match: '97% Match - RAG & Semantic Retrieval',
    description:
      'Developed HLRM (Constant-Time Semantic Retrieval) & Medical Query Assistant utilizing Vector databases, RAG, and LLM orchestration.',
  },
  backend: {
    match: '94% Match - Backend APIs & Engineering',
    description:
      'Expertise in building scalable systems with Python, FastAPI, Flask, and MongoDB. Structured high-throughput asynchronous workloads.',
  },
  vision: {
    match: '91% Match - Computer Vision & OCR',
    description:
      'Created custom Checkbox Detection Systems & OpenCV image processing pipelines. Integrated OCR for automated document extraction.',
  },
  genai: {
    match: '98% Match - Generative AI Applications',
    description:
      'Engineered custom agentic flows using LangChain, OpenAI, and Gemini APIs for contextual parsing and automated code generation.',
  },
};

const Hero = () => {
  const [activeQuery, setActiveQuery] = useState('');
  const [typedTitle, setTypedTitle] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const titleText = 'Artificial Intelligence & Data Science Engineer';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedTitle(titleText.slice(0, index + 1));
      index += 1;
      if (index >= titleText.length) clearInterval(interval);
    }, 55);

    return () => clearInterval(interval);
  }, []);

  const evaluateSearch = (query) => {
    const q = query.toLowerCase().trim();

    if (!q) {
      setSearchResult(null);
      return;
    }

    let foundKey = null;

    if (
      q.includes('rag') ||
      q.includes('search') ||
      q.includes('retrieval') ||
      q.includes('hlrm')
    ) {
      foundKey = 'rag';
    } else if (
      q.includes('backend') ||
      q.includes('fastapi') ||
      q.includes('flask') ||
      q.includes('api') ||
      q.includes('python')
    ) {
      foundKey = 'backend';
    } else if (
      q.includes('vision') ||
      q.includes('opencv') ||
      q.includes('ocr') ||
      q.includes('image')
    ) {
      foundKey = 'vision';
    } else if (
      q.includes('genai') ||
      q.includes('llm') ||
      q.includes('langchain') ||
      q.includes('openai') ||
      q.includes('agent')
    ) {
      foundKey = 'genai';
    }

    if (foundKey && SIMULATED_RESPONSES[foundKey]) {
      setSearchResult(SIMULATED_RESPONSES[foundKey]);
    } else {
      setSearchResult({
        match: 'Partial Match',
        description: `Exploring Prabhat's index for "${query}". Try searching "RAG", "FastAPI", or "OpenCV" for detailed nodes.`,
      });
    }
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setActiveQuery(value);
    evaluateSearch(value);
  };

  const handleSuggestionClick = (query) => {
    setActiveQuery(query);
    evaluateSearch(query);
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home">
      <div className="hero-wrapper">
        {/* Intro details */}
        <div className="hero-content" style={{ animation: 'fadeInUp 0.8s ease-out' }}>
          <div
            className="glass-panel"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '20px',
              fontSize: '0.85rem',
              color: 'var(--accent-ice)',
              marginBottom: '20px',
              border: '1px solid rgba(129, 166, 198, 0.2)',
            }}
          >
            <Sparkles size={14} className="text-accent" />
            <span>AI/ML & GenAI Systems Research</span>
          </div>

          <h1>
            Prabhat Kumar Gupta
            <span
              className="text-gradient"
              style={{ minHeight: '38px', display: 'block' }}
            >
              {typedTitle}
              <span
                className="cursor"
                style={{ animation: 'pulse 1s infinite', color: 'var(--primary-blue)' }}
              >
                |
              </span>
            </span>
          </h1>

          <p className="hero-tagline">
            Specializing in LLM Orchestration, RAG Systems, and High-Performance Backend APIs.
          </p>

          <p className="hero-desc">
            Bridging state-of-the-art AI research with scalable, constant-time retrieval architectures.
            Explore my interactive 3D knowledge map and query simulator to discover skills, projects, and publications.
          </p>

          <div className="hero-ctas">
            <a href="#projects" className="btn-primary">
              View Projects <ArrowRight size={16} />
            </a>
            <a href="#contact" onClick={scrollToContact} className="btn-secondary">
              Let&apos;s Talk
            </a>
          </div>

          {/* Semantic Search Simulator */}
          <div className="semantic-search-box">
            <div
              style={{
                fontSize: '0.85rem',
                color: 'var(--sandstone)',
                marginBottom: '8px',
                fontFamily: 'var(--font-headings)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <Terminal size={12} className="text-accent" />
              <span>Query Prabhat&apos;s Vector Space Embeddings:</span>
            </div>

            <div className="semantic-search-inner">
              <Search size={18} style={{ marginLeft: '12px', color: 'rgba(243,227,208,0.4)' }} />
              <input
                type="text"
                className="semantic-search-input"
                placeholder="Type 'RAG', 'fastapi', 'computervision'..."
                value={activeQuery}
                onChange={handleSearchChange}
              />
              {activeQuery && (
                <button
                  onClick={() => {
                    setActiveQuery('');
                    setSearchResult(null);
                  }}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'rgba(243,227,208,0.5)',
                    cursor: 'pointer',
                    padding: '4px 10px',
                    marginRight: '4px',
                    fontSize: '0.8rem',
                  }}
                >
                  Clear
                </button>
              )}
            </div>

            <div className="semantic-search-tags">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s.label}
                  className="semantic-tag"
                  onClick={() => handleSuggestionClick(s.query)}
                >
                  {s.label}
                </button>
              ))}
            </div>

            {searchResult && (
              <div className="semantic-results">
                <div className="result-card">
                  <div
                    style={{
                      fontWeight: '600',
                      color: '#fff',
                      fontSize: '0.85rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    <span
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--primary-blue)',
                        display: 'inline-block',
                      }}
                    />
                    {searchResult.match}
                  </div>
                  <div
                    style={{
                      marginTop: '4px',
                      color: 'rgba(243,227,208,0.7)',
                      fontSize: '0.85rem',
                      lineHeight: '1.4',
                    }}
                  >
                    {searchResult.description}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 3D Visual Space */}
        <div className="hero-visual-space">
          <div className="hero-image-frame">
            <div className="hero-image-glow" />
            <img
              src={bannerImage}
              alt="Prabhat Kumar Gupta Banner"
              className="hero-banner-image"
              draggable="false"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;