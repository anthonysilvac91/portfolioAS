import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Routes, Route } from 'react-router'
import { routes } from './Utils/routes'
import Home from './Components/Home/Home'
import Project from './Components/Project/Project'

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path={routes.home} element={<Home/>}/>
      <Route path={routes.project} element={<Project/>}/>
    </Routes>
    
    </>
  )
}

export default App
