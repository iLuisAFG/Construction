import React from 'react';
import { X, ShieldCheck, CheckCircle2, ArrowRight, Layers, Clock, Award } from 'lucide-react';

export default function ServiceDetailModal({ service, onClose, onBookInspection }) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div
        className="fixed inset-0 bg-[#0F1115]/85 backdrop-blur-xl transition-opacity animate-in fade-in"
        onClick={onClose}
      />

      <div className="relative z-10 w-full max-w-3xl bg-white text-[#0F1115] rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 animate-in zoom-in-95 duration-200">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Banner Fotográfico */}
        <div className="relative aspect-[21/9] sm:aspect-[21/8] bg-neutral-900">
          <img
            src={service.image}
            alt={service.category}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          
          <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 text-white">
            <span className="font-mono text-xs text-[#E85A2A] font-bold block mb-1">
              {service.number} ESPECIFICACIÓN TÉCNICA
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              {service.category}
            </h3>
          </div>
        </div>

        {/* Cuerpo del Modal */}
        <div className="p-6 sm:p-10 space-y-8">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold mb-2">
              Resumen Ejecutivo
            </h4>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Cuadrícula de Especificaciones */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 rounded-2xl bg-[#F4F5F7] border border-neutral-200/80">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block mb-1">
                Vida Útil Estructural Estimada
              </span>
              <div className="text-sm font-bold text-[#0F1115] flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#E85A2A]" />
                {service.details?.lifespan || '50+ Años'}
              </div>
            </div>

            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block mb-1">
                Especificación y Materiales
              </span>
              <div className="text-sm font-bold text-[#0F1115] flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-[#E85A2A]" />
                {service.details?.material || 'Concreto Armado / Acero Estructural'}
              </div>
            </div>

            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block mb-1">
                Garantía Estructural y de Obra
              </span>
              <div className="text-sm font-bold text-[#0F1115] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#E85A2A]" />
                {service.details?.warranty || 'Garantía Decenal y de Ejecución'}
              </div>
            </div>

            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block mb-1">
                Normativas y Cumplimiento
              </span>
              <div className="text-sm font-bold text-[#0F1115] flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#E85A2A]" />
                {service.details?.compliance || 'Código Técnico de Edificación & Sísmica'}
              </div>
            </div>
          </div>

          {/* Lista de Alcance */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold mb-3">
              Alcance y Partidas del Proyecto
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#E85A2A] shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pie de Acción */}
          <div className="pt-4 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-neutral-500">
              Tiempo de Ejecución: <strong className="text-[#0F1115]">{service.badge} {service.badgeLabel}</strong>
            </div>

            <button
              onClick={() => {
                onClose();
                onBookInspection();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#E85A2A] hover:bg-[#D44D1F] text-white text-sm font-bold shadow-md shadow-[#E85A2A]/30 active:scale-[0.98] transition-all"
            >
              <span>Solicitar Presupuesto para este Servicio</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
