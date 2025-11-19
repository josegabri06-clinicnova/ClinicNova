"use client";

import { motion } from "framer-motion";
import { MessageCircle, CalendarClock, UserCheck } from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "WhatsApp inteligente",
    description:
      "Responde al instante, 24/7, con un tono humano y adaptado al lenguaje de tu clínica. Sin que el equipo tenga que estar pendiente del móvil.",
  },
  {
    icon: CalendarClock,
    title: "Agenda automática",
    description:
      "Reconfirmaciones, recordatorios y gestión de cancelaciones para reducir no-shows y rellenar huecos vacíos de última hora.",
  },
  {
    icon: UserCheck,
    title: "Más pacientes, sin más estrés",
    description:
      "Nutrición de leads, reactivación de contactos antiguos y seguimiento automático para aumentar ingresos sin sobrecargar al equipo.",
  },
];

export default function Features() {
  return (
    <section id="solucion" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
        {/* TÍTULO */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-[#1F3C88]"
        >
          Lo que hace ClinicNova
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          viewport={{ once: true }}
          className="mt-3 text-sm md:text-base text-[#1F3C88]/80 max-w-2xl"
        >
          Orquestamos IA + WhatsApp + Calendario para convertir más leads en
          pacientes y evitar huecos vacíos en la agenda.
        </motion.p>

        {/* TARJETAS */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-[#E3EDF7] bg-[#F9FBFF] p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[#DBEAFE] flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-[#1F3C88]" />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-[#1F3C88]">
                  {item.title}
                </h3>
              </div>
              <p className="mt-4 text-sm text-[#1F3C88]/80 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}