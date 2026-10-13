import React, { useRef, useEffect, useState, useCallback } from 'react';

const TOTAL_FRAMES = 240;

const BASE_URL = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

const getFramePath = (index) => {
  const padded = String(index).padStart(4, '0');
  return `${BASE_URL}assets/hero-frames/fotograma_${padded}.webp`;
};

export default function HeroCanvas({ onOpenQuote }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [loadProgress, setLoadProgress] = useState(0);
  const [isFullyLoaded, setIsFullyLoaded] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  const imagesRef = useRef([]);
  const frameStateRef = useRef({
    currentFrame: 1,
    targetFrame: 1,
    rafId: null,
  });

  useEffect(() => {
    let isCancelled = false;
    const images = new Array(TOTAL_FRAMES + 1);
    imagesRef.current = images;

    const firstImg = new Image();
    firstImg.src = getFramePath(1);
    firstImg.onload = () => {
      if (isCancelled) return;
      images[1] = firstImg;
      drawFrame(1);
    };

    let loadedCount = 0;
    const CONCURRENCY = 8;
    let nextIndex = 1;

    const loadNext = () => {
      if (isCancelled || nextIndex > TOTAL_FRAMES) return;
      const idx = nextIndex++;
      const img = new Image();
      img.src = getFramePath(idx);

      img.onload = () => {
        if (isCancelled) return;
        images[idx] = img;
        loadedCount++;
        const pct = Math.floor((loadedCount / TOTAL_FRAMES) * 100);
        setLoadProgress(pct);

        if (loadedCount >= TOTAL_FRAMES) {
          setIsFullyLoaded(true);
        } else {
          loadNext();
        }
      };

      img.onerror = () => {
        if (isCancelled) return;
        images[idx] = images[1] || firstImg;
        loadedCount++;
        loadNext();
      };
    };

    for (let c = 0; c < CONCURRENCY; c++) {
      loadNext();
    }

    return () => {
      isCancelled = true;
    };
  }, []);

  const drawFrame = useCallback((frameIndex) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const clampedIndex = Math.max(1, Math.min(TOTAL_FRAMES, Math.round(frameIndex)));
    const img = imagesRef.current[clampedIndex] || imagesRef.current[1];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const dpr = window.devicePixelRatio || 1;
    const displayWidth = window.innerWidth;
    const displayHeight = window.innerHeight;

    if (canvas.width !== displayWidth * dpr || canvas.height !== displayHeight * dpr) {
      canvas.width = displayWidth * dpr;
      canvas.height = displayHeight * dpr;
    }

    const imgWidth = img.naturalWidth;
    const imgHeight = img.naturalHeight;
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    const scale = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
    const renderWidth = imgWidth * scale;
    const renderHeight = imgHeight * scale;
    const renderX = (canvasWidth - renderWidth) / 2;
    const renderY = (canvasHeight - renderHeight) * 0.38;

    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(img, renderX, renderY, renderWidth, renderHeight);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      drawFrame(frameStateRef.current.currentFrame);
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, [drawFrame]);

  useEffect(() => {
    let animId;

    const loop = () => {
      const state = frameStateRef.current;
      const diff = state.targetFrame - state.currentFrame;

      if (Math.abs(diff) > 0.01) {
        state.currentFrame += diff * 0.085;
        drawFrame(state.currentFrame);
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [drawFrame]);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;

      const scrolled = -rect.top;
      const totalScrollable = containerHeight - windowHeight;

      if (totalScrollable <= 0) return;

      const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));
      setScrollPercent(progress);

      const target = 1 + progress * (TOTAL_FRAMES - 1);
      frameStateRef.current.targetFrame = target;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heroContentOpacity = Math.max(0, 1 - scrollPercent * 2.8);
  const heroContentTranslateY = scrollPercent * 40;

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative w-full h-[380vh] bg-black"
    >
      <div className="sticky top-0 left-0 w-full h-[100dvh] overflow-hidden flex flex-col justify-end">
        
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover z-0 cursor-default"
        />

        <div
          className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-t from-black via-black/80 to-transparent"
          style={{ top: '35%' }}
        />
        <div className="absolute inset-y-0 left-0 w-full md:w-2/3 pointer-events-none z-10 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />

        {!isFullyLoaded && (
          <div className="absolute top-24 left-1/2 -translate-x-1/2 z-30 transition-opacity duration-700">
            <div className="glass-pill px-4 py-1.5 rounded-full flex items-center gap-2.5 text-xs text-white/90 shadow-2xl">
              <span className="w-2 h-2 rounded-full bg-[#E85A2A] animate-pulse"></span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-300">
                Calibrando Secuencia 3D: {loadProgress}%
              </span>
              <div className="w-12 h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#E85A2A] transition-all duration-300"
                  style={{ width: `${loadProgress}%` }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Textos y botones inferiores adaptados a constructora general */}
        <div
          className="relative z-20 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 w-full pb-8 sm:pb-12 md:pb-14 transition-all duration-300 flex flex-col lg:flex-row lg:items-end justify-between gap-8"
          style={{
            opacity: heroContentOpacity,
            transform: `translateY(${heroContentTranslateY}px)`,
            pointerEvents: heroContentOpacity < 0.1 ? 'none' : 'auto',
          }}
        >
          {/* Columna Izquierda */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-white/15 backdrop-blur-md mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E85A2A]"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/90">
                TU CONSTRUCTORA
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight text-white leading-[1.06] mb-4">
              Construcción Integral<br />para tu Hogar y Negocio
            </h1>

            <div className="border-l-2 border-[#E85A2A] pl-3.5 mb-6 max-w-lg">
              <p className="text-xs sm:text-[13.5px] text-neutral-300 leading-relaxed font-normal">
                Servicios integrales de arquitectura, edificación y remodelación residencial y comercial, respaldados por rigurosa ingeniería estructural y acabados de primer nivel.
              </p>
            </div>

            <div>
              <button
                onClick={onOpenQuote}
                className="group inline-flex items-center gap-2 px-6 py-2.5 sm:px-7 sm:py-3 rounded-full bg-[#E85A2A] hover:bg-[#D44D1F] text-[#0F1115] font-bold text-xs sm:text-sm active:scale-[0.98] transition-all duration-300 ease-tactile shadow-lg shadow-[#E85A2A]/25"
              >
                <span>Cotizar Proyecto</span>
                <span className="text-sm sm:text-base font-extrabold transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>

          {/* Columna Derecha: Tarjeta Proyecto Destacado */}
          <div
            onClick={onOpenQuote}
            className="bg-[#12141A]/90 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-white/10 max-w-[380px] w-full shrink-0 shadow-2xl cursor-pointer hover:border-white/25 transition-all duration-300 group"
          >
            <div className="flex items-center gap-3.5">
              <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-neutral-900 border border-white/10">
                <img
                  src={`${BASE_URL}assets/hero-frames/fotograma_0060.webp`}
                  alt="Edificación Residencial de Vanguardia"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-bold text-white mb-1">
                  Edificación Residencial
                </h3>
                
                <p className="text-[11px] text-neutral-400 leading-snug line-clamp-2 mb-3">
                  Proyectos de obra nueva y arquitectura moderna ejecutados con precisión milimétrica y entrega a tiempo.
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-white group-hover:text-[#E85A2A] transition-colors">
                    Ver Proyecto
                  </span>
                  <div className="w-5 h-5 rounded bg-white text-black flex items-center justify-center text-xs font-bold transition-transform duration-300 group-hover:translate-x-0.5">
                    →
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
