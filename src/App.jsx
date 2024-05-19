import React from 'react'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import About from './components/About'
import Tech from './components/Tech'
import WorkExp from './components/WorkExp'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
   <>
      <div class="relative h-full w-full bg-slate-950 pt-4 z-10 px-4 lg:px-8">
      <div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_600px_at_50%_300px,#3e3e3e,transparent)] z-[-1]">

      </div>
      <NavBar/>
      <div className='w-full h-full overflow-x-hidden'>
      <HomePage/>
      <About/>
      <Tech/>
      <WorkExp/>
      <Project/>
      <Contact/>
      </div>
      </div> 
      <Footer/>
   </>
  )
}

export default App