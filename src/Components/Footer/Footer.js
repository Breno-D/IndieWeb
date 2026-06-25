import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
        <p>© 2026 Breno R. D. Todos Direitos Reservados.</p>
        <div className='footer-links'>
            <Link to='/'>Inicio</Link>
            <Link to='/about'>Sobre</Link>
            <Link to='/ambrosia'>Ambrosia</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/jogos'>Jogos</Link>
        </div>
    </div>
  );
}

export default Footer;
