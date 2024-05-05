import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Routes, Route } from 'react-router'
import { routes } from './Utils/routes'
import Home from './Components/Home/Home'
import Project from './Components/Project/Project'
import About from './Components/About/About'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Education from './Components/Education/Education'

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path={routes.home} element={<Home/>}/>
      <Route path={routes.project} element={<Project/>}/>
      <Route path={routes.about} element={<About/>}/>
      <Route path={routes.education} element={<Education/>}/>
    </Routes>
    
    </>
  )
}

export default App
