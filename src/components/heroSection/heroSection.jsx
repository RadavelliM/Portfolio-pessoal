import React, {useState, useEffect} from 'react'


import './heroSection.css'

//  componentes da nav
import Icons from './icons/icons';
import ArrowDown from './icons/arrow';
import MainContent from './content/mainContent';

const getImages = document.querySelectorAll('img').forEach(img => img.setAttribute('draggable', 'false'))

export default function HeroSection() {

    return (
        <div className="heroSection">

            <MainContent />

            <Icons />

            <ArrowDown />

        </div>
    )
};

