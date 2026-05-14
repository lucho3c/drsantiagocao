import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-osc.png";

const links = [
  { label: "Sobre el Dr.", href: "#sobre" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "¿Por qué?", href: "#porque" },
  { label: "Patologías", href: "#patologias" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-ivory/85 backdrop-blur-xl border-b border-border/60 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="Dr. Santiago Cao" className="h-10 w-10 object-contain rounded-sm" />
          <span className="font-heading font-black text-base tracking-tight text-navy hidden sm:inline">
            Dr. Santiago <span className="text-gold">Cao</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-[13px] tracking-wide text-foreground/70 hover:text-navy transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="hidden lg:inline-flex items-center px-5 py-2.5 bg-navy text-ivory text-[12px] tracking-[0.18em] uppercase hover:bg-navy-deep transition-colors"
        >
          Consultá tu caso
        </a>

        <button onClick={() => setOpen(!open)} className="lg:hidden text-navy" aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-ivory border-t border-border mt-3">
          <nav className="flex flex-col px-6 py-6 gap-5">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-foreground/80">
                {l.label}
              </a>
            ))}
            <a href="#contacto" onClick={() => setOpen(false)} className="mt-3 px-5 py-3 bg-navy text-ivory text-xs tracking-[0.18em] uppercase text-center">
              Consultá tu caso
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
