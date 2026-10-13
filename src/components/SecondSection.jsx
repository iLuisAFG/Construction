import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

export const CORE_SERVICES_CAROUSEL = [
  {
    number: '01/04',
    id: 'commercial',
    category: 'Construcción Comercial & Corporativa',
    badge: '99%',
    badgeLabel: 'Entregas a Tiempo',
    description:
      'Desarrollamos proyectos de edificación comercial, torres de oficinas y plazas corporativas con optimización de costos, riguroso control de cronogramas y los más altos estándares constructivos.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Edificación de Oficinas y Plazas Comerciales',
      'Estructuras de Concreto y Acero',
      'Instalaciones Especiales y Climatización',
      'Gestión Integral de Obra Llave en Mano',
    ],
    details: {
      lifespan: '60+ Años Estructurales',
      material: 'Concreto Armado f\'c 300 / Perfiles de Acero Estructural A992',
      warranty: 'Garantía Estructural por 25 Años',
      compliance: 'Normativa Sismorresistente y Estándares de Eficiencia LEED',
    },
  },
  {
    number: '02/04',
    id: 'residential',
    category: 'Construcción Residencial de Lujo',
    badge: '100%',
    badgeLabel: 'Llave en Mano',
    description:
      'Hacemos realidad residencias unifamiliares y desarrollos habitacionales de alta gama, integrando arquitectura de vanguardia, materiales nobles y sistemas de construcción de máxima eficiencia.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Residencias de Diseño y Arquitectura de Autor',
      'Cimentación Profunda y Muros Portantes',
      'Acabados Nobles y Cancelería Hermética',
      'Domótica Integrada y Eficiencia Energética',
    ],
    details: {
      lifespan: '70+ Años Estructurales',
      material: 'Concreto de Alta Resistencia / Piedra Natural / Cancelería RPT',
      warranty: 'Garantía Decenal Estructural y Acabados de Primera',
      compliance: 'Cumplimiento Código Técnico de Edificación & Eficiencia A+',
    },
  },
  {
    number: '03/04',
    id: 'industrial',
    category: 'Construcción Industrial & Logística',
    badge: '250k+',
    badgeLabel: 'm² Construidos',
    description:
      'Diseño y edificación de naves industriales, centros logísticos y plantas manufactureras con pisos de alta planicidad, grandes claros estructurales y máxima durabilidad operativa.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Naves Industriales y Parques Logísticos',
      'Pisos de Alta Resistencia y Planicidad Láser',
      'Grandes Claros y Estructuras Metálicas Pesadas',
      'Estricto Cumplimiento de Normas de Seguridad',
    ],
    details: {
      lifespan: '50+ Años',
      material: 'Acero Estructural Pesado / Cerramientos Térmicos PIR',
      warranty: 'Garantía Estructural Industrial de 30 Años',
      compliance: 'Certificación OSHA, Normas FM Global y Resistencia al Fuego',
    },
  },
  {
    number: '04/04',
    id: 'retail',
    category: 'Remodelación & Fit-Out Corporativo',
    badge: '30%',
    badgeLabel: 'Mayor Eficiencia Espacial',
    description:
      'Transformamos espacios comerciales, corporativos y de retail mediante remodelaciones integrales, diseño de interiores constructivo y optimización de flujos de trabajo.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Adecuación Integral de Locales y Retail',
      'Remodelaciones y Ampliaciones de Oficinas',
      'Planificación de Obra en Fases Nocturnas',
      'Cero Interrupción de las Operaciones Clave',
    ],
    details: {
      lifespan: '25 Años',
      material: 'Vidrio Laminado Acústico / Divisiones Modulares / Acabados Top',
      warranty: 'Garantía de Obra Civil e Instalaciones',
      compliance: 'Normativa de Accesibilidad y Seguridad Comercial',
    },
  },
];

