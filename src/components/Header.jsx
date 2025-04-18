import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import styles from './Header.module.css';

const Header = () => {
 /*  const [activeSection, setActiveSection] = useState('inicio');

  const handleSetActive = (section) => {
    setActiveSection(section)
  } */
  return (
    <header className={styles.header}>
      <div className={styles.logo}><span>&lt;</span>Cmm <span>/&gt;</span> </div>

      <nav className={styles.nav}>
       
        <a href="#inicio">Inicio</a>
        <a href="#sobremi">Sobre mí</a>
        {/* <a href="#habilidades">Habilidades</a> */}
        <a href="#projects">Proyectos</a>
        {/* <a href="#contacto">Contacto</a> */}

        
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

export default Header;
