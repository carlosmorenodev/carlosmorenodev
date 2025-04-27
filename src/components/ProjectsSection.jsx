import { useState } from 'react';
import React from 'react'

import { sections } from '../projects.js';

import styles from './ProjectsSection.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Filtro2 = () => {

    // Estado para controlar el filtro activo
    const [activeFilter, setActiveFilter] = useState('all');


    // Datos de las secciones
   /*  const sections = [
        { id: 1, title: 'Assassins Creed Lightbox', categories: ['javascript'], img: 'LightboxAC.png' },
        { id: 2, title: 'Colección de cards animadas', categories: ['javascript'], img: 'animated-card.png' },
        { id: 3, title: 'Blog con Astro', categories: ['astro'], img: 'blog-astro.png' },
        { id: 4, title: 'Juego con números', categories: ['javascript'], img: 'juegonumeros.png' },
        { id: 5, title: 'Lista de tareas', categories: ['react', 'javascript'], img: 'tasklist.png' },
        { id: 6, title: 'Web Days Gone', categories: ['javascript'], img: 'daysgoneweb.png' },
        { id: 7, title: 'Dragon Ball Quiz', categories: ['react'], img: 'dragon-ball-quiz.png', github: 'https://github.com/carlosmorenodev/dragonball-quiz', preview: 'https://carlosmorenodev.github.io/dragonball-quiz/' },
    ]; */

    // Función para filtrar las secciones
    const filteredSections = sections.filter((section) => {
        if (activeFilter === 'all') {
            return true; // Mostrar todas las secciones
        }
        return section.categories.includes(activeFilter); // Filtrar por categoría
    });

    console.log("Secciones filtradas:", filteredSections);

    return (
        <>
            <section className={styles.projects} id='projects'>

                <div className={styles.projectsButtons}>
                    <button onClick={() => setActiveFilter('all')}>All</button>
                    <button onClick={() => setActiveFilter('javascript')}>Javascript</button>
                    <button onClick={() => setActiveFilter('react')}>React</button>
                    <button onClick={() => setActiveFilter('astro')}>Astro</button>
                </div>

                <div className={styles.projectWrapper}>


                    {/* Mostrar las secciones filtradas */}
                    <div className={styles.projectsContainer}>
                        {filteredSections.length > 0 ? (
                            filteredSections.map((section) => (

                                <>

                                    <div key={section.id} className={styles.projectCard}>

                                        <img className={styles.cardImg} src={section.img} alt="" />

                                        <h2 className={styles.cardTitle}>{section.title}</h2>

                                        <div className={styles.projectCardSkills}>
                                            {section.categories.map((category) => (
                                                <p>{category}</p>
                                            ))}
                                        </div>

                                        <div className={styles.projectCardButtons}>
                                            <a href={section.preview} target='_blank'>
                                                <FontAwesomeIcon icon={faEye} />
                                            </a>
                                            <a href={section.github} target='_blank'>
                                                <FontAwesomeIcon icon={faGithub} />
                                            </a>
                                        </div>


                                    </div>

                                </>


                            ))
                        ) : (
                            <p>No hay secciones para mostrar.</p>
                        )}
                    </div>

                    <a className={styles.seeMoreButton} href="https://github.com/carlosmorenodev?tab=repositories" target='_blank'>Ver más en Github</a>
                </div>

            </section >


        </>
    )
}

export default Filtro2