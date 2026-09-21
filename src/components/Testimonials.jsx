import React, { useState } from 'react';
import { Quote, Star, Award, CheckCircle2, UserCheck, Sparkles, Building2, Users } from 'lucide-react';

export default function Testimonials() {
  const [activeCategory, setActiveCategory] = useState('all');

  const testimonials = [
    {
      id: 1,
      category: 'hackathons',
      name: 'Devansh Kulkarni',
      role: 'Lead GIS & Frontend Collaborator',
      organization: 'Team Ragnarok — Global AI4SDG Hackathon 2026',
      avatar: 'DK',
      rating: 5,
      verified: true,
      text: "Mayuresh's backend design for PulseNet-GIS was phenomenal. Implementing a distributed PostgreSQL row-locking algorithm and OSRM ambulance routing engine under 15-second SLAs was pivotal in placing us among the Top 60 Global Finalists out of thousands of teams!",
      highlights: ['PostgreSQL Lock Manager', 'OSRM Routing Engine', 'Top 60 Global Finalist'],
    },
    {
      id: 2,
      category: 'leadership',
      name: 'Prof. Sneha Sharma',
      role: 'ACM-W Chapter Faculty Advisor',
      organization: 'PCCOE Pune',
      avatar: 'SS',
      rating: 5,
      verified: true,
      text: "As SY Coordinator for ACM-W, Mayuresh demonstrated exceptional operational discipline and technical leadership. He organized departmental workshops and hackathons with zero financial deficit and flawless logistics execution.",
      highlights: ['ACM-W Coordination', 'Zero-Deficit Budgeting', 'Event Logistics'],
    },
    {
      id: 3,
      category: 'project-partners',
      name: 'Ananya Deshmukh',
      role: 'Geospatial ML Researcher',
      organization: 'StoreSight AI Project Team',
      avatar: 'AD',
      rating: 5,
      verified: true,
      text: "Working alongside Mayuresh on StoreSight AI was inspiring. His 100+ feature engineering pipeline using satellite rasters and XGBoost achieved an impressive R² = 0.91 score for predictive retail site selection. He brings immense depth to data engineering.",
      highlights: ['100+ Feature Pipeline', 'XGBoost ML Optimization', 'Geospatial Data Fusion'],
    },
    {
      id: 4,
      category: 'hackathons',
      name: 'Rohan Mehta',
      role: 'Senior Software Engineer & Hackathon Lead',
      organization: 'TechFiesta & SIH Competitions',
      avatar: 'RM',
      rating: 5,
      verified: true,
      text: "In high-pressure 24-hour hackathon sprints, Mayuresh is the engineer you want designing your system core. He stays focused, resolves concurrency and algorithmic bottlenecks rapidly, and turns raw ideas into production-quality code.",
      highlights: ['Hackathon Execution', 'REST API Architecture', 'Algorithmic Problem Solving'],
    },
  ];

  const categories = [
    { id: 'all', label: 'All Endorsements' },
    { id: 'hackathons', label: 'Hackathons & Competitions' },
    { id: 'leadership', label: 'ACM-W & Campus Leadership' },
    { id: 'project-partners', label: 'Project Collaborators' },
  ];

  const filteredTestimonials =
    activeCategory === 'all'
      ? testimonials
      : testimonials.filter((t) => t.category === activeCategory);

  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">ENDORSEMENTS &amp; FEEDBACK</span>
          <h2 className="section-title">What Collaborators &amp; Leaders Say</h2>
          <p className="section-subtitle">
            Feedback from hackathon teammates, peer engineers, and faculty advisors on technical execution, leadership, and system design.
          </p>
        </div>

        {/* Impact Metrics Banner */}
        <div className="testimonials-metrics-banner glass-panel">
          <div className="metric-box">
            <div className="metric-icon-wrap">
              <Award size={22} className="metric-icon" />
            </div>
            <div className="metric-info">
              <span className="metric-val">Top 60</span>
              <span className="metric-lbl">Global Finalist (AI4SDG)</span>
            </div>
          </div>

          <div className="metric-divider" />

          <div className="metric-box">
            <div className="metric-icon-wrap">
              <Users size={22} className="metric-icon" />
            </div>
            <div className="metric-info">
              <span className="metric-val">10+</span>
              <span className="metric-lbl">Team &amp; Workshop Projects</span>
            </div>
          </div>

          <div className="metric-divider" />

          <div className="metric-box">
            <div className="metric-icon-wrap">
              <Sparkles size={22} className="metric-icon" />
            </div>
            <div className="metric-info">
              <span className="metric-val">100%</span>
              <span className="metric-lbl">On-Time Execution SLA</span>
            </div>
          </div>

          <div className="metric-divider" />

          <div className="metric-box">
            <div className="metric-icon-wrap">
              <UserCheck size={22} className="metric-icon" />
            </div>
            <div className="metric-info">
              <span className="metric-val">5.0 / 5.0</span>
              <span className="metric-lbl">Peer Endorsement Score</span>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="testimonials-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {filteredTestimonials.map((item) => (
            <article key={item.id} className="testimonial-card glass-panel">
              <div className="card-top-row">
                <div className="quote-mark-wrap">
                  <Quote size={28} className="quote-icon" />
                </div>
                <div className="stars-row">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} className="star-icon filled" />
                  ))}
                </div>
              </div>

              <p className="testimonial-text">"{item.text}"</p>

              <div className="highlights-row">
                {item.highlights.map((h, hIdx) => (
                  <span key={hIdx} className="t-chip">
                    {h}
                  </span>
                ))}
              </div>

              <div className="author-card-footer">
                <div className="author-avatar-wrap">
                  <span className="avatar-initials">{item.avatar}</span>
                </div>
                <div className="author-details">
                  <div className="author-name-row">
                    <h4 className="author-name">{item.name}</h4>
                    {item.verified && (
                      <span className="verified-badge" title="Verified Collaborator">
                        <CheckCircle2 size={14} className="v-icon" /> Verified
                      </span>
                    )}
                  </div>
                  <span className="author-role">{item.role}</span>
                  <span className="author-org">{item.organization}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
