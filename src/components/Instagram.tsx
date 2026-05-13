import { Reveal } from "./Reveal";
import { Instagram as IgIcon } from "lucide-react";

const tiles = [
  "Tres mitos sobre el dolor de cadera",
  "¿Cuándo operar un menisco?",
  "Qué es realmente la artrosis",
  "PRP: para quién sí, para quién no",
  "Vuelta al deporte post artroscopia",
  "Cómo elegir tu traumatólogo",
];

const Instagram = () => {
  return (
    <section className="py-28 md:py-40 bg-navy-deep grain text-ivory relative">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-end mb-16">
        <Reveal className="lg:col-span-7">
          <p className="text-gold text-[11px] tracking-[0.4em] uppercase mb-6">Contenido educativo</p>
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] text-balance">
            Aprendé sobre tu cuerpo, <em className="text-gold">desde el consultorio</em>.
          </h2>
        </Reveal>
        <Reveal className="lg:col-span-5" delay={120}>
          <p className="text-ivory/65 leading-relaxed">
            Comparto contenido semanal sobre lesiones, prevención y tratamientos. Sin tecnicismos, hablado en criollo.
          </p>
          <a
            href="https://www.instagram.com/dr.santiagocao/"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-3 text-gold hover:text-gold-light transition-colors text-[12px] tracking-[0.25em] uppercase"
          >
            <IgIcon size={18} strokeWidth={1.5} />
            Seguime @dr.santiagocao
          </a>
        </Reveal>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {tiles.map((t, i) => (
            <Reveal key={t} delay={i * 60}>
              <a
                href="https://www.instagram.com/dr.santiagocao/"
                target="_blank"
                rel="noreferrer"
                className="group relative aspect-square block overflow-hidden bg-navy border border-ivory/10 hover:border-gold/60 transition-colors"
              >
                <div
                  className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity"
                  style={{
                    background: `radial-gradient(circle at ${20 + i * 12}% ${30 + i * 8}%, hsl(36 55% 52% / 0.6), transparent 60%)`,
                  }}
                />
                <div className="relative h-full p-4 flex flex-col justify-between">
                  <IgIcon className="text-ivory/50 group-hover:text-gold transition-colors" size={16} strokeWidth={1.5} />
                  <p className="font-serif text-sm md:text-base text-ivory leading-tight">{t}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instagram;
