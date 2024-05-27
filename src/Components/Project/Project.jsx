import ProjectCard from './ProjectCard/ProjectCard'
import { projects } from '../../Utils/projects'
import Slider from 'react-slick';
import './Project.css'


const Project = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };


  return (
    <>
      <h1>Proyectos Destacados</h1>
      <div className='project-container'>
        <Slider {...settings}>
        {projects.map((project, index)=>(
            <ProjectCard key={index} project={project}/>
        ))}
        </Slider>
      </div>
    </>
  
  )
}

export default Project