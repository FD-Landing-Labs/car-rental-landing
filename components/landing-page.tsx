import NavBar from "./nav-bar";
import HeroSection from "./hero-section";
import MarqueeBrand from "./marquee-brand";
import About from "./about";
import CarsPage from "./cars-page";

export default function LandingPage() {
  return (
    <div>
      <HeroSection />
      <MarqueeBrand />
      <About />
      <CarsPage />
    </div>
  );
}
