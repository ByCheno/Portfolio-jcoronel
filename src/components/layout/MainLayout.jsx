import { ProjectCard } from "./ProjectCard"
import { SkillsCard } from "./SkillsCard"
import { useEffect } from 'react';
import $ from 'jquery';
import 'animate.css';

export const MainLayout = () => {

    // Cuando el componente se monta en el DOM, se ejecuta el efecto
    useEffect(() => {
        const interval = setInterval(() => {
            $('.projects-title')
                .addClass('animate__animated animate__flipInX')
                .one('animationend', () => {
                    $('.projects-title').removeClass('animate__animated animate__flipInX');
                });
        }, 3000);

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(interval);
    }, [])

    return (

        <div className="main-menu">
            <h1 className="projects-title">MAIN PROJECTS</h1>
            <ProjectCard />

            <h1 className="projects-title">MAIN SKILLS</h1>
            <SkillsCard />

            <h1 className="projects-title animate__animated animate__lightSpeedInLeft animate__infinite">PROBANDO</h1>
            <h1 className="projects-title animate__animated animate__zoomIn animate__infinite">PROBANDO</h1>
            <h1 className="projects-title animate__animated animate__slideInLeft animate__infinite">PROBANDO</h1>
        </div>

    )
}
