import React from 'react'

import { LuMapPin } from 'react-icons/lu'

import './about.css'


export default function About() {
    return (
        <div id='about' className="about">

            <div className="title">
                <h1>Sobre Mim</h1>
            </div>

            <div className="info">
                <h4>Atuo como desenvolvedor Full Stack em formação, cursando Engenharia de Software e aprofundando meus conhecimentos na construção de aplicações web modernas e bem estruturadas.</h4>
                <h4>Tenho interesse especial em design de sistemas, desenvolvimento de APIs e organização de código orientada à clareza e manutenção.</h4>
                <h4>Valorizo padrões que promovem legibilidade, modularidade e escalabilidade, buscando sempre escrever soluções que sejam eficientes hoje e sustentáveis no futuro.</h4>
                <h4>No momento, concentro meus esforços na criação de projetos práticos que reforçam minha base técnica e ampliam minha experiência com diferentes tecnologias.</h4>
            </div>


            <address>
                <p> <LuMapPin /> Joinville, SC - Brasil </p>
            </address>
        </div>
    )
};
