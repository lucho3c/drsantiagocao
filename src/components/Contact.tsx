import { useState } from "react";
import { Reveal } from "./Reveal";
import { MapPin, Mail, Phone, MessageCircle } from "lucide-react";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";

const WHATSAPP_NUMBER = "5491100000000"; // placeholder

const schema = z.object({
  name: z.string().trim().min(2, "Ingresá tu nombre").max(100),
  email: z.string().trim().email("Email inválido").max(255),
  area: z.string().trim().min(1, "Indicá la zona del cuerpo").max(100),
  message: z.string().trim().min(10, "Contame un poco más").max(1000),
});

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", area: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      toast({ title: "Revisá los datos", description: r.error.issues[0].message, variant: "destructive" });
      return;
    }
    const text = encodeURIComponent(
      `Hola Dr. Cao, soy ${form.name} (${form.email}). Zona: ${form.area}. ${form.message}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
    toast({ title: "Mensaje enviado", description: "Te abrimos WhatsApp para terminar la consulta." });
  };

  return (
    <section id="contacto" className="py-28 md:py-40 bg-ivory relative">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16">
        <Reveal className="lg:col-span-5">
          <p className="text-gold text-[11px] tracking-[0.4em] uppercase mb-6">Contacto</p>
          <h2 className="font-serif text-4xl md:text-6xl text-navy leading-[1.05] text-balance">
            Contame qué te pasa. <em className="text-gold">Te respondo yo</em>.
          </h2>
          <p className="mt-8 text-foreground/70 leading-relaxed max-w-md">
            Escribime por WhatsApp o dejame tus datos. Si tu caso lo requiere, coordinamos una consulta presencial o virtual.
          </p>

          <div className="mt-12 space-y-6">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-5 bg-navy text-ivory hover:bg-navy-deep transition-colors group"
            >
              <MessageCircle className="text-gold" size={24} strokeWidth={1.5} />
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-ivory/60">Vía rápida</p>
                <p className="font-serif text-xl mt-1">WhatsApp directo</p>
              </div>
              <span className="ml-auto text-gold opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </a>

            <div className="space-y-5 pt-4">
              <div className="flex items-start gap-4 text-sm">
                <MapPin className="text-gold mt-1 shrink-0" size={18} strokeWidth={1.5} />
                <div>
                  <p className="text-foreground/55 text-xs tracking-wide uppercase">Consultorio</p>
                  <p className="text-navy mt-1">Buenos Aires, Argentina</p>
                </div>
              </div>
              <div className="flex items-start gap-4 text-sm">
                <Mail className="text-gold mt-1 shrink-0" size={18} strokeWidth={1.5} />
                <div>
                  <p className="text-foreground/55 text-xs tracking-wide uppercase">Email</p>
                  <p className="text-navy mt-1">consulta@drsantiagocao.com.ar</p>
                </div>
              </div>
              <div className="flex items-start gap-4 text-sm">
                <Phone className="text-gold mt-1 shrink-0" size={18} strokeWidth={1.5} />
                <div>
                  <p className="text-foreground/55 text-xs tracking-wide uppercase">Teléfono</p>
                  <p className="text-navy mt-1">+54 9 11 4059 1453</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={120}>
          <form onSubmit={onSubmit} className="bg-card border border-border p-8 md:p-12 space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <Field label="Nombre" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
              <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
            </div>
            <Field label="Zona del cuerpo" placeholder="Cadera, rodilla..." value={form.area} onChange={(v) => setForm({ ...form, area: v })} />
            <div>
              <label className="block text-[10px] tracking-[0.25em] uppercase text-foreground/55 mb-3">Mensaje</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                maxLength={1000}
                className="w-full bg-transparent border-b border-navy/25 focus:border-gold outline-none py-3 text-navy resize-none transition-colors"
                placeholder="Contame qué te pasa, hace cuánto y qué probaste..."
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 bg-navy text-ivory text-[12px] tracking-[0.2em] uppercase hover:bg-gold hover:text-navy-deep transition-colors"
            >
              Enviar consulta
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
};

const Field = ({
  label, value, onChange, type = "text", placeholder,
}: { label: string; value: string; onChange: (v: string) => void; type?: string; placeholder?: string }) => (
  <div>
    <label className="block text-[10px] tracking-[0.25em] uppercase text-foreground/55 mb-3">{label}</label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      maxLength={255}
      className="w-full bg-transparent border-b border-navy/25 focus:border-gold outline-none py-3 text-navy transition-colors"
    />
  </div>
);

export default Contact;
