import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Program from "@/components/Program";
import Methodology from "@/components/Methodology";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Stats />
      <About />
      <Program />
      <Methodology />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
