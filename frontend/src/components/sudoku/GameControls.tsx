type GameControlsProps = {
  onNotesClick?: () => void;
  onEraseClick?: () => void;
  onUndoClick?: () => void;
  onHintClick?: () => void;
  canUndo?: boolean;
};

const controls = [
  { label: "Notes", icon: "✎", action: "notes" },
  { label: "Erase", icon: "⌫", action: "erase" },
  { label: "Undo", icon: "↶", action: "undo" },
  { label: "Hint", icon: "?", action: "hint" },
] as const;

export default function GameControls({
  onNotesClick,
  onEraseClick,
  onUndoClick,
  onHintClick,
  canUndo = false,
}: GameControlsProps) {
  const actions = {
    notes: onNotesClick,
    erase: onEraseClick,
    undo: onUndoClick,
    hint: onHintClick,
  };

  return (
    <div className="grid grid-cols-4 gap-1 border-y border-ink-faint py-3">
      {controls.map((control) => {
        const isDisabled = control.action === "undo" && !canUndo;

        return (
          <button
            key={control.action}
            type="button"
            onClick={actions[control.action]}
            disabled={isDisabled}
            className="flex flex-col items-center gap-1 py-2 text-ink-soft transition-colors hover:text-ink disabled:cursor-not-allowed disabled:opacity-30"
          >
            <span className="font-print text-xl">{control.icon}</span>

            <span className="text-xs">{control.label}</span>
          </button>
        );
      })}
    </div>
  );
}
