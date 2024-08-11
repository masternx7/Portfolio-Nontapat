import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import './App.css'
import Skills from './components/Skills/Skills'
import Project from './components/Work/Project'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Navbar />
      <div className='container'>
        <Hero />
        <Skills />
        <Project />
      </div>
      <Contact />
      <Footer />
    </>
  )
}

export default App
