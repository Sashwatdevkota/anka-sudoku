import { Link } from "react-router";

export default function DailyPuzzleNote() {
  return (
    <section className="mt-8 pt-6">
      <p className="kicker">A Moment for Yourself</p>

      <h3 className="mt-3 font-print text-2xl font-bold">
        One puzzle. A clearer mind.
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-ink-soft">
        Take a break from the noise. Give yourself a few minutes to think,
        focus, and enjoy the satisfaction of solving something.
      </p>

      <div className="mt-5">
        <Link to="/play" className="cta">
          Start Today's Puzzle →
        </Link>
      </div>
    </section>
  );
}
