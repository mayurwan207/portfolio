import React, { useState, useEffect, useRef } from 'react';
import Preloader from './components/Preloader.jsx';
import FrameCanvas from './components/FrameCanvas.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Domains from './components/Domains.jsx';
import Projects from './components/Projects.jsx';
import Algorithms from './components/Algorithms.jsx';
import Experience from './components/Experience.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

const TOTAL_FRAMES = 240;
const LERP_FACTOR = 0.085;

export default function App() {
  const [loadedCount, setLoadedCount] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [currentFrame, setCurrentFrame] = useState(1);

  const framesRef = useRef(new Array(TOTAL_FRAMES + 1));
  const currentFrameRef = useRef(1);
  const targetFrameRef = useRef(1);
  const animFrameIdRef = useRef(null);

  const padZero = (num, size = 4) => {
    let s = String(num);
    while (s.length < size) s = '0' + s;
    return s;
  };

  // Preload 240 frames
  useEffect(() => {
    let count = 0;
    const CONCURRENCY = 12;
    let nextIndex = 1;

    const loadNext = () => {
      if (nextIndex > TOTAL_FRAMES) return;
      const i = nextIndex++;
      const img = new Image();
      img.src = `/frames/frame_${padZero(i, 4)}.png`;

      const handleDone = () => {
        count++;
        setLoadedCount(count);
        if (count === TOTAL_FRAMES) {
          setTimeout(() => setIsReady(true), 350);
        } else {
          loadNext();
        }
      };

      img.onload = () => {
        framesRef.current[i] = img;
        handleDone();
      };
      img.onerror = () => {
        handleDone();
      };
    };

    for (let c = 0; c < CONCURRENCY; c++) {
      loadNext();
    }
  }, []);

  // Scroll listener & active section detection
  useEffect(() => {
    const sectionIds = ['home', 'about', 'domains', 'projects', 'algorithms', 'experience', 'contact'];

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

      if (maxScroll > 0) {
        const progress = Math.max(0, Math.min(1, scrollY / maxScroll));
        targetFrameRef.current = 1 + progress * (TOTAL_FRAMES - 1);
      }

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const top = el.offsetTop - 220;
          if (scrollY >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation lerp loop
  useEffect(() => {
    const loop = () => {
      const diff = targetFrameRef.current - currentFrameRef.current;
      if (Math.abs(diff) > 0.001) {
        currentFrameRef.current += diff * LERP_FACTOR;
        setCurrentFrame(currentFrameRef.current);
      }
      animFrameIdRef.current = requestAnimationFrame(loop);
    };

    animFrameIdRef.current = requestAnimationFrame(loop);
    return () => {
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
    };
  }, []);

  return (
    <div className="portfolio-app">
      <Preloader
        loadedCount={loadedCount}
        totalFrames={TOTAL_FRAMES}
        isReady={isReady}
      />

      <FrameCanvas
        frames={framesRef.current}
        currentFrame={currentFrame}
        totalFrames={TOTAL_FRAMES}
      />

      <Navbar activeSection={activeSection} />

      <main className="page-content">
        <Hero />
        <About />
        <Domains />
        <Projects />
        <Algorithms />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
