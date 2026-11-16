import { Link } from "react-router";

export default function SiteFooter() {
  return (
    <footer className="bg-stone-900 px-6 py-12 text-stone-300">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div>
            <Link
              to="/"
              className="font-serif text-3xl font-bold text-stone-50"
            >
              ANKA.
            </Link>

            <p className="mt-3 max-w-xs text-sm leading-relaxed text-stone-400">
              A little focus. A little logic. A better way to spend your time.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-stone-50">
              Explore
            </h3>

            <div className="flex flex-col gap-3 text-sm">
              <Link to="/" className="hover:text-white">
                Home
              </Link>
              <Link to="/play" className="hover:text-white">
                Play Sudoku
              </Link>
              <Link to="/about" className="hover:text-white">
                About
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-stone-700 pt-6">
          <p className="text-xs text-stone-500">
            © {new Date().getFullYear()} Anka Sudoku. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
