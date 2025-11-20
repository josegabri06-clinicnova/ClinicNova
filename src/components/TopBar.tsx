"use client";

export default function TopBar() {
  return (
    <div className="w-full bg-[#1F3C88] text-white text-xs md:text-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 px-4 py-2">
        <p className="text-center md:text-left">
          Actualmente solo aceptamos <span className="font-semibold">3 clínicas nuevas</span> al mes.
        </p>

        <a
          href="#contacto"
          className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-white/40 bg-white/10 text-[11px] md:text-xs font-medium hover:bg-white/20 transition-colors"
        >
          Consultar disponibilidad →
        </a>
      </div>
    </div>
  );
}