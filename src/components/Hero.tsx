"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="
        relative 
        overflow-hidden 
        w-full 
        bg-gradient-to-b 
        from-[#e6efff] 
        to-[#f8fbff]
        pt-16 md:pt-32 
        pb-24
      "
    >

      {/* Bubbles animation */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-2 h-2 bg-[#bfd3ff] rounded-full"
          animate={{ y: [-10, 10, -10], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 6, repeat: Infinity }}
          style={{ top: "20%", left: "10%" }}
        />
        <motion.div
          className="absolute w-3 h-3 bg-[#c7d9ff] rounded-full"
          animate={{ y: [0, 15, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 7, repeat: Infinity }}
          style={{ top: "50%", left: "80%" }}
        />
        <motion.div
          className="absolute w-2 h-2 bg-[#a4c4ff] rounded-full"
          animate={{ y: [-15, 5, -15], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 5, repeat: Infinity }}
          style={{ top: "70%", left: "30%" }}
        />
      </div>

      {/* Container */}
      <div className="relative max-w-4xl mx-auto px-6 text-center">

        {/* ClinicNova (solo móvil) */}
        <p className="md:hidden text-2xl font-bold text-[#1F3C88] mb-3">
          ClinicNova
        </p>

        {/* Main title */}
        <h1
          className="
            font-extrabold 
            text-4xl 
            md:text-6xl 
            leading-tight 
            text-[#1F3C88]
            mb-4
          "
        >
          La nueva era inteligente para clínicas:
          <br />
          agenda llena, sin no-shows.
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Automatizamos WhatsApp con IA para aumentar pacientes y reducir
          cancelaciones, mientras tu equipo se centra en lo importante: la
          experiencia del paciente.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-4">
          <a
            href="#contacto"
            className="
              bg-[#1F3C88] 
              text-white 
              px-8 py-4 
              rounded-full 
              font-medium 
              shadow-lg 
              hover:bg-[#193571]
              transition-all
              w-full md:w-auto
              text-center
            "
          >
            Quiero optimizar mi clínica
          </a>

          <a
            href="#como-funciona"
            className="
              border border-[#1F3C88] 
              text-[#1F3C88]
              px-8 py-4 
              rounded-full 
              font-medium 
              hover:bg-[#eaf0ff]
              transition-all
              w-full md:w-auto
              text-center
            "
          >
            Ver cómo funciona
          </a>
        </div>

        <p className="text-gray-500 text-sm mt-6">
          Sin permanencia. Trabajamos con pocas clínicas por ciudad.
        </p>
      </div>
    </section>
  );
}