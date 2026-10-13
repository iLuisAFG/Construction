import React from 'react';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

export default function FooterMassive({ onOpenQuote }) {
  const quickLinks = [
    { label: 'Acerca de Nosotros', href: '#about' },
    { label: 'Nuestros Servicios', href: '#services' },
    { label: 'Nuestro Proceso', href: '#journey' },
    { label: 'Conoce al Equipo', href: '#team' },
    { label: 'Contacto y Asesoría', href: '#contact' },
  ];

  const utilityPages = [
    { label: 'Guía de Estilos', href: '#' },
    { label: 'Licencias y Normativa', href: '#' },
    { label: 'Especificaciones de Garantía', href: '#' },
    { label: 'Reportes de Seguridad OSHA', href: '#' },
    { label: 'Portal de Clientes', href: '#' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative bg-[#0F1115] text-white pt-24 pb-12 overflow-hidden border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cuadrícula de 4 Columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* Columna 1: Marca y Misión */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#E85A2A] flex items-center justify-center text-white shadow-sm">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-5 h-5 text-white"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 10.5L12 3l9 7.5" />
                  <path d="M5.5 8.5V20a1 1 0 001 1h11a1 1 0 001-1V8.5" />
                  <path d="M10 21v-6a1 1 0 011-1h2a1 1 0 011 1v6" />
                </svg>
              </div>
              <span className="text-2xl font-bold tracking-tight text-white flex items-center gap-1">
                Tu Constructora
                <span className="w-1.5 h-1.5 rounded-full bg-[#E85A2A]"></span>
              </span>
            </div>

            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
              Tu socio de confianza en arquitectura, ingeniería y construcción de vanguardia. Proyectos diseñados para perdurar y construidos con la más alta exigencia estructural.
            </p>

            <div className="flex items-center gap-3 pt-2">
              {['X', 'LinkedIn', 'Instagram', 'YouTube'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#E85A2A] text-neutral-400 hover:text-white border border-white/10 flex items-center justify-center text-xs font-semibold transition-all duration-300"
                  aria-label={platform}
                >
                  {platform[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#E85A2A] font-bold">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-neutral-400 hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Páginas de Utilidad */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#E85A2A] font-bold">
              Documentación
            </h4>
            <ul className="space-y-2.5 text-sm">
              {utilityPages.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-neutral-400 hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#E85A2A] font-bold">
              Contacto Directo
            </h4>
            <ul className="space-y-3.5 text-sm text-neutral-400">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#E85A2A] shrink-0 mt-1" />
                <a href="mailto:contacto@tuconstructora.com" className="hover:text-white transition-colors">
                  contacto@tuconstructora.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#E85A2A] shrink-0 mt-1" />
                <a href="tel:+15553829104" className="hover:text-white transition-colors">
                  +1 (555) 382-9104
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#E85A2A] shrink-0 mt-1" />
                <span>
                  742 Evergreen Terrace, Suite 400<br />Austin, TX 78701
                </span>
              </li>
            </ul>

            <button
              onClick={onOpenQuote}
              className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-[#E85A2A] hover:text-white transition-colors"
            >
              <span>Agendar Inspección en Sitio</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Barra Legal Inferior */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© 2026 Tu Constructora. Todos los derechos reservados.</p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-neutral-300 transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-neutral-300 transition-colors">
              Términos de Servicio
            </a>
            <button
              onClick={scrollToTop}
              className="hover:text-[#E85A2A] transition-colors"
            >
              Volver arriba ↑
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
