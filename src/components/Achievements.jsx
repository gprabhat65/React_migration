import React, { useState } from 'react';
import { X } from 'lucide-react';
import TiltCard from './TiltCard';

import ictisImg from '../assets/Presenter Certificate.jpg';
import icswImg from '../assets/ICSW.jpeg';
import worldRecordImg from '../assets/36HOUR.jpeg';
import expoImg from '../assets/VELTECH.jpg';
import rotaractImg from '../assets/ROTRACT.png';
import volunteerImg from '../assets/MANAVSHEWA.png';
import modelImg from '../assets/MODELING.png';

const ACHIEVEMENTS_DATA = [
  {
    title: 'Paper Accepted & Publication',
    stat: '11th International Conference on ICT for Intelligent Systems (ICTIS 2026)',
    desc:
      'Research paper on HLRM (Constant-Time Semantic Retrieval Model) accepted for presentation and Springer conference proceedings publication at ICTIS 2026, Bangkok.',
    image: ictisImg,
  },

  {
    title: 'ICSW 2025 • 2nd Place',
    stat: '2nd International Conference on Sustainable Water',
    desc:
      'Secured 2nd place at the 2nd International Conference on Sustainable Water (ICSW 2025) for presenting the research project “Effect of Multiple Dispersions on Toxicity and Concentration Profile Using a Flask-Based Web Application.”',
    image: icswImg,
  },

  {
    title: 'Kalam’s World Record Recognition',
    stat: 'International Event',
    desc:
      'Coordinated “Mindchemy,” a 36-hour international seminar on Mental Health & Wellbeing at KPRIET with participants from more than 7 countries.',
    image: worldRecordImg,
  },

  {
    title: 'AI & IoT Showcase',
    stat: 'Project Expo Participant',
    desc:
      'Presented an AI-based IoT prototype demonstrating Machine Learning and automation applications.',
    image: expoImg,
  },

  {
    title: 'Professional Service Director',
    stat: 'Rotaract Club of United Birgunj',
    desc:
      'Led community initiatives focused on traffic awareness, plantation drives, and student engagement activities.',
    image: rotaractImg,
  },

  {
    title: 'Human Service Ashram Volunteer',
    stat: '2019 – 2022',
    desc:
      'Supported homeless and mentally ill individuals through awareness campaigns and rehabilitation assistance.',
    image: volunteerImg,
  },

  {
    title: 'Mr. & Miss Teen Super Model Nepal 2018',
    stat: 'Modeling & Fashion Show',
    desc:
      'Participated in modeling and fashion events, developing confidence and public interaction experience.',
    image: modelImg,
  },
];

const Achievements = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="achievements">
      <div className="section-header">
        <h2>Achievements & Leadership</h2>

        <p className="text-muted">
          Honors, awards, leadership milestones, conferences, and social contributions
        </p>
      </div>

      <div className="achievements-grid">
        {ACHIEVEMENTS_DATA.map((item, idx) => (
          <TiltCard
            key={idx}
            maxTilt={6}
            className="achievement-card"
          >
            {/* IMAGE */}
            <div
              className="achievement-image-wrapper"
              onClick={() => setSelectedImage(item.image)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="achievement-image"
              />

              <div className="achievement-image-overlay">
                Click to Expand
              </div>
            </div>

            {/* CONTENT */}
            <div className="achievement-content">
              <div className="achievement-num">
                {item.stat}
              </div>

              <h3 className="achievement-title">
                {item.title}
              </h3>

              <p className="achievement-desc">
                {item.desc}
              </p>
            </div>
          </TiltCard>
        ))}
      </div>

      {/* MODAL */}
      {selectedImage && (
        <div
          className="achievement-modal"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="achievement-close-btn"
            onClick={() => setSelectedImage(null)}
          >
            <X size={28} />
          </button>

          <img
            src={selectedImage}
            alt="Expanded Achievement"
            className="achievement-modal-image"
          />
        </div>
      )}
    </section>
  );
};

export default Achievements;