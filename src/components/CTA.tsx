const CTA = () => {
  return (
    <section className="py-24 md:py-32 bg-card border-t border-border">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">
          Admisión
        </p>
        <h2 className="font-serif text-3xl md:text-5xl mb-6 leading-tight">
          ¿Es este programa para vos?
        </h2>
        <p className="text-muted-foreground leading-relaxed text-lg mb-4">
          Emprendedor o dueño de negocio de servicios o digital. Con o sin equipo. Facturación activa. Voluntad real de transformación.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-12">
          La admisión empieza con una llamada de 30 minutos. El objetivo no es convencer — es diagnosticar si hay fit real entre vos, tu negocio y esta metodología.
        </p>

        <a
          href="#"
          className="inline-block px-10 py-4 bg-primary text-primary-foreground font-medium text-sm tracking-wide uppercase hover:opacity-90 transition-opacity"
        >
          Agendar llamada de admisión
        </a>
      </div>
    </section>
  );
};

export default CTA;
