import React from 'react';
import { DollarSign, Award, ShieldCheck, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';

const BENTO_FEATURES = [
  {
    id: 'pricing',
    title: 'Precios Claros y Transparentes',
    desc: 'Sin tarifas ocultas ni sobrecostos imprevistos: presupuestos desglosados y planificación certera desde el primer día.',
    icon: (
      <svg className="w-5 h-5 text-[#0F1115]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ),
    badge: 'Garantía de Precio Cerrado',
    stat: '100% Desglosado',
    highlight: 'Presupuesto transparente y detallado por partidas antes de iniciar obra.',
  },
  {
    id: 'experts',
    title: 'Ingenieros y Arquitectos Certificados',
    desc: 'Profesionales titulados con amplia experiencia en cálculo estructural, dirección de obra y normativas vigentes.',
    icon: (
      <svg className="w-5 h-5 text-[#0F1115]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    badge: 'Equipo Técnico Colegiado',
    stat: '20+ Años Exp.',
    highlight: 'Capacitación continua en metodologías BIM y seguridad en obra.',
  },
  {
    id: 'warranty',
    title: 'Garantía Estructural Prolongada',
    desc: 'Nuestra ejecución está respaldada por garantías decenales y pólizas de responsabilidad civil para tu máxima tranquilidad.',
    icon: (
      <svg className="w-5 h-5 text-[#0F1115]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="m4.93 4.93 4.24 4.24" />
        <path d="m14.83 9.17 4.24-4.24" />
        <path d="m14.83 14.83 4.24 4.24" />
        <path d="m9.17 14.83-4.24 4.24" />
      </svg>
    ),
    badge: 'Garantía Decenal',
    stat: 'Certificada',
    highlight: 'Cobertura total de estructura, cimentación e instalaciones hidrosanitarias.',
  },
  {
    id: 'response',
    title: 'Supervisión y Ejecución Ágil',
    desc: 'Planificación rigurosa mediante cronogramas de obra Gantt para cumplir fechas de entrega con exactitud.',
    icon: (
      <svg className="w-5 h-5 text-[#0F1115]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    badge: 'Entrega Puntual',
    stat: 'Monitoreo Semanal',
    highlight: 'Bitácora digital semanal con avances fotográficos en tiempo real.',
  },
];

export default function ValueBento({ onOpenQuote }) {
  return (
    <section className="relative py-28 sm:py-36 bg-[#FBFBFA] text-[#0F1115] border-t border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20">
          <div className="max-w-2xl">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#F25C24]"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#F25C24]">
                Por Qué Tu Constructora
              </span>
            </div>
            
            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0F1115] leading-[1.1]">
              Why Homeowners Choose Protection That Performs.
            </h2>
          </div>

          <div className="mt-6 md:mt-0 max-w-sm">
            <p className="text-sm text-neutral-600 leading-relaxed">
              We combine architectural engineering with uncompromising materials to build roofs that endure extreme climate conditions for generations.
            </p>
          </div>
        </div>

        {/* 4-Card Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {BENTO_FEATURES.map((feat) => (
            <div
              key={feat.id}
              className="double-bezel-light group cursor-default"
            >
              <div className="double-bezel-inner p-7 sm:p-8 flex flex-col justify-between h-full transition-all duration-300 group-hover:shadow-lg group-hover:shadow-neutral-900/5">
                
                <div>
                  {/* Top Bar with Icon and Stat */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-11 h-11 rounded-2xl bg-[#F4F5F7] border border-neutral-200/80 flex items-center justify-center transition-all duration-300 group-hover:bg-[#F25C24] group-hover:text-white group-hover:scale-105 group-hover:border-[#F25C24]">
                      {React.cloneElement(feat.icon, {
                        className: "w-5 h-5 transition-colors duration-300 group-hover:text-white text-[#0F1115]"
                      })}
                    </div>
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-600 border border-neutral-200/60">
                      {feat.stat}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-lg font-bold text-[#0F1115] mb-2.5 tracking-tight group-hover:text-[#F25C24] transition-colors">
                    {feat.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
                    {feat.desc}
                  </p>
                </div>

                {/* Footer Micro Highlight */}
                <div className="pt-4 border-t border-neutral-100 mt-auto">
                  <div className="flex items-center gap-2 text-xs text-neutral-500 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#F25C24] shrink-0" />
                    <span className="line-clamp-1">{feat.badge}</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Proof Strip */}
        <div className="mt-12 p-6 rounded-3xl bg-[#F4F5F7] border border-neutral-200/70 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></div>
            <span className="text-xs sm:text-sm font-semibold text-neutral-800">
              Immediate inspection availability in your area today.
            </span>
          </div>
          <button
            onClick={onOpenQuote}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#F25C24] hover:text-[#E04C15] transition-colors"
          >
            <span>Check Schedule & Pricing</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
