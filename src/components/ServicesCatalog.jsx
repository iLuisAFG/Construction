import React from 'react';
import { ArrowRight, Plus, CheckCircle, Shield, Layers, Building, Factory, ShoppingBag } from 'lucide-react';

export const SERVICES_DATA = [
  {
    number: '01/04',
    id: 'commercial',
    category: 'Construcción Comercial & Corporativa',
    badge: '99%',
    badgeLabel: 'Entregas a Tiempo',
    description: 'Desarrollamos proyectos de edificación comercial, torres de oficinas y plazas corporativas con optimización de costos, riguroso control de cronogramas y los más altos estándares constructivos.',
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
    }
  },
  {
    number: '02/04',
    id: 'residential',
    category: 'Construcción Residencial de Lujo',
    badge: '100%',
    badgeLabel: 'Llave en Mano',
    description: 'Hacemos realidad residencias unifamiliares y desarrollos habitacionales de alta gama, integrando arquitectura de vanguardia, materiales nobles y sistemas de construcción de máxima eficiencia.',
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
    }
  },
  {
    number: '03/04',
    id: 'industrial',
    category: 'Construcción Industrial & Logística',
    badge: '250k+',
    badgeLabel: 'm² Construidos',
    description: 'Diseño y edificación de naves industriales, centros logísticos y plantas manufactureras con pisos de alta planicidad, grandes claros estructurales y máxima durabilidad operativa.',
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
    }
  },
  {
    number: '04/04',
    id: 'retail',
    category: 'Remodelación & Fit-Out Corporativo',
    badge: '30%',
    badgeLabel: 'Mayor Eficiencia Espacial',
    description: 'Transformamos espacios comerciales, corporativos y de retail mediante remodelaciones integrales, diseño de interiores constructivo y optimización de flujos de trabajo.',
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
    }
  },
];

export default function ServicesCatalog({ onSelectService, onOpenQuote }) {
  return (
    <section id="services" className="relative py-28 sm:py-36 bg-[#F4F5F7] text-[#0F1115]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 sm:mb-24 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#E85A2A]"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E85A2A]">
                Nuestros Servicios Principales
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0F1115] leading-[1.08]">
              Soluciones Integrales de Construcción
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              Tu Constructora proporciona servicios integrales de arquitectura, ingeniería y edificación para proyectos residenciales, comerciales e industriales.
            </p>
          </div>
        </div>

        {/* Stacked Numbered Service Cards */}
        <div className="space-y-10 sm:space-y-12">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200/80 shadow-soft-lift hover:shadow-xl hover:border-neutral-300 transition-all duration-400 ease-tactile group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Column 1: Number & Service Title */}
                <div className="lg:col-span-3">
                  <span className="font-mono text-xs font-semibold text-neutral-400 block mb-3">
                    {service.number}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0F1115] tracking-tight group-hover:text-[#F25C24] transition-colors">
                    {service.category}
                  </h3>
                </div>

                {/* Column 2: Architectural Image with Floating Metric Badge */}
                <div className="lg:col-span-5 relative">
                  <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-900 shadow-md">
                    <img
                      src={service.image}
                      alt={service.category}
                      className="w-full h-full object-cover transition-transform duration-700 ease-tactile group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Floating Metric Pill */}
                    <div className="absolute bottom-4 left-4 glass-card px-4 py-3 rounded-xl border border-white/20 shadow-xl backdrop-blur-md">
                      <div className="text-2xl font-extrabold text-white leading-none">
                        {service.badge}
                      </div>
                      <div className="text-[10px] uppercase tracking-wider text-neutral-300 font-medium mt-1">
                        {service.badgeLabel}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Column 3: Description, Bullet Highlights & Action CTA */}
                <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-6">
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Highlights List */}
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 block mb-3 font-semibold">
                      Aspectos Clave
                    </span>
                    <ul className="space-y-2.5">
                      {service.highlights.map((item, i) => (
                        <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-700 font-medium">
                          <span className="w-4 h-4 rounded-full bg-[#E85A2A]/10 text-[#E85A2A] flex items-center justify-center font-bold text-xs shrink-0">
                            +
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Button */}
                  <div className="pt-2 flex items-center gap-3">
                    <button
                      onClick={() => onSelectService(service)}
                      className="group/btn inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#E85A2A] hover:bg-[#D44D1F] text-white text-xs sm:text-sm font-semibold shadow-md shadow-[#E85A2A]/20 active:scale-[0.98] transition-all duration-300 ease-tactile"
                    >
                      <span>Ver Servicio</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </button>
                    
                    <button
                      onClick={onOpenQuote}
                      className="text-xs font-semibold text-neutral-500 hover:text-[#0F1115] transition-colors px-3 py-2"
                    >
                      Cotizar Ahora
                    </button>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
