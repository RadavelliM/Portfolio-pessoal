import React from 'react'

import { FaBook, FaBookOpen, FaCertificate } from 'react-icons/fa'
import { LuComputer } from 'react-icons/lu'

import './course.css'

const imgs = [
    <FaBook className='graduationIcon' />,
    <LuComputer className='graduationIcon' />,
    <FaBookOpen className='graduationIcon' />,
    <FaCertificate className='graduationIcon' />
]

const coursesInfo = [

    {
        name: "JavaScript, React.JS & TypeScript",
        platform: "Udemy",
        description: "Manipulação de DOM, async/await, consumo e criação de APIs REST.",
        situation: 'Em Progresso'
    },

    {
        name: "Git & GitHub",
        platform: "Udemy",
        description: "Controle de versão, branchs, versionamento, rebase, servidores e commits.",
        certificate: 'Certificado',
        link: 'https://www.youtube.com/'
    },


    {
        name: "Docker",
        platform: "Udemy",
        description: "Containerização de aplicações Node.js e configuração de ambientes isolados.",
        certificate: 'Certificado',
        link: 'https://www.youtube.com/'
    }
]

export default function Courses() {
    return (
        <div className="coursesInfo">
            <h1>Cursos</h1>

            <div className="courses">
                {coursesInfo.map((info, index) => (
                    <div key={index} className="courseBox">
                        <p> <span className='first'>{imgs[0]}</span> Curso:  <span className='second'>{info.name}</span> </p>
                        <p> <span className='first'>{imgs[1]}</span> Plataforma:  <span className='second'>{info.platform}</span> </p>
                        <p> <span className='first'>{imgs[2]}</span> Descrição:  <span className='second'>{info.description}</span> </p>

                        {info.situation
                            ? <p> <span className='first'>{imgs[3]}</span> Situação:  <span className='second'>{info.situation}</span> </p>
                            : <p> <span className='first'>{imgs[3]}</span> Situação:  <span className='second'> <a href={info.link} target='_blank'>{info.certificate}</a> </span> </p>
                        }
                    </div>
                ))}
            </div>
        </div>
    )
};
