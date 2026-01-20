import NavBar from "./nav-bar";
import HeroSection from "./hero-section";
import MarqueeBrand from "./marquee-brand";
import About from "./about";

export default function LandingPage() {
  return (
    <div>
      <HeroSection />
      <MarqueeBrand />
      <About />
    </div>
  );
}
