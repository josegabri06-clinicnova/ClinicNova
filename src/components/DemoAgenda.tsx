"use client";

import { motion } from "framer-motion";
import { CalendarDays, AlertCircle, CheckCircle2, Clock } from "lucide-react";

export default function DemoAgenda() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        {/* TÍTULO */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-[#1F3C88]"
        >
          Cómo cambia tu agenda con ClinicNova
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          viewport={{ once: true }}
          className="mt-3 text-sm md:text-base text-[#1F3C88]/80 max-w-2xl"
        >
          Visualmente es muy simple: menos huecos vacíos, menos no-shows y más
          estructura en el día a día.
        </motion.p>

        {/* TARJETAS ANTES / DESPUÉS */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* ANTES */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-[#F3C4C4] bg-[#FFF7F7] p-6 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-[#FEE2E2] flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-[#B91C1C]" />
              </div>
              <div>
                <p className="text-xs font-medium tracking-[0.16em] uppercase text-[#B91C1C]/80">
                  Antes
                </p>
                <h3 className="text-base md:text-lg font-semibold text-[#B91C1C]">
                  Agenda desordenada
                </h3>
              </div>
            </div>

            <div className="space-y-3 text-sm text-[#7F1D1D]/85">
              <p>• Mensajes de WhatsApp sin contestar o contestados tarde.</p>
              <p>• Huecos libres entre citas que nadie rellena.</p>
              <p>• Pacientes que cancelan a última hora y no se sustituyen.</p>
              <p>• Recepción saturada con teléfono + WhatsApp + pacientes.</p>
            </div>

            <div className="mt-5 flex items-center gap-2 text-xs text-[#7F1D1D]/70">
              <Clock className="w-4 h-4" />
              <span>Más estrés, menos sensación de control.</span>
            </div>
          </motion.div>

          {/* DESPUÉS */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-[#C7D9FF] bg-[#F4F7FF] p-6 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-[#DBEAFE] flex items-center justify-center">
                <CalendarDays className="w-5 h-5 text-[#1F3C88]" />
              </div>
              <div>
                <p className="text-xs font-medium tracking-[0.16em] uppercase text-[#1F3C88]/80">
                  Después
                </p>
                <h3 className="text-base md:text-lg font-semibold text-[#1F3C88]">
                  Agenda estable y predecible
                </h3>
              </div>
            </div>

            <div className="space-y-3 text-sm text-[#1F3C88]/85">
              <p>• WhatsApp responde al instante con IA, 24/7.</p>
              <p>• Reconfirmaciones automáticas reducen no-shows.</p>
              <p>• Huecos cancelados se ofrecen a la lista de espera.</p>
              <p>• El equipo se centra en el paciente, no en el móvil.</p>
            </div>

            <div className="mt-5 flex items-center gap-2 text-xs text-[#1F3C88]/80">
              <CheckCircle2 className="w-4 h-4" />
              <span>Más pacientes atendidos, con menos carga para el equipo.</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}