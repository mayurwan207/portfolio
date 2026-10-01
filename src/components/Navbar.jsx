import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'domains', label: 'Domains & Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'algorithms', label: 'DSA & ML' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className={`top-nav ${scrolled ? 'nav-scrolled' : ''}`} id="topNav">
      <div className="nav-container">
        {/* Brand Logo */}
        <a href="#home" className="brand-logo" aria-label="Mayuresh Wankhade Home" onClick={handleNavClick}>
          <div className="logo-mark">
            <span className="logo-avatar-text">MW</span>
          </div>
          <div className="brand-info">
            <span className="brand-name">Mayuresh Wankhade</span>
            <span className="brand-role-tag">Backend &amp; Database Systems</span>
          </div>
        </a>

        {/* Desktop Nav Pill Menu */}
        <nav className="nav-pill-menu desktop-only" aria-label="Main Navigation">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Group: Action CTA & Mobile Hamburger Button */}
        <div className="nav-right-group">
          <div className="nav-action desktop-only">
            <a href="#contact" className="btn-talk">
              <span>Let's Connect</span>
              <ArrowRight size={16} />
            </a>
          </div>

          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
            type="button"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown for Android / Mobile screens */}
      <div className={`mobile-nav-dropdown ${mobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav-links">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={handleNavClick}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mobile-nav-link mobile-cta-link"
            onClick={handleNavClick}
          >
            <span>Let's Connect</span>
            <ArrowRight size={16} />
          </a>
        </nav>
      </div>
    </header>
  );
}
