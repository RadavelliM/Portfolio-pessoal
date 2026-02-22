import React from 'react'


import './education.css'
import Graduation from './graduation/graduation'

export default function Education() {
    return (
        <div className="education">

            <h1>Formações Acadêmicas</h1>

            <div className="educationInfo">
                <h4>Graduação, cursos e certificados na área</h4>
            </div>

            <Graduation />
        </div>
    )
};
