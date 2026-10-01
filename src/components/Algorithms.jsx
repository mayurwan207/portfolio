import React from 'react';

export default function Algorithms() {
  const items = [
    {
      num: '01',
      title: 'Geospatial & Graph Routing',
      text: "Applied graph search strategies, distance matrices, and Dijkstra's algorithm fundamentals to build PulseNet-GIS emergency dispatch workflows and OSRM routing.",
      tags: ["Dijkstra's Algorithm", 'OSRM Matrix', 'GraphHopper', 'Cascading Dispatch'],
      link: 'https://pulsenet-gis.vercel.app/',
    },
    {
      num: '02',
      title: 'Matrix Mathematics & Linear Algebra',
      text: 'Implemented complex gate matrix transformations, 3D Bloch sphere vector rotations, and wave-function simulation algorithms in QuantumSim (quantasim.netlify.app).',
      tags: ['Quantum Gates', 'Three.js 3D Vector Math', 'Pauli / Hadamard Matrices', 'Wave-Function'],
      link: 'https://quantasim.netlify.app',
    },
    {
      num: '03',
      title: 'Greedy Algorithms & Data Trees',
      text: 'Constructed min-heap priority queues and greedy optimal prefix-free binary trees for text compression in Huffman Coding Visualizer (huffmancodingg.netlify.app).',
      tags: ['Min-Heap Priority Queue', 'Greedy Trees', 'Bit Packing', 'Prefix-Free Code'],
      link: 'https://huffmancodingg.netlify.app/',
    },
    {
      num: '04',
      title: 'Continuous Algorithmic Benchmarking',
      text: 'Regularly solving problems on LeetCode (@Mayu_coder) and Code360, focusing on dynamic programming, graph algorithms, and system optimization.',
      tags: ['LeetCode @Mayu_coder', 'Code360', 'Graph Algorithms', 'Dynamic Programming'],
      link: 'https://leetcode.com/u/Mayu_coder/',
    },
  ];

  return (
    <section id="algorithms" className="section algorithms-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">THEORY INTO PRODUCTION</span>
          <h2 className="section-title">Algorithmic Problem Solving &amp; Applied DSA</h2>
          <p className="section-subtitle">
            Translating theoretical algorithms and linear algebra into real-world backend systems and interactive physics engines.
          </p>
        </div>

        <div className="dsa-grid">
          {items.map((item, idx) => (
            <div key={idx} className="dsa-card glass-panel">
              <div className="dsa-num-badge">{item.num}</div>
              <h3 className="dsa-card-title">{item.title}</h3>
              <p className="dsa-card-text">
                {item.link ? (
                  item.text.includes('quantasim.netlify.app') ? (
                    <>
                      Implemented complex gate matrix transformations, 3D Bloch sphere vector rotations, and wave-function simulation algorithms in <strong>QuantumSim</strong> (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-link">
                        quantasim.netlify.app
                      </a>
                      ).
                    </>
                  ) : item.text.includes('huffmancodingg.netlify.app') ? (
                    <>
                      Constructed min-heap priority queues and greedy optimal prefix-free binary trees for text compression in <strong>Huffman Coding Visualizer</strong> (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-link">
                        huffmancodingg.netlify.app
                      </a>
                      ).
                    </>
                  ) : item.text.includes('@Mayu_coder') ? (
                    <>
                      Regularly solving problems on <strong>LeetCode</strong> (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-link">
                        @Mayu_coder
                      </a>
                      ) and <strong>Code360</strong>, focusing on dynamic programming, graph algorithms, and system optimization.
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
