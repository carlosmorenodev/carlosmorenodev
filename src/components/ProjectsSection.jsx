import { useState } from 'react';
import React from 'react'

import styles from './ProjectsSection.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Filtro2 = () => {

    // Estado para controlar el filtro activo
    const [activeFilter, setActiveFilter] = useState('all');


    // Datos de las secciones
    const sections = [
        { id: 1, title: 'Assassins Creed Lightbox', categories: ['javascript'], img: 'LightboxAC.png', description: 'Lista de tareas programada con React' },
        { id: 2, title: 'Colección de cards animadas', categories: ['javascript'], img: 'animated-card.png' },
        { id: 3, title: 'Blog con Astro', categories: ['astro'], img: 'blog-astro.png' },
        { id: 4, title: 'Juego con números', categories: ['javascript'], img: 'juegonumeros.png' },
        { id: 5, title: 'Lista de tareas', categories: ['react', 'javascript'], img: 'tasklist.png' },
        { id: 6, title: 'Web Days Gone', categories: ['javascript'], img: 'daysgoneweb.png' },
    ];

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

                {/* <h2 className={styles.projectTitle}>Proyectos</h2> */}
                <div className={styles.projectsButtons}>
                    <button onClick={() => setActiveFilter('all')}>All</button>
                    <button onClick={() => setActiveFilter('javascript')}>Javascript</button>
                    <button onClick={() => setActiveFilter('react')}>React</button>
                    <button onClick={() => setActiveFilter('astro')}>Astro</button>
                </div>

                <div className={styles.projectWrapper}>
                    {/* Botones para cambiar el filtro */}
                    {/* <div className={styles.projectsButtons}>
                            <button onClick={() => setActiveFilter('all')}>All</button>
                            <button onClick={() => setActiveFilter('javascript')}>Javascript</button>
                            <button onClick={() => setActiveFilter('react')}>React</button>
                            <button onClick={() => setActiveFilter('astro')}>Astro</button>
                        </div> */}

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
                                            <a href="">
                                                <FontAwesomeIcon icon={faEye} />
                                            </a>
                                            <a href="">
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

                </div>


            </section >


        </>
    )
}

export default Filtro2