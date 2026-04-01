import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <img src={logo} alt="BeluBenegas" className="h-7 brightness-[10]" />
        <p className="text-sm text-muted-foreground">
          Lic. en Administración · Contadora Pública · Metodología VPO/DPO (AB InBev) · HOGAN Assessments
        </p>
      </div>
    </footer>
  );
};

export default Footer;