export default function SecondSection({ onSelectService }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const activeService = CORE_SERVICES_CAROUSEL[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % CORE_SERVICES_CAROUSEL.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + CORE_SERVICES_CAROUSEL.length) % CORE_SERVICES_CAROUSEL.length);
  };

  return (
    <section id="about" className="relative py-20 sm:py-28 lg:py-32 bg-white text-[#0F1115]">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* PARTE 1: DECLARACIÓN EDITORIAL + MÉTRICAS DE PRUEBA SOCIAL */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mb-14 sm:mb-16">
          
          <div className="lg:col-span-4 pt-1">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E85A2A]"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0F1115]">
                Acerca de Tu Constructora
              </span>
            </div>
          </div>

          <div className="lg:col-span-8">
            <p className="text-xl sm:text-2xl md:text-[27px] font-bold text-[#0F1115] leading-[1.3] tracking-tight">
              Con más de 20 años en el sector de la edificación, diseño arquitectónico y construcción integral, nos hemos ganado una sólida reputación por nuestra confiabilidad, rigor técnico y mano de obra de primer nivel. Nuestros profesionales certificados se dedican a hacer realidad proyectos duraderos, seguros y de la más alta exigencia estructural.
            </p>
          </div>

        </div>

        {/* Fila de Avatares y Estadísticas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center pb-20 sm:pb-28 border-b border-neutral-100">
          
          <div className="lg:col-span-4 space-y-2">
            <div className="flex -space-x-2.5">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80"
                alt="Cliente 1"
                className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm ring-1 ring-orange-300"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
                alt="Cliente 2"
                className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm ring-1 ring-amber-300"
              />
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&h=120&q=80"
                alt="Cliente 3"
                className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm ring-1 ring-purple-300"
              />
            </div>

            <div className="flex items-center gap-1 text-[#E85A2A] pt-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#E85A2A] text-[#E85A2A]" />
              ))}
            </div>

            <p className="text-[11.5px] text-neutral-500 font-medium">
              Calificación de 4.9/5 opiniones
            </p>
          </div>

          <div className="lg:col-span-8 flex items-center justify-between sm:justify-start sm:gap-14 lg:gap-16 pt-2 lg:pt-0">
            
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0F1115] tracking-tight">
                10+
              </div>
              <div className="text-[11.5px] text-neutral-500 font-normal mt-1 whitespace-nowrap">
                Años de Experiencia
              </div>
            </div>

            <div className="w-px h-12 bg-neutral-200 shrink-0" />

            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0F1115] tracking-tight">
                250+
              </div>
              <div className="text-[11.5px] text-neutral-500 font-normal mt-1 whitespace-nowrap">
                Obras Completadas
              </div>
            </div>

            <div className="w-px h-12 bg-neutral-200 shrink-0" />

            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0F1115] tracking-tight">
                4.9/5
              </div>
              <div className="text-[11.5px] text-neutral-500 font-normal mt-1 whitespace-nowrap">
                Valoración de Clientes
              </div>
            </div>

          </div>

        </div>

        {/* PARTE 2: CARRUSEL DE SERVICIOS PRINCIPALES */}
        <div id="services" className="pt-20 sm:pt-24">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-6">
            
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#E85A2A]"></span>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0F1115]">
                  Nuestros Servicios Principales
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold text-[#0F1115] tracking-tight leading-[1.1]">
                Soluciones Integrales de Construcción<br />Bajo una Misma Dirección
              </h2>
            </div>

            <div className="max-w-xs">
              <p className="text-xs sm:text-[13px] text-neutral-500 leading-relaxed">
                Tu Constructora proporciona servicios integrales de arquitectura, ingeniería y edificación para proyectos residenciales, comerciales e industriales.
              </p>
            </div>

          </div>

          {/* Slide en 3 Columnas */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            <div className="lg:col-span-3">
              <span className="font-mono text-xs font-bold text-neutral-400 block mb-2">
                {activeService.number}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0F1115] leading-tight tracking-tight">
                {activeService.category}
              </h3>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] sm:aspect-square rounded-3xl overflow-hidden bg-neutral-900 shadow-lg">
                <img
                  src={activeService.image}
                  alt={activeService.category}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
                    e.currentTarget.src = `${base}assets/hero-frames/fotograma_0080.webp`;
                  }}
                />
                
                <div className="absolute bottom-5 left-5 bg-white rounded-2xl p-4 sm:p-5 shadow-2xl min-w-[145px]">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#0F1115] leading-none tracking-tight">
                    {activeService.badge}
                  </div>
                  <div className="text-[11px] text-neutral-500 font-medium mt-1.5 whitespace-nowrap">
                    {activeService.badgeLabel}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="bg-[#F3F4F6] rounded-3xl p-7 sm:p-8 flex flex-col justify-between h-full">
                
                <div>
                  <p className="text-xs sm:text-[13.5px] text-neutral-700 leading-relaxed font-normal mb-8">
                    {activeService.description}
                  </p>

                  <div className="mb-8">
                    <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider block mb-3.5">
                      Aspectos Clave
                    </span>
                    <ul className="space-y-2.5">
                      {activeService.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs sm:text-[13px] text-neutral-800 font-medium">
                          <span className="text-[#E85A2A] font-bold text-sm leading-none shrink-0">+</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => onSelectService(activeService)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#E85A2A] hover:bg-[#D44D1F] text-white text-xs sm:text-sm font-semibold active:scale-[0.98] transition-all duration-300 shadow-md shadow-[#E85A2A]/20"
                  >
                    <span>Ver Servicio</span>
                    <span className="text-sm font-bold">→</span>
                  </button>
                </div>

              </div>
            </div>

          </div>

          <div className="mt-10 sm:mt-12 flex items-center justify-center gap-3">
            <button
              onClick={handlePrev}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FCEEE7] hover:bg-[#F9DDD3] text-[#E85A2A] flex items-center justify-center transition-all duration-200 active:scale-95 shadow-sm"
              aria-label="Servicio anterior"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FCEEE7] hover:bg-[#F9DDD3] text-[#E85A2A] flex items-center justify-center transition-all duration-200 active:scale-95 shadow-sm"
              aria-label="Siguiente servicio"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
