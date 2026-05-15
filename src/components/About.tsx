import doctorImg from "@/assets/hip-knee-xray.jpg";
import { Reveal } from "./Reveal";

const About = () => {
  return (
    <section id="sobre" className="py-28 md:py-40 bg-ivory relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">
        <Reveal className="lg:col-span-5">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 border border-gold/40" />
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={doctorImg}
                alt="Dr. Santiago Cao, traumatólogo"
                className="w-full h-full object-cover"
                loading="lazy"
                width={1024}
                height={1280}
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-navy text-ivory p-6 max-w-[200px]">
              <p className="font-serif text-3xl leading-none text-gold">+1.000</p>
              <p className="text-[11px] tracking-[0.2em] uppercase mt-2 text-ivory/70">Pacientes acompañados</p>
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-7 lg:pl-8">
          <Reveal>
            <p className="text-gold text-[11px] tracking-[0.4em] uppercase mb-6">Sobre el Dr. Cao</p>
            <h2 className="font-serif text-4xl md:text-6xl text-navy leading-[1.05] text-balance">
              Obsesionado con <em className="text-gold">no operar de más</em>.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-10 space-y-5 text-foreground/75 leading-relaxed text-[17px] max-w-2xl">
              <p>
                Soy traumatólogo y cirujano ortopédico, especializado en artroscopia de cadera y rodilla. Me formé en el hospital de clínicas junto a algunos de los referentes más importantes de Argentina y el exterior, con un objetivo claro: ofrecerte la solución menos invasiva que tu caso permita.
              </p>
              <p>
                Creo que la cirugía es el último recurso, no el primero. Por eso cada consulta arranca con un diagnóstico minucioso y una conversación honesta sobre todas las alternativas — desde tratamientos regenerativos hasta técnicas mínimamente invasivas.
              </p>
              <p>
                Mi compromiso es que entiendas qué te pasa, qué opciones tenés, y que te sientas acompañado en cada paso del proceso.
              </p>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-2xl">
              {[
                ["Formación", "Argentina + Exterior"],
                ["Enfoque", "Mínimamente invasivo"],
                ["Atención", "Personalizada"],
              ].map(([k, v]) => (
                <div key={k} className="border-t border-navy/15 pt-4">
                  <p className="text-[10px] tracking-[0.25em] uppercase text-foreground/50">{k}</p>
                  <p className="font-serif text-xl text-navy mt-2 leading-tight">{v}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
