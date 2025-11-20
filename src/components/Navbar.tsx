"use client";

import Link from "next/link";

const navLinks = [
  { href: "#solucion", label: "Solución" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#precios", label: "Precios" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  return (
    <header className="w-full bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* LOGO COMO TEXTO */}
        <Link href="/" className="font-bold text-2xl text-[#1F3C88]">
          ClinicNova
        </Link>

        {/* MENÚ + CTA (solo escritorio) */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-6 text-sm text-[#1F3C88]">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-[#122457] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contacto"
            className="bg-[#1F3C88] text-white px-6 py-2.5 rounded-full text-sm font-medium shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-200"
          >
            Optimizar mi clínica
          </a>
        </div>
      </div>
    </header>
  );
}