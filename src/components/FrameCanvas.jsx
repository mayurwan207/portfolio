import React, { useEffect, useRef } from 'react';

export default function FrameCanvas({ frames, currentFrame, totalFrames }) {
  const canvasRef = useRef(null);
  const lastRenderedRef = useRef(-1);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let animationFrameId;

    const resizeAndRender = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      canvas.width = viewportWidth * dpr;
      canvas.height = viewportHeight * dpr;

      ctx.save();
      ctx.scale(dpr, dpr);

      const nativeWidth = 1920;
      const nativeHeight = 1080;
      const nativeRatio = nativeWidth / nativeHeight;
      const screenRatio = viewportWidth / viewportHeight;

      let renderX = 0;
      let renderY = 0;
      let renderWidth = 0;
      let renderHeight = 0;

      if (screenRatio > nativeRatio) {
        renderHeight = viewportHeight;
        renderWidth = viewportHeight * nativeRatio;
        renderY = 0;
        if (viewportWidth > 1100) {
          renderX = Math.max(0, viewportWidth * 0.42 - renderWidth * 0.5);
        } else {
          renderX = (viewportWidth - renderWidth) / 2;
        }
      } else {
        renderWidth = viewportWidth;
        renderHeight = viewportWidth / nativeRatio;
        renderX = 0;
        renderY = (viewportHeight - renderHeight) / 2;
      }

      ctx.fillStyle = '#fdd310';
      ctx.fillRect(0, 0, viewportWidth, viewportHeight);

      const frameIndex = Math.max(
        1,
        Math.min(totalFrames, Math.round(currentFrame))
      );
      lastRenderedRef.current = frameIndex;

      let img = frames[frameIndex];
      if (!img || !img.complete || img.naturalWidth === 0) {
        for (let offset = 1; offset < 25; offset++) {
          const prev = frames[frameIndex - offset];
          const next = frames[frameIndex + offset];
          if (prev && prev.complete && prev.naturalWidth > 0) {
            img = prev;
            break;
          }
          if (next && next.complete && next.naturalWidth > 0) {
            img = next;
            break;
          }
        }
      }

      if (img && img.complete && img.naturalWidth > 0) {
        ctx.drawImage(img, renderX, renderY, renderWidth, renderHeight);
      }

      ctx.restore();
    };

    resizeAndRender();

    const handleResize = () => {
      resizeAndRender();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [frames, currentFrame, totalFrames]);

  return (
    <div className="canvas-viewport" aria-hidden="true">
      <canvas ref={canvasRef} id="frameCanvas" />
      <div className="canvas-overlay" />
    </div>
  );
}
