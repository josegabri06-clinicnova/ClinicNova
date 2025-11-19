"use client";

import { motion } from "framer-motion";
import { TrendingDown, TrendingUp, MessageCircle } from "lucide-react";

export default function Results() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        {/* TÍTULO */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-[#1F3C88]"
        >
          Resultados que buscamos en tu clínica
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          viewport={{ once: true }}
          className="mt-3 text-sm md:text-base text-[#1F3C88]/80 max-w-2xl"
        >
          Cada centro es distinto, pero siempre trabajamos con objetivos claros:
          más estabilidad en la agenda, menos no-shows y menos caos en WhatsApp.
        </motion.p>

        {/* KPIs PRINCIPALES */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Cancelaciones / No-shows */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-[#F3D4D4] bg-[#FFF7F7] p-6 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-[#FEE2E2] flex items-center justify-center">
                <TrendingDown className="w-5 h-5 text-[#B91C1C]" />
              </div>
              <div>
                <p className="text-xs font-medium text-[#B91C1C]/70 uppercase tracking-[0.16em]">
                  No-shows y cancelaciones
                </p>
                <p className="mt-1 text-2xl font-semibold text-[#B91C1C]">
                  -30% / -50%
                </p>
              </div>
            </div>
            <p className="mt-4 text-xs text-[#7F1D1D]/80 leading-relaxed">
              Reducción típica al implementar reconfirmaciones T-24/T-3 y lista
              de espera automatizada.
            </p>
          </motion.div>

          {/* Ocupación agenda */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.08 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-[#C7D9FF] bg-[#F4F7FF] p-6 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-[#DBEAFE] flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-[#1F3C88]" />
              </div>
              <div>
                <p className="text-xs font-medium text-[#1F3C88]/70 uppercase tracking-[0.16em]">
                  Ocupación de agenda
                </p>
                <p className="mt-1 text-2xl font-semibold text-[#1F3C88]">
                  +15% / +25%
                </p>
              </div>
            </div>
            <p className="mt-4 text-xs text-[#1F3C88]/80 leading-relaxed">
              Mejora en el porcentaje de huecos ocupados rellenando cancelaciones
              con lista de espera y follow-up automático.
            </p>
          </motion.div>

          {/* WhatsApp y carga del equipo */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.16 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-[#D5E0FF] bg-white p-6 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-[#E0ECFF] flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-[#1F3C88]" />
              </div>
              <div>
                <p className="text-xs font-medium text-[#1F3C88]/70 uppercase tracking-[0.16em]">
                  WhatsApp y recepción
                </p>
                <p className="mt-1 text-2xl font-semibold text-[#1F3C88]">
                  &lt; 30 seg
                </p>
              </div>
            </div>
            <p className="mt-4 text-xs text-[#1F3C88]/80 leading-relaxed">
              Tiempo de respuesta percibido por el paciente, sin tener al personal
              pendiente del móvil todo el día.
            </p>
          </motion.div>
        </div>

        {/* CASO TIPO */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 rounded-2xl border border-[#E3EDF7] bg-[#F9FBFF] p-6 md:p-7"
        >
          <p className="text-xs font-medium text-[#1F3C88]/70 uppercase tracking-[0.18em] mb-2">
            Escenario típico
          </p>
          <p className="text-sm text-[#1F3C88]/85 leading-relaxed">
            Clínica estética con 2–3 cabinas y alto volumen de WhatsApp.
            Tras 6–8 semanas con ClinicNova, se reducen claramente los huecos
            vacíos de última hora, el equipo de recepción deja de depender del
            móvil personal y la dirección tiene visibilidad real de lo que ocurre
            en la agenda semana a semana.
          </p>
        </motion.div>
      </div>
    </section>
  );
}