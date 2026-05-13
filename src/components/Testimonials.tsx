import { Reveal } from "./Reveal";
import { Quote } from "lucide-react";

const items = [
  {
    quote: "Después de dos años con dolor de cadera, el Dr. Cao me explicó claramente qué tenía y por qué. Volví a correr a los tres meses de la artroscopia.",
    name: "Lucía M.",
    detail: "Artroscopia de cadera",
  },
  {
    quote: "Lo que más valoré fue que no me empujó a operarme. Probamos un tratamiento regenerativo y mi rodilla mejoró sin pasar por quirófano.",
    name: "Martín R.",
    detail: "Tratamiento con PRP",
  },
  {
    quote: "Es de esos médicos que te escucha y te contesta los mensajes. Sentí confianza desde la primera consulta.",
    name: "Florencia P.",
    detail: "Lesión de menisco",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonios" className="py-28 md:py-40 bg-ivory">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <p className="text-gold text-[11px] tracking-[0.4em] uppercase mb-6 text-center">Testimonios</p>
          <h2 className="font-serif text-4xl md:text-6xl text-navy text-center max-w-3xl mx-auto leading-[1.05] text-balance">
            Lo que dicen quienes ya <em className="text-gold">se atendieron</em>.
          </h2>
        </Reveal>

        <div className="mt-20 grid md:grid-cols-3 gap-6 md:gap-8">
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 120}>
              <figure className="bg-card border border-border p-10 h-full flex flex-col">
                <Quote className="text-gold/60" size={28} strokeWidth={1.4} />
                <blockquote className="mt-6 font-serif text-xl text-navy leading-snug flex-1">
                  "{it.quote}"
                </blockquote>
                <figcaption className="mt-8 pt-6 border-t border-border">
                  <p className="font-medium text-navy">{it.name}</p>
                  <p className="text-xs text-foreground/55 tracking-wide mt-1">{it.detail}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
