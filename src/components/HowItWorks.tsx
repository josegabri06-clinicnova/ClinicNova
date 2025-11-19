"use client";

import { motion } from "framer-motion";
import { Bot, CalendarCheck, Repeat, Users } from "lucide-react";

const steps = [
  {
    icon: Bot,
    title: "1. Automatizamos tu WhatsApp",
    description:
      "Conectamos un asistente con IA que responde al instante, 24/7, con tono humano y flujos adaptados a tu clínica.",
  },
  {
    icon: CalendarCheck,
    title: "2. Sincronizamos tu calendario",
    description:
      "Integramos Google Calendar u otro sistema que utilices, en modo lectura/escritura para automatizar reservas y huecos.",
  },
  {
    icon: Repeat,
    title: "3. Gestión inteligente de citas",
    description:
      "Reconfirmaciones, recordatorios, lista de espera y relleno automático de huecos cancelados. Menos no-shows.",
  },
  {
    icon: Users,
    title: "4. Más pacientes sin esfuerzo",
    description:
      "Seguimiento automático, reactivación de contactos antiguos y nutrición de leads para aumentar ingresos.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-[#F9FBFF]">
      <div className="max-w-6xl mx-auto px-4 py-20">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-[#1F3C88] text-center"
        >
          Cómo funciona ClinicNova
        </motion.h2>

        {/* Texto intro */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          viewport={{ once: true }}
          className="mt-3 text-sm md:text-base text-[#1F3C88]/80 text-center max-w-xl mx-auto"
        >
          En solo cuatro pasos dejamos tu clínica funcionando con IA y agenda automatizada.
        </motion.p>

        {/* STEPS */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-white p-6 rounded-2xl shadow-sm border border-[#E3EDF7] hover:shadow-md hover:-translate-y-1 transition-all"
            >
              <div className="h-14 w-14 mx-auto rounded-full bg-[#DBEAFE] flex items-center justify-center mb-4">
                <step.icon className="w-7 h-7 text-[#1F3C88]" />
              </div>
              <h3 className="text-lg font-semibold text-[#1F3C88]">{step.title}</h3>
              <p className="text-sm text-[#1F3C88]/80 mt-2 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}