import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Process from "../components/Process";
import WhyUs from "../components/WhyUs";
import Faq from "../components/Faq";
import CtaBanner from "../components/CtaBanner";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Process />
      <WhyUs />
      <Faq />
      <CtaBanner />
      <Contact />
      <Footer />
    </main>
  );
}
