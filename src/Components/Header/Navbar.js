import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">INICIO</Link>
      <Link to="/about">SOBRE</Link>
      <Link to="/ambrosia">AMBROSIA</Link>
      <Link to="/blog">BLOG</Link>
      <Link to="/jogos">JOGOS</Link>
      <Link to="/game-dev">COMO CRIAR JOGOS</Link>
    </div>
  );
}

export default Navbar;


