"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-gray-200">
      <nav className="max-w-6xl mx-auto h-16 flex items-center justify-between px-4">
        
        {/* SOLO LOGO, SIN TEXTO */}
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="ClinicNova" width={65} height={65} />
        </Link>

        {/* Enlaces centro-derecha */}
        <div className="hidden sm:flex items-center gap-6 text-sm text-[#1F3C88]/80">
          <a href="#solucion" className="hover:text-[#1F3C88] transition">Solución</a>
          <a href="#como-funciona" className="hover:text-[#1F3C88] transition">Cómo funciona</a>
          <a href="#precios" className="hover:text-[#1F3C88] transition">Precios</a>
          <a href="#contacto" className="hover:text-[#1F3C88] transition">Contacto</a>
        </div>

        {/* Botón principal */}
        <a
          href="https://wa.me/34600000000?text=Hola%20ClinicNova%2C%20 quiero optimizar mi clinica."
          className="rounded-full bg-[#1F3C88] text-white px-5 py-2 text-sm font-medium hover:opacity-90 transition shadow-sm"
        >
          Optimizar mi clínica
        </a>

      </nav>
    </header>
  );
}
