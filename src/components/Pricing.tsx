"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

export default function Pricing() {
  return (
    <section id="precios" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        
        {/* TÍTULO */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-[#1F3C88]"
        >
          Precios y condiciones
        </motion.h2>

        {/* SUBTÍTULO */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          viewport={{ once: true }}
          className="mt-3 text-sm md:text-base text-[#1F3C88]/80 max-w-2xl"
        >
          Adaptamos el sistema a tu clínica sin permanencia y con resultados medibles desde el primer mes.
        </motion.p>

        {/* TARJETA DE PRECIO */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 bg-[#F9FBFF] border border-[#D9E3FF] rounded-2xl shadow-sm p-8 md:p-10"
        >
          {/* Encabezado */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-12 w-12 rounded-full bg-[#DBEAFE] flex items-center justify-center">
              <Sparkles className="w-7 h-7 text-[#1F3C88]" />
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-[#1F3C88]">
                Plan Profesional
              </h3>
              <p className="text-sm text-[#1F3C88]/70">
                Ideal para clínicas con 1–5 cabinas
              </p>
            </div>
          </div>

          {/* PRECIO */}
          <div className="text-[#1F3C88]">
            <p className="text-4xl md:text-5xl font-bold">
              799€ / mes
            </p>
            <p className="text-sm text-[#1F3C88]/70">
              + variable por paciente generado
            </p>
          </div>

          {/* LISTA DE BENEFICIOS */}
          <ul className="mt-8 space-y-3 text-sm text-[#1F3C88]/85">
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#1F3C88]" />
              Automatización completa de WhatsApp
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#1F3C88]" />
              Reconfirmaciones T-24 / T-3 automáticas
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#1F3C88]" />
              Lista de espera inteligente y relleno de huecos
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#1F3C88]" />
              Reposición automática de cancelaciones
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#1F3C88]" />
              Seguimiento de leads y pacientes inactivos
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#1F3C88]" />
              Dashboard mensual con métricas reales
            </li>
          </ul>

          {/* CTA */}
          <div className="mt-10">
            <a
              href="https://wa.me/34600000000?text=Hola%20ClinicNova%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20plan."
              className="inline-block bg-[#1F3C88] text-white px-10 py-4 rounded-full text-sm font-medium shadow-md hover:shadow-lg hover:scale-[1.03] transition-all"
            >
              Hablar con el equipo
            </a>
          </div>

          {/* NOTA */}
          <p className="mt-4 text-xs text-[#1F3C88]/60">
            Sin permanencia. Cancelación en cualquier momento.
          </p>
        </motion.div>
      </div>
    </section>
  );
}