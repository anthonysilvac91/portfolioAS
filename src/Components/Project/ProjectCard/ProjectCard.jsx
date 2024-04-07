import React from 'react'
import './ProjectCard.css'
import proyecto_img from '../../../assets/proyecto1.png'
import { projects } from '../../../Utils/projects'

const  ProjectCard = () => {
  return (
    <>
    
      {projects.map((item) => (
        <div key={item.title} className='card-container'>
          <div  className='card-content'>
            <h2> {item.title} </h2>
            <p>
            {item.description1}
            </p>
            <p>
            {item.description2}
            </p>
            <div className='card-btn'>
                <button><a href={item.website}>Visitar</a></button>
                <button><a href={item.urlCode}>Github</a></button>
                <div className='tag'>
                {item.tech.map((techItem, index) => (
                <img key={index} src={techItem.skill} alt={techItem.skill} />
              ))}
                </div>
            </div>
        </div>
        
        <div className='card-img'>
             <img src={item.img} alt="" />
         </div>
        </div>
        ))} 
    
    </>
    
    
  )
}

export default ProjectCard 

{/* <div className='card-content'>
             */}