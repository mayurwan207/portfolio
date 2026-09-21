import React from 'react';
import { ExternalLink, Award, Sparkles, TrendingUp, Zap } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">PROVEN IMPACT</span>
          <h2 className="section-title">Featured Hackathons &amp; Engineering Projects</h2>
          <p className="section-subtitle">
            From global hackathon finalists to production machine learning deployments.
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
                  <span className="status-chip chip-team">Team: Ragnarok (Team Leader)</span>
                </div>
                <h3 className="featured-project-name">1. PulseNet-GIS — GIS for Smarter Emergency Care</h3>
              </div>
            </div>

            {/* Problem & Impact Banner */}
            <div className="problem-impact-box">
              <div className="impact-indicator">
                <span className="impact-label">Real-World Problem &amp; Data Insight:</span>
                <p className="impact-text">
                  Analyzed <strong>38,823 Maharashtra MEMS ambulance transfer records</strong> revealing that <strong>58.3% of transfers were PHC-to-Hospital transfers</strong>, taking an average transfer time of <strong>222.8 minutes</strong> due to uncoordinated referrals into full or under-equipped hospitals.
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
                  Dynamically filters and ranks hospitals based on live inventory (ICU beds, oxygen, blood units, specialists) combined with geographical distance and current hospital load.
                </p>
              </div>

              <div className="arch-pillar">
                <div className="pillar-header">
                  <span className="pillar-num">02</span>
                  <h4 className="pillar-title">Distributed Resource Locking</h4>
                </div>
                <p className="pillar-desc">
                  Prevents race conditions by temporarily locking beds and critical medical assets in PostgreSQL the moment a match is initiated, automatically releasing locks upon driver rejection or timer expiration.
                </p>
              </div>

              <div className="arch-pillar">
                <div className="pillar-header">
                  <span className="pillar-num">03</span>
                  <h4 className="pillar-title">Ambulance Allocation &amp; Routing</h4>
                </div>
                <p className="pillar-desc">
                  Sorts ambulances by real ETA using the OSRM (Open Source Routing Machine) Engine, featuring a 15-second cascading driver notification protocol and live GPS coordinate tracking.
                </p>
              </div>
            </div>

            <div className="project-footer-row">
              <div className="project-tech-chips">
                <span className="pt-chip">Python</span>
                <span className="pt-chip">Django</span>
                <span className="pt-chip">PostgreSQL</span>
                <span className="pt-chip">Leaflet</span>
                <span className="pt-chip">OpenStreetMap</span>
                <span className="pt-chip">OSRM Engine</span>
                <span className="pt-chip">JWT</span>
                <span className="pt-chip">JavaScript</span>
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
                <h3 className="featured-project-name">2. StoreSight AI — Predictive Retail Site Selection Platform</h3>
              </div>
            </div>

            {/* Problem & Impact Banner */}
            <div className="problem-impact-box">
              <div className="impact-indicator">
                <span className="impact-label">Market Problem &amp; Impact:</span>
                <p className="impact-text">
                  Addressed the steep <strong>40–60% failure rate</strong> among first-time shop owners and small retail chains in India's <strong>$1 Trillion retail sector</strong> who rely on guesswork for site selection, causing <strong>15–25% rent overpayments</strong> and premature closures.
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
                  Aggregates satellite imagery (Google Earth Engine), mobile footfall/telecom data, municipal zoning GIS maps, and POI density (OpenStreetMap, Google Places API).
                </p>
              </div>

              <div className="arch-pillar">
                <div className="pillar-header">
                  <span className="pillar-num">02</span>
                  <h4 className="pillar-title">100+ Feature Engineering Pipeline</h4>
                </div>
                <p className="pillar-desc">
                  Computes pedestrian density heatmaps via Kernel Density Estimation (KDE), accessibility proximity scores via GraphHopper, and commercial rent proxies from web scrapers.
                </p>
              </div>

              <div className="arch-pillar">
                <div className="pillar-header">
                  <span className="pillar-num">03</span>
                  <h4 className="pillar-title">Predictive Location Scoring Engine</h4>
                </div>
                <p className="pillar-desc">
                  Features an ensemble of XGBoost (revenue prediction) and CNNs on geospatial rasters, outputting a 0–100 site score (40% footfall, 25% competition gap, 20% zoning compliance, 15% growth trajectory) optimized via Optuna.
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

          {/* PROJECT 3 & 4 Subgrid */}
          <div className="projects-subgrid">
            {/* PROJECT 3: PropertyIQ */}
            <article className="project-card glass-panel" id="propertyiq">
              <div className="project-card-badge-row">
                <span className="mini-badge">Live ML Application</span>
                <span className="mini-score">R² = 0.91</span>
              </div>
              <h3 className="project-title">3. PropertyIQ — Machine Learning Estate Price Predictor</h3>
              <p className="project-desc">
                Supervised machine learning regression model and interactive real estate platform predicting residential property valuations across Mumbai based on 18 input features (location, floor ratio, area, property age, furnishing, Vastu compliance).
              </p>

              <div className="project-mini-specs">
                <div className="spec-row">
                  <span className="spec-label">ML Preprocessing:</span>
                  <span className="spec-val">Log transformations for pricing skewness, IQR outlier filtering, and domain features (price_per_sqft, floor_ratio, property_age).</span>
                </div>
                <div class="spec-row">
                  <span className="spec-label">Benchmark:</span>
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

            {/* PROJECT 4: Huffman Coding */}
            <article className="project-card glass-panel" id="huffman">
              <div className="project-card-badge-row">
                <span className="mini-badge">Live Algorithm Visualizer</span>
                <span className="mini-score">Greedy Strategy</span>
              </div>
              <h3 className="project-title">4. Huffman Coding Text Compressor &amp; Visualizer</h3>
              <p className="project-desc">
                Interactive Huffman Coding algorithm visualizer to encode and compress arbitrary text inputs using greedy optimal prefix-free binary tree construction and min-heaps.
              </p>

              <div className="project-mini-specs">
                <div className="spec-row">
                  <span className="spec-label">Algorithm Architecture:</span>
                  <span className="spec-val">Dynamically constructs min-heap priority queues, builds optimal prefix tree, and generates character frequency mapping tables.</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Live Metrics Engine:</span>
                  <span className="spec-val">Outputs real-time compression metrics including uncompressed vs compressed bit lengths, bits saved, and compression ratio.</span>
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
