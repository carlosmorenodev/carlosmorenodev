/* import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import styles from './Header.module.css';

const Header = () => {

  return (
    <header className={styles.header}>
      <div className={styles.logo}><span>&lt;</span>Cmm <span>/&gt;</span> </div>

      <nav className={styles.nav}>
        <a href="#inicio">Inicio</a>
        <a href="#sobremi">Sobre mí</a>
        <a href="#projects">Proyectos</a>
      </nav>

      <div className={styles.socials}>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </header>
  );
};

export default Header; */

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
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
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </nav>

      {/* Redes sociales en escritorio */}
      <div className={styles.socials}>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </header>
  );
};

export default Header;

