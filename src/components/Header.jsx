import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faCodepen } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span>&lt;</span>Cmm<span>/&gt;</span>
      </div>

      {/* Botón hamburguesa para móvil */}
      <button className={styles.menuToggle} onClick={() => setMenuOpen(!menuOpen)}>
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
      </button>

      <nav className={`${styles.nav} ${menuOpen ? styles.show : ''}`}>
        <a href="#inicio" onClick={() => setMenuOpen(false)}>Inicio</a>
        <a href="#sobremi" onClick={() => setMenuOpen(false)}>Sobre mí</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Proyectos</a>
        <div className={styles.socialsMobile}>
          <a href="https://github.com/carlosmorenodev/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/carlosmorenomartindev/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://codepen.io/carlosmmdev" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faCodepen} />
          </a>
          <a key="email" href="mailto:tu_correo@ejemplo.com"> {/* Enlace para enviar un correo */}
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </nav>

      {/* Redes sociales en escritorio */}
      <div className={styles.socials}>
        <a href="https://github.com/carlosmorenodev" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/carlosmorenomartindev/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://codepen.io/carlosmmdev" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faCodepen} />
        </a>

        <a key="email" href="mailto:carlosmorenomartindev@gmail.com"> {/* Enlace para enviar un correo */}
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </header>
  );
};

export default Header;

