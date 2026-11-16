type NumberPadProps = {
  onNumberClick?: (number: number) => void;
};

export default function NumberPad({ onNumberClick }: NumberPadProps) {
  return (
    <div>
      <p className="kicker mb-3 text-center">Enter a number</p>

      <div className="grid grid-cols-3 gap-1">
        {Array.from({ length: 9 }, (_, index) => {
          const number = index + 1;

          return (
            <button
              key={number}
              type="button"
              onClick={() => onNumberClick?.(number)}
              className="flex aspect-square items-center justify-center border-0 bg-transparent font-print text-3xl transition-colors hover:bg-paper active:bg-paper"
            >
              {number}
            </button>
          );
        })}
      </div>
    </div>
  );
}
