import React from 'react'
import './ProjectCard.css'



const  ProjectCard = ({projects}) => {

  return (
    <>
      
        <div key={projects.title} className='card-container'>
          <div  className='card-content'>
            <h2> {projects.title} </h2>
            <p>
            {projects.description1}
            </p>
            <p>
            {projects.description2}
            </p>
            <div className='card-btn'>
                <button><a href={projects.website}>Visitar</a></button>
                <button><a href={projects.urlCode}>Github</a></button>
                <div className='tag'>
                {projects.tech.map((techItem, index) => (
                <img key={index} src={techItem.skill} alt={techItem.skill} />
              ))}
                </div>
            </div>
        </div>
        
        <div className='card-img'>
             <img src={projects.img} alt="" />
         </div>
        </div>
        
        
    
    </>
    
    
  )
}

export default ProjectCard 
