export default function Footer() {
  return (
    <footer className="bg-[#1F3C88] text-white py-14 mt-20">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        <div>
          <h3 className="font-semibold text-lg">ClinicNova</h3>
          <p className="mt-3 text-sm text-white/70 max-w-xs">
            Soluciones inteligentes para clínicas que quieren mejorar su agenda
            y automatizar WhatsApp con IA.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">Enlaces</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li><a href="#solucion" className="hover:text-white">Solución</a></li>
            <li><a href="#como-funciona" className="hover:text-white">Cómo funciona</a></li>
            <li><a href="#precios" className="hover:text-white">Precios</a></li>
            <li><a href="#contacto" className="hover:text-white">Contacto</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Contacto</h4>
          <p className="mt-3 text-sm text-white/80">
            Escríbenos por WhatsApp para más información.
          </p>
          <a
            href="https://wa.me/34600000000"
            className="mt-3 inline-block text-sm bg-white text-[#1F3C88] px-6 py-2 rounded-full font-medium hover:bg-white/90"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <div className="mt-12 text-center text-xs text-white/50">
        © {new Date().getFullYear()} ClinicNova · Todos los derechos reservados
      </div>
    </footer>
  );
}