import { Link } from "react-router";

export default function SiteFooter() {
  return (
    <footer className="colophon">
      <div className="flex flex-col justify-between gap-6 tablet:flex-row">
        <div>
          <Link to="/" className="font-print text-2xl font-bold">
            ANKA
          </Link>

          <p className="mt-2 max-w-xs text-sm text-ink-soft">
            A little focus. A little logic. A better way to spend your time.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
          <Link to="/">Home</Link>
          <Link to="/play">Play Sudoku</Link>
        </nav>
      </div>

      <div className="mt-8 border-t border-ink-faint pt-4">
        <p className="text-xs text-ink-soft">
          © {new Date().getFullYear()} Anka Sudoku. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
