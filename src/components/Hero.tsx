import heroImg from "@/assets/hero-anatomy.jpg";
import areasImg from "@/assets/doctor-portrait.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-deep grain">
      {/* Fondo de huesos: solo en desktop */}
      <img
        src={heroImg}
        alt=""
        className="hidden lg:block absolute inset-0 w-full h-full object-cover opacity-50"
        width={1920}
        height={1080}
      />
      <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-transparent" />

      {/* Foto del doctor en mobile: arriba a la derecha, 1/3 del ancho aprox., con
          un gradiente que protege la zona del texto a la izquierda */}
      <div className="lg:hidden absolute top-0 right-0 w-[58%] h-[58%] pointer-events-none">
        <img
          src={areasImg}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-top"
          width={1024}
          height={1024}
        />
        {/* Difuminado contra el fondo (degrade desde la izquierda y desde abajo) */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-navy-deep/20 to-navy-deep" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-12 gap-12 items-center w-full">
        <div className="lg:col-span-7">
          <p className="text-gold text-[11px] tracking-[0.4em] uppercase mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Traumatología · Cirugía Ortopédica
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.02] text-ivory text-balance opacity-0 animate-fade-up" style={{ animationDelay: "0.25s" }}>
            Dr. Santiago <em className="text-gold not-italic font-normal">Cao</em>
          </h1>
          <p className="mt-8 max-w-xl font-serif text-2xl md:text-3xl text-ivory/80 leading-snug italic opacity-0 animate-fade-up" style={{ animationDelay: "0.45s" }}>
            Menos cirugía, mejor calidad de vida.
          </p>
          <p className="mt-6 max-w-lg text-ivory/65 leading-relaxed opacity-0 animate-fade-up" style={{ animationDelay: "0.6s" }}>
            Especialista en artroscopia de cadera y rodilla. Un abordaje mínimamente invasivo, pensado para que vuelvas a moverte sin dolor — y sin pasar por el quirófano si no hace falta.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up" style={{ animationDelay: "0.75s" }}>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold text-navy-deep text-[12px] tracking-[0.2em] uppercase font-medium hover:bg-gold-light transition-colors"
            >
              Consultá tu caso
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center justify-center px-8 py-4 border border-ivory/25 text-ivory text-[12px] tracking-[0.2em] uppercase hover:border-gold hover:text-gold transition-colors"
            >
              Conocer al Dr.
            </a>
          </div>
        </div>

        <div className="hidden lg:block lg:col-span-5">
          <img
            src={areasImg}
            alt="Áreas de práctica del Dr. Santiago Cao: cadera y rodilla"
            className="w-full h-auto object-contain max-h-[80vh] mx-auto drop-shadow-[0_20px_60px_rgba(0,0,0,0.6)] opacity-0 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
            loading="lazy"
            width={1024}
            height={1024}
          />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ivory/40 text-[10px] tracking-[0.4em] uppercase animate-float">
        Scroll
      </div>
    </section>
  );
};

export default Hero;
