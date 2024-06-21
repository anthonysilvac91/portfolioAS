import React from 'react'
import './Education.css'
import { cursos } from '../../Utils/cursos'

const Education = () => {
  return (

  <div className='education'>
  <h1>Educación</h1>
  <div className='education-container'>
    
    
    <div className='card-edu-container'>
    {cursos.map((item, index) => (
        <div className='card-edu'>
            <a href={item.url} target='valor _blank' ><h3 key={index}>{item.nombre}</h3></a>
            <p>{item.fecha}</p>
            <p>{item.Instituto}</p>
        </div>
        
        
                        
                    ))}

    </div>
  </div>
  </div>
  )
}

export default Education 