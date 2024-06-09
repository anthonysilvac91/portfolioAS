import React from 'react'
import './ProjectCard.css'



const  ProjectCard = ({project}) => {

  return (
    <>
      
        <div key={project.title} className='project-card-container'>
          <div  className='card-content'>
            <h2> {project.title} </h2>
            <p>
            {project.description1}
            </p>
            <p>
            {project.description2}
            </p>
            <div className='card-btn'>
                <a className='btn' href={project.website}>Visitar</a>
                <a className='btn' href={project.urlCode}>Github</a>
                <div className='tag'>
                {project.tech.map((techItem, index) => (
                <img key={index} src={techItem.skill} alt={techItem.skill} />
              ))}
                </div>
            </div>
        </div>
        
        <div className='card-img'>
             <img src={project.img} alt="" />
         </div>
        </div>
        
        
    
    </>
    
    
  )
}

export default ProjectCard 
