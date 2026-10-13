import React from 'react';
import { ArrowRight, PhoneCall } from 'lucide-react';

export default function UrgencyBanner({ onOpenQuote }) {
  return (
    <section className="relative py-24 sm:py-32 bg-[#E85A2A] text-white overflow-hidden">
      {/* Patrón de líneas arquitectónicas sutil */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="blueprint-stripes" width="40" height="40" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="40" stroke="#FFFFFF" strokeWidth="2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blueprint-stripes)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/20 backdrop-blur-md mb-6">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white">
                Iniciar un Proyecto
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05] mb-5">
              Da el Primer Paso para Construir tu Próxima Gran Obra.
            </h2>

            <p className="text-base sm:text-lg text-white/90 leading-relaxed font-medium max-w-xl">
              Tu Constructora transforma tus ideas en proyectos sólidos y duraderos, con presupuestos transparentes, ejecución profesional y entrega puntual garantizada.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-4 shrink-0">
            <button
              onClick={onOpenQuote}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#0F1115] hover:bg-black text-white text-sm sm:text-base font-bold shadow-2xl active:scale-[0.98] transition-all duration-300 ease-tactile"
            >
              <span>Solicitar Presupuesto de Obra</span>
              <div className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </button>

            <div className="flex items-center gap-2 text-xs font-semibold text-white/80">
              <PhoneCall className="w-3.5 h-3.5" />
              <span>O llámanos directamente: +1 (555) 382-9104</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
