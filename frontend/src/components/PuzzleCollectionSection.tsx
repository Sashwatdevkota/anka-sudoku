import { Link } from "react-router";

const difficulties = [
  {
    name: "Easy",
    level: "01",
    description: "A gentle introduction. Perfect for warming up your mind.",
    time: "5–10 min",
  },
  {
    name: "Medium",
    level: "02",
    description: "A little more thought required. Put your logic to work.",
    time: "10–20 min",
  },
  {
    name: "Hard",
    level: "03",
    description: "A serious challenge for those who enjoy complex puzzles.",
    time: "20–40 min",
  },
];

export default function PuzzleCollectionSection() {
  return (
    <section>
      <div className="section-head">
        <p className="kicker">The Collection</p>
        <h2 className="font-print text-3xl font-bold">
          Choose your challenge.
        </h2>
      </div>

      <p className="my-4 text-ink-soft">
        Three levels of difficulty. One number at a time.
      </p>

      <div className="divide-y divide-ink-faint border-y border-ink-faint">
        {difficulties.map((difficulty) => (
          <article key={difficulty.name} className="py-5">
            <div className="flex items-center justify-between">
              <span className="font-print text-3xl text-ink-faint">
                {difficulty.level}
              </span>

              <span className="text-xs text-ink-soft">{difficulty.time}</span>
            </div>

            <h3 className="mt-2 font-print text-2xl font-bold">
              {difficulty.name}
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              {difficulty.description}
            </p>

            <Link
              to="/play"
              className="mt-3 inline-block text-sm font-semibold text-crimson"
            >
              Explore puzzles →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
