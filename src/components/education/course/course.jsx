import React from 'react';

import { motion } from 'framer-motion';

import { FaBook, FaBookOpen, FaCertificate } from 'react-icons/fa';
import { LuComputer } from 'react-icons/lu';

import styles from './course.module.css';

const coursesInfo = [
    {
        name: "JavaScript, React & TypeScript",
        platform: "Udemy",
        description: "Manipulação de DOM, async/await, consumo e criação de APIs REST.",
        situation: 'Em Progresso'
    },
    {
        name: "Git & GitHub",
        platform: "Udemy",
        description: "Controle de versão, branchs, versionamento, rebase, servidores e commits.",
        certificate: 'Concluído'
        // link: 'https://www.youtube.com/'
    }
];

export default function Courses() {
    const iconClass = styles.graduationIcon;

    return (
        <div className={styles.coursesInfo}>
            <motion.h1
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{delay: 0.5, duration: 2}}
            > Cursos Complementares
            </motion.h1>

            <motion.div
                initial={{opacity: 0, y: -40}}
                whileInView={{opacity: 1, y: 0}}
                transition={{delay: 1, duration: 2}}
                className={styles.courses}>

                {coursesInfo.map((info, index) => (
                    <motion.div
                    key={index} className={styles.courseBox}>

                        <p>
                            <span className={styles.first}><FaBook className={iconClass} /></span>
                            Curso: <span className={styles.second}>{info.name}</span>
                        </p>

                        <p>
                            <span className={styles.first}><LuComputer className={iconClass} /></span>
                            Plataforma: <span className={styles.second}>{info.platform}</span>
                        </p>

                        <p>
                            <span className={styles.first}><FaBookOpen className={iconClass} /></span>
                            Descrição: <span className={styles.second}>{info.description}</span>
                        </p>

                        {info.situation ? (
                            <p>
                                <span className={styles.first}><FaCertificate className={iconClass} /></span>
                                Situação: <span className={styles.second}>{info.situation}</span>
                            </p>
                        ) : (
                            <p>
                                <span className={styles.first}><FaCertificate className={iconClass} /></span>
                                Situação: <span className={styles.second}>
                                    <a href={info.link} target='_blank' rel="noreferrer">{info.certificate}</a>
                                </span>
                            </p>
                        )}
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
