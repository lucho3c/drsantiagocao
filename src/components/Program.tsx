const Program = () => {
  const pillars = [
    {
      number: "01",
      title: "Autoconocimiento",
      desc: "Entender quién sos y cómo liderás. HOGAN Assessment como punto de partida.",
    },
    {
      number: "02",
      title: "Diagnóstico",
      desc: "Mirar tu negocio con ojos nuevos. Separar lo que funciona de lo que hay que rediseñar.",
    },
    {
      number: "03",
      title: "Diseño de sistema",
      desc: "Construir los procesos, roles y rituales que tu negocio necesita para operar sin vos en el centro.",
    },
    {
      number: "04",
      title: "Liderazgo",
      desc: "Desarrollar tu estilo de conducción con base en evidencia y neurociencia aplicada.",
    },
    {
      number: "05",
      title: "Ejecución",
      desc: "Implementar con el modelo 70·20·10. Aprender haciendo, no solo escuchando.",
    },
  ];

  return (
    <section id="programa" className="py-24 md:py-32 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">
            Programa de Mentoría
          </p>
          <h2 className="font-heading text-3xl md:text-5xl mb-6 leading-tight">
            Construido sobre evidencia, no sobre opinión.
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Este programa no se basa en lo que me funcionó a mí. Se basa en décadas de investigación en neurociencia, administración, psicología organizacional y mejora continua.
          </p>
        </div>

        <div className="space-y-0">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="group flex items-start gap-8 py-8 border-t border-border hover:bg-secondary/30 transition-colors px-4 -mx-4"
            >
              <span className="text-sm font-mono text-primary mt-1 shrink-0">
                {pillar.number}
              </span>
              <div>
                <h3 className="font-heading text-xl md:text-2xl mb-2 group-hover:text-primary transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground max-w-lg">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Program;
