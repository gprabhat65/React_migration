import React, { useEffect, useRef, useState } from 'react';

// Color palette constants for Canvas drawing
const COLORS = {
  primaryBlue: 'rgba(129, 166, 198, 0.9)',
  accentIce: 'rgba(170, 205, 220, 0.85)',
  warmSand: 'rgba(243, 227, 208, 0.9)',
  sandstone: 'rgba(210, 196, 180, 0.8)',
  glowBlue: 'rgba(129, 166, 198, 0.3)',
};

const NODES_DATA = [
  { name: 'Prabhat K. Gupta', x: 0, y: 0, z: 0, size: 10, color: COLORS.warmSand, isCore: true },
  
  // AI / ML Cluster
  { name: 'LLMs', x: -140, y: -70, z: 80, size: 6, color: COLORS.primaryBlue },
  { name: 'RAG Systems', x: -80, y: 110, z: -100, size: 7, color: COLORS.accentIce },
  { name: 'Semantic Search', x: -120, y: 50, z: 120, size: 7, color: COLORS.primaryBlue },
  { name: 'NLP', x: -160, y: -40, z: -50, size: 5, color: COLORS.accentIce },
  { name: 'Deep Learning', x: -60, y: -120, z: 70, size: 6, color: COLORS.primaryBlue },
  { name: 'PyTorch', x: -100, y: -90, z: -120, size: 5, color: COLORS.sandstone },
  { name: 'TensorFlow', x: -50, y: -150, z: -20, size: 5, color: COLORS.sandstone },
  { name: 'OpenCV', x: 40, y: -130, z: 100, size: 6, color: COLORS.accentIce },
  { name: 'Vector DBs', x: -30, y: 140, z: 40, size: 6, color: COLORS.primaryBlue },
  
  // Backend & Tools Cluster
  { name: 'FastAPI', x: 120, y: -50, z: 110, size: 6, color: COLORS.accentIce },
  { name: 'Flask', x: 80, y: -90, z: -80, size: 5, color: COLORS.sandstone },
  { name: 'Python', x: 150, y: 30, z: -50, size: 7, color: COLORS.warmSand },
  { name: 'React.js', x: 110, y: 100, z: 90, size: 6, color: COLORS.primaryBlue },
  { name: 'MongoDB', x: 60, y: 120, z: -110, size: 5, color: COLORS.sandstone },
  { name: 'LangChain', x: -20, y: 80, z: 130, size: 6, color: COLORS.accentIce },
  { name: 'GenAI', x: -90, y: 10, z: -140, size: 7, color: COLORS.warmSand },
  { name: 'APIs', x: 130, y: -10, z: 20, size: 5, color: COLORS.primaryBlue },
  { name: 'OCR & Vision', x: 80, y: -60, z: 140, size: 5, color: COLORS.accentIce },
];

// Connection definition: [index1, index2]
const CONNECTIONS = [
  // Connect core node to key concepts
  [0, 1], [0, 2], [0, 3], [0, 7], [0, 8], [0, 10], [0, 12], [0, 13], [0, 15],
  
  // AI Cluster connections
  [1, 2], [1, 3], [2, 3], [1, 4], [2, 15], [3, 9], [4, 5], [4, 6], [15, 14],
  
  // Backend & engineering connections
  [10, 11], [10, 12], [12, 13], [10, 16], [12, 16], [13, 14],
  
  // Cross cluster
  [7, 17], [17, 10], [2, 14], [3, 14]
];

const SemanticCanvas = ({ activeQuery = '' }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const nodesRef = useRef(NODES_DATA.map(node => ({ ...node })));
  
  const [hoveredNode, setHoveredNode] = useState(null);
  const [dimensions, setDimensions] = useState({ width: 450, height: 450 });
  
  // Rotation variables
  const angles = useRef({ x: 0.005, y: 0.005 });
  const isDragging = useRef(false);
  const previousMousePosition = useRef({ x: 0, y: 0 });
  const dragSpeed = 0.005;
  const decay = 0.95; // Inertia decay

  // Handle resizing
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width: width || 450, height: height || 450 });
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Update nodes depending on semantic search queries (highlighting effect)
  useEffect(() => {
    if (!activeQuery) {
      nodesRef.current.forEach(n => {
        n.highlighted = false;
        n.glowScale = 1;
      });
      return;
    }

    const query = activeQuery.toLowerCase();
    
    // Simple matching rules
    nodesRef.current.forEach(n => {
      const name = n.name.toLowerCase();
      let matches = name.includes(query);
      
      // Synonym mappings
      if (query === 'ai' || query === 'ml') {
        matches = matches || ['llms', 'rag systems', 'semantic search', 'nlp', 'deep learning', 'pytorch', 'tensorflow', 'opencv', 'vector dbs', 'genai', 'langchain'].includes(name);
      } else if (query === 'backend' || query === 'api') {
        matches = matches || ['fastapi', 'flask', 'python', 'mongodb', 'apis'].includes(name);
      } else if (query === 'rag' || query === 'search') {
        matches = matches || ['rag systems', 'semantic search', 'vector dbs', 'langchain'].includes(name);
      } else if (query === 'vision' || query === 'ocr') {
        matches = matches || ['opencv', 'ocr & vision'].includes(name);
      }
      
      n.highlighted = matches;
      n.glowScale = matches ? 1.8 : 0.6; // De-emphasize non-matches
    });
  }, [activeQuery]);

  // Main canvas animation loops
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const fov = 350; // Camera field of view / depth perspective

    const rotateX = (node, angle) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const y1 = node.y * cos - node.z * sin;
      const z1 = node.z * cos + node.y * sin;
      node.y = y1;
      node.z = z1;
    };

    const rotateY = (node, angle) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const x1 = node.x * cos - node.z * sin;
      const z1 = node.z * cos + node.x * sin;
      node.x = x1;
      node.z = z1;
    };

    const render = () => {
      // Clear canvas
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);
      
      const cx = dimensions.width / 2;
      const cy = dimensions.height / 2;

      // Apply rotation drift or dragging speed
      if (!isDragging.current) {
        angles.current.x *= decay;
        angles.current.y *= decay;
        
        // Add a gentle default drift rotation
        rotateX({ y: 0, z: 0 }, 0.001); // Just coordinate helpers
        nodesRef.current.forEach(node => {
          rotateX(node, angles.current.x + 0.002);
          rotateY(node, angles.current.y + 0.0025);
        });
      } else {
        nodesRef.current.forEach(node => {
          rotateX(node, angles.current.x);
          rotateY(node, angles.current.y);
        });
        // Dampen drag velocity slightly
        angles.current.x *= 0.85;
        angles.current.y *= 0.85;
      }

      // Sort nodes by depth (z-index) so that back nodes render behind front nodes
      const projectedNodes = nodesRef.current.map((node, index) => {
        const scale = fov / (fov + node.z);
        const px = node.x * scale + cx;
        const py = node.y * scale + cy;
        return {
          ...node,
          px,
          py,
          scale,
          origIndex: index,
        };
      });

      // Render Connections
      CONNECTIONS.forEach(([iA, iB]) => {
        const nA = projectedNodes.find(n => n.origIndex === iA);
        const nB = projectedNodes.find(n => n.origIndex === iB);
        if (!nA || !nB) return;

        // Calculate opacity based on average depth (z)
        const avgZ = (nA.z + nB.z) / 2;
        let opacity = Math.max(0.05, 1 - (avgZ + 150) / 300);
        
        // If a query is active, dim lines that don't connect highlighted nodes
        if (activeQuery) {
          if (nA.highlighted && nB.highlighted) {
            opacity = 0.8;
          } else {
            opacity = 0.05;
          }
        }

        ctx.beginPath();
        ctx.moveTo(nA.px, nA.py);
        ctx.lineTo(nB.px, nB.py);
        
        // Glow effect for active queries
        if (activeQuery && nA.highlighted && nB.highlighted) {
          ctx.strokeStyle = COLORS.primaryBlue;
          ctx.lineWidth = 1.8;
        } else {
          ctx.strokeStyle = `rgba(170, 205, 220, ${opacity * 0.25})`;
          ctx.lineWidth = 0.8;
        }
        ctx.stroke();
      });

      // Render Nodes (sorted back to front)
      const sortedProjected = [...projectedNodes].sort((a, b) => b.z - a.z);

      sortedProjected.forEach((node) => {
        const { px, py, scale, size, color, highlighted, glowScale = 1 } = node;
        
        // Skip nodes off canvas boundaries
        if (px < 0 || px > dimensions.width || py < 0 || py > dimensions.height) return;

        // Determine size and alpha based on depth scale
        const renderSize = Math.max(2, size * scale * glowScale);
        const alpha = Math.max(0.15, Math.min(1, scale * 1.2 * (highlighted ? 1 : 0.6)));

        // Outer glow
        ctx.beginPath();
        ctx.arc(px, py, renderSize * 2.2, 0, Math.PI * 2);
        
        if (highlighted) {
          ctx.fillStyle = 'rgba(129, 166, 198, 0.25)';
        } else if (node.isCore) {
          ctx.fillStyle = 'rgba(243, 227, 208, 0.15)';
        } else {
          ctx.fillStyle = 'rgba(170, 205, 220, 0.06)';
        }
        ctx.fill();

        // Inner solid node
        ctx.beginPath();
        ctx.arc(px, py, renderSize, 0, Math.PI * 2);
        
        let nodeFillColor = color;
        if (highlighted) {
          nodeFillColor = `rgba(129, 166, 198, ${alpha})`;
        } else {
          // Adjust transparency based on depth alpha
          if (color.startsWith('rgba')) {
            const rgbPart = color.substring(5, color.lastIndexOf(','));
            nodeFillColor = `rgba(${rgbPart}, ${alpha})`;
          }
        }
        
        ctx.fillStyle = nodeFillColor;
        ctx.fill();

        // Draw node title if mouse is near or if it is core node
        const isHovered = hoveredNode && hoveredNode.origIndex === node.origIndex;
        if (isHovered || node.isCore || (highlighted && activeQuery)) {
          ctx.fillStyle = isHovered ? '#fff' : 'rgba(243, 227, 208, 0.9)';
          ctx.font = isHovered 
            ? '600 12px Outfit, sans-serif' 
            : `${node.isCore ? '600' : '400'} 10px Outfit, sans-serif`;
          ctx.textAlign = 'center';
          ctx.fillText(node.name, px, py - renderSize - 8);
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [dimensions, hoveredNode, activeQuery]);

  // Handle Mouse Dragging (rotation)
  const handleMouseDown = (e) => {
    isDragging.current = true;
    previousMousePosition.current = {
      x: e.clientX,
      y: e.clientY,
    };
  };

  const handleMouseMove = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    if (isDragging.current) {
      const deltaX = e.clientX - previousMousePosition.current.x;
      const deltaY = e.clientY - previousMousePosition.current.y;
      
      // Update rotation speeds based on drag distance
      angles.current.y = deltaX * dragSpeed;
      angles.current.x = -deltaY * dragSpeed;

      previousMousePosition.current = {
        x: e.clientX,
        y: e.clientY,
      };
    } else {
      // Handle Hover detection
      const cx = dimensions.width / 2;
      const cy = dimensions.height / 2;
      const fov = 350;

      let closestNode = null;
      let minDistance = 15; // Hover detection radius in pixels

      nodesRef.current.forEach((node, index) => {
        const scale = fov / (fov + node.z);
        const px = node.x * scale + cx;
        const py = node.y * scale + cy;

        const distance = Math.hypot(mx - px, my - py);
        if (distance < minDistance) {
          minDistance = distance;
          closestNode = { ...node, origIndex: index };
        }
      });

      setHoveredNode(closestNode);
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <div ref={containerRef} className="hero-visual-space glass-panel" style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
      <canvas
        ref={canvasRef}
        className="vector-space-canvas"
        width={dimensions.width}
        height={dimensions.height}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      />
      <div className="canvas-instructions">
        Drag to rotate semantic map • Hover nodes to explore skills
      </div>
    </div>
  );
};

export default SemanticCanvas;
