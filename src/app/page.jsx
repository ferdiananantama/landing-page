import Navbar from "@/components/Navbar";
import SectionSlider from "@/components/SectionSlider";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="font-sans bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Slider Section */}
      <SectionSlider />

      {/* Footer */}
      <Footer />
    </div>
  );
}
