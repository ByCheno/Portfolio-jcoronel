import {NavLink} from 'react-router-dom';
import {projects, skills, contact, home, hogar} from '../../img';

export const Links = () => {
    return (
        <>
        
            <NavLink to="/home"><img className='imgNavBar' src={hogar} alt="Home" /></NavLink>
            <NavLink to="/projects"><img className='imgNavBar' src={projects} alt="Projects" /></NavLink>
            <NavLink to="/skills"><img className='imgNavBar' src={skills} alt="Skills" /></NavLink>
            <NavLink to="/contact"><img className='imgNavBar' src={contact} alt="Contact" /></NavLink>
        </>
    )
}