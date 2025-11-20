"use client";

import { motion } from "framer-motion";

const particles = [
  { top: "18%", left: "14%", delay: 0 },
  { top: "26%", left: "82%", delay: 1 },
  { top: "40%", left: "10%", delay: 2 },
  { top: "55%", left: "88%", delay: 1.5 },
  { top: "65%", left: "22%", delay: 2.5 },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#DBEAFE] to-white">
      {/* BURBUJA 1 */}
      <motion.div
        initial={{ scale: 1, opacity: 0.6 }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#93C5FD]/60 blur-3xl"
        aria-hidden="true"
      />

      {/* BURBUJA 2 */}
      <motion.div
        initial={{ scale: 1, opacity: 0.7 }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-24 bottom-[-80px] h-64 w-64 rounded-full bg-[#BFDBFE]/70 blur-3xl"
        aria-hidden="true"
      />

      {/* GRADIENTE DETRÁS DEL TEXTO */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden="true"
      >
        <div className="h-[260px] w-[260px] rounded-full bg-[#BFDBFE]/50 blur-[120px] opacity-80" />
      </div>

      {/* PARTÍCULAS SUAVES */}
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="pointer-events-none absolute h-1.5 w-1.5 rounded-full bg-[#1D4ED8]/40"
          style={{ top: p.top, left: p.left }}
          initial={{ opacity: 0.6, y: 0 }}
          animate={{ opacity: [0.4, 0.9, 0.4], y: [0, -6, 0] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
          aria-hidden="true"
        />
      ))}

      {/* CONTENIDO HERO */}
      <div className="relative max-w-4xl mx-auto px-4 pt-24 pb-20 text-center">

        <p className="md:hidden font-semibold text-lg text-[#1F3C88] mb-3">
  ClinicNova
</p>
        {/* TÍTULO CON GLOW SUAVE */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-semibold leading-tight text-[#1F3C88] drop-shadow-[0_0_24px_rgba(129,140,248,0.45)]"
        >
          La nueva era inteligente para clínicas:
          <span className="block mt-1">agenda llena, sin no-shows.</span>
        </motion.h1>

        {/* SUBTÍTULO */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 text-[#1F3C88]/80 text-lg leading-relaxed max-w-2xl mx-auto"
        >
          Automatizamos WhatsApp con IA para aumentar pacientes y reducir cancelaciones,
          mientras tu equipo se centra en lo importante: la experiencia del paciente.
        </motion.p>

        {/* BOTONES */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://wa.me/34600000000?text=Hola%20ClinicNova%2C%20quiero%20optimizar%20mi%20cl%C3%ADnica."
            className="bg-[#1F3C88] text-white px-8 py-4 rounded-full text-sm font-medium shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all"
          >
            Quiero optimizar mi clínica
          </a>

          <a
            href="#como-funciona"
            className="border border-[#1F3C88]/30 text-[#1F3C88] px-8 py-4 rounded-full text-sm font-medium hover:bg-white hover:scale-[1.03] transition-all"
          >
            Ver cómo funciona
          </a>
        </motion.div>
        <div className="nav-bg">
  {/* Hero contenido */}
</div>

        {/* NOTA */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-5 text-xs text-[#1F3C88]/60"
        >
          Sin permanencia. Trabajamos con pocas clínicas por ciudad.
        </motion.p>
      </div>
    </section>
  );
}