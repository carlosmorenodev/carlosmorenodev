import React from 'react';
import { motion } from 'framer-motion';
import styles from './Habilidades.module.css';

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Astro',
  'Bootstrap',
  'Git',
  'PHP',
  'Wordpress',
];

const Habilidades = () => {
  return (
    <section className={styles.skillsSection} id="habilidades">
      <motion.h2
        className={styles.skillsTitle}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Habilidades
      </motion.h2>

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
    </section>
  );
};

export default Habilidades;
