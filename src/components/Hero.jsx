import React from 'react';
import { ArrowRight, Mail, MapPin, Trophy, ExternalLink, Github, Linkedin, Code } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-subject-space"></div>

        <div className="hero-content">
          {/* Availability Badge */}
          <div className="status-badge">
            <span className="status-dot"></span>
            <span className="status-text">OPEN FOR BACKEND &amp; ML OPPORTUNITIES</span>
          </div>

          {/* Main Heading */}
          <h1 className="hero-title">
            Hi, I'm <span className="highlight-name">Mayuresh.</span>
          </h1>

          {/* Role Subtitle */}
          <p className="hero-subtitle">
            PYTHON &amp; DJANGO/FASTAPI DEVELOPER | DATABASE ARCHITECTURE &amp; SPATIAL DATA SYSTEMS
          </p>

          {/* Core Value Statement */}
          <p className="hero-description">
            Computer Engineering student at <strong>PCCOE Pune</strong> specializing in backend engineering, distributed locking in PostgreSQL/Supabase, real-time geospatial dispatch networks, and applied ML pipelines.
          </p>

          {/* Quick Metadata Pills */}
          <div className="hero-meta-pills">
            <div className="meta-pill">
              <MapPin size={14} />
              <span>Pune, Maharashtra, India</span>
            </div>
            <a
              href="https://leetcode.com/u/Mayu_coder/"
              target="_blank"
              rel="noopener noreferrer"
              className="meta-pill meta-link-pill"
            >
              <Code size={14} />
              <span>LeetCode: @Mayu_coder</span>
              <ExternalLink size={12} className="external-ic" />
            </a>
            <div className="meta-pill">
              <span className="pill-trophy">🏆</span>
              <span>Top 60 Global Finalist (AI4SDG)</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              <span>View Featured Projects</span>
              <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn-secondary">
              <Mail size={18} />
              <span>Contact Mayuresh</span>
            </a>
          </div>

          {/* Direct Profile Social Bar */}
          <div className="hero-social-row">
            <span className="social-row-label">Connect:</span>
            <a
              href="https://github.com/mayurwan207"
              target="_blank"
              rel="noopener noreferrer"
              className="social-chip"
              title="GitHub Profile"
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/mayuresh-wankhade"
              target="_blank"
              rel="noopener noreferrer"
              className="social-chip"
              title="LinkedIn Profile"
            >
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://leetcode.com/u/Mayu_coder/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-chip"
              title="LeetCode Profile"
            >
              <Code size={16} />
              <span>LeetCode</span>
            </a>
            <a
              href="mailto:mayureshwankhade968@gmail.com"
              className="social-chip"
              title="Email Mayuresh"
            >
              <Mail size={16} />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Hint */}
      <div className="hero-scroll-cue">
        <span className="cue-label">Scroll to explore portfolio</span>
        <div className="cue-icon">
          <div className="cue-wheel"></div>
        </div>
      </div>
    </section>
  );
}
