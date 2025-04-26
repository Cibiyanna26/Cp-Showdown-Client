import Headder from "@/components/Headder";
import Hero from "@/components/Landing/Hero";
import About from "@/components/Landing/About";
import Footer from "@/components/Footer";
import WhatWeOffer from "@/components/Landing/WhatWeOffer";

const Landing: React.FC = () => {
  return (
    <>
      <section className="landing page text-white">
        <Headder />
        <Hero />
        <WhatWeOffer />
        <Footer />
      </section>
    </>
  );
};

export default Landing;
