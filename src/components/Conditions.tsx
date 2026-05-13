import { Reveal } from "./Reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const groups = [
  {
    area: "Cadera",
    items: [
      { name: "Conflicto femoroacetabular (CFA)", desc: "Dolor en la ingle al sentarse o hacer deporte. Causado por un roce anómalo entre fémur y acetábulo." },
      { name: "Lesión del labrum acetabular", desc: "Desgarro del cartílago que rodea la cabeza del fémur. Provoca dolor profundo y chasquidos." },
      { name: "Tendinopatía glútea / trocantérea", desc: "Dolor lateral de cadera que se intensifica al apoyarse de costado o caminar." },
      { name: "Artrosis temprana de cadera", desc: "Desgaste progresivo del cartílago. Hoy hay alternativas antes de pensar en una prótesis." },
    ],
  },
  {
    area: "Rodilla",
    items: [
      { name: "Lesión de menisco", desc: "Dolor, bloqueo o sensación de inestabilidad. La mayoría se resuelve por artroscopia." },
      { name: "Condromalacia rotuliana", desc: "Dolor anterior de rodilla, sobre todo al subir escaleras o estar mucho tiempo sentado." },
      { name: "Lesiones de ligamentos (LCA / LCM)", desc: "Inestabilidad después de un esguince o lesión deportiva. Tratamientos personalizados según el caso." },
      { name: "Tendinopatías (rotuliana, cuadricipital)", desc: "Dolor crónico por sobrecarga en deportistas y personas activas." },
    ],
  },
];

const Conditions = () => {
  return (
    <section id="patologias" className="py-28 md:py-40 bg-secondary relative">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16">
        <Reveal className="lg:col-span-4">
          <p className="text-gold text-[11px] tracking-[0.4em] uppercase mb-6">Patologías frecuentes</p>
          <h2 className="font-serif text-4xl md:text-5xl text-navy leading-[1.05] text-balance">
            Lo que más vemos en consulta.
          </h2>
          <p className="mt-6 text-foreground/70 leading-relaxed">
            Si te identificás con alguno de estos cuadros, escribime. La mayoría tienen solución sin pasar por el quirófano.
          </p>
        </Reveal>

        <div className="lg:col-span-8 space-y-12">
          {groups.map((g, gi) => (
            <Reveal key={g.area} delay={gi * 100}>
              <div>
                <p className="font-serif text-2xl text-gold mb-4">{g.area}</p>
                <Accordion type="single" collapsible className="border-t border-navy/15">
                  {g.items.map((it) => (
                    <AccordionItem key={it.name} value={it.name} className="border-b border-navy/15">
                      <AccordionTrigger className="font-serif text-xl text-navy hover:no-underline py-5 text-left">
                        {it.name}
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/70 leading-relaxed pb-6 text-base">
                        {it.desc}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Conditions;
