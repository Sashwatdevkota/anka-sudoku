import SiteHeader from "../components/SiteHeader";
import LeadStory from "../components/LeadStory";
import PuzzleCollectionSection from "../components/PuzzleCollectionSection";
import HowToPlaySection from "../components/HowToPlaySection";
import DailyPuzzleNote from "../components/DailyPuzzleNote";
import SiteFooter from "../components/SiteFooter";

export default function HomePage() {
  return (
    <div className="page">
      <SiteHeader />

      <main className="broadsheet">
        <div className="broadsheet__main">
          <LeadStory />

          <HowToPlaySection />
        </div>

        <aside className="broadsheet__side">
          <PuzzleCollectionSection />
          <DailyPuzzleNote />
        </aside>
      </main>

      <SiteFooter />
    </div>
  );
}
