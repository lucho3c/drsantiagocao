import { Reveal } from "./Reveal";
import { Instagram as IgIcon, Play } from "lucide-react";

const reels = [
  "DXrinlJj_nT",
  "DXcfqSGD8Vn",
  "DX-K1grvrlH",
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
          {reels.map((id, i) => (
            <Reveal key={id} delay={i * 60}>
              <div
                className="group relative w-full overflow-hidden border border-ivory/10 hover:border-gold/60 transition-colors bg-navy-deep"
                style={{ aspectRatio: "9 / 16" }}
              >
                {/* Instagram embed iframe — shows the real reel preview */}
                <iframe
                  src={`https://www.instagram.com/p/${id}/embed/captioned`}
                  className="absolute left-1/2 -translate-x-1/2 top-0 pointer-events-none"
                  style={{
                    width: "min(100%, 540px)",
                    height: "calc(100% + 180px)",
                    marginTop: "-60px",
                    border: 0,
                  }}
                  loading="lazy"
                  scrolling="no"
                  allow="encrypted-media"
                  title={`Reel ${i + 1} de @dr.santiagocao`}
                />
                {/* Click overlay → opens reel in new tab */}
                <a
                  href={`https://www.instagram.com/p/${id}/`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Ver reel ${i + 1} en Instagram`}
                  className="absolute inset-0 z-10 flex items-center justify-center bg-navy-deep/10 hover:bg-navy-deep/30 transition-colors"
                >
                  <span className="flex items-center justify-center w-16 h-16 rounded-full bg-gold/95 text-navy-deep shadow-luxury opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all">
                    <Play size={26} strokeWidth={2} fill="currentColor" className="ml-1" />
                  </span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instagram;
