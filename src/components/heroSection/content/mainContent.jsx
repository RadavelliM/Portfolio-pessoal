import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import Digital from '../../../assets/digital.png';
import './mainContent.css';

const titles = ["Dev Fullstack", "Desenvolvedor de Software", "Engenheiro de Software"];

export default function MainContent() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => {
                return prevIndex === titles.length - 1 ? 0 : prevIndex + 1;
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="mainContent">
            <img src={Digital} alt="" />

            <div className="starterText">
                <motion.h1
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{delay: 0.5, duration: 3}}
                > {"<"} <span>{titles[index]}</span> {"/>"}</motion.h1>
            </div>

            <div className="mainText">
                <motion.h1
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{delay: 0.5, duration: 7}}
                >Bem Vindo(a)! Eu sou <span>Henrique Radavelli</span></motion.h1>
            </div>

            <motion.div
                initial={{opacity: 0, top: "61%"}}
                whileInView={{opacity: 1, top: "51%"}}
                transition={{delay: 0.5, duration: 2}}

                className="mainContentText">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae fugiat laboriosam quam, minima pariatur illum quaerat,
                ea assumenda consequuntur doloribus quibusdam adipisci error modi
                aspernatur odit voluptas, amet blanditiis maxime!</p>
            </motion.div>
        </div>
    );
}
