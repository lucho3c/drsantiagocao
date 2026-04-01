import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-40"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-8 animate-fade-in">
          Belén Benegas · Consultoría
        </p>

        <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl leading-[1.1] mb-8 opacity-0 animate-fade-up">
          De emprendedor a sistema
          <br />
          <span className="text-gradient-brand">que opera sin vos</span>
          <br />
          en el centro.
        </h1>

        <p className="max-w-2xl mx-auto text-muted-foreground text-lg md:text-xl leading-relaxed mb-12 opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Programa de mentoría basado en neurociencia, management y liderazgo para transformar la forma en que conducís tu negocio.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="#programa"
            className="px-8 py-4 bg-primary text-primary-foreground font-medium text-sm tracking-wide uppercase hover:opacity-90 transition-opacity"
          >
            Conocer el programa
          </a>
          <a
            href="#sobre-mi"
            className="px-8 py-4 border border-border text-foreground font-medium text-sm tracking-wide uppercase hover:border-primary transition-colors"
          >
            Sobre Belén
          </a>
        </div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </section>
  );
};

export default Hero;
