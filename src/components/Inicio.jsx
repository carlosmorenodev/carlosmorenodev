import React from 'react'

import styles from './Inicio.module.css'

import { motion } from 'framer-motion';

const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Astro',
    'Bootstrap',
    'Git',
    'PHP',
    'MySQL',
    'Wordpress',
];


const Inicio = () => {
    return (
        <section className={styles.hero} id="inicio">
            <motion.div
                className={styles.heroContent}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className={styles.heroTitle}>Hola, soy <span>Carlos Moreno Martín</span></h1>
                <p className={styles.heroSubtitle}>
                    Desarrollador Frontend enfocado en crear experiencias web modernas, accesibles y visualmente atractivas.
                </p>
                <div className={styles.heroButtons}>
                    <a href="/curriculum-carlos-moreno.pdf" target="_blank" className={styles.ctaBtn}>Descargar Curriculum</a>
                    <a href="mailto: carlosmorenomartindev@gmail.com" className={styles.ctaBtn}>carlosmorenomartindev@gmail.com</a>
                </div>

                <div className={styles.skillsGrid}>
                    {skills.map((skill, index) => (
                        <motion.div
                            className={styles.skillCard}
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            viewport={{ once: true }}
                        >
                            {skill}
                        </motion.div>
                    ))}
                </div>

            </motion.div>
        </section>
    )
}

export default Inicio