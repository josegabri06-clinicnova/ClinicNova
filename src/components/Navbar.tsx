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
    // 👇 OCULTAMOS EL NAVBAR EN MÓVIL, SOLO SE VE EN MD+
    <header className="hidden md:block w-full bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        {/* LOGO TEXTO */}
        <Link href="/" className="font-bold text-xl text-[#1F3C88]">
          ClinicNova
        </Link>

        {/* MENÚ */}
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

        {/* CTA */}
        <Link
          href="#contacto"
          className="
            bg-[#1F3C88]
            text-white
            px-6
            py-2.5
            rounded-full
            text-sm
            font-medium
            shadow-md
            hover:shadow-lg
            hover:scale-[1.03]
            transition-all
            duration-200
          "
        >
          Optimizar mi clínica
        </Link>
      </div>
    </header>
  );
}