import React from 'react'
import styles from './Sobremi.module.css'

const Sobremi = () => {
    return (
        <section className={styles.aboutme} id='sobremi'>

            <div className={styles.aboutmetext}>
                <p>¡Hola! Soy desarrollador frontend y me encanta crear interfaces web que no solo se vean bien, sino que también se sientan bien al usarlas. Disfruto mucho trabajar con HTML, CSS, JavaScript y especialmente con React, que se ha convertido en una de mis herramientas favoritas.</p>
                <p>Aunque me enfoco en el frontend, también tengo conocimientos de backend que me ayudan a entender cómo se conectan todas las piezas detrás de una app. He tocado cosas como PHP, Laravel y bases de datos tipo MySQL, lo que me da una idea general de todo el proceso.</p>
                <p>Soy curioso por naturaleza, me gusta aprender por mi cuenta y siempre estoy buscando formas de mejorar. En este momento estoy dedicando mi tiempo a practicar, construir proyectos personales y seguir creciendo como desarrollador.</p>
            </div>
        </section>



    )
}

export default Sobremi