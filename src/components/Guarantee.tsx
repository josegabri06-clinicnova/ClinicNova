"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function Guarantee() {
  return (
    <section className="bg-[#F4F7FF]">
      <div className="max-w-6xl mx-auto py-20 px-4">
        
        {/* Contenedor principal */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-[#D3DDF7] bg-white px-7 py-10 shadow-sm"
        >
          {/* Encabezado */}
          <div className="flex items-start md:items-center gap-4 mb-6">
            <div className="h-12 w-12 rounded-full bg-[#DBEAFE] flex items-center justify-center">
              <ShieldCheck className="w-7 h-7 text-[#1F3C88]" />
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#1F3C88]">
                Garantía ClinicNova
              </h2>
              <p className="text-sm text-[#1F3C88]/70">
                Transparencia total. Cero permanencia. Resultados medibles.
              </p>
            </div>
          </div>

          {/* Puntos */}
          <div className="space-y-4 text-sm md:text-base text-[#1F3C88]/85 leading-relaxed">
            <p>
              • Sin permanencia: si no ves valor, puedes parar cuando quieras.
            </p>
            <p>
              • Nos centramos en métricas, no en promesas vacías: cancelaciones, 
              ocupación, no-shows, reposición de huecos y WhatsApp.
            </p>
            <p>
              • Plan mensual con revisión directa con el equipo fundador.
            </p>
            <p>
              • Sin costes ocultos, sin sorpresas, sin riesgos para tu clínica.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}