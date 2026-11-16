import { Link } from "react-router";

export default function HeroSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:py-32">
      <div className="max-w-3xl">
        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-red-900">
          The Art of Numbers
        </p>

        <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight text-stone-900 md:text-7xl">
          A sharper mind,
          <br />
          one puzzle at a time.
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-stone-600">
          Take a moment away from the noise. Challenge yourself with Sudoku
          puzzles designed to sharpen your thinking, one number at a time.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-5">
          <Link
            to="/play"
            className="bg-red-900 px-8 py-4 text-sm font-semibold text-white transition hover:bg-red-800"
          >
            Play Sudoku →
          </Link>

          <span className="text-sm text-stone-500">
            Find your focus. Find your numbers.
          </span>
        </div>
      </div>

      <div className="mt-20 border-t border-stone-300 pt-5">
        <p className="text-xs uppercase tracking-widest text-stone-500">
          Think clearly. Play thoughtfully. Every day.
        </p>
      </div>
    </section>
  );
}
