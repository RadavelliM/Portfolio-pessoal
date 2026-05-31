import React, { useEffect, Suspense } from "react";

const Loader = React.lazy(() => import("../../ui/loader/loader"));

import DivisorSpace from "../../ui/divisorSpace/divisorSpace";
import Navbar from "../../components/navbar/navbar";
import HeroSection from "../../components/heroSection/heroSection";
import About from "../../components/about/about";
import TechStack from "../../components/techStack/techStack";
import Projects from "../../components/projects/projects";
import Education from "../../components/education/education";

const SoftSkills = React.lazy(
    () => import("../../components/skills/softskills")
);
const Languages = React.lazy(
    () => import("../../components/languages/languages")
);
const Contact = React.lazy(() => import("../../components/contact/contact"));
const Footer = React.lazy(() => import("../../components/footer/footer"));

export default function SPA() {
    useEffect(() => {
        window.document.title = "Portfólio Henrique";
    }, []);

    return (
        <main className="container">
            <Navbar />
            <Suspense fallback={<div>Carregando...</div>}>
                <HeroSection />
            </Suspense>
            <DivisorSpace space="200px" />
            <About />
            <DivisorSpace space="400px" />
            <TechStack />
            <DivisorSpace space="100px" />
            <Projects />
            <DivisorSpace space="200px" />
            <Education />
            <DivisorSpace space="200px" />

            <Suspense fallback={<Loader />}>
                <SoftSkills />
            </Suspense>
            <DivisorSpace space="300px" />
            <Suspense fallback={<Loader />}>
                <Languages />
            </Suspense>
            <DivisorSpace space="200px" />
            <Suspense fallback={<Loader />}>
                <Contact />
            </Suspense>
            <DivisorSpace space="200px" />
            <Suspense fallback={<Loader />}>
                <Footer />
            </Suspense>
        </main>
    );
}
