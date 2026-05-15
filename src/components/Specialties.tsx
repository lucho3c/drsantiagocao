import { Reveal } from "./Reveal";
import { Activity, Bone, Droplet } from "lucide-react";

const items = [
  {
    icon: Bone,
    title: "Artroscopia de cadera",
    desc: "Cirugía mínimamente invasiva para tratar el conflicto femoroacetabular, lesiones de labrum y cartílago.",
  },
  {
    icon: Activity,
    title: "Artroscopia de rodilla",
    desc: "Reparación de meniscos, ligamentos y cartílago a través de pequeñas incisiones, con recuperación más rápida.",
  },
  {
    icon: Droplet,
    title: "Terapias biológicas",
    desc: "PRP, ácido hialurónico, terapias con células mesenquimales. Para estimular la regeneración natural de tejidos y aliviar el dolor articular.",
  },
];

const Specialties = () => {
  return (
    <section id="especialidades" className="py-28 md:py-40 bg-navy-deep grain relative overflow-hidden text-ivory">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <Reveal className="lg:col-span-5">
            <p className="text-gold text-[11px] tracking-[0.4em] uppercase mb-6">Especialidades</p>
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] text-balance">
              Procedimientos que <em className="text-gold">resuelven</em>, no que complican.
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={120}>
            <p className="text-ivory/65 leading-relaxed text-[17px] mt-4 lg:mt-12">
              Cada procedimiento se elige en función de tu caso, no de un protocolo genérico. La meta es siempre la misma: que vuelvas a hacer lo que te gusta, lo antes posible.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-ivory/10">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 80}>
              <article className="bg-navy-deep p-10 md:p-14 h-full group hover:bg-navy transition-colors duration-500">
                <it.icon className="text-gold" size={32} strokeWidth={1.4} />
                <h3 className="font-serif text-3xl mt-8 text-ivory">{it.title}</h3>
                <p className="mt-4 text-ivory/65 leading-relaxed max-w-md">{it.desc}</p>
                <div className="mt-8 inline-flex items-center text-[11px] tracking-[0.3em] uppercase text-gold/80 group-hover:text-gold transition-colors">
                  Consultar →
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
