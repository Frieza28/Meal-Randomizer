import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h2>🍽️ Meal Randomizer</h2>
      <ul className="nav-links">
        <li><Link to="/">Início</Link></li>
        <li><Link to="/randomizer">Sortear</Link></li>
        <li><Link to="/about">Sobre</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
