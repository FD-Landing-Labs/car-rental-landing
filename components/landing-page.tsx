import NavBar from "./nav-bar";
import HeroSection from "./hero-section";
import MarqueeBrand from "./marquee-brand";
import About from "./about";
import CarsPage from "./cars-page";
import Faq from "./faq";
import { TestimonialSection } from "./testimonial-section";
import TopPicksCar from "./top-picks-car";
import ProccessSection from "./proccess-section";
import FutureSection from "./future-section";
export default function LandingPage() {
  return (
    <div>
      <HeroSection />
      <MarqueeBrand />
      <About />
      <CarsPage />
      <FutureSection />
      <TopPicksCar />
      <ProccessSection />
      <TestimonialSection />
      <Faq />
    </div>
  );
}
