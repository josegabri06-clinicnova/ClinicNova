"use client";

import { motion } from "framer-motion";

const faqs = [
  {
    q: "¿Qué necesitáis para empezar en mi clínica?",
    a: "Solo acceso al WhatsApp de la clínica (o un número exclusivo), el calendario que usáis para las citas y una breve entrevista para entender vuestros servicios y forma de trabajar.",
  },
  {
    q: "¿Tenéis que instalar algún software en nuestros ordenadores?",
    a: "No. Trabajamos conectándonos a herramientas que ya usáis (WhatsApp y calendario). Vosotros no tenéis que aprender ni usar nada nuevo.",
  },
  {
    q: "¿Cuánto se tarda en ver resultados?",
    a: "Normalmente, entre 3 y 6 semanas se empieza a notar menos no-shows, agenda más estable y menos saturación en WhatsApp.",
  },
  {
    q: "¿Quién controla lo que responde la IA?",
    a: "Diseñamos el sistema con vosotros y revisamos juntos los flujos y mensajes. Siempre se puede ajustar el tono, respuestas y límites.",
  },
  {
    q: "¿Hay permanencia o letra pequeña?",
    a: "No trabajamos con permanencia. Si en algún momento no tiene sentido seguir, paramos la colaboración de forma transparente.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto py-20 px-4">

        {/* TÍTULO */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-[#1F3C88]"
        >
          Preguntas frecuentes
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          viewport={{ once: true }}
          className="mt-3 text-sm md:text-base text-[#1F3C88]/80 max-w-2xl"
        >
          Algunas de las dudas más habituales antes de implementar ClinicNova
          en una clínica.
        </motion.p>

        {/* LISTA DE FAQS */}
        <div className="mt-8 space-y-4">
          {faqs.map((item, i) => (
            <motion.details
              key={item.q}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group rounded-xl border border-[#E3EDF7] bg-[#F9FBFF] px-4 py-3"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between text-sm md:text-base text-[#1F3C88]">
                <span>{item.q}</span>
                <span className="ml-4 text-xs text-[#1F3C88]/60 group-open:hidden">
                  +
                </span>
                <span className="ml-4 text-xs text-[#1F3C88]/60 hidden group-open:inline">
                  –
                </span>
              </summary>
              <p className="mt-2 text-sm text-[#1F3C88]/80">{item.a}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}