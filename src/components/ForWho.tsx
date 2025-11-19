"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

export default function ForWho() {
  return (
    <section className="bg-[#F9FBFF]">
      <div className="max-w-6xl mx-auto px-4 py-20">
        
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-[#1F3C88]"
        >
          ¿Para quién es ClinicNova?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          viewport={{ once: true }}
          className="mt-3 text-sm md:text-base text-[#1F3C88]/80 max-w-2xl"
        >
          No trabajamos con todas las clínicas. Nuestra tecnología funciona mejor
          con perfiles concretos.
        </motion.p>

        {/* Contenedor */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* ✔️ Para quién SÍ es */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-[#E3EDF7]"
          >
            <h3 className="text-xl font-semibold text-[#1F3C88] mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-[#2563EB]" />
              Perfecto para:
            </h3>

            <ul className="space-y-3 text-sm text-[#1F3C88]/85">
              <li>• Clínicas que quieren aumentar pacientes sin depender del teléfono.</li>
              <li>• Centros con equipo saturado o poco tiempo para contestar WhatsApp.</li>
              <li>• Clínicas con huecos vacíos o muchas cancelaciones.</li>
              <li>• Equipos que valoran la tecnología y quieren modernizar procesos.</li>
              <li>• Clínicas que buscan un sistema estable y predecible de citas.</li>
            </ul>
          </motion.div>

          {/* ❌ Para quién NO es */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-[#F2D6D6]"
          >
            <h3 className="text-xl font-semibold text-[#B91C1C] mb-4 flex items-center gap-2">
              <XCircle className="w-6 h-6 text-[#DC2626]" />
              No es para:
            </h3>

            <ul className="space-y-3 text-sm text-[#7F1D1D]/85">
              <li>• Clínicas que no contestan ni validan citas.</li>
              <li>• Centros que buscan “milagros” sin tener procesos básicos.</li>
              <li>• Clínicas que cambian de estrategia cada semana.</li>
              <li>• Negocios que no están listos para un sistema profesional.</li>
              <li>• Equipos que no quieren integrar tecnología.</li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}