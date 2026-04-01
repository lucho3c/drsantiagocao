import belenPortrait from "@/assets/belen-portrait.jpg";

const About = () => {
  return (
    <section id="sobre-mi" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={belenPortrait}
                alt="Belén Benegas"
                className="w-full h-full object-cover"
                loading="lazy"
                width={800}
                height={1000}
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-primary opacity-20" />
          </div>

          {/* Text */}
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">
              Presentación
            </p>
            <h2 className="font-heading text-3xl md:text-4xl mb-8 leading-tight">
              María Belén
              <br />
              Benegas
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Licenciada en Administración y Contadora Pública. Mi carrera se construyó desde adentro de una de las organizaciones más exigentes del mundo: Cervecería y Maltería Quilmes, parte de AB InBev.
              </p>
              <p>
                En cinco años recorrí el negocio de punta a punta — desde la gestión financiera y el riesgo crediticio, hasta el desarrollo de liderazgo, la auditoría de procesos en cuatro países y la transformación organizacional.
              </p>
              <p>
                Esa trayectoria me dio algo que difícilmente se consigue en otro lado: ver cómo funciona realmente una organización cuando está bien diseñada.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {["Neurociencia", "Management", "Liderazgo", "Mejora continua", "IA aplicada"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 text-xs tracking-[0.15em] uppercase border border-border text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
