import React from 'react'
// import './Education.css'
import { cursos } from '../../Utils/cursos'

const Education = () => {
  return (
  <div className='education-container'>
    
    <h1>Educación</h1>
    <div className='card-container'>
    {cursos.map((item, index) => (
        <div className='card-edu'>
            <h3 key={index}>{item.nombre}</h3>
            <p>{item.fecha}</p>
            <p>{item.Instituto}</p>
        </div>
        
        
                        
                    ))}

    </div>
  </div>
  )
}

export default Education 