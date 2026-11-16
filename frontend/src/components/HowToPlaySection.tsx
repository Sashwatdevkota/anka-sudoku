const steps = [
  {
    number: "01",
    title: "Fill the Grid",
    description:
      "Place numbers from 1 to 9 into the empty cells of the Sudoku grid.",
  },
  {
    number: "02",
    title: "Follow the Rules",
    description:
      "Every row, column and 3×3 box must contain each number exactly once.",
  },
  {
    number: "03",
    title: "Complete the Puzzle",
    description:
      "Use logic and careful thinking to fill every empty cell correctly.",
  },
];

export default function HowToPlaySection() {
  return (
    <section className="border-t border-stone-300 bg-stone-50 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-red-900">
            A Guide for Beginners
          </p>

          <h2 className="font-serif text-4xl font-bold text-stone-900 md:text-5xl">
            A simple game.
            <br />A thoughtful challenge.
          </h2>

          <p className="mt-6 leading-relaxed text-stone-600">
            New to Sudoku? No problem. The rules are simple. All you need is a
            little patience and logical thinking.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="border-t-2 border-stone-300 pt-6">
              <span className="font-serif text-4xl text-red-900">
                {step.number}
              </span>

              <h3 className="mt-6 font-serif text-2xl font-bold text-stone-900">
                {step.title}
              </h3>

              <p className="mt-4 leading-relaxed text-stone-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
