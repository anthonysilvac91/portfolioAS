import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import './ProjectCard.css'



const  ProjectCard = ({project}) => {

  return (
    <>
      
        <div key={project.title} className='project-card-container'>
          <div  className='card-content'>
            <h2> {project.title} </h2>
            <p className='desc-card'>
            {project.description1}
            </p>
            <p className='desc-card'>
            {project.description2}
            </p>
            <div className='card-btn'>
                             
                <div className='tag'>
                {project.tech.map((techItem, index) => (
                <img key={index} src={techItem.skill} alt={techItem.skill} />
              ))}
                </div>
                <div className='btn-container desk'>
          <div className='btn-icon'>
          <OpenInNewIcon  sx={{ fontSize: 30 }} />
            <p className='desc-icon'>Visitar</p>
          </div>
          <div className='btn-icon'>
          <GitHubIcon  sx={{ fontSize: 30 }}/>
            <p className='desc-icon'>Repositorio</p>
          </div>
        
        
        </div>
                
            </div>
        </div>
        
        <div className='card-img'>
             <img src={project.img} alt="" />
         </div>
        <div className='btn-container mob'>
          <div className='btn-icon'>
          <OpenInNewIcon  sx={{ fontSize: 30 }} />
            <p className='desc-icon'>Visitar</p>
          </div>
          <div className='btn-icon'>
          <GitHubIcon  sx={{ fontSize: 30 }}/>
            <p className='desc-icon'>Repositorio</p>
          </div>
        
        
        </div>
        </div>
        
        
    
    </>
    
    
  )
}

export default ProjectCard 
