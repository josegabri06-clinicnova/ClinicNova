"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section id="contacto" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-[#D9E3FF] bg-[#F5F7FF] px-6 py-10 md:px-10 md:py-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm"
        >
          {/* Texto */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#1F3C88]">
              ¿Quieres ver cómo encaja ClinicNova en tu clínica?
            </h2>
            <p className="mt-3 text-sm md:text-base text-[#1F3C88]/80 max-w-xl">
              Hacemos una llamada corta para entender tu situación actual y ver
              si tiene sentido implementar IA y automatización de WhatsApp en tu centro.
              Sin compromiso y sin permanencia.
            </p>
            <p className="mt-2 text-xs text-[#1F3C88]/60">
              Actualmente solo aceptamos unas pocas clínicas nuevas al mes.
            </p>
          </div>

          {/* Botón WhatsApp */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <a
              href="https://wa.me/34600000000?text=Hola%20ClinicNova%2C%20me%20gustar%C3%ADa%20ver%20si%20podemos%20aplicar%20vuestro%20sistema%20en%20mi%20cl%C3%ADnica."
              className="inline-flex items-center gap-2 bg-[#1F3C88] text-white px-8 py-4 rounded-full text-sm font-medium shadow-md hover:shadow-lg hover:scale-[1.03] transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Hablar por WhatsApp
            </a>
            <span className="text-[11px] text-[#1F3C88]/60">
              Respuesta habitual en menos de 1 hora en días laborables.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}