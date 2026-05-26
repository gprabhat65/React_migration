import React from 'react';

const Footer = () => {
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.getElementById(href.substring(1));
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="footer-bg">
      <div className="footer-inner">
        <div className="footer-info">
          <div className="footer-logo">
            <span className="text-gradient">Prabhat Kumar Gupta</span>
          </div>
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} Prabhat Kumar Gupta. All rights reserved.
          </div>
        </div>

        <ul className="footer-nav">
          <li><a href="#home" onClick={(e) => handleLinkClick(e, '#home')}>Home</a></li>
          <li><a href="#about" onClick={(e) => handleLinkClick(e, '#about')}>About</a></li>
          <li><a href="#skills" onClick={(e) => handleLinkClick(e, '#skills')}>Skills</a></li>
          <li><a href="#experience" onClick={(e) => handleLinkClick(e, '#experience')}>Experience</a></li>
          <li><a href="#projects" onClick={(e) => handleLinkClick(e, '#projects')}>Projects</a></li>
          <li><a href="#research" onClick={(e) => handleLinkClick(e, '#research')}>Research</a></li>
          <li><a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>Contact</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
