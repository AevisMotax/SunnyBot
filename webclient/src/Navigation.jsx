import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav>
      <Link to="/">Dashboard</Link>
      <Link to="/balance">Balance Card</Link>
      <Link to="/other">Other Page</Link>
    </nav>
  );
}
