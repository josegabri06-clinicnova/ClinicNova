"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const items = [
  {
    role: "Dirección de clínica estética",
    text: "Por fin sentimos que WhatsApp está bajo control. El equipo ya no pierde tiempo respondiendo mensajes y tenemos más visibilidad del día a día.",
  },
  {
    role: "Coordinadora de cabina",
    text: "Los huecos vacíos casi han desaparecido. La lista de espera automática rellena cancelaciones y no paramos de trabajar.",
  },
  {
    role: "Propiedad / Gerencia",
    text: "Lo que más valoramos es la estabilidad: menos caos, menos no-shows y más orden en la agenda. Mucho más profesional todo.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#F5F8FF]">
      <div className="max-w-6xl mx-auto py-20 px-4">

        {/* TÍTULO */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-[#1F3C88]"
        >
          El tipo de feedback que buscamos generar
        </motion.h2>

        {/* SUBTÍTULO */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          viewport={{ once: true }}
          className="mt-3 text-sm md:text-base text-[#1F3C88]/80 max-w-2xl"
        >
          Aunque estamos en fase piloto, sabemos exactamente qué tipo de resultados
          y sensaciones deben tener las clínicas que trabajen con nosotros.
        </motion.p>

        {/* TARJETAS */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-[#DDE6FF] bg-white shadow-sm p-6 flex flex-col gap-3"
            >
              <Quote className="w-6 h-6 text-[#1F3C88]/60" />

              <p className="text-sm text-[#1F3C88]/85 leading-relaxed">
                “{item.text}”
              </p>

              <p className="mt-2 text-xs font-medium text-[#1F3C88]/70">
                {item.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}