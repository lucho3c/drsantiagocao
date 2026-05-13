import { MessageCircle } from "lucide-react";

const WhatsAppFab = () => (
  <a
    href="https://wa.me/5491100000000"
    target="_blank"
    rel="noreferrer"
    aria-label="Contactar por WhatsApp"
    className="fixed bottom-6 right-6 z-40 group"
  >
    <span className="absolute inset-0 rounded-full bg-gold/40 animate-ping" />
    <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gold text-navy-deep shadow-luxury hover:bg-gold-light transition-colors">
      <MessageCircle size={24} strokeWidth={1.8} />
    </span>
  </a>
);

export default WhatsAppFab;
