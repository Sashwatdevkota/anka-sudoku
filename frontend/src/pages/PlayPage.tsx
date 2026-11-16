import { useEffect, useState } from "react";

import SiteHeader from "../components/SiteHeader";
import { dailyPuzzle } from "../data/dailyPuzzle";
import SudokuBoard from "../components/sudoku/SudokuBoard";
import NumberPad from "../components/sudoku/NumberPad";
import GameControls from "../components/sudoku/GameControls";

export default function PlayPage() {
  const [selectedCell, setSelectedCell] = useState<number | null>(null);
  const [board, setBoard] = useState<number[]>(dailyPuzzle);
  const [history, setHistory] = useState<number[][]>([]);

  // Enter a number
  function handleNumberClick(number: number) {
    if (selectedCell === null) return;
    if (dailyPuzzle[selectedCell] !== 0) return;
    if (board[selectedCell] === number) return;

    setHistory((currentHistory) => [...currentHistory, board]);

    setBoard((currentBoard) => {
      const updatedBoard = [...currentBoard];
      updatedBoard[selectedCell] = number;
      return updatedBoard;
    });
  }

  // Erase a number
  function handleEraseClick() {
    if (selectedCell === null) return;
    if (dailyPuzzle[selectedCell] !== 0) return;
    if (board[selectedCell] === 0) return;

    setHistory((currentHistory) => [...currentHistory, board]);

    setBoard((currentBoard) => {
      const updatedBoard = [...currentBoard];
      updatedBoard[selectedCell] = 0;
      return updatedBoard;
    });
  }

  // Undo the previous move
  function handleUndoClick() {
    if (history.length === 0) return;

    const previousBoard = history[history.length - 1];

    setBoard(previousBoard);
    setHistory((currentHistory) => currentHistory.slice(0, -1));
  }

  // Physical keyboard support
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      // Ignore input fields
      if (
        event.target instanceof HTMLElement &&
        (event.target.tagName === "INPUT" ||
          event.target.tagName === "TEXTAREA" ||
          event.target.isContentEditable)
      ) {
        return;
      }

      // Ignore modifier shortcuts
      if (event.ctrlKey || event.metaKey || event.altKey) {
        return;
      }

      // Enter numbers 1–9
      if (/^[1-9]$/.test(event.key)) {
        handleNumberClick(Number(event.key));
      }

      // Erase selected cell
      if (event.key === "Backspace" || event.key === "Delete") {
        event.preventDefault();
        handleEraseClick();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCell, board]);

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
            <SudokuBoard
              puzzle={dailyPuzzle}
              board={board}
              selectedCell={selectedCell}
              onCellSelect={setSelectedCell}
            />

            <p className="mt-3 text-center text-xs text-ink-faint">
              Select a cell to begin solving
            </p>
          </div>

          {/* Utility controls and number keypad */}
          <div className="mx-auto w-full max-w-xs">
            <div className="mb-5">
              <GameControls
                onEraseClick={handleEraseClick}
                onUndoClick={handleUndoClick}
                canUndo={history.length > 0}
              />
            </div>

            <NumberPad onNumberClick={handleNumberClick} />
          </div>
        </section>
      </main>
    </div>
  );
}
