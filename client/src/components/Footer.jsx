import './Footer.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h2>Meal Randomizer</h2>
          <p>&copy; 2025 Ricardo Frieza. Todos os direitos reservados.</p>
        </div>

        <div className="footer-links">
          <a href="/about">Sobre</a>
          <a href="/contact">Contacto</a>
          <a href="/privacy">Privacidade</a>
          <a href="/terms">Termos</a>
        </div>

        <div className="footer-social">
          <a href="https://github.com/Frieza28" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
          <a href="https://linkedin.com/in/ricardo-frieza" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
