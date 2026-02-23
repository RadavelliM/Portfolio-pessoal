import React, { useState, useEffect } from 'react';
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
                <h1> {"<"} <span>{titles[index]}</span> {"/>"}</h1>
            </div>

            <div className="mainText">
                <h1>Bem Vindo(a)! Eu sou <span>Henrique Radavelli</span></h1>
            </div>

            <div className="mainContentText">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae fugiat laboriosam quam, minima pariatur illum quaerat,
                ea assumenda consequuntur doloribus quibusdam adipisci error modi
                aspernatur odit voluptas, amet blanditiis maxime!</p>
            </div>
        </div>
    );
}
