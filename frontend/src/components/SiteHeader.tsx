import { NavLink, Link } from "react-router";

export default function SiteHeader() {
  return (
    <header className="masthead">
      <div className="masthead__brand">
        <Link to="/" className="no-underline">
          <h1 className="masthead__title">ANKA</h1>
          <p className="masthead__tagline">THE DAILY PUZZLE JOURNAL</p>
        </Link>
      </div>

      <div className="dateline">
        <span>MONDAY, NOVEMBER 16, 2026</span>
        <span>ISSUE NO. 001</span>
      </div>

      <nav className="masthead__nav">
        <NavLink to="/" end>
          Home
        </NavLink>

        <NavLink to="/play">Play</NavLink>
      </nav>
    </header>
  );
}
