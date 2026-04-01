const Methodology = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">
              Metodología
            </p>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-6">
              El modelo
              <br />
              <span className="text-gradient-brand">70 · 20 · 10</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              El aprendizaje real no ocurre en la sesión — ocurre cuando aplicás lo que trabajaste. Este programa está diseñado con esa lógica.
            </p>

            <blockquote className="border-l-2 border-primary pl-6 italic text-muted-foreground">
              "No hay nada más inútil que hacer eficientemente lo que no debería hacerse."
              <span className="block mt-2 not-italic text-sm text-text-dim">— Peter Drucker</span>
            </blockquote>
          </div>

          <div className="space-y-8">
            {[
              {
                pct: "70%",
                title: "Aprendizaje por experiencia",
                desc: "Lo que aprendés haciendo: ejecutar las acciones de cada semana, tomar decisiones, observar tu negocio, documentar lo que pasa.",
              },
              {
                pct: "20%",
                title: "Aprendizaje por interacción",
                desc: "Las sesiones 1:1, el intercambio con Belén, el feedback sobre lo que estás construyendo.",
              },
              {
                pct: "10%",
                title: "Aprendizaje formal",
                desc: "El contenido en la plataforma: casos, marcos teóricos, recomendaciones. El contexto que da lenguaje a lo que ya estás viviendo.",
              },
            ].map((item) => (
              <div key={item.pct} className="flex gap-6 items-start p-6 bg-card border border-border">
                <span className="font-serif text-3xl text-primary shrink-0">
                  {item.pct}
                </span>
                <div>
                  <h3 className="font-medium text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
