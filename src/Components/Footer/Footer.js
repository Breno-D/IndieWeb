import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <div className="footer">
        <p>© 2026 Breno R. D. Todos Direitos Reservados.</p>
        <div className='footer-links'>
            <Link to='/' onClick={scrollToTop}>Inicio</Link>
            <Link to='/about' onClick={scrollToTop}>Sobre</Link>
            <Link to='/ambrosia' onClick={scrollToTop}>Ambrosia</Link>
            <Link to='/blog' onClick={scrollToTop}>Blog</Link>
            <Link to='/jogos' onClick={scrollToTop}>Jogos</Link>
        </div>
    </div>
  );
}

export default Footer;
