import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
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
        <a href="#home" className="brand-logo" aria-label="Mayuresh Wankhade Home">
          <div className="logo-mark">
            <span className="logo-avatar-text">MW</span>
          </div>
          <div className="brand-info">
            <span className="brand-name">Mayuresh Wankhade</span>
            <span className="brand-role-tag">Backend &amp; Database Systems</span>
          </div>
        </a>

        {/* Nav Pill Menu */}
        <nav className="nav-pill-menu" aria-label="Main Navigation">
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

        {/* Action CTA */}
        <div className="nav-action">
          <a href="#contact" className="btn-talk">
            <span>Let's Connect</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </header>
  );
}
