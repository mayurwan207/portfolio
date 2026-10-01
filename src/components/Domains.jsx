import React, { useState } from 'react';
import { Server, Database, Globe, Cpu, GitBranch, Layers } from 'lucide-react';

export default function Domains() {
  const [activeCategory, setActiveCategory] = useState('All');

  const domains = [
    {
      icon: '⚡',
      badge: 'Core Backend',
      title: 'Backend Systems Engineering',
      desc: 'Building scalable server-side architectures, clean RESTful APIs, and mission-critical application workflows using Python and Django / Django REST Framework.',
      highlights: [
        'High-throughput RESTful endpoints & modular apps',
        'Robust auth workflows with JWT security & session handling',
        'Event-driven architecture & background task scheduling',
      ],
      tech: ['Python 3.10+', 'Django', 'Django REST', 'JWT'],
    },
    {
      icon: '🗄️',
      badge: 'Data Architecture',
      title: 'Database Architecture & Optimization',
      desc: 'Designing normalized relational schemas, query tuning, indexing strategies, distributed reservation locking, and multi-table modeling with PostgreSQL & SQL engines.',
      highlights: [
        'Distributed row-level resource locking in PostgreSQL',
        'Elimination of race conditions in high-concurrency booking',
        'ACID transactions, schema migrations & query optimization',
      ],
      tech: ['PostgreSQL', 'MySQL', 'SQLite', 'Query Optimization'],
    },
    {
      icon: '🗺️',
      badge: 'Geospatial',
      title: 'Geospatial Analytics & Location Intelligence',
      desc: 'Developing spatial data pipelines, streaming location analytics, Kernel Density Estimation (KDE) footfall heatmaps, and multi-factor site scoring engines.',
      highlights: [
        'Satellite data fusion via Google Earth Engine APIs',
        'OSRM routing & GraphHopper accessibility scoring',
        'KDE footfall aggregation and live OpenStreetMap integration',
      ],
      tech: ['Google Earth Engine', 'OSRM Engine', 'GraphHopper', 'Leaflet', 'KDE'],
    },
    {
      icon: '🤖',
      badge: 'Applied ML',
      title: 'Applied Machine Learning & Predictive Modeling',
      desc: 'End-to-end ML pipeline engineering—including feature engineering, log transformations, ensemble learning (XGBoost, Random Forest, CNNs), and model deployment.',
      highlights: [
        'Outlier filtering (IQR) & skewed distribution normalization',
        'Automated hyperparameter tuning with Optuna',
        'Model serialization with Joblib & lightweight Vercel deployment',
      ],
      tech: ['Scikit-learn', 'XGBoost', 'Random Forest', 'CNNs', 'Optuna', 'Pandas'],
    },
    {
      icon: '🌲',
      badge: 'Algorithms',
      title: 'Algorithmic Problem Solving & DSA',
      desc: 'Applying data structures and graph/tree algorithms (e.g., Dijkstra\'s algorithm for pathfinding, Huffman coding prefix trees, and OSRM routing engines) to solve complex system design problems.',
      highlights: [
        'Min-heap priority queues & greedy prefix-free tree visualizers',
        'Graph shortest-path modeling and live tracking simulation',
        'Active problem solving across LeetCode and Code360',
      ],
      tech: ['C++', 'Python', 'Graph Search', 'Dijkstra\'s', 'Min-Heaps'],
    },
  ];

  const techCategories = [
    {
      name: 'Languages',
      tags: [
        { label: 'Python 3.10+', primary: true },
        { label: 'C++' },
        { label: 'JavaScript (ES6+)' },
        { label: 'SQL' },
        { label: 'HTML5' },
        { label: 'CSS3' },
      ],
    },
    {
      name: 'Backend Frameworks & APIs',
      tags: [
        { label: 'Django', primary: true },
        { label: 'Django REST Framework', primary: true },
        { label: 'FastAPI', primary: true },
        { label: 'WebSockets' },
        { label: 'JWT Authentication' },
        { label: 'Supabase Auth (RBAC)' },
      ],
    },
    {
      name: 'Machine Learning & Data Science',
      tags: [
        { label: 'Scikit-learn', primary: true },
        { label: 'XGBoost', primary: true },
        { label: 'CNNs (Spatial Rasters)' },
        { label: 'Pandas' },
        { label: 'NumPy' },
        { label: 'Matplotlib' },
        { label: 'Seaborn' },
        { label: 'Optuna' },
      ],
    },
    {
      name: 'Frontend, UI & 3D Graphics',
      tags: [
        { label: 'React', primary: true },
        { label: 'Tailwind CSS' },
        { label: 'Three.js', primary: true },
        { label: 'OrbitControls' },
        { label: 'Glassmorphism UI' },
      ],
    },
    {
      name: 'Geospatial & Data Pipelines',
      tags: [
        { label: 'Google Earth Engine APIs', primary: true },
        { label: 'OpenStreetMap' },
        { label: 'GraphHopper' },
        { label: 'OSRM Routing Engine' },
        { label: 'Leaflet' },
        { label: 'Kernel Density Estimation (KDE)' },
        { label: 'Apache Kafka' },
      ],
    },
    {
      name: 'Databases & Storage',
      tags: [
        { label: 'PostgreSQL', primary: true },
        { label: 'Supabase', primary: true },
        { label: 'SQLite' },
        { label: 'MySQL' },
        { label: 'Distributed Reservation Locking' },
      ],
    },
    {
      name: 'Deployment & Serialization',
      tags: [
        { label: 'Vercel' },
        { label: 'Netlify' },
        { label: 'Hostinger (DNS Management)' },
        { label: 'Joblib' },
        { label: 'Pickle' },
      ],
    },
    {
      name: 'Competitive DSA & Tools',
      tags: [
        { label: 'LeetCode (@Mayu_coder)', primary: true },
        { label: 'Code360' },
        { label: 'Git & GitHub' },
        { label: 'VS Code' },
        { label: 'PyCharm' },
        { label: 'Jupyter Notebook' },
        { label: 'GPU Architecture / CUDA Concepts' },
      ],
    },
  ];

  const categoryNames = ['All', ...techCategories.map((c) => c.name)];

  const filteredCategories =
    activeCategory === 'All'
      ? techCategories
      : techCategories.filter((c) => c.name === activeCategory);

  return (
    <section id="domains" className="section domains-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">CORE COMPETENCIES</span>
          <h2 className="section-title">Specialized Domains &amp; Technical Capabilities</h2>
          <p className="section-subtitle">
            Engineered server-side systems, optimized relational schemas, and applied algorithmic workflows.
          </p>
        </div>

        {/* 5 Domain Cards */}
        <div className="domains-grid">
          {domains.map((dom, idx) => (
            <div key={idx} className="domain-card glass-panel">
              <div className="domain-top">
                <div className="domain-icon-box">{dom.icon}</div>
                <span className="domain-badge">{dom.badge}</span>
              </div>
              <h3 className="domain-title">{dom.title}</h3>
              <p className="domain-desc">{dom.desc}</p>
              <ul className="domain-highlights">
                {dom.highlights.map((h, hIdx) => (
                  <li key={hIdx}>{h}</li>
                ))}
              </ul>
              <div className="domain-tech-pills">
                {dom.tech.map((t, tIdx) => (
                  <span key={tIdx}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Full Technical Stack Breakdown Card */}
        <div className="tech-stack-container glass-panel">
          <div className="tech-stack-header">
            <div>
              <h3 className="tech-box-title">Technical Stack &amp; Platforms</h3>
              <span className="tech-box-sub">
                Comprehensive toolkit spanning languages, frameworks, data pipelines, and hardware concepts
              </span>
            </div>

            {/* Interactive Category Filter Pills */}
            <div className="tech-filter-bar">
              {categoryNames.map((name) => (
                <button
                  key={name}
                  className={`tech-filter-btn ${activeCategory === name ? 'active' : ''}`}
                  onClick={() => setActiveCategory(name)}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>

          <div className="tech-categories-grid">
            {filteredCategories.map((cat, idx) => (
              <div key={idx} className="tech-cat-item">
                <span className="cat-name">{cat.name}</span>
                <div className="pill-group">
                  {cat.tags.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className={`tech-tag ${t.primary ? 'primary-tag' : ''}`}
                    >
                      {t.label}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
