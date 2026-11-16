import { Link } from "react-router";

const difficulties = [
  {
    name: "Easy",
    level: "01",
    description: "A gentle introduction. Perfect for warming up your mind.",
    time: "5–10 minutes",
  },
  {
    name: "Medium",
    level: "02",
    description: "A little more thought required. Put your logic to work.",
    time: "10–20 minutes",
  },
  {
    name: "Hard",
    level: "03",
    description: "A serious challenge for those who enjoy complex puzzles.",
    time: "20–40 minutes",
  },
];

export default function PuzzleCollectionSection() {
  return (
    <section className="bg-stone-50 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-red-900">
              Explore the Collection
            </p>

            <h2 className="font-serif text-4xl font-bold text-stone-900 md:text-5xl">
              Choose your challenge.
            </h2>

            <p className="mt-4 max-w-xl text-stone-600">
              Whether you're just starting or looking for a challenge, there's a
              puzzle waiting for you.
            </p>
          </div>

          <p className="text-sm font-semibold text-red-900">
            THREE LEVELS OF DIFFICULTY
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {difficulties.map((difficulty) => (
            <div
              key={difficulty.name}
              className="border border-stone-300 p-8 transition hover:border-red-900"
            >
              <div className="mb-12 flex items-center justify-between">
                <span className="font-serif text-5xl text-stone-300">
                  {difficulty.level}
                </span>

                <span className="border border-stone-300 px-3 py-1 text-xs uppercase tracking-widest text-stone-500">
                  {difficulty.time}
                </span>
              </div>

              <h3 className="font-serif text-3xl font-bold text-stone-900">
                {difficulty.name}
              </h3>

              <p className="mt-4 min-h-16 leading-relaxed text-stone-600">
                {difficulty.description}
              </p>

              <Link
                to="/play"
                className="mt-8 inline-block border-b border-red-900 pb-1 text-sm font-semibold text-red-900 hover:text-red-700"
              >
                Explore puzzles →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
