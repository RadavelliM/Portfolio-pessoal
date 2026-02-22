import React from 'react'

import { FaGraduationCap, FaBook, FaUniversity } from 'react-icons/fa'
import { AiFillCalendar } from 'react-icons/ai'

import './graduation.css'





export default function Graduation() {
    return (
        <div className="graduation">
            <h1>Graduação</h1>


            <div className="graduationInfo">
                <p>
                    <span><FaGraduationCap className='graduationIcon' /></span>
                    Título:
                    <a href="https://seja.univille.br/curso/presencial/engenharia-de-software/" target='_blank'>
                    Bacharelado em Engenharia de Software</a>
                </p>

                <p>
                    <span><FaUniversity className='graduationIcon' /></span>
                    Instituição: <a href="https://seja.univille.br/" target='_blank'>Univille</a>
                </p>

                <p>
                    <span><AiFillCalendar className='graduationIcon' /></span>
                    Início: 2025
                </p>

                <p>
                    <span><AiFillCalendar className='graduationIcon' /></span>
                    Previsão de conclusão: 2029
                </p>
            </div>

        </div>
    )
};
