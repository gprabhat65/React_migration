import React, { useState, useEffect } from 'react';
import { Menu, X, Brain } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#research' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section highlighing logic
      const sections = navItems.map(item => document.getElementById(item.href.substring(1)));
      const scrollPosition = window.scrollY + 200;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(navItems[i].href.substring(1));
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    setIsMobileOpen(false);
  };

  return (
    <>
      <header className={`navbar-container ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          <a
            href="#home"
            className="navbar-logo"
            onClick={(e) => handleLinkClick(e, '#home')}
          >
            <span className="logo-symbol">&lt;</span>

            <span className="logo-text">
              Prabhat
            </span>

            <span className="logo-symbol">/&gt;</span>
          </a>

          {/* Desktop Nav */}
          <nav>
            <ul className="navbar-links">
              {navItems.map((item) => (
                <li 
                  key={item.label} 
                  className={`navbar-link ${activeSection === item.href.substring(1) ? 'active' : ''}`}
                >
                  <a href={item.href} onClick={(e) => handleLinkClick(e, item.href)}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile toggle button */}
          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer menu */}
      {isMobileOpen && (
        <div 
          className="glass-panel" 
          style={{
            position: 'fixed',
            top: '70px',
            left: '16px',
            right: '16px',
            zIndex: 999,
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            animation: 'fadeInUp 0.3s ease-out',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              style={{
                color: activeSection === item.href.substring(1) ? 'var(--primary-blue)' : 'var(--warm-sand)',
                fontFamily: 'var(--font-headings)',
                fontSize: '1.1rem',
                textDecoration: 'none',
                padding: '8px 0',
                borderBottom: '1px solid rgba(170,205,220,0.06)',
                fontWeight: activeSection === item.href.substring(1) ? '600' : '400',
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
