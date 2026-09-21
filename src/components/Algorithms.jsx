import React from 'react';

export default function Algorithms() {
  const items = [
    {
      num: '01',
      title: 'ML & Statistical Optimization',
      text: 'Built StoreSight AI (XGBoost + CNNs on spatial rasters with Optuna Bayesian tuning) and PropertyIQ for spatial retail intelligence and property valuation models.',
      tags: ['XGBoost', 'CNN Rasters', 'Optuna Bayesian Tuning', 'Log Skew Transforms'],
    },
    {
      num: '02',
      title: 'Route Optimization & Real-Time Tracking',
      text: "Studying and implementing graph search algorithms (e.g., Dijkstra's algorithm, GraphHopper, and OSRM routing engines) to model real-world routing and ambulance dispatch mechanics.",
      tags: ["Dijkstra's Algorithm", 'OSRM Matrix', 'GraphHopper', 'Cascading Dispatch'],
    },
    {
      num: '03',
      title: 'Data Compression & Huffman Coding',
      text: 'Built a live compression utility (huffmancodingg.netlify.app) utilizing min-heaps and greedy frequency trees for optimal prefix encoding.',
      tags: ['Min-Heap Priority Queue', 'Greedy Trees', 'Bit Packing', 'Prefix-Free Code'],
      link: 'https://huffmancodingg.netlify.app/',
    },
    {
      num: '04',
      title: 'Continuous Skill Building',
      text: 'Actively practicing problem-solving, graph algorithms, dynamic programming, and data structures on LeetCode (@Mayu_coder) and Code360.',
      tags: ['LeetCode @Mayu_coder', 'Code360', 'Graph Algorithms', 'Dynamic Programming'],
      link: 'https://leetcode.com/u/Mayu_coder/',
    },
  ];

  return (
    <section id="algorithms" className="section algorithms-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">THEORY INTO PRODUCTION</span>
          <h2 className="section-title">Algorithmic Exploration &amp; DSA Real-World Applications</h2>
          <p className="section-subtitle">
            How theoretical algorithms translate directly into high-efficiency backend systems and models.
          </p>
        </div>

        <div className="dsa-grid">
          {items.map((item, idx) => (
            <div key={idx} className="dsa-card glass-panel">
              <div className="dsa-num-badge">{item.num}</div>
              <h3 className="dsa-card-title">{item.title}</h3>
              <p className="dsa-card-text">
                {item.link ? (
                  item.text.includes('huffmancodingg.netlify.app') ? (
                    <>
                      Built a live compression utility (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-link">
                        huffmancodingg.netlify.app
                      </a>
                      ) utilizing <strong>min-heaps</strong> and <strong>greedy frequency trees</strong> for optimal prefix encoding.
                    </>
                  ) : item.text.includes('@Mayu_coder') ? (
                    <>
                      Actively practicing problem-solving, graph algorithms, dynamic programming, and data structures on <strong>LeetCode</strong> (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-link">
                        @Mayu_coder
                      </a>
                      ) and <strong>Code360</strong>.
                    </>
                  ) : (
                    item.text
                  )
                ) : (
                  item.text
                )}
              </p>
              <div className="dsa-pill-tags">
                {item.tags.map((t, tIdx) => (
                  <span key={tIdx}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
