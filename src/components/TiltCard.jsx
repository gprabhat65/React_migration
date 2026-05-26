import React, { useState, useRef } from 'react';

const TiltCard = ({ children, className = '', maxTilt = 10, ...props }) => {
  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  const [glareStyle, setGlareStyle] = useState({
    opacity: 0,
    transform: 'translate(-50%, -50%)',
  });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Mouse position relative to the element
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Width and height
    const w = rect.width;
    const h = rect.height;
    
    // Normalize coordinates (-0.5 to 0.5)
    const normX = (x / w) - 0.5;
    const normY = (y / h) - 0.5;
    
    // Calculate rotation angles
    const tiltX = -normY * maxTilt;
    const tiltY = normX * maxTilt;
    
    setTransformStyle(`perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.03, 1.03, 1.03)`);
    
    // Set custom CSS variables for the mouse glow effect
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
    
    // Update glare position
    setGlareStyle({
      opacity: 0.15,
      left: `${x}px`,
      top: `${y}px`,
      transform: 'translate(-50%, -50%)',
    });
  };

  const handleMouseLeave = () => {
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setGlareStyle({
      opacity: 0,
      transform: 'translate(-50%, -50%)',
    });
  };

  return (
    <div
      ref={cardRef}
      className={`glass-card ${className}`}
      style={{ 
        transform: transformStyle,
        transition: 'transform 0.15s ease-out, border-color 0.4s ease, box-shadow 0.4s ease'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {/* Glare/shine overlay */}
      <div 
        style={{
          position: 'absolute',
          width: '150px',
          height: '150px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 80%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 2,
          transition: 'opacity 0.2s ease-out',
          ...glareStyle
        }}
      />
      {children}
    </div>
  );
};

export default TiltCard;
