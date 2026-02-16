import React, { useState, useEffect } from 'react'

import Digital from '../../../assets/digital.png'
import './mainContent.css'


export default function MainContent() {
    return (
        <div className="mainContent">
            <img src={Digital} alt="" />

            <div className="starterText">
                <h1> {"<"} <span>Desenvolvedor de Software Fullstack</span> {"/>"}</h1>
                <h1></h1>
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
    )
};
