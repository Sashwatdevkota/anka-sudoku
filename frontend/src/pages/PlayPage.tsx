import SiteHeader from "../components/SiteHeader";

const utilityControls = [
  { label: "Notes", icon: "✎" },
  { label: "Erase", icon: "⌫" },
  { label: "Undo", icon: "↶" },
  { label: "Hint", icon: "?" },
];

export default function PlayPage() {
  return (
    <div className="page">
      <SiteHeader />

      <main className="mx-auto w-full max-w-5xl px-4 py-8 md:py-10">
        {/* Puzzle heading */}
        <section className="text-center">
          <p className="kicker">Daily Challenge · No. 001</p>

          <h2 className="mt-2 font-print text-4xl font-bold md:text-5xl">
            Today's Puzzle
          </h2>

          <p className="mt-2 text-sm text-ink-soft">
            Take your time. Think clearly. Enjoy the process.
          </p>
        </section>

        {/* Game information */}
        <section className="mx-auto mt-8 grid max-w-2xl grid-cols-3 divide-x divide-ink-faint border-y border-ink-faint py-4">
          <div className="text-center">
            <p className="kicker">Difficulty</p>
            <p className="mt-1 font-print text-xl">Easy</p>
          </div>

          <div className="text-center">
            <p className="kicker">Time</p>
            <p className="mt-1 font-print text-xl tabular-nums">00:00</p>
          </div>

          <div className="text-center">
            <p className="kicker">Progress</p>
            <p className="mt-1 font-print text-xl tabular-nums">0 / 81</p>
          </div>
        </section>

        {/* Game area */}
        <section className="mx-auto mt-8 grid w-full max-w-4xl items-center gap-6 desktop:grid-cols-[minmax(0,2.2fr)_minmax(12rem,1fr)] desktop:gap-10">
          {/* Sudoku board */}
          <div className="mx-auto w-full max-w-xl">
            <div className="sd-board">
              {Array.from({ length: 81 }, (_, index) => (
                <div key={index} className="sd-cell" />
              ))}
            </div>

            <p className="mt-3 text-center text-xs text-ink-faint">
              Select a cell to begin solving
            </p>
          </div>

          {/* Utility controls and number keypad */}
          <div className="mx-auto w-full max-w-xs">
            {/* Utility controls */}
            <div className="mb-5 grid grid-cols-4 gap-1 border-y border-ink-faint py-3">
              {utilityControls.map((control) => (
                <button
                  key={control.label}
                  type="button"
                  className="flex flex-col items-center gap-1 py-2 text-ink-soft transition-colors hover:text-ink"
                >
                  <span className="font-print text-xl">{control.icon}</span>

                  <span className="text-xs">{control.label}</span>
                </button>
              ))}
            </div>

            {/* Number keypad */}
            <div>
              <p className="kicker mb-3 text-center">Enter a number</p>

              <div className="grid grid-cols-3 gap-1">
                {Array.from({ length: 9 }, (_, index) => (
                  <button
                    key={index}
                    type="button"
                    className="flex aspect-square items-center justify-center border-0 bg-transparent font-print text-3xl transition-colors hover:bg-paper active:bg-paper"
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
