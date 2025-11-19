export default function TopBar() {
  return (
    <div className="w-full bg-[#1F3C88] text-white text-xs md:text-sm">
      <div className="max-w-6xl mx-auto px-4 py-2 flex flex-col md:flex-row items-center justify-between gap-2">
        <span className="opacity-90">
          Actualmente solo aceptamos <strong>3 clínicas nuevas</strong> al mes.
        </span>
        <a
          href="https://wa.me/34600000000?text=Hola%20ClinicNova%2C%20quiero%20saber%20si%20ten%C3%A9is%20plazas%20disponibles%20este%20mes."
          className="underline underline-offset-4 decoration-white/60 hover:decoration-white transition"
        >
          Consultar disponibilidad →
        </a>
      </div>
    </div>
  );
}