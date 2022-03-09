import React from 'react'

import AboutSection from '../components/AboutSection'
import ProjectsContainer from '../components/ProjectsContainer'
import Contacts from '../components/Contacts'
import Footer from '../components/Footer'
import IntroContent from './IntroContent'

const Home = () => {
  return (
    <div className='h-screen bg-zinc-900 text-white font-Spartan' id='intro'>
      <IntroContent />

      <AboutSection />

      <ProjectsContainer />

      <Contacts />

      <Footer />
    </div>
  )
}

export default Home
