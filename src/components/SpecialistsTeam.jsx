import React from 'react';
import { ShieldCheck, HeartHandshake, HardHat, CheckCircle2 } from 'lucide-react';

const SPECIALISTS = [
  {
    name: 'Bessie Cooper',
    role: 'Ingeniera Estructural Senior',
    credentials: 'PE, LEED AP',
    experience: '14+ Años',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Brooklyn Simmons',
    role: 'Jefa de Calidad y Cumplimiento',
    credentials: 'RRC, OSHA 30',
    experience: '18+ Años',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Floyd Miles',
    role: 'Superintendente General de Obra',
    credentials: 'Ing. Civil, OSHA 30',
    experience: '22+ Años',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Leslie Alexander',
    role: 'Directora de Proyectos Comerciales',
    credentials: 'MBA, PMP',
    experience: '16+ Años',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
  },
];

const VALUES = [
  {
    title: 'Integridad Primero',
    desc: 'Creemos en la comunicación honesta, presupuestos transparentes y hacer las cosas bien incluso cuando nadie está mirando.',
    icon: <HeartHandshake className="w-5 h-5 text-[#E85A2A]" />,
  },
  {
    title: 'Calidad sin Concesiones',
    desc: 'Cada material, proceso y elemento estructural se selecciona para brindar durabilidad a largo plazo y máxima resistencia sísmica.',
    icon: <ShieldCheck className="w-5 h-5 text-[#E85A2A]" />,
  },
  {
    title: 'Seguridad Siempre',
    desc: 'Desde nuestras cuadrillas certificadas hasta tu familia y propiedad, los protocolos de seguridad nunca son negociables.',
    icon: <HardHat className="w-5 h-5 text-[#E85A2A]" />,
  },
  {
    title: 'Compromiso con el Cliente',
    desc: 'Construimos relaciones duraderas que continúan mucho después de la entrega de la obra, con garantías estructurales y atención continua.',
    icon: <CheckCircle2 className="w-5 h-5 text-[#E85A2A]" />,
  },
];

export default function SpecialistsTeam() {
  return (
    <section id="team" className="relative py-28 sm:py-36 bg-[#FBFBFA] text-[#0F1115] border-t border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#E85A2A]"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E85A2A]">
                Nuestro Equipo
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0F1115] leading-[1.08]">
              Profesionales Detrás de Cada Propiedad.
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              Cada obra de Tu Constructora es supervisada directamente por ingenieros civiles, directores de obra certificados y arquitectos proyectistas.
            </p>
          </div>
        </div>

        {/* Tarjetas del Equipo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 mb-24">
          {SPECIALISTS.map((member) => (
            <div
              key={member.name}
              className="group bg-white rounded-3xl p-4 border border-neutral-200/80 shadow-soft-lift hover:shadow-xl transition-all duration-400 ease-tactile"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-900 mb-4 relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 ease-tactile group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full glass-pill text-[10px] font-mono text-white">
                  {member.experience}
                </div>
              </div>

              <div className="px-2 pb-2">
                <h3 className="text-lg font-bold text-[#0F1115] group-hover:text-[#E85A2A] transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs text-neutral-500 font-medium mt-0.5">
                  {member.role}
                </p>
                <div className="mt-3 pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-400 font-mono">
                  <span>{member.credentials}</span>
                  <span className="text-[#E85A2A] font-semibold">Activo en Obra</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Principios Fundamentales */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E85A2A] font-bold">
              Principios Fundamentales
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0F1115] mt-1">
              Guiando Cada Proyecto
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="bg-[#F4F5F7] rounded-3xl p-7 border border-neutral-200/80 hover:border-neutral-300 transition-colors"
              >
                <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-5">
                  {v.icon}
                </div>
                <h4 className="text-base font-bold text-[#0F1115] mb-2">
                  {v.title}
                </h4>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
