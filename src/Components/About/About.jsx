import React from 'react'
// import './About.css'
import {skills} from '../../Utils/skills'

const About = () => {
    return(
        
        <div className='about-container'>
            <h1>Sobre mi</h1>
            <div className='card-title'>
                <h2>Anthony Silva</h2>
                <h2>Habilidades Técnicas</h2>
            </div>
            <div className='card-container'>
                <div className='card-content'>
                    <p className=''>
                    Soy estudiante de Ingeniería Informática y desarrollador de software freelance con 2 años de experiencia.                    </p>
                    <p>
                    Mi interés por crecer me ha llevado a realizar diferentes cursos y certificaciones que me han brindado conocimiento en diferentes lenguajes, los cuales he puesto en práctica en diferentes proyectos.                    </p>
                    <div className='card-btn'>
                        <button>Linkedin</button>
                        <button>Github</button>
                        <button>Contacto</button>
                    </div>
                </div>
                <div className='card-content-skill'>
                    <div className='card-skill'>

                    {skills.map((item, index) => (
                        <h3 key={index}>{item.skill}</h3>
                    ))}
                    </div>
                </div>
                
            </div>
        </div>
         
    )
}

export default About