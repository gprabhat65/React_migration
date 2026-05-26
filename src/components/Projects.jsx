import React from 'react';
import {
  Layers,
  ShieldAlert,
  Cpu,
  Leaf,
  Sprout,
  Image,
  BrainCircuit,
  Hand,
  Plane,
  ScanSearch,
  Users
} from 'lucide-react';
import { Github } from './CustomIcons';
import TiltCard from './TiltCard';

const PROJECTS_DATA = [
  {
    title: 'HLRM (Constant-Time Semantic Retrieval)',
    icon: <Layers size={20} className="text-accent" />,
    description:
      'Designed and implemented a scalable semantic retrieval architecture optimized for near constant-time search operations using dense vector embeddings and hierarchical indexing techniques for high-speed contextual retrieval.',
    tech: [
      'Python',
      'PyTorch',
      'FAISS',
      'FastAPI',
      'Vector Embeddings',
      'Semantic Search'
    ],
    github: 'https://github.com/gprabhat65/HLRM-Constant-Time-Semantic-Retrieval',
    live: '#',
  },

  {
    title: 'Medical Assistant',
    icon: <ShieldAlert size={20} className="text-accent" />,
    description:
      'Built an AI-powered medical assistant using LLMs and retrieval pipelines to provide contextual healthcare responses, intelligent query handling, and document-aware conversational support.',
    tech: [
      'LangChain',
      'Gemini API',
      'OpenAI API',
      'FastAPI',
      'React.js',
      'NLP'
    ],
    github: 'https://github.com/gprabhat65/Medical-Assistant',
    live: '#',
  },

  {
    title: 'Check Box Detection and Analysis',
    icon: <Cpu size={20} className="text-accent" />,
    description:
      'Developed an automated checkbox detection and analysis system capable of processing scanned forms using contour extraction, thresholding, skew correction, and computer vision-based verification.',
    tech: [
      'Python',
      'OpenCV',
      'Flask',
      'NumPy',
      'Image Processing'
    ],
    github: 'https://github.com/gprabhat65/Check-Box-Detection-and-Analysis',
    live: '#',
  },

  {
    title: 'Environmental Dispersion Analysis',
    icon: <Leaf size={20} className="text-accent" />,
    description:
      'Created a Flask-based environmental simulation platform to analyze toxicity concentration, atmospheric dispersion patterns, and real-time environmental impact through numerical computation models.',
    tech: [
      'Python',
      'Flask',
      'Pandas',
      'Matplotlib',
      'Data Visualization'
    ],
    github: 'https://github.com/gprabhat65/Environmental-Dispersion-Analysis-using-Flask-Web-Application',
    live: '#',
  },

  {
    title: 'Crop Recommendation System',
    icon: <Sprout size={20} className="text-accent" />,
    description:
      'Built a machine learning-driven crop recommendation platform that predicts suitable crops based on soil composition, weather conditions, and environmental parameters.',
    tech: [
      'Python',
      'Scikit-learn',
      'Pandas',
      'Machine Learning',
      'Data Analysis'
    ],
    github: 'https://github.com/gprabhat65/Crop-Recommendation-System',
    live: '#',
  },

  {
    title: 'Text-to-Image using Diffusers & Transformers',
    icon: <Image size={20} className="text-accent" />,
    description:
      'Implemented a generative AI pipeline capable of converting textual prompts into high-quality AI-generated images using diffusion models and transformer-based architectures.',
    tech: [
      'Python',
      'Diffusers',
      'Transformers',
      'Hugging Face',
      'Generative AI'
    ],
    github: 'https://github.com/gprabhat65/Text-to-Image-using-Diffusers-Transformers',
    live: '#',
  },

  {
    title: 'FullStack AI Attendance System',
    icon: <BrainCircuit size={20} className="text-accent" />,
    description:
      'Designed a full-stack AI attendance platform integrating intelligent face recognition, attendance automation, backend APIs, and real-time tracking functionalities.',
    tech: [
      'React.js',
      'FastAPI',
      'MongoDB',
      'Face Recognition',
      'Computer Vision'
    ],
    github: 'https://github.com/gprabhat65/FullStackAI-Attendance-System',
    live: '#',
  },

  {
    title: 'HoloControl Gesture Control System',
    icon: <Hand size={20} className="text-accent" />,
    description:
      'Developed a gesture-controlled interaction system using computer vision techniques to detect hand movements and enable touchless device interaction in real time.',
    tech: [
      'Python',
      'OpenCV',
      'MediaPipe',
      'Computer Vision',
      'Gesture Recognition'
    ],
    github: 'https://github.com/gprabhat65/HoloControl-Gesture-Control-System',
    live: '#',
  },

  {
    title: 'Flight Info Fetcher',
    icon: <Plane size={20} className="text-accent" />,
    description:
      'Built a real-time flight information retrieval application capable of fetching and displaying live flight details, schedules, and route-based travel information.',
    tech: [
      'Python',
      'API Integration',
      'FastAPI',
      'React.js',
      'REST APIs'
    ],
    github: 'https://github.com/gprabhat65/FlightInfoFetcher',
    live: '#',
  },

  {
    title: 'SmartVision Distance Detector',
    icon: <ScanSearch size={20} className="text-accent" />,
    description:
      'Created a smart distance detection system leveraging computer vision and object measurement algorithms to estimate real-world object distance through camera feeds.',
    tech: [
      'Python',
      'OpenCV',
      'Computer Vision',
      'Distance Estimation',
      'AI'
    ],
    github: 'https://github.com/gprabhat65/SmartVision-DistanceDetector',
    live: '#',
  },

  {
    title: 'Mentorship Platform',
    icon: <Users size={20} className="text-accent" />,
    description:
      'Developed a collaborative mentorship platform enabling mentor-student interaction, profile management, communication workflows, and structured learning guidance.',
    tech: [
      'React.js',
      'Node.js',
      'MongoDB',
      'Express.js',
      'Full Stack Development'
    ],
    github: 'https://github.com/gprabhat65/mentorship-platform',
    live: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="section-header">
        <h2>Featured Projects</h2>
        <p className="text-muted">Selected applications showcasing AI research, computer vision, and backend systems</p>
      </div>

      <div className="projects-grid">
        {PROJECTS_DATA.map((project, idx) => (
          <TiltCard key={idx} maxTilt={8} className="project-card">
            
            <div className="project-top">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: 'rgba(129, 166, 198, 0.1)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  {project.icon}
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <a href={project.github} className="social-btn" style={{ width: '32px', height: '32px' }} title="GitHub Repository">
                    <Github size={14} />
                  </a>
                </div>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc text-muted">{project.description}</p>
            </div>

            <div style={{ marginTop: 'auto' }}>
              <div className="project-tech" style={{ marginBottom: '16px' }}>
                {project.tech.map((tag) => (
                  <span key={tag} className="tech-tag">{tag}</span>
                ))}
              </div>

              <div className="project-footer">
                {project.live !== '#' && (
                  <a href={project.live} target="_blank" rel="noreferrer" className="project-link">
                    Live Demo <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </div>

          </TiltCard>
        ))}
      </div>
    </section>
  );
};

export default Projects;
