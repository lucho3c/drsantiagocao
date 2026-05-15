import { Reveal } from "./Reveal";
import { Instagram as IgIcon, Play } from "lucide-react";

const reels = [
  "https://www.instagram.com/p/DXrinlJj_nT/",
  "https://www.instagram.com/p/DXcfqSGD8Vn/",
  "https://www.instagram.com/p/DX-K1grvrlH/",
  "https://www.instagram.com/p/DXxRfOlvwra/",
  "https://www.instagram.com/p/DYHs08GPl_F/",
  "https://www.instagram.com/p/DJt_tpHtXZM/",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reels.map((url, i) => (
            <Reveal key={url} delay={i * 60}>
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Ver reel ${i + 1} en Instagram`}
                className="group relative block w-full overflow-hidden bg-navy border border-ivory/10 hover:border-gold/60 transition-colors"
                style={{ aspectRatio: "9 / 16" }}
              >
                <img
                  src={`${url}media/?size=l`}
                  alt={`Reel ${i + 1} del Dr. Santiago Cao`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex items-center justify-center w-16 h-16 rounded-full bg-gold/95 text-navy-deep shadow-luxury group-hover:scale-110 transition-transform">
                    <Play size={26} strokeWidth={2} fill="currentColor" className="ml-1" />
                  </span>
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
