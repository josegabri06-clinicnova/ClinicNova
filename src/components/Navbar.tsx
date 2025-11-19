"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header
      className="
        w-full 
        bg-transparent 
        sm:bg-white 
        fixed 
        top-0 
        left-0 
        z-50
        border-b border-transparent sm:border-gray-200
      "
    >
      <div
        className="
          max-w-7xl 
          mx-auto 
          flex 
          items-center 
          justify-between 
          px-4 
          py-3 
        "
      >
        {/* LOGO TEXT */}
        <Link href="/" className="font-bold text-2xl text-[#1F3C88]">
          ClinicNova
        </Link>

        {/* CTA BUTTON */}
        <a
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
        </a>
      </div>
    </header>
  );
}