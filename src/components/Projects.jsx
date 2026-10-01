import React from 'react';
import { ExternalLink, Award, Sparkles, Activity, Box, Cpu } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">PROVEN IMPACT</span>
          <h2 className="section-title">Featured Hackathons &amp; Engineering Projects</h2>
          <p className="section-subtitle">
            From global hackathon finalists and quantum 3D physics simulators to industrial calculation engines.
          </p>
        </div>

        <div className="projects-vertical-stack">
          {/* PROJECT 1: PulseNet-GIS */}
          <article className="featured-project-card glass-panel" id="pulsenet">
            <div className="project-header-row">
              <div className="project-title-area">
                <div className="project-status-pills">
                  <span className="status-chip chip-gold">
                    <Award size={14} className="chip-ic" /> Top 60 Global Finalist
                  </span>
                  <span className="status-chip">
                    Innovate 4 Impact: AI4SDG Global Hackathon 2026
                  </span>
                  <span className="status-chip chip-team">Team Leader: Team Ragnarok</span>
                </div>
                <h3 className="featured-project-name">1. PulseNet-GIS — Real-Time GIS Emergency Routing &amp; Resource Coordination</h3>
              </div>
            </div>

            {/* Problem & Impact Banner */}
            <div className="problem-impact-box">
              <div className="impact-indicator">
                <span className="impact-label">Real-World Problem &amp; Data Insight:</span>
                <p className="impact-text">
                  Analyzed <strong>38,823 Maharashtra MEMS ambulance transfer records</strong> revealing that <strong>58.3% of transfers were PHC-to-Hospital transfers</strong> with an average transfer delay of <strong>222.8 minutes</strong> due to uncoordinated referrals into full or under-equipped hospitals.
                </p>
              </div>
            </div>

            {/* Architecture Breakdown Grid */}
            <div className="arch-pillars-grid">
              <div className="arch-pillar">
                <div className="pillar-header">
                  <span className="pillar-num">01</span>
                  <h4 className="pillar-title">Live Matching Engine</h4>
                </div>
                <p className="pillar-desc">
                  Dynamically evaluates and ranks receiving hospitals based on distance, traffic-adjusted OSRM ETA, and critical live inventory (ICU beds, oxygen, blood, specialists).
                </p>
              </div>

              <div className="arch-pillar">
                <div className="pillar-header">
                  <span className="pillar-num">02</span>
                  <h4 className="pillar-title">Distributed Asset Locking</h4>
                </div>
                <p className="pillar-desc">
                  Database-level reservation locks in PostgreSQL/Supabase temporarily reserve ICU beds and ventilators during active dispatch, preventing race conditions and double-allocations.
                </p>
              </div>

              <div className="arch-pillar">
                <div className="pillar-header">
                  <span className="pillar-num">03</span>
                  <h4 className="pillar-title">WebSockets &amp; Routing Engine</h4>
                </div>
                <p className="pillar-desc">
                  Streams live GPS coordinates and pre-arrival alerts via WebSockets, utilizing OSRM for dynamic ETA matrix calculations and 15-second cascading driver notifications.
                </p>
              </div>
            </div>

            <div className="project-footer-row">
              <div className="project-tech-chips">
                <span className="pt-chip">Python</span>
                <span className="pt-chip">FastAPI</span>
                <span className="pt-chip">React</span>
                <span className="pt-chip">Tailwind CSS</span>
                <span className="pt-chip">PostgreSQL</span>
                <span className="pt-chip">Supabase Auth</span>
                <span className="pt-chip">WebSockets</span>
                <span className="pt-chip">OSRM Engine</span>
                <span className="pt-chip">Leaflet</span>
              </div>
              <div className="project-links" style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
                <a
                  href="https://pulsenet-gis.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-project-link"
                >
                  <span>Open Live App</span>
                  <ExternalLink size={14} />
                </a>
                <span className="meta-link-label">pulsenet-gis.vercel.app</span>
                <span className="badge-accent">Global Finalist Project</span>
              </div>
            </div>
          </article>

          {/* PROJECT 2: StoreSight AI */}
          <article className="featured-project-card glass-panel" id="storesight">
            <div className="project-header-row">
              <div className="project-title-area">
                <div className="project-status-pills">
                  <span className="status-chip chip-gold">
                    <Sparkles size={14} className="chip-ic" /> Idea Inception 2025 (PCCOE)
                  </span>
                  <span className="status-chip">Category: Business Proposition &amp; Software Solution</span>
                  <span className="status-chip chip-team">Team: Team PCCOE</span>
                </div>
                <h3 className="featured-project-name">2. StoreSight AI — Predictive Retail Site Selection &amp; Spatial Intelligence</h3>
              </div>
            </div>

            {/* Problem & Impact Banner */}
            <div className="problem-impact-box">
              <div className="impact-indicator">
                <span className="impact-label">Market Problem &amp; Impact:</span>
                <p className="impact-text">
                  Targeted the steep <strong>40–60% failure rate</strong> among first-time shop owners and small retail chains in India's retail sector who rely on guesswork for site selection, causing <strong>15–25% rent overpayments</strong> and premature business closures.
                </p>
              </div>
            </div>

            {/* Architecture Breakdown Grid */}
            <div className="arch-pillars-grid">
              <div className="arch-pillar">
                <div className="pillar-header">
                  <span className="pillar-num">01</span>
                  <h4 className="pillar-title">Hyper-local Data Fusion</h4>
                </div>
                <p className="pillar-desc">
                  Aggregates satellite imagery (Google Earth Engine), mobile footfall indicators, municipal zoning maps, and OpenStreetMap / Google Places POI density.
                </p>
              </div>

              <div className="arch-pillar">
                <div className="pillar-header">
                  <span className="pillar-num">02</span>
                  <h4 className="pillar-title">100+ Feature Pipeline</h4>
                </div>
                <p className="pillar-desc">
                  Computes pedestrian density heatmaps via Kernel Density Estimation (KDE), accessibility proximity scores via GraphHopper, and commercial rent proxies.
                </p>
              </div>

              <div className="arch-pillar">
                <div className="pillar-header">
                  <span className="pillar-num">03</span>
                  <h4 className="pillar-title">Predictive Scoring Engine</h4>
                </div>
                <p className="pillar-desc">
                  Ensembles XGBoost (revenue prediction) and CNNs on geospatial rasters, outputting a 0–100 site score (40% footfall, 25% competition, 20% zoning, 15% growth) tuned via Optuna.
                </p>
              </div>
            </div>

            <div className="project-footer-row">
              <div className="project-tech-chips">
                <span className="pt-chip">Python</span>
                <span className="pt-chip">Geospatial ML</span>
                <span className="pt-chip">XGBoost</span>
                <span className="pt-chip">CNNs</span>
                <span className="pt-chip">Apache Kafka</span>
                <span className="pt-chip">Google Earth Engine</span>
                <span className="pt-chip">GraphHopper</span>
                <span className="pt-chip">PostgreSQL</span>
                <span className="pt-chip">Optuna</span>
              </div>
              <div className="project-links">
                <span className="badge-accent">Geospatial AI Solution</span>
              </div>
            </div>
          </article>

          {/* PROJECT SUBGRID 1: Combustion Analyzer & QuantumSim */}
          <div className="projects-subgrid">
            {/* PROJECT 3: Combustion Air Requirement Analyzer */}
            <article className="project-card glass-panel" id="combustion">
              <div className="project-card-badge-row">
                <span className="mini-badge">Industrial Web App</span>
                <span className="mini-score">Stoichiometric Engine</span>
              </div>
              <h3 className="project-title">3. Combustion Air Requirement Analyzer</h3>
              <p className="project-desc">
                Industrial web application automating stoichiometric air and oxygen calculations for chemical and thermal engineering fuel analysis.
              </p>

              <div className="project-mini-specs">
                <div className="spec-row">
                  <span className="spec-label">Calculation Engine:</span>
                  <span className="spec-val">Supports mass-based &amp; volume-based fuel inputs, accounting for excess air percentages and dynamic fuel compositions.</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Stoichiometry Logic:</span>
                  <span className="spec-val">Automatically subtracts pre-existing oxygen in fuel from total stoichiometric requirements to deliver net air metrics.</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Deployment:</span>
                  <span className="spec-val">Hosted at <strong>combustionanalyzer.in</strong> backed by Django &amp; PostgreSQL.</span>
                </div>
              </div>

              <div className="project-tech-chips mini-chips">
                <span className="pt-chip">Python</span>
                <span className="pt-chip">Django</span>
                <span className="pt-chip">PostgreSQL</span>
                <span className="pt-chip">HTML5 / CSS3</span>
                <span className="pt-chip">Stoichiometry</span>
              </div>

              <div className="project-action-bar">
                <a
                  href="https://combustionanalyzer.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-project-link"
                >
                  <span>Open Live App</span>
                  <ExternalLink size={14} />
                </a>
                <span className="meta-link-label">combustionanalyzer.in</span>
              </div>
            </article>

            {/* PROJECT 4: QuantumSim */}
            <article className="project-card glass-panel" id="quantasim">
              <div className="project-card-badge-row">
                <span className="mini-badge">Quantum Physics 3D Simulator</span>
                <span className="mini-score">Three.js + Linear Algebra</span>
              </div>
              <h3 className="project-title">4. QuantumSim — Interactive Quantum Simulator &amp; 3D Visualizer</h3>
              <p className="project-desc">
                Interactive quantum computing simulator featuring 3D Bloch sphere vector tracking, drag-and-drop circuit building, and physics simulations.
              </p>

              <div className="project-mini-specs">
                <div className="spec-row">
                  <span className="spec-label">3D Bloch Sphere:</span>
                  <span className="spec-val">Renders real-time qubit state vector trajectories (&theta;, &phi;) using Three.js and spatial vector controllers.</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Visual Circuit Canvas:</span>
                  <span className="spec-val">Drag-and-drop Pauli X/Y/Z, Hadamard, CNOT &amp; SWAP gates with matrix transformations and export to <strong>Qiskit, Cirq &amp; Q#</strong>.</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Physics Simulation:</span>
                  <span className="spec-val">Simulates Quantum Tunneling wave-functions, Bell State entanglement logging, and Schrödinger's Cat superposition trials.</span>
                </div>
              </div>

              <div className="project-tech-chips mini-chips">
                <span className="pt-chip">JavaScript (ES6+)</span>
                <span className="pt-chip">Three.js</span>
                <span className="pt-chip">OrbitControls</span>
                <span className="pt-chip">Glassmorphism UI</span>
                <span className="pt-chip">Netlify</span>
              </div>

              <div className="project-action-bar">
                <a
                  href="https://quantasim.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-project-link"
                >
                  <span>Open Live App</span>
                  <ExternalLink size={14} />
                </a>
                <span className="meta-link-label">quantasim.netlify.app</span>
              </div>
            </article>
          </div>

          {/* PROJECT SUBGRID 2: PropertyIQ & Huffman Coding */}
          <div className="projects-subgrid">
            {/* PROJECT 5: PropertyIQ */}
            <article className="project-card glass-panel" id="propertyiq">
              <div className="project-card-badge-row">
                <span className="mini-badge">Live ML Application</span>
                <span className="mini-score">R² = 0.91</span>
              </div>
              <h3 className="project-title">5. PropertyIQ — Machine Learning Estate Price Predictor</h3>
              <p className="project-desc">
                Supervised machine learning regression model and interactive real estate platform predicting residential property valuations across Mumbai based on 18 input features.
              </p>

              <div className="project-mini-specs">
                <div className="spec-row">
                  <span className="spec-label">ML Preprocessing:</span>
                  <span className="spec-val">Log transformations for pricing skewness, IQR outlier filtering, and domain features (price_per_sqft, floor_ratio).</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Model Benchmarks:</span>
                  <span className="spec-val">Linear Reg (R²=0.71), Random Forest (R²=0.85), <strong>XGBoost (R²=0.91, RMSE=1,12,700, MAE=79,800)</strong>.</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Financial Engine:</span>
                  <span className="spec-val">Monthly EMI estimations, rental yield %, and dynamic investment signals (<strong>BUY / HOLD / SELL</strong>).</span>
                </div>
              </div>

              <div className="project-tech-chips mini-chips">
                <span className="pt-chip">Python 3.10+</span>
                <span className="pt-chip">Scikit-learn</span>
                <span className="pt-chip">XGBoost</span>
                <span className="pt-chip">Pandas</span>
                <span className="pt-chip">Joblib</span>
                <span className="pt-chip">Vercel</span>
              </div>

              <div className="project-action-bar">
                <a
                  href="https://estatepredictor.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-project-link"
                >
                  <span>Open Live App</span>
                  <ExternalLink size={14} />
                </a>
                <span className="meta-link-label">estatepredictor.vercel.app</span>
              </div>
            </article>

            {/* PROJECT 6: Huffman Coding */}
            <article className="project-card glass-panel" id="huffman">
              <div className="project-card-badge-row">
                <span className="mini-badge">Live Algorithm Visualizer</span>
                <span className="mini-score">Greedy Strategy</span>
              </div>
              <h3 className="project-title">6. Huffman Coding Text Compressor &amp; Visualizer</h3>
              <p className="project-desc">
                Interactive Huffman Coding algorithm visualizer to encode and compress arbitrary text inputs using greedy optimal prefix-free binary tree construction and min-heaps.
              </p>

              <div className="project-mini-specs">
                <div className="spec-row">
                  <span className="spec-label">Algorithm Architecture:</span>
                  <span className="spec-val">Dynamically constructs min-heap priority queues, builds optimal prefix tree, and generates frequency tables.</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Live Metrics Engine:</span>
                  <span className="spec-val">Outputs real-time compression metrics including uncompressed vs compressed bit lengths and compression ratios.</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Interactive UI:</span>
                  <span className="spec-val">Visual breakdown of encoded stream, lookup table, and step-by-step tree visualization.</span>
                </div>
              </div>

              <div className="project-tech-chips mini-chips">
                <span className="pt-chip">JavaScript</span>
                <span className="pt-chip">HTML5</span>
                <span className="pt-chip">CSS3</span>
                <span className="pt-chip">Min-Heap</span>
                <span className="pt-chip">Greedy Algorithm</span>
                <span className="pt-chip">Data Compression</span>
              </div>

              <div className="project-action-bar">
                <a
                  href="https://huffmancodingg.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-project-link"
                >
                  <span>Open Live App</span>
                  <ExternalLink size={14} />
                </a>
                <span className="meta-link-label">huffmancodingg.netlify.app</span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
