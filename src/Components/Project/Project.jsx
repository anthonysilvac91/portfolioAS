import React, { useRef } from 'react'
import ProjectCard from './ProjectCard/ProjectCard'
import './Project.css'
import { projects } from '../../Utils/projects'


const Project = () => {

  return (
  
    <div className='project-container'>
      <h1>Proyectos Destacados</h1>
      {projects.map((projects, index)=>(
          <ProjectCard key={index} projects={projects}/>
      ))}
        
      
      
    </div>
  
  )
}

export default Project