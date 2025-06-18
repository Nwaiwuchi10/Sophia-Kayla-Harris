import HeroSection from "../../components/HeroSection/Hero";
import Navbar from "../../components/Navbar/Navbar";
import About from "../../components/About/About";
import ServicesSection from "../../components/Services/Services";
import FaqSection from "../../components/FAQ/Faq";
import Footer from "../../components/Footer/Footer";
import TestimonialSlider from "../../components/Testimonial/Testimonal";
import Wealth from "../../components/Wealth/Wealth";
import Crypto from "../../components/Crypto/Crypto";
import TradingTicker from "../../components/TradingTicker/TradingTicker";
import BrokerDetails from "../../components/BrokerDetails/BrokerDetails";
import ContactMe from "../../components/Contact/Contact";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <ServicesSection />
      <TradingTicker />
      <Wealth />
      <Crypto />
      <BrokerDetails />
      <FaqSection />
      <TestimonialSlider />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default Home;
