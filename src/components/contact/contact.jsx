import React from 'react'

import { motion } from 'framer-motion'

import styles from './contact.module.css'
import Form from './form/form'
import Icons from '../heroSection/icons/icons'

export default function Contact() {
    return (
        <div id='contact' className={styles.contact}>
            <motion.h1

                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{delay: 0.5, duration: 3}}

            >Contato
            </motion.h1>

            <Form />

            <div className={styles.iconsWrapper}>
                <Icons />
            </div>

        </div>
    )
};
