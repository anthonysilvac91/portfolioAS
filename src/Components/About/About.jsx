import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import './About.css'
import {skills} from '../../Utils/skills'

const About = () => {
    return(
        <div className='about'>
        <h1>Sobre mi</h1>
        <div className='about-container'>
            
            <div className='card-title'>
                {/* <h2>Anthony Silva</h2> */}
                <h2 className='desk'>Habilidades Técnicas</h2>
            </div>
            <div className='card-about-container'>
                <div className='card-about-content'>
                    <p className=''>
                    Soy estudiante de Ingeniería Informática y desarrollador de software freelance con 3 años de experiencia.                    </p>
                    <p>
                    Mi interés por crecer me ha llevado a realizar diferentes cursos y certificaciones que me han brindado conocimiento en diferentes áreas, estos aprendizajes los he puesto en práctica en diferentes proyectos.                    </p>
                    <div className='btn-container'> 
          <GitHubIcon className='btn-icon' sx={{ fontSize: 50 }} />
          <LinkedInIcon className='btn-icon' sx={{ fontSize: 50 }} />
          <MailOutlineIcon className='btn-icon' sx={{ fontSize: 50 }}/>
        </div>
                </div>
                <h2 className='mob'>Habilidades Técnicas</h2>
                <div className='card-content-skill'>
                    <div className='card-skill'>

                    {skills.map((item, index) => (
                        <div className='skill'>
                        <div className='skill-img'>
                            <img src={item.logo} alt="" />
                        </div>   
                        <h3 key={index}>{item.skill}</h3>
                        </div>
                    ))}
                    </div>
                </div>
                
            </div>
        </div>
        </div>
         
    )
}

export default About