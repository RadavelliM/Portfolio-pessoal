import React from 'react'
import './App.css'
import Navbar from './components/navbar/navbar'
import HeroSection from './components/heroSection/heroSection'
import TechStack from './components/techStack/techStack'


export default function App() {
    return (
        <div className="container">
            <Navbar />
            <HeroSection />
            <TechStack />
        </div>
    )
};
