import SiteHeader from "../components/SiteHeader";
import HeroSection from "../components/HeroSection";
import DailyPuzzleSection from "../components/DailyPuzzleSection";
import PuzzleCollectionSection from "../components/PuzzleCollectionSection";
import HowToPlaySection from "../components/HowToPlaySection";
import SiteFooter from "../components/SiteFooter";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <SiteHeader />
      <HeroSection />
      <DailyPuzzleSection />
      <PuzzleCollectionSection />
      <HowToPlaySection />
      <SiteFooter />
    </div>
  );
}
