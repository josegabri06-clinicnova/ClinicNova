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
    <header
      className="
        w-full
        bg-[#e6efff]          /* mismo tono claro que la parte alta del hero */
        md:bg-white/90        /* en escritorio, barra blanca suave */
        md:backdrop-blur-sm
        border-b border-[#d3def5]
      "
    >
      <div
        className="
          max-w-6xl
          mx-auto
          flex
          items-center
          justify-between
          px-4
          py-3
        "
      >
        {/* LOGO TEXTO */}
        <Link
          href="/"
          className="
            font-bold
            text-xl
            md:text-2xl
            text-[#1F3C88]
          "
        >
          ClinicNova
        </Link>

        {/* MENÚ + CTA */}
        <div className="flex items-center gap-4">
          {/* Menú solo escritorio */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-[#1F3C88]">
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

          {/* Botón: solo escritorio (en móvil ya tienes el botón grande del hero) */}
          <Link
            href="#contacto"
            className="
              hidden md:inline-flex
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
      </div>
    </header>
  );
}