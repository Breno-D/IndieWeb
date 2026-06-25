import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <div className="navbar">
      <Link to="/" onClick={scrollToTop}>INICIO</Link>
      <Link to="/about" onClick={scrollToTop}>SOBRE</Link>
      <Link to="/ambrosia" onClick={scrollToTop}>AMBROSIA</Link>
      <Link to="/blog" onClick={scrollToTop}>BLOG</Link>
      <Link to="/jogos" onClick={scrollToTop}>JOGOS</Link>
      <Link to="/game-dev" onClick={scrollToTop}>COMO CRIAR JOGOS</Link>
    </div>
  );
}

export default Navbar;


