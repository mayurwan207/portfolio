import React from 'react';

export default function FrameHud({ currentFrame, totalFrames }) {
  const padZero = (num, size = 3) => {
    let s = String(num);
    while (s.length < size) s = '0' + s;
    return s;
  };

  const frameIndex = Math.max(1, Math.min(totalFrames, Math.round(currentFrame)));
  const progressPercent = ((frameIndex - 1) / (totalFrames - 1)) * 100;

  return (
    <div className="frame-hud" id="frameHud">
      <div className="frame-hud-bar">
        <div
          className="frame-progress-fill"
          style={{ width: `${progressPercent.toFixed(1)}%` }}
        />
      </div>
      <span className="frame-counter-tag">
        {padZero(frameIndex, 3)} / {totalFrames}
      </span>
    </div>
  );
}
