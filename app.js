/**
 * Mayuresh Nilesh Wankhade — Portfolio & Scroll Frame Sequence Engine
 * 240 HD Frames @ 24 FPS with Responsive Canvas & Glassmorphic Interface
 */

(function () {
  'use strict';

  // --- Configuration ---
  const TOTAL_FRAMES = 240;
  const FRAME_PATH_PREFIX = 'frames/frame_';
  const FRAME_EXT = '.png';
  const BG_COLOR = '#fdd310';
  const LERP_FACTOR = 0.085; // Butter-smooth scroll damping

  // --- DOM Elements ---
  const canvas = document.getElementById('frameCanvas');
  const ctx = canvas.getContext('2d', { alpha: false });
  const preloader = document.getElementById('preloader');
  const ringFill = document.getElementById('ringFill');
  const loadText = document.getElementById('loadText');
  const loadStatus = document.getElementById('loadStatus');
  const topNav = document.getElementById('topNav');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const frameProgressFill = document.getElementById('frameProgressFill');
  const frameCounterTag = document.getElementById('frameCounterTag');
  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');

  // --- Animation State ---
  const frames = new Array(TOTAL_FRAMES + 1); // 1-indexed (1..240)
  let loadedCount = 0;
  let isReady = false;
  let currentFrame = 1.0;
  let targetFrame = 1.0;
  let lastRenderedFrame = -1;

  // Sizing State
  let viewportWidth = 0;
  let viewportHeight = 0;
  let renderX = 0;
  let renderY = 0;
  let renderWidth = 0;
  let renderHeight = 0;

  function padZero(num, size = 4) {
    let s = String(num);
    while (s.length < size) s = '0' + s;
    return s;
  }

  // --- Responsive Hi-DPI Canvas Dimensions ---
  function resizeCanvas() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    viewportWidth = window.innerWidth;
    viewportHeight = window.innerHeight;

    canvas.width = viewportWidth * dpr;
    canvas.height = viewportHeight * dpr;

    ctx.scale(dpr, dpr);

    const nativeWidth = 1920;
    const nativeHeight = 1080;
    const nativeRatio = nativeWidth / nativeHeight;
    const screenRatio = viewportWidth / viewportHeight;

    if (screenRatio > nativeRatio) {
      renderHeight = viewportHeight;
      renderWidth = viewportHeight * nativeRatio;
      renderY = 0;
      // On wide screens, position the animated subject on the left-center so hero text on right has breathing room
      if (viewportWidth > 1100) {
        renderX = Math.max(0, (viewportWidth * 0.42) - (renderWidth * 0.5));
      } else {
        renderX = (viewportWidth - renderWidth) / 2;
      }
    } else {
      renderWidth = viewportWidth;
      renderHeight = viewportWidth / nativeRatio;
      renderX = 0;
      renderY = (viewportHeight - renderHeight) / 2;
    }

    render(true);
  }

  window.addEventListener('resize', resizeCanvas);

  // --- Frame Render Function ---
  function render(force = false) {
    const frameIndex = Math.max(1, Math.min(TOTAL_FRAMES, Math.round(currentFrame)));

    if (!force && frameIndex === lastRenderedFrame) return;
    lastRenderedFrame = frameIndex;

    // Fill background with exact yellow
    ctx.fillStyle = BG_COLOR;
    ctx.fillRect(0, 0, viewportWidth, viewportHeight);

    // Fetch frame image or closest loaded neighbor
    let img = frames[frameIndex];
    if (!img || !img.complete || img.naturalWidth === 0) {
      for (let offset = 1; offset < 25; offset++) {
        const prev = frames[frameIndex - offset];
        const next = frames[frameIndex + offset];
        if (prev && prev.complete && prev.naturalWidth > 0) { img = prev; break; }
        if (next && next.complete && next.naturalWidth > 0) { img = next; break; }
      }
    }

    if (img && img.complete && img.naturalWidth > 0) {
      ctx.drawImage(img, renderX, renderY, renderWidth, renderHeight);
    }

    // Update Bottom HUD Progress
    const progressPercent = ((frameIndex - 1) / (TOTAL_FRAMES - 1)) * 100;
    if (frameProgressFill) {
      frameProgressFill.style.width = `${progressPercent.toFixed(1)}%`;
    }
    if (frameCounterTag) {
      frameCounterTag.textContent = `${padZero(frameIndex, 3)} / ${TOTAL_FRAMES}`;
    }
  }

  // --- Scroll Tracking & Navbar State ---
  function onScroll() {
    const scrollY = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    if (maxScroll > 0) {
      const scrollProgress = Math.max(0, Math.min(1, scrollY / maxScroll));
      targetFrame = 1 + scrollProgress * (TOTAL_FRAMES - 1);
    }

    // Navbar Background Blur on Scroll
    if (scrollY > 40) {
      topNav.classList.add('nav-scrolled');
    } else {
      topNav.classList.remove('nav-scrolled');
    }

    // Update Active Nav Link based on visible section
    let currentSectionId = '';
    sections.forEach((sec) => {
      const secTop = sec.offsetTop - 180;
      const secHeight = sec.offsetHeight;
      if (scrollY >= secTop && scrollY < secTop + secHeight) {
        currentSectionId = sec.getAttribute('id');
      }
    });

    if (currentSectionId) {
      navLinks.forEach((link) => {
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  // --- Main Animation Loop (rAF with Lerp Damping) ---
  function loop() {
    const diff = targetFrame - currentFrame;
    if (Math.abs(diff) > 0.001) {
      currentFrame += diff * LERP_FACTOR;
      render();
    }

    requestAnimationFrame(loop);
  }

  // --- Preload Frames with Concurrency ---
  function preloadFrames() {
    const CONCURRENCY = 10;
    let nextIndex = 1;
    let initialFrameRendered = false;

    function updateProgress() {
      const pct = Math.floor((loadedCount / TOTAL_FRAMES) * 100);
      loadText.textContent = `${pct}%`;

      // SVG Ring circumference = 2 * PI * 42 ≈ 263.89
      const offset = 264 - (pct / 100) * 264;
      ringFill.style.strokeDashoffset = offset;
      loadStatus.textContent = `Buffered ${loadedCount} of ${TOTAL_FRAMES} frames...`;

      // Show initial frame as early as possible
      if (loadedCount >= 10 && !initialFrameRendered) {
        initialFrameRendered = true;
        render(true);
      }

      if (loadedCount === TOTAL_FRAMES) {
        onAllLoaded();
      }
    }

    function loadNext() {
      if (nextIndex > TOTAL_FRAMES) return;
      const i = nextIndex++;
      const img = new Image();
      img.src = `${FRAME_PATH_PREFIX}${padZero(i, 4)}${FRAME_EXT}`;

      img.onload = () => {
        frames[i] = img;
        loadedCount++;
        updateProgress();
        loadNext();
      };

      img.onerror = () => {
        console.warn(`Frame ${i} failed to load`);
        loadedCount++;
        updateProgress();
        loadNext();
      };
    }

    for (let c = 0; c < CONCURRENCY; c++) {
      loadNext();
    }
  }

  function onAllLoaded() {
    isReady = true;
    loadStatus.textContent = 'Ready! Scroll to explore portfolio';
    setTimeout(() => {
      preloader.classList.add('fade-out');
      onScroll();
      render(true);
    }, 350);
  }

  // --- Interactive Contact Form Handler ---
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('userName')?.value || '';
      const email = document.getElementById('userEmail')?.value || '';
      const topic = document.getElementById('projectType')?.value || '';
      const message = document.getElementById('userMessage')?.value || '';

      const subject = encodeURIComponent(`Portfolio Inquiry from ${name} [${topic}]`);
      const body = encodeURIComponent(
        `Hi Mayuresh,\n\nName: ${name}\nEmail: ${email}\nTopic: ${topic}\n\nMessage:\n${message}\n\nSent from your portfolio website.`
      );

      // Trigger user default mail client
      window.location.href = `mailto:mayureshwankhade968@gmail.com?subject=${subject}&body=${body}`;

      if (formFeedback) {
        formFeedback.style.display = 'block';
        formFeedback.innerHTML = `
          <strong>Thank you, ${name}!</strong> Your email client is opening with pre-filled details to send directly to <code>mayureshwankhade968@gmail.com</code>.
        `;
      }
    });
  }

  // --- Initialize ---
  resizeCanvas();
  preloadFrames();
  requestAnimationFrame(loop);

})();
