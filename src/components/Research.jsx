import React, { useState } from 'react';
import { BookOpen, Calendar, X } from 'lucide-react';

import ictisLogo from '../assets/740_FL.jpg';
import icswLogo from '../assets/ICSW2025.jpeg';

const PUBLICATIONS = [
  {
    title: 'Hierarchical Latent Retrieval Model (HLRM) for High-Dimensional Vector Spaces',
    authors: 'Prabhat Kumar Gupta, et al.',
    venue:
      'Accepted at the International Conference on Information Technology and Intelligent Systems (ICTIS 2026) Thailand',
    date: 'March 2026',
    badge: 'ICTIS 2026',
    image: ictisLogo,
    description:
      'Proposes an optimized tree-structured clustering mechanism that maps dense semantic embeddings into hierarchical buckets. Reduces lookup comparisons from O(N) to O(1) in query spaces, maintaining high retrieval coverage and accuracy. Tested against standard benchmarks, showcasing a 10x throughput enhancement.'
  },
  {
    title: 'Environmental Dispersion Analysis using Flask Web Application',
    authors: 'Prabhat Kumar Gupta, et al.',
    venue:
      '2nd International Conference on Sustainable Water (ICSW 2025)',
    date: 'March 2025',
    badge: 'ICSW 2025 • 2nd Place',
    image: icswLogo,
    description:
      'Presented a Flask-based environmental simulation and dispersion analysis platform focused on toxicity concentration modeling and real-time environmental impact assessment. Recognized with 2nd place for innovation, technical implementation, and practical research contribution.'
  }
];

const Research = () => {

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="research">

      <div className="section-header">
        <h2>Research & Publications</h2>
        <p className="text-muted">
          Academic papers, peer-reviewed studies, and conference presentations
        </p>
      </div>

      <div
        className="publications-list"
        style={{ animation: 'fadeInUp 0.8s ease-out' }}
      >
        {PUBLICATIONS.map((pub, idx) => (
          <div key={idx} className="publication-card">

            {/* LEFT SIDE */}
            <div className="publication-left">

              {/* Badge */}
              <div className="publication-badge">
                <BookOpen size={16} />
                <span>{pub.badge}</span>
              </div>

              {/* IMAGE */}
              <div
                className="publication-image-box"
                onClick={() => setSelectedImage(pub.image)}
              >
                <img
                  src={pub.image}
                  alt={pub.badge}
                  className="publication-image"
                />

                <div className="image-overlay">
                  Click to View
                </div>
              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="publication-info">

              <h4>{pub.title}</h4>

              <div className="publication-authors">
                <strong>Authors:</strong> {pub.authors}
              </div>

              <div className="publication-venue">
                {pub.venue}
              </div>

              <div className="publication-date">
                <Calendar size={12} />
                <span>{pub.date}</span>
              </div>

              <p className="publication-desc text-muted">
                {pub.description}
              </p>

            </div>

          </div>
        ))}
      </div>

      {/* FULLSCREEN IMAGE MODAL */}
      {selectedImage && (
        <div
          className="image-modal"
          onClick={() => setSelectedImage(null)}
        >

          <button
            className="close-modal-btn"
            onClick={() => setSelectedImage(null)}
          >
            <X size={28} />
          </button>

          <img
            src={selectedImage}
            alt="Conference Preview"
            className="modal-image"
            onClick={(e) => e.stopPropagation()}
          />

        </div>
      )}

    </section>
  );
};

export default Research;