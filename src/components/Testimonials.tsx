import { Reveal } from "./Reveal";
import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

const items = [
  {
    quote: "Me operé con el doctor Santiago Cao hace aproximadamente 5 meses por un pinzamiento de cadera. La operación fue rápida: entré a las 7 a. m. y a las 18 h ya estaba en mi casa. Desde el primer día pude caminar y el postoperatorio fue mucho más llevadero de lo que esperaba. Hoy, con 5 meses de recuperación, ya no tengo dolores en la zona lumbar y desapareció un pequeño \"click\" que sentía al mover la cadera. Santiago es un gran profesional. Lo recomiendo.",
    name: "Adrian Matias Magliola",
    detail: "Pinzamiento de cadera",
    rating: 5,
  },
  {
    quote: "El dr Santiago Cao me opero de cadera y me cambio la vida, vivía con dolor y desde que me intervino quirúrgicamente vivo sin dolor sin dudas estoy eternamente agradecido por su buen trabajo y cabe recalcar que es uno de los pocos por no decir el único de zona oeste que opera con un nivel de élite desde ya recomiendo 100% al Dr Santiago Cao.",
    name: "Lucas Tomas Vazquez Pereira",
    detail: "Cirugía de cadera",
    rating: 5,
  },
  {
    quote: "Me operé de una rotura de ligamento en la rodilla y la experiencia fue muy buena desde el inicio con el Dr. Santiago Cao. Me explicó todo con claridad y me transmitió mucha confianza. El postoperatorio fue mejor de lo que esperaba: prácticamente sin dolor, solo algunas molestias leves. Seguí las indicaciones al pie de la letra y arranqué kinesiología lo antes posible, lo cual fue clave en la recuperación. Hoy tengo una vida completamente normal y estoy activa físicamente sin limitaciones. Sin dudas recomiendo al Dr. y el enfoque de rehabilitación temprana.",
    name: "Sara Orellana Martinéz",
    detail: "Rotura de ligamento en rodilla",
    rating: 5,
  },
  {
    quote: "Mi experiencia con el Doctor Cao fué excelente, si hubiera más estrellas las pondría sin dudas. Llegué al Doctor con un diagnóstico de rotura de LCA de rodilla izquierda, desde que entré al consultorio me bajó una tranquilidad absoluta y me explicó todo sobre la lesión, la intervención que tenía que realizar y el posoperatorio. La cirugía salió perfecta y durante las consultas posteriores me fué indicando lo que debía hacer. Recibí el alta en el plazo que me había indicado y volví a jugar al fútbol, a competir al máximo sin molestias ni inseguridades. Solo tengo palabras de agradecimiento y recomiendo la atención con el Doc sin ninguna duda.",
    name: "Joaco Buffa",
    detail: "Rotura de LCA",
    rating: 5,
  },
  {
    quote: "Me operé con el doc hace 2 meses y todo salió perfecto. Muy buena atención tanto antes como luego de la cirugía. Hoy sigo haciendo los controles con él, súper recomendable.",
    name: "Micaela Ramos",
    detail: "Cirugía",
    rating: 5,
  },
  {
    quote: "Siempre me dio mucha tranquilidad con mí cirugía, fue de ligamentos cruzados rotos. Se notó el conocimiento y preparación que tiene el doctor, siempre me sentí segura, y no puedo creer lo rápido que me fui recuperando.. pero todos me decían que dependía también mucho del cirujano, y en verdad es así. Casi no tengo tampoco cicatrices. Super recomendable.",
    name: "Corina Benemerito",
    detail: "Ligamentos cruzados",
    rating: 5,
  },
  {
    quote: "Excelente profesional y ser humano. El doctor Cao me operó de la cadera izquierda y en menos de un año la derecha. Desde la primera consulta me brindó una confianza absoluta. Después de haber pasado por varios especialistas me explicó cada detalle del procedimiento con mucha paciencia. La cirugía fue un éxito, me fui caminando en el día sin muletas., el dolor desapareció enseguida. Lo recomiendo sin dudarlo.",
    name: "Roxana Sierralta",
    detail: "Cadera izquierda y derecha",
    rating: 5,
  },
  {
    quote: "Un genio me quedo la rodilla igual que antes estoy jugando al fútbol ando en bici meti 1480km en enero nunca me dolió ni me molesto nada para mi es el héroe de mi rodilla antes no podía ni caminar, lloraba del dolor.",
    name: "Matias Pauluchi",
    detail: "Rodilla",
    rating: 5,
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

        <div className="mt-20 relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {items.map((it, i) => (
                <CarouselItem key={i} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <figure className="bg-card border border-border p-8 h-full flex flex-col">
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: it.rating }).map((_, idx) => (
                        <Star key={idx} className="text-gold fill-gold" size={14} />
                      ))}
                    </div>
                    <Quote className="text-gold/60 mt-4" size={24} strokeWidth={1.4} />
                    <blockquote className="mt-4 font-serif text-base text-navy leading-snug flex-1 line-clamp-8">
                      "{it.quote}"
                    </blockquote>
                    <figcaption className="mt-6 pt-5 border-t border-border">
                      <p className="font-medium text-navy">{it.name}</p>
                      <p className="text-xs text-foreground/55 tracking-wide mt-1">{it.detail}</p>
                    </figcaption>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 -translate-x-1/2 bg-ivory border-border hover:bg-navy/5" />
            <CarouselNext className="right-0 translate-x-1/2 bg-ivory border-border hover:bg-navy/5" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
