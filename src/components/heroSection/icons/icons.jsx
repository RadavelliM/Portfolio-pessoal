import React from 'react'

import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import './icons.css'

const icons = [
    {title: 'GitHub', img: <FiGithub />, link: 'https://github.com/RadavelliM/RadavelliM'},
    {title: 'LinkedIn', img: <FiLinkedin />, link: 'https://www.linkedin.com/in/henrique-radavelli-821a64367/'},
    {title: 'E-mail', img: <FiMail />, link: 'https://www.google.com/'}
]

export default function Icons() {
    return (
            <div className="icons">
                {icons.map(icon => (
                    <a key={icon.title} title={icon.title} target='blank' href={icon.link}>{icon.img}</a>
                ))}
            </div>
    )
};
