import React from 'react';

export default function Preloader({ loadedCount, totalFrames, isReady }) {
  const pct = Math.floor((loadedCount / totalFrames) * 100);
  // SVG Ring circumference = 2 * PI * 42 ≈ 263.89
  const offset = 264 - (pct / 100) * 264;

  return (
    <div className={`preloader ${isReady ? 'fade-out' : ''}`}>
      <div className="loader-content">
        <div className="loader-brand">
          <div className="logo-box">
            <span className="logo-symbol">MW</span>
          </div>
          <span className="brand-text">Mayuresh Wankhade</span>
        </div>
        <div className="loader-spinner">
          <svg viewBox="0 0 100 100">
            <circle className="ring-track" cx="50" cy="50" r="42" />
            <circle
              className="ring-fill"
              cx="50"
              cy="50"
              r="42"
              style={{ strokeDashoffset: offset }}
            />
          </svg>
          <span className="load-text">{pct}%</span>
        </div>
        <p className="load-status">
          {isReady
            ? 'Ready! Scroll to explore portfolio'
            : 'Initializing interactive engine...'}
        </p>
      </div>
    </div>
  );
}
