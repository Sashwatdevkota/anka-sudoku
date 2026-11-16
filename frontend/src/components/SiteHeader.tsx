import { Link } from "react-router";

export default function SiteHeader() {
  return (
    <header className="border-b border-stone-300 bg-stone-50 px-6 py-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Branding */}
        <Link to="/" className="no-underline">
          <h1 className="font-serif text-3xl font-bold tracking-tight text-stone-900">
            ANKA.
          </h1>
          <p className="text-xs tracking-widest text-stone-500">
            THE DAILY PUZZLE JOURNAL
          </p>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link to="/" className="text-sm text-stone-700 hover:text-red-900">
            Home
          </Link>
          <Link
            to="/puzzles"
            className="text-sm text-stone-700 hover:text-red-900"
          >
            Puzzles
          </Link>
          <Link
            to="/about"
            className="text-sm text-stone-700 hover:text-red-900"
          >
            About
          </Link>
        </nav>

        {/* Sign in */}
        <button className="bg-red-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-red-800">
          Sign in
        </button>
      </div>
    </header>
  );
}
