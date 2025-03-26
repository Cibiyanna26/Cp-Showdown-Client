import Headder from "../components/Headder";
import Hero from "../components/Landing/Hero";
import About from "../components/Landing/About";
import Footer from "../components/Footer";

const Landing = () => {
  return (
    <>
      <section className="landing page text-white">
        <Headder/>
        <Hero />
        <About />
        <Footer />
      </section>
    </>
  );
};

export default Landing;
