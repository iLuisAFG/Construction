import React, { useState, useRef, useEffect } from 'react';

const MILESTONES = [
  {
    year: '2001',
    phase: 'El Comienzo',
    headline: 'Un Equipo de Maestros de Obra y Cero Compromisos en Calidad',
    desc: 'Tu Constructora fue fundada por ingenieros civiles y maestros constructores con un único objetivo: elevar el estándar en edificación y obra civil. Ejecutamos 42 proyectos residenciales en nuestra temporada inaugural con 100% de rigor estructural y satisfacción garantizada.',
    stat: '42 Obras',
    statLabel: 'Completadas Año 1',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    tags: ['Empresa Fundadora', 'Calidad Artesanal', 'Edificación Residencial'],
  },
  {
    year: '2008',
    phase: 'Escala Comercial',
    headline: 'Expansión a Escala Empresarial e Infraestructura',
    desc: 'Establecimos nuestra división de Grandes Obras y Edificación Comercial. Completamos nuestro primer desarrollo logístico e industrial de 25,000 m² a tiempo y bajo presupuesto con estándares de ingeniería antisísmica.',
    stat: '25,000 m²',
    statLabel: 'Mayor Proyecto',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    tags: ['Estructuras de Acero', 'Edificación Corporativa', 'Seguridad Certificada'],
  },
  {
    year: '2016',
    phase: 'Ingeniería Digital',
    headline: 'Modelado BIM 3D, Drones Topográficos y Edificación Sostenible',
    desc: 'Implementamos modelado BIM 3D integral y escaneos topográficos con drones para optimizar la precisión constructiva antes del primer colado. Lanzamos desarrollos con certificación ambiental LEED y alta eficiencia térmica.',
    stat: 'BIM 3D',
    statLabel: 'Modelado y Topografía',
    image: 'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?auto=format&fit=crop&w=800&q=80',
    tags: ['Tecnología BIM 3D', 'Edificación Sostenible', 'Eficiencia A+'],
  },
  {
    year: '2024',
    phase: 'Referente Nacional',
    headline: 'Más de 15,000 Proyectos y Reconocimiento a la Excelencia Constructiva',
    desc: 'Galardonados con el Premio Nacional a la Excelencia en Arquitectura y Edificación. Más de 15,000 hogares, desarrollos residenciales, centros comerciales y plantas productivas llevan hoy la firma y solidez de Tu Constructora.',
    stat: '15,000+',
    statLabel: 'Proyectos Entregados',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    tags: ['Garantía Estructural Total', 'Calificación A+', 'Líder en Construcción'],
  },
];

export default function JourneyTimeline() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [displayedIdx, setDisplayedIdx] = useState(0);
  const [transitionPhase, setTransitionPhase] = useState('idle'); // 'idle' | 'exiting' | 'pre-enter' | 'entering'
  const timeoutRef = useRef(null);

  const active = MILESTONES[displayedIdx];

  const handleSelectYear = (targetIdx) => {
    if (targetIdx === selectedIdx) return;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setSelectedIdx(targetIdx);
    // Fase 1: El rectángulo actual desaparece hacia abajo con transición suave
    setTransitionPhase('exiting');

    timeoutRef.current = setTimeout(() => {
      setDisplayedIdx(targetIdx);
      // Fase 2: El nuevo contenido se posiciona abajo de manera invisible
      setTransitionPhase('pre-enter');

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          // Fase 3: El siguiente rectángulo aparece hacia arriba con la misma curva suave
          setTransitionPhase('entering');

          timeoutRef.current = setTimeout(() => {
            setTransitionPhase('idle');
          }, 350);
        });
      });
    }, 250);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <section id="journey" className="relative py-28 sm:py-36 bg-[#0F1115] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#E85A2A]"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E85A2A]">
                Nuestra Trayectoria
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.08]">
              Construido Año tras Año, Obra tras Obra.
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
              Hitos que forjaron nuestra reputación y consolidaron nuestro compromiso inquebrantable con la excelencia.
            </p>
          </div>
        </div>

        {/* Pestañas Interactivas de Año (Sin scroll, contorno visible en todos los rectángulos) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12 pb-6 border-b border-white/10">
          {MILESTONES.map((item, idx) => {
            const isSelected = selectedIdx === idx;
            return (
              <button
                key={item.year}
                onClick={() => handleSelectYear(idx)}
                className={`relative px-5 sm:px-6 py-4 rounded-2xl transition-all duration-300 ease-tactile flex items-center justify-center sm:justify-start gap-3 w-full ${
                  isSelected
                    ? 'bg-white/10 text-white border-2 border-[#E85A2A] shadow-lg shadow-[#E85A2A]/15'
                    : 'bg-white/[0.03] text-neutral-400 hover:text-white hover:bg-white/8 border border-white/15 hover:border-white/30'
                }`}
              >
                <span className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  {item.year}
                </span>
                <div className="text-left">
                  <div className={`text-[10px] uppercase tracking-wider font-bold ${
                    isSelected ? 'text-[#E85A2A]' : 'text-neutral-500'
                  }`}>
                    {item.phase}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Contenedor del Detalle del Hito con Transición Abajo/Arriba */}
        <div className="relative min-h-[460px]">
          <div
            className={`glass-card rounded-3xl p-8 sm:p-12 border border-white/10 relative overflow-hidden ${
              transitionPhase === 'exiting'
                ? 'opacity-0 translate-y-10 pointer-events-none'
                : transitionPhase === 'pre-enter'
                ? 'opacity-0 translate-y-10 transition-none pointer-events-none'
                : 'opacity-100 translate-y-0'
            }`}
            style={{
              transitionDuration: transitionPhase === 'pre-enter' ? '0ms' : transitionPhase === 'exiting' ? '250ms' : '350ms',
              transitionProperty: 'opacity, transform',
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-4xl sm:text-5xl font-extrabold text-[#E85A2A]">
                    {active.year}
                  </span>
                  <span className="w-1.5 h-6 bg-white/20 rounded-full"></span>
                  <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">
                    {active.phase}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {active.headline}
                </h3>

                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                  {active.desc}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {active.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 text-neutral-300 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center gap-8">
                  <div>
                    <div className="text-3xl font-extrabold text-white">
                      {active.stat}
                    </div>
                    <div className="text-xs uppercase tracking-wider text-neutral-400">
                      {active.statLabel}
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold text-white">
                      0 Fugas
                    </div>
                    <div className="text-xs uppercase tracking-wider text-neutral-400">
                      Tasa de Reclamo
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl">
                  <img
                    src={active.image}
                    alt={active.headline}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
                      e.currentTarget.src = `${base}assets/hero-frames/fotograma_0120.webp`;
                    }}
                  />
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
