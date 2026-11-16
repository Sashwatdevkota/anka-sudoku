import { Link } from "react-router";

const puzzleNumbers = [
  5, 3, 0, 0, 7, 0, 0, 0, 0, 6, 0, 0, 1, 9, 5, 0, 0, 0, 0, 9, 8, 0, 0, 0, 0, 6,
  0, 8, 0, 0, 0, 6, 0, 0, 0, 3, 4, 0, 0, 8, 0, 3, 0, 0, 1, 7, 0, 0, 0, 2, 0, 0,
  0, 6, 0, 6, 0, 0, 0, 2, 8, 0, 0, 0, 0, 4, 1, 9, 0, 0, 5, 0, 0, 0, 0, 0, 8, 0,
  0, 7, 9,
];

export default function LeadStory() {
  return (
    <article>
      <p className="kicker">Today's Feature</p>

      <h2 className="font-print text-5xl font-bold">The Art of Numbers</h2>

      <p className="standfirst">A sharper mind, one puzzle at a time.</p>

      <p className="text-ink-soft">
        Take a moment away from the noise. Challenge yourself with Sudoku
        puzzles designed to sharpen your thinking, one number at a time.
      </p>

      <div className="my-6 border-y border-ink-faint py-4">
        <p className="kicker">The Daily Challenge</p>
        <div className="flex gap-8">
          <p>Difficulty: Easy</p>
          <p>Grid: 9 × 9</p>
        </div>
      </div>

      <div className="sd-board mx-auto">
        {puzzleNumbers.map((number, index) => (
          <div
            key={index}
            className={`sd-cell ${number !== 0 ? "is-given" : ""}`}
          >
            {number === 0 ? "" : number}
          </div>
        ))}
      </div>

      <div className="mt-6">
        <Link to="/play" className="cta">
          Start Today's Puzzle →
        </Link>
      </div>
    </article>
  );
}
