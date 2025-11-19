"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";

const team = [
  {
    name: "Jose Gabriel Carrillo",
    role: "Co-fundador & Dirección de cuentas",
    desc: "Especializado en estrategia de crecimiento, comunicación con clínicas y optimización de procesos. Encargado de que cada centro obtenga resultados reales semana a semana.",
  },
  {
    name: "Guillermo López",
    role: "Co-fundador & Automatización e IA",
    desc: "Ingeniero de automatización. Desarrolla los sistemas de IA, flujos inteligentes en WhatsApp, integraciones con agenda y automatización de operaciones.",
  },
  {
    name: "Rubén Gil",
    role: "Co-fundador & Automatización e IA",
    desc: "Responsable del desarrollo técnico del sistema, conexiones con API de WhatsApp, motores de IA y módulos de reactivación y seguimiento de pacientes.",
  },
];

export default function Team() {
  return (
    <section className="bg-[#F9FBFF]">
      <div className="max-w-6xl mx-auto px-4 py-20">
        
        {/* TÍTULO */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-[#1F3C88]"
        >
          El equipo detrás de ClinicNova
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          viewport={{ once: true }}
          className="mt-3 text-sm md:text-base text-[#1F3C88]/80 max-w-2xl"
        >
          Tres fundadores especializados en crecimiento, automatizaciones y sistemas de IA
          aplicados a clínicas reales.
        </motion.p>

        {/* TARJETAS DEL EQUIPO */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((person, i) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-[#DDE6FF] bg-white shadow-sm p-6"
            >
              <div className="h-16 w-16 rounded-full bg-[#DBEAFE] flex items-center justify-center mb-4 mx-auto">
                <User className="w-8 h-8 text-[#1F3C88]" />
              </div>

              <h3 className="text-lg font-semibold text-[#1F3C88] text-center">
                {person.name}
              </h3>

              <p className="text-sm text-[#1F3C88]/70 text-center">{person.role}</p>

              <p className="mt-4 text-sm text-[#1F3C88]/80 leading-relaxed text-center">
                {person.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}