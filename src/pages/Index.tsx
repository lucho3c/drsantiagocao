import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Specialties from "@/components/Specialties";
import WhyMe from "@/components/WhyMe";
import Conditions from "@/components/Conditions";
import Testimonials from "@/components/Testimonials";
import Instagram from "@/components/Instagram";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

const Index = () => {
  return (
    <main className="min-h-screen bg-ivory">
      <Header />
      <Hero />
      <About />
      <Specialties />
      <WhyMe />
      <Conditions />
      <Testimonials />
      <Instagram />
      <Contact />
      <Footer />
      <WhatsAppFab />
    </main>
  );
};

export default Index;
