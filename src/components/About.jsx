import React from 'react';
import { GraduationCap, Rocket } from 'lucide-react';

export default function About() {
  const stats = [
    {
      num: 'Top 60',
      label: 'Global Finalist — AI4SDG 2026 Hackathon',
      sub: 'PulseNet-GIS emergency referral engine ranked among top 60 global teams.',
    },
    {
      num: '38.8k+',
      label: 'Emergency Records Analyzed',
      sub: 'Analyzed Maharashtra MEMS transfer data to uncover 222.8 min delays.',
    },
    {
      num: '100+',
      label: 'Feature Pipeline Engineered',
      sub: 'StoreSight AI: satellite rasters, KDE heatmaps & GraphHopper scores.',
    },
    {
      num: '0.91 R²',
      label: 'Production ML Precision',
      sub: 'PropertyIQ: tuned XGBoost model predicting Mumbai real estate valuations.',
    },
  ];

  const courses = [
    'Data Structures & Algorithms',
    'Database Management Systems',
    'Computer Organization',
    'Web Engineering',
    'Digital Electronics',
  ];

  return (
    <section id="about" className="section about-section">
      <div className="section-container">
        <div className="section-header">
          <span class="section-tag">ENGINEERING PROFILE</span>
          <h2 className="section-title">Bridging Systems, Schemas &amp; Algorithms</h2>
          <p className="section-subtitle">
            Computer Engineering student at Pimpri Chinchwad College of Engineering (PCCOE), Pune.
          </p>
        </div>

        <div className="about-grid">
          {/* Main Narrative Card */}
          <div className="about-card glass-panel">
            <div className="card-pill-heading">
              <span className="domain-icon">🚀</span>
              <h3 className="card-title">Professional Summary</h3>
            </div>
            <p className="card-text">
              I am a Computer Engineering student at <strong>Pimpri Chinchwad College of Engineering (PCCOE), Pune</strong>, specializing in <strong>Python backend engineering, database architecture, and applied system design</strong>. I build reliable, production-ready backend systems—ranging from real-time geospatial dispatch networks to full-stack analytical platforms and ML pipelines. My core focus lies in engineering robust RESTful and WebSocket APIs, optimizing relational schemas in PostgreSQL/Supabase, and implementing distributed locking to prevent concurrency race conditions.
            </p>
            <p className="card-text">
              Alongside backend engineering, I apply <strong>Data Structures and Algorithms (DSA)</strong> to solve practical infrastructure problems—including route optimization via Dijkstra’s algorithm and OSRM engines, greedy prefix-tree data compression, and 3D linear algebra state simulations. I actively hone my algorithmic problem-solving on <strong>LeetCode</strong> (<a href="https://leetcode.com/u/Mayu_coder/" target="_blank" rel="noopener noreferrer" className="text-link">@Mayu_coder</a>) and <strong>Code360</strong>.
            </p>

            <div className="edu-card-inline">
              <div className="edu-icon-badge">
                <GraduationCap size={24} />
              </div>
              <div className="edu-details">
                <span className="edu-degree">Bachelor of Technology (B.Tech) in Computer Engineering</span>
                <span className="edu-college">Pimpri Chinchwad College of Engineering (PCCOE), Nigdi, Pune</span>
                <div className="course-tags">
                  {courses.map((course, idx) => (
                    <span key={idx} className="course-tag">{course}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Numerical Impact & Stats Grid */}
          <div className="stats-grid">
            {stats.map((stat, idx) => (
              <div key={idx} className="stat-card glass-panel">
                <span className="stat-num">{stat.num}</span>
                <span className="stat-label">{stat.label}</span>
                <p className="stat-sub">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
