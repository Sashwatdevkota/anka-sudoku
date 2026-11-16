import { Link } from "react-router";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to Anka Sudoku</h1>
      <Link to="/play">Go to Sudoku</Link>
    </div>
  );
}
