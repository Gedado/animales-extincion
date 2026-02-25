import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { SpeciesGrid } from "@/components/species-grid";
import { AboutSection } from "@/components/about-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        <HeroSection />
        <SpeciesGrid />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
