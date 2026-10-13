import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ onOpenQuote }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'services', 'journey', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#home', id: 'home' },
    { name: 'Nosotros', href: '#about', id: 'about' },
    { name: 'Servicios', href: '#services', id: 'services' },
    { name: 'Proyectos', href: '#journey', id: 'journey' },
    { name: 'Contacto', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-tactile px-6 sm:px-10 lg:px-14 ${
          scrolled ? 'pt-4 pb-4 bg-[#0F1115]/75 backdrop-blur-md border-b border-white/5' : 'pt-6 pb-6'
        }`}
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          
          {/* Logotipo: Icono de casa en línea blanca + Tu Constructora */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label="Página de inicio de Tu Constructora"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 text-white transition-transform duration-300 group-hover:scale-110"
            >
              <path d="M3 10.5L12 3l9 7.5" />
              <path d="M5 9v11a1 1 0 001 1h12a1 1 0 001-1V9" />
            </svg>
            <span className="text-lg sm:text-xl font-bold tracking-tight text-white">
              Tu Constructora
            </span>
          </a>

          {/* Menú de Cápsulas de Vidrio Esmerilado */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition-all duration-300 ease-out border backdrop-blur-md ${
                    isActive
                      ? 'bg-white/25 text-white border-white/30 shadow-sm'
                      : 'bg-white/10 hover:bg-white/20 text-white/90 hover:text-white border-white/10 hover:border-white/20'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Botón Píldora Blanco: Cotizar Proyecto */}
          <div className="hidden sm:flex items-center">
            <button
              onClick={onOpenQuote}
              className="group inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white text-[#0F1115] text-[13px] font-bold shadow-lg shadow-black/20 hover:bg-neutral-100 active:scale-[0.98] transition-all duration-300 ease-tactile"
            >
              <span>Cotizar Proyecto</span>
              <span className="text-sm font-extrabold transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
          </div>

          {/* Gatillo de Menú Móvil */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenQuote}
              className="px-3.5 py-1.5 rounded-full bg-white text-[#0F1115] text-xs font-bold shadow-sm"
            >
              Cotizar →
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 border border-white/15 transition-colors"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Cajón de Menú Móvil */}
      <div
        className={`fixed inset-0 z-40 bg-[#0F1115]/95 backdrop-blur-2xl transition-all duration-500 ease-tactile md:hidden flex flex-col justify-between p-6 pt-24 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <div className="flex flex-col gap-2">
          <span className="text-xs uppercase tracking-widest text-[#E85A2A] font-semibold mb-2">
            Navegación
          </span>
          {navLinks.map((link, idx) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              style={{ transitionDelay: `${idx * 40}ms` }}
              className={`text-left text-2xl font-bold py-3 border-b border-white/5 transition-all duration-300 ${
                activeSection === link.id ? 'text-[#E85A2A]' : 'text-white/80 hover:text-white'
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-4 mt-8 pt-6 border-t border-white/10">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenQuote();
            }}
            className="w-full py-4 rounded-full bg-white text-[#0F1115] font-bold flex items-center justify-center gap-2 shadow-lg"
          >
            <span>Cotizar Proyecto</span>
            <span className="font-bold">→</span>
          </button>
        </div>
      </div>
    </>
  );
}
