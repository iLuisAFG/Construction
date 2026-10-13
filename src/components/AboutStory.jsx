import React from 'react';
import { Home, CheckCircle2, Award, Users2, ArrowRight } from 'lucide-react';

export default function AboutStory({ onOpenQuote }) {
  return (
    <section id="about" className="relative py-28 sm:py-36 bg-[#FBFBFA] text-[#0F1115] border-t border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Editorial Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#F25C24]"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#F25C24]">
                Acerca de Tu Constructora
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F1115] leading-[1.06]">
              Construido con cuidado. Confiado por generaciones.
            </h2>
          </div>

          <div className="max-w-sm">
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-medium">
              Por más de 20 años, Tu Constructora ha brindado soluciones integrales de arquitectura y edificación para hogares y empresas.
            </p>
          </div>
        </div>

        {/* Large Photographic Banner */}
        <div className="relative aspect-[21/9] sm:aspect-[21/8] rounded-3xl overflow-hidden mb-16 sm:mb-20 shadow-xl bg-neutral-900 border border-neutral-200">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d0fbb1861571?auto=format&fit=crop&w=1800&q=80"
            alt="Ingenieros y arquitectos supervisando obra en construcción"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
          
          <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 text-white max-w-lg">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#E85A2A] font-bold block mb-1">
              Excelencia en Obra
            </span>
            <p className="text-sm sm:text-base font-medium text-neutral-200">
              Directores y maestros de obra certificados con rigurosos protocolos de calidad y seguridad estructural.
            </p>
          </div>
        </div>

        {/* Story Paragraph Section */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#E85A2A]"></span>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E85A2A]">
              Nuestra Historia
            </span>
          </div>
          
          <p className="text-lg sm:text-2xl text-neutral-800 leading-relaxed font-normal">
            <strong className="font-bold text-[#0F1115]">Fundada en 2001</strong>, Tu Constructora nació con el objetivo de brindar servicios de edificación y arquitectura honestos con ingeniería de primer nivel. Comenzando con un equipo apasionado y una dedicación a la solidez estructural, se ha expandido hasta convertirse en una empresa integral de construcción que presta servicios a clientes residenciales, comerciales e industriales en diversas regiones.
          </p>
        </div>

        {/* 3-Card Photo & Metric Mosaic */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          
          {/* Card 1: Supervision photo */}
          <div className="relative aspect-[4/3] md:aspect-auto rounded-3xl overflow-hidden shadow-md bg-neutral-900 border border-neutral-200 min-h-[260px]">
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"
              alt="Supervisión técnica de obra"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.onerror = null;
                const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
                e.currentTarget.src = `${base}assets/hero-frames/fotograma_0060.webp`;
              }}
            />
            <div className="absolute bottom-3 left-4 glass-pill px-3 py-1.5 rounded-xl text-[11px] font-medium text-white">
              Supervisión Técnica Presencial
            </div>
          </div>

          {/* Card 2: Charcoal Dark 98% Satisfaction Metric Card */}
          <div className="bg-[#0F1115] text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-2xl border border-neutral-800 relative overflow-hidden group min-h-[260px]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#E85A2A]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#E85A2A]/20 transition-all duration-500"></div>
            
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
                <Home className="w-5 h-5 text-[#E85A2A]" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                Auditorías Validadas
              </span>
            </div>

            <div className="my-6">
              <div className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white mb-2">
                98%
              </div>
              <p className="text-sm font-semibold text-neutral-300">
                Clientes satisfechos, 98% satisfacción garantizada
              </p>
            </div>

            <div className="text-xs text-neutral-400 pt-3 border-t border-white/10 flex items-center justify-between">
              <span>Más de 15,000+ proyectos entregados</span>
              <span className="text-[#E85A2A] font-bold">5.0 ★</span>
            </div>
          </div>

          {/* Card 3: Equipo de arquitectura y construcción */}
          <div className="relative aspect-[4/3] md:aspect-auto rounded-3xl overflow-hidden shadow-md bg-neutral-900 border border-neutral-200 min-h-[260px]">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d0fbb1861571?auto=format&fit=crop&w=800&q=80"
              alt="Equipo multidisciplinario de obra"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
            <div className="absolute bottom-3 left-4 glass-pill px-3 py-1.5 rounded-xl text-[11px] font-medium text-white">
              Equipo Técnico Multidisciplinario
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
