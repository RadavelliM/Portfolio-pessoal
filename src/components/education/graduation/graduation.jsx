import React from 'react'

import { FaGraduationCap, FaUniversity } from 'react-icons/fa'
import { AiFillCalendar } from 'react-icons/ai'

import './graduation.css'

const graduationInfos = [

    {img: <FaGraduationCap className='graduationIcon' />,
        title: "Título: ",
        link: "https://seja.univille.br/curso/presencial/engenharia-de-software/",
        txt: "Bacharelado em Engenharia de Software"},


    {img: <FaUniversity className='graduationIcon' />,
        title: "Instituição: ",
        link: "https://seja.univille.br/",
        txt: "Univille"},

    {img: <AiFillCalendar className='graduationIcon' />,
        title: "Início: ",
        txt: "2025"},

    {img: <AiFillCalendar className='graduationIcon' />,
        title: "Previsão de conclusão: ",
        txt: "2029"}
]

export default function Graduation() {
    return (
        <div className="graduation">
            <h1>Graduação</h1>

            <div className="graduationInfo">
                {graduationInfos.map((info, index) => (
                    <p key={index}>
                        <span>{info.img}</span>
                        {info.title}
                        {info.link ? <a href={info.link} target='_blank'>{info.txt}</a> : info.txt}
                    </p>
                ))}
            </div>
        </div>
    )
};
