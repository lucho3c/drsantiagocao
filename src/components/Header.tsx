import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="block">
          <img src={logo} alt="BeluBenegas" className="h-8 brightness-[10]" />
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "Sobre mí", href: "#sobre-mi" },
            { label: "Programa", href: "#programa" },
            { label: "Metodología", href: "#metodologia" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            className="px-5 py-2 bg-primary text-primary-foreground text-sm font-medium tracking-wide hover:opacity-90 transition-opacity"
          >
            Agendar llamada
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
