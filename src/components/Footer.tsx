import logo from "@/assets/logo-osc.png";

const Footer = () => {
  return (
    <footer className="bg-navy-deep text-ivory/70 py-16 grain relative">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="Dr. Santiago Cao" className="h-12 w-12 object-contain" />
            <p className="font-heading font-black text-xl text-ivory leading-tight">
              Dr. Santiago <span className="text-gold-light">Cao</span>
            </p>
          </div>
          <p className="mt-3 text-sm text-ivory/55">Traumatología y Cirugía Ortopédica</p>
          <p className="text-sm text-ivory/55">MN 158.214</p>
        </div>
        <div className="text-sm space-y-2">
          <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-3">Navegación</p>
          {[
            ["Sobre el Dr.", "#sobre"],
            ["Especialidades", "#especialidades"],
            ["Patologías", "#patologias"],
            ["Contacto", "#contacto"],
          ].map(([l, h]) => (
            <a key={h} href={h} className="block hover:text-gold transition-colors">{l}</a>
          ))}
        </div>
        <div className="text-sm space-y-2">
          <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-3">Contacto</p>
          <p>Buenos Aires, Argentina</p>
          <p>consulta@drsantiagocao.com.ar</p>
          <a href="https://www.instagram.com/dr.santiagocao/" target="_blank" rel="noreferrer" className="block hover:text-gold transition-colors">
            @dr.santiagocao
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-14 pt-8 border-t border-ivory/10 text-xs text-ivory/40 flex flex-col md:flex-row justify-between gap-4">
        <p>© {new Date().getFullYear()} Dr. Santiago Cao. Todos los derechos reservados.</p>
        <p>Información de carácter informativo. No reemplaza la consulta médica.</p>
      </div>
    </footer>
  );
};

export default Footer;
