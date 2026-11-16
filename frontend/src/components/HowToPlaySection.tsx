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
    <section className="mt-8  pt-6">
      <div className="section-head">
        <p className="kicker pt-6">A Beginner's Guide</p>
        <h2 className="font-print text-3xl font-bold">How to play Sudoku.</h2>
      </div>

      <p className="my-4 leading-relaxed text-ink-soft">
        New to Sudoku? The rules are simple. All you need is patience and
        logical thinking.
      </p>

      <div className="divide-y divide-ink-faint">
        {steps.map((step) => (
          <article key={step.number} className="py-5">
            <span className="font-print text-3xl text-crimson">
              {step.number}
            </span>

            <h3 className="mt-2 font-print text-xl font-bold">{step.title}</h3>

            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              {step.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
