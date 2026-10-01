import React from 'react';
import { Mail, MapPin, Code, Github, Linkedin, ExternalLink, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="section-container">
        <div className="contact-card glass-panel">
          <div className="contact-header">
            <span className="section-tag">GET IN TOUCH</span>
            <h2 className="section-title">Let's Discuss Systems, Data &amp; Opportunities</h2>
            <p className="section-subtitle">
              Whether you are looking to hire a backend developer, collaborate on hackathons, or discuss database architecture—reach out directly via email or professional profiles.
            </p>
          </div>

          <div className="contact-layout-clean">
            {/* 3 Primary Info Cards */}
            <div className="contact-info-cards-grid">
              <div className="info-card-item glass-panel-inner">
                <div className="info-icon-box">
                  <Mail size={22} />
                </div>
                <div className="info-card-content">
                  <span className="info-label">Direct Email</span>
                  <a href="mailto:mayureshwankhade968@gmail.com" className="info-val info-link">
                    mayureshwankhade968@gmail.com
                  </a>
                </div>
              </div>

              <div className="info-card-item glass-panel-inner">
                <div className="info-icon-box">
                  <MapPin size={22} />
                </div>
                <div className="info-card-content">
                  <span className="info-label">Location</span>
                  <span className="info-val">Pune, Maharashtra, India</span>
                </div>
              </div>

              <div className="info-card-item glass-panel-inner">
                <div className="info-icon-box">
                  <Code size={22} />
                </div>
                <div className="info-card-content">
                  <span className="info-label">LeetCode Profile</span>
                  <a
                    href="https://leetcode.com/u/Mayu_coder/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="info-val info-link"
                  >
                    leetcode.com/u/Mayu_coder
                  </a>
                </div>
              </div>
            </div>

            {/* Professional Channels Row */}
            <div className="channels-section-box">
              <span className="channels-title">Developer &amp; Professional Profiles:</span>
              <div className="channels-row-grid">
                <a
                  href="https://github.com/mayurwan207"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-card"
                >
                  <Github size={20} />
                  <span>GitHub (@mayurwan207)</span>
                  <ExternalLink size={14} className="channel-ext" />
                </a>

                <a
                  href="https://linkedin.com/in/mayuresh-wankhade"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-card"
                >
                  <Linkedin size={20} />
                  <span>LinkedIn (Mayuresh Wankhade)</span>
                  <ExternalLink size={14} className="channel-ext" />
                </a>

                <a
                  href="https://leetcode.com/u/Mayu_coder/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-card"
                >
                  <Code size={20} />
                  <span>LeetCode (@Mayu_coder)</span>
                  <ExternalLink size={14} className="channel-ext" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
