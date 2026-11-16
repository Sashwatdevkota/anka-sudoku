import { Link } from "react-router";

const puzzleNumbers = [
  5, 3, 0, 0, 7, 0, 0, 0, 0, 6, 0, 0, 1, 9, 5, 0, 0, 0, 0, 9, 8, 0, 0, 0, 0, 6,
  0, 8, 0, 0, 0, 6, 0, 0, 0, 3, 4, 0, 0, 8, 0, 3, 0, 0, 1, 7, 0, 0, 0, 2, 0, 0,
  0, 6, 0, 6, 0, 0, 0, 0, 2, 8, 0, 0, 0, 0, 4, 1, 9, 0, 0, 5, 0, 0, 0, 0, 8, 0,
  0, 7, 9,
];

export default function DailyPuzzleSection() {
  return (
    <section className="border-y border-stone-300 bg-[#F1EEE6] px-6 py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
        {/* Puzzle information */}
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-red-900">
            The Daily Challenge
          </p>

          <h2 className="font-serif text-4xl font-bold text-stone-900 md:text-5xl">
            Today's Puzzle
          </h2>

          <p className="mt-6 max-w-lg leading-relaxed text-stone-600">
            A new challenge awaits every day. Take your time, think carefully,
            and see if you can complete today's Sudoku puzzle.
          </p>

          <div className="mt-8 flex gap-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-stone-500">
                Difficulty
              </p>
              <p className="mt-1 font-serif text-xl text-stone-900">Easy</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-stone-500">
                Grid
              </p>
              <p className="mt-1 font-serif text-xl text-stone-900">9 × 9</p>
            </div>
          </div>

          <Link
            to="/play"
            className="mt-10 inline-block bg-red-900 px-8 py-4 text-sm font-semibold text-white transition hover:bg-red-800"
          >
            Start Today's Puzzle →
          </Link>
        </div>

        {/* Sudoku preview */}
        <div className="mx-auto w-full max-w-md bg-stone-50 p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <span className="font-serif text-lg font-bold text-stone-900">
              ANKA.
            </span>
            <span className="text-xs uppercase tracking-widest text-stone-500">
              Daily No. 001
            </span>
          </div>

          <div className="grid grid-cols-9 border-l border-t border-stone-400">
            {puzzleNumbers.map((number, index) => (
              <div
                key={index}
                className={`flex aspect-square items-center justify-center border-b border-r border-stone-300 text-sm text-stone-800
                  ${number === 0 ? "bg-white" : "bg-stone-100 font-semibold"}
                  ${Math.floor(index / 9) % 3 === 2 ? "border-b-stone-500" : ""}
                  ${(index % 9) % 3 === 2 ? "border-r-stone-500" : ""}
                `}
              >
                {number === 0 ? "" : number}
              </div>
            ))}
          </div>

          <p className="mt-4 text-center text-xs uppercase tracking-widest text-stone-400">
            A moment of focus, every day.
          </p>
        </div>
      </div>
    </section>
  );
}
