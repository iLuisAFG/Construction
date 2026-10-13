import React from 'react';
import { ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';

const METRICS = [
  { label: 'Duración de la Obra', value: '4 Meses' },
  { label: 'Superficie Construida', value: '450 m²' },
  { label: 'Eficiencia Energética', value: '+35%' },
  { label: 'Garantía Estructural', value: '25 Años' },
];

export default function CaseStudiesDetail({ onOpenQuote }) {
  return (
    <section className="relative py-28 sm:py-36 bg-[#0F1115] text-white border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#E85A2A]"></span>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E85A2A]">
              Transformación Destacada
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Construyendo Confianza, Hogar a Hogar.
          </h2>
        </div>

        {/* Franja de 4 Métricas Clave */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20">
          {METRICS.map((m) => (
            <div
              key={m.label}
              className="glass-card p-6 sm:p-7 rounded-2xl sm:rounded-3xl border border-white/10 flex flex-col justify-between hover:border-white/25 transition-all group"
            >
              <div className="flex items-center justify-between text-xs text-neutral-400 font-mono mb-4">
                <span>{m.label}</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-[#E85A2A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <div className="text-2xl sm:text-4xl font-extrabold text-white">
                {m.value}
              </div>
            </div>
          ))}
        </div>

        {/* Resumen y Fotografías */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#E85A2A] font-bold">
              Resumen del Proyecto
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Residencia Contemporánea de Lujo y Arquitectura Bioclimática
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              Este proyecto residencial de obra nueva fue concebido para una familia que buscaba una vivienda contemporánea de alto standing, con cimentación sismorresistente, amplios claros en doble altura y máxima eficiencia térmica. Tu Constructora gestionó el ciclo integral llave en mano: desde el anteproyecto arquitectónico y licencias hasta la supervisión y entrega final de obra.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-sm text-neutral-300">
                <CheckCircle2 className="w-5 h-5 text-[#E85A2A] shrink-0 mt-0.5" />
                <span>Cimentación profunda y estructura de concreto armado calculada bajo rigurosa normativa sísmica.</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-neutral-300">
                <CheckCircle2 className="w-5 h-5 text-[#E85A2A] shrink-0 mt-0.5" />
                <span>Cancelería de doble acristalamiento hermético con rotura de puente térmico y fachada ventilada.</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-neutral-300">
                <CheckCircle2 className="w-5 h-5 text-[#E85A2A] shrink-0 mt-0.5" />
                <span>Instalaciones hidrosanitarias, eléctricas y de climatización preparadas para domótica integral.</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors border border-white/15"
              >
                <span>Solicitar Auditoría de Proyecto</span>
                <ArrowUpRight className="w-4 h-4 text-[#E85A2A]" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-neutral-900 border border-white/10 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                alt="Estructura arquitectónica contemporánea"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-neutral-900 border border-white/10 shadow-xl mt-6">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80"
                alt="Detalles y acabados de lujo"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

        </div>

        {/* Tarjeta de Desafío */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#E85A2A] font-bold block mb-2">
                El Desafío
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Construcción sin Fricciones: Superando Retos de Terreno y Plazos Exigentes
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                El predio presentaba una pronunciada pendiente y requerimientos urbanísticos estrictos, exigiendo muros de contención de alta resistencia y una coordinación precisa de maquinaria pesada. Gracias a la metodología BIM y la gestión modular de Tu Constructora, la obra se completó en tiempo récord sin desviaciones presupuestarias.
              </p>
            </div>

            <div className="lg:col-span-5 flex lg:justify-end">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 max-w-sm w-full">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Metodología Tu Constructora</span>
                </div>
                <p className="text-xs text-neutral-300">
                  Control integral con modelado BIM, supervisión técnica presencial diaria por directores colegiados y entrega de bitácora digital en tiempo real para el cliente.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
