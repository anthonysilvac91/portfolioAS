import React, { useRef } from 'react'
import ProjectCard from './ProjectCard/ProjectCard'
import './Project.css'
import { projects } from '../../Utils/projects'
import Slider from 'react-slick';


const Project = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };


  return (
  
    <div className='project-container'>
      <h1>Proyectos Destacados</h1>
      
      <Slider {...settings}>
      {projects.map((project, index)=>(
          <ProjectCard key={index} project={project}/>
      ))}
      </Slider>
      
        
      
      
    </div>
  
  )
}

export default Project