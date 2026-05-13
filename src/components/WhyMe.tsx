import { Reveal } from "./Reveal";
import { Scissors, ShieldCheck, HandHeart } from "lucide-react";

const items = [
  {
    icon: Scissors,
    title: "Técnicas mínimamente invasivas",
    desc: "Pequeñas incisiones, menos dolor postoperatorio y vuelta a la actividad mucho más rápida.",
  },
  {
    icon: ShieldCheck,
    title: "La cirugía es el último recurso",
    desc: "Primero exploramos todas las alternativas conservadoras y regenerativas. Si hay que operar, vas a saber por qué.",
  },
  {
    icon: HandHeart,
    title: "Acompañamiento personalizado",
    desc: "Vas a tener contacto directo conmigo, antes y después de la consulta. No sos un número de historia clínica.",
  },
];

const WhyMe = () => {
  return (
    <section id="porque" className="py-28 md:py-40 bg-ivory relative">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <p className="text-gold text-[11px] tracking-[0.4em] uppercase mb-6 text-center">Diferenciales</p>
          <h2 className="font-serif text-4xl md:text-6xl text-navy text-center max-w-4xl mx-auto leading-[1.05] text-balance">
            ¿Por qué atenderte con el <em className="text-gold">Dr. Cao</em>?
          </h2>
        </Reveal>

        <div className="mt-20 grid md:grid-cols-3 gap-12 md:gap-6">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 120}>
              <div className="text-center md:text-left md:px-6 relative">
                <div className="inline-flex items-center justify-center w-16 h-16 border border-gold/40 mb-8">
                  <it.icon className="text-gold" size={26} strokeWidth={1.4} />
                </div>
                <p className="font-serif text-5xl text-gold/30 absolute top-0 right-6 hidden md:block">0{i + 1}</p>
                <h3 className="font-serif text-2xl text-navy">{it.title}</h3>
                <p className="mt-4 text-foreground/70 leading-relaxed">{it.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
