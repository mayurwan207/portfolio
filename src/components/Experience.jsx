import React from 'react';
import { Award, ShieldCheck, Zap, Sprout, Music } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'SY Coordinator — ACM-W Student Chapter',
      org: 'Pimpri Chinchwad College of Engineering (PCCOE)',
      badge: 'Campus Leadership',
      points: [
        'Lead technical event operations, logistics execution, and financial management with strict zero-deficit targets.',
        'Organized university-wide technical workshops, hackathons, and departmental coding initiatives for student developers.',
        'Coordinated team logistics, participant engagement, and sponsorship communications.',
      ],
    },
    {
      role: 'Operations & Financial Tracking Support',
      org: 'Vehicle Finance Operations',
      badge: 'Operations & Auditing',
      points: [
        'Handled workflow tracking, document verification, and operational financial record auditing with zero-discrepancy standards.',
        'Maintained structured transactional data integrity and reconciliation pipelines.',
      ],
    },
  ];

  const interests = [
    {
      icon: <Zap size={20} className="interest-ic" />,
      name: 'High-Performance Computing',
      text: 'Deep learning hardware pipelines, NVIDIA GPU architecture, and neural networks.',
    },
    {
      icon: <Sprout size={20} className="interest-ic" />,
      name: 'Entrepreneurship — Neevati',
      text: 'Tech concept development for an AgriTech and rural development platform.',
    },
    {
      icon: <Music size={20} className="interest-ic" />,
      name: 'Personal Pursuits',
      text: 'Guitar playing, football, and open-road motorcycle riding.',
    },
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">LEADERSHIP &amp; ROLES</span>
          <h2 className="section-title">Leadership &amp; Professional Experience</h2>
          <p className="section-subtitle">
            Executing operations, technical event management, and precision tracking.
          </p>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, idx) => (
            <div key={idx} className="timeline-item glass-panel">
              <div className="timeline-marker" />
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-role">{exp.role}</h3>
                  <span className="timeline-org">{exp.org}</span>
                </div>
                <span className="timeline-badge">{exp.badge}</span>
              </div>
              <div className="timeline-body">
                <p className="timeline-desc">Key contributions and responsibilities:</p>
                <ul className="timeline-points">
                  {exp.points.map((p, pIdx) => (
                    <li key={pIdx}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Interests & Endeavors Strip */}
        <div className="interests-banner glass-panel">
          <div className="interests-header">
            <span className="interests-tag">🎯 INTERESTS &amp; PERSONAL ENDEAVORS</span>
            <h3 className="interests-title">Beyond Core Engineering</h3>
          </div>
          <div className="interests-grid">
            {interests.map((item, idx) => (
              <div key={idx} className="interest-box">
                <div className="interest-icon-wrap">{item.icon}</div>
                <div className="interest-content">
                  <span className="interest-name">{item.name}</span>
                  <p className="interest-text">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
