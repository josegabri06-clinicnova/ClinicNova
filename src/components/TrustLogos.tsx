"use client";

import { motion } from "framer-motion";

export default function TrustLogos() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto py-20 px-4 text-center">
        {/* Etiqueta */}
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-xs font-medium tracking-[0.22em] uppercase text-[#1F3C88]/70"
        >
          Fase piloto
        </motion.p>

        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          viewport={{ once: true }}
          className="mt-2 text-2xl md:text-3xl font-semibold text-[#1F3C88]"
        >
          Seleccionando nuestras clínicas de referencia
        </motion.h2>

        {/* Texto intro */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-3 text-sm md:text-base text-[#1F3C88]/75 max-w-2xl mx-auto"
        >
          Estamos incorporando unas pocas clínicas piloto en España para optimizar
          el sistema. Si tiene sentido por tamaño, equipo y servicios, tu clínica
          puede ser una de ellas.
        </motion.p>

        {/* “Logos” placeholder */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {["Tu clínica aquí", "Centro piloto 1", "Centro piloto 2"].map((label) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-[#E3EDF7] bg-[#F9FBFF] h-20 flex items-center justify-center text-sm text-[#1F3C88]/60"
            >
              {label}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}