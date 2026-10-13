import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function QuoteModal({ isOpen, onClose }) {
  const [propertyType, setPropertyType] = useState('residential');
  const [serviceType, setServiceType] = useState('inspection');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#E85A2A', '#FF7543', '#FFFFFF', '#0F1115']
      });
    } catch (err) {
      // Ignore if confetti fails
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Fondo con desenfoque */}
      <div
        className="fixed inset-0 bg-[#0F1115]/80 backdrop-blur-xl transition-opacity animate-in fade-in"
        onClick={onClose}
      />

      {/* Cuadro de Diálogo Modal */}
      <div className="relative z-10 w-full max-w-2xl bg-white text-[#0F1115] rounded-3xl p-6 sm:p-10 shadow-2xl border border-neutral-200 animate-in zoom-in-95 duration-200">
        
        {/* Botón Cerrar */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-neutral-100 text-neutral-400 hover:text-[#0F1115] transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#E85A2A]"></span>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E85A2A]">
                  Presupuesto de Obra & Asesoría Técnica
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F1115]">
                Cotiza tu Proyecto con Tu Constructora
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 mt-1">
                Recibe una valoración profesional y desglose presupuestario detallado sin costos imprevistos.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Categoría de Propiedad */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                  Tipo de Propiedad
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'residential', label: 'Residencial' },
                    { id: 'commercial', label: 'Comercial' },
                    { id: 'industrial', label: 'Industrial' },
                    { id: 'retail', label: 'Comercio / Retail' },
                  ].map((t) => (
                    <button
                      type="button"
                      key={t.id}
                      onClick={() => setPropertyType(t.id)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                        propertyType === t.id
                          ? 'bg-[#E85A2A] text-white border-[#E85A2A] shadow-sm'
                          : 'bg-[#F4F5F7] text-neutral-700 border-transparent hover:bg-neutral-200'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Servicio Principal */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                  Servicio Principal Requerido
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'construction', label: 'Construcción Llave en Mano' },
                    { id: 'architecture', label: 'Diseño Arquitectónico & Cálculo' },
                    { id: 'remodel', label: 'Remodelación Integral / Fit-Out' },
                  ].map((s) => (
                    <button
                      type="button"
                      key={s.id}
                      onClick={() => setServiceType(s.id)}
                      className={`py-2 px-3 rounded-xl text-xs font-medium border transition-all text-left ${
                        serviceType === s.id
                          ? 'bg-[#0F1115] text-white border-[#0F1115]'
                          : 'bg-[#F4F5F7] text-neutral-600 border-transparent hover:bg-neutral-200'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Campos de Contacto */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Carlos Mendoza"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:border-[#E85A2A] focus:ring-1 focus:ring-[#E85A2A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Teléfono de Contacto *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:border-[#E85A2A] focus:ring-1 focus:ring-[#E85A2A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="tu@correo.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:border-[#E85A2A] focus:ring-1 focus:ring-[#E85A2A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Dirección / Ciudad de la Propiedad *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Calle, Número, Ciudad"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:border-[#E85A2A] focus:ring-1 focus:ring-[#E85A2A]"
                  />
                </div>
              </div>

              {/* Botón de Envío */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#E85A2A] hover:bg-[#D44D1F] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#E85A2A]/30 active:scale-[0.99] transition-all"
                >
                  <span>Enviar Solicitud de Cotización</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[11px] text-center text-neutral-400 mt-2.5">
                  100% Personalizado · Sin Compromiso · Respuesta en Menos de 24h
                </p>
              </div>

            </form>
          </div>
        ) : (
          <div className="py-10 text-center space-y-5 animate-in zoom-in-95">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-md">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0F1115]">
              ¡Solicitud de Cotización Recibida!
            </h3>
            
            <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
              Muchas gracias, <strong className="text-[#0F1115]">{formData.name || 'estimado cliente'}</strong>. Nuestro equipo técnico de ingeniería y arquitectura revisará los requerimientos para <span className="font-semibold text-[#0F1115]">{formData.address || 'tu proyecto'}</span> y te contactará para coordinar la valoración técnica.
            </p>

            <div className="p-4 rounded-2xl bg-[#F4F5F7] max-w-sm mx-auto text-xs text-neutral-600 flex items-center gap-2 justify-center">
              <ShieldCheck className="w-4 h-4 text-[#E85A2A]" />
              <span>Director de obra asignado a la revisión de tu proyecto</span>
            </div>

            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-8 py-3 rounded-full bg-[#0F1115] text-white text-sm font-semibold hover:bg-black transition-colors"
              >
                Cerrar Ventana
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
