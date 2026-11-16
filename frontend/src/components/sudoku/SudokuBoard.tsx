type SudokuBoardProps = {
  puzzle: number[];
  board: number[];
  selectedCell: number | null;
  onCellSelect: (index: number) => void;
};

export default function SudokuBoard({
  puzzle,
  board,
  selectedCell,
  onCellSelect,
}: SudokuBoardProps) {
  const selectedRow = selectedCell !== null ? Math.floor(selectedCell / 9) : -1;

  const selectedCol = selectedCell !== null ? selectedCell % 9 : -1;

  const selectedNumber = selectedCell !== null ? board[selectedCell] : 0;

  return (
    <div className="sd-board">
      {board.map((number, index) => {
        const row = Math.floor(index / 9);
        const col = index % 9;

        const isGiven = puzzle[index] !== 0;
        const isSelected = index === selectedCell;

        const isRelated =
          !isSelected && (row === selectedRow || col === selectedCol);

        const isSameBox =
          selectedCell !== null &&
          Math.floor(row / 3) === Math.floor(selectedRow / 3) &&
          Math.floor(col / 3) === Math.floor(selectedCol / 3);

        const isBoxRelated = !isSelected && !isRelated && isSameBox;

        const isSame = selectedNumber !== 0 && number === selectedNumber;

        const cellClasses = [
          "sd-cell",
          isGiven && "is-given",
          isSelected && "is-selected",
          isRelated && "bg-pen/10",
          isBoxRelated && "bg-pen/5",
          isSame && "ring-1 ring-inset ring-pen/40",
          !isGiven && "is-entry",
        ]
          .filter(Boolean)
          .join(" ");

        return (
          <button
            key={index}
            type="button"
            className={cellClasses}
            onClick={() => onCellSelect(index)}
            aria-label={`Row ${row + 1}, column ${col + 1}${
              number !== 0 ? `, number ${number}` : ", empty"
            }`}
            aria-pressed={isSelected}
          >
            {number !== 0 ? number : ""}
          </button>
        );
      })}
    </div>
  );
}
