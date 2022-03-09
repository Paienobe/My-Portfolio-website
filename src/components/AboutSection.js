import React from 'react'

// my picture
import myPicture from '../assets/portfolio-pic.png'

// reveal effects
import { Zoom } from 'react-awesome-reveal'

// skill data
import { skills } from '../data'

const AboutSection = () => {
  return (
    <div
      className='about-me bg-zinc-800 px-4 py-8 border-t-black border-t-2 lg:w-4/5 lg:ml-auto'
      id='about'
    >
      <h2 className='uppercase text-xl font-bold text-center underline underline-offset-4 decoration-purple-600 decoration-4'>
        ABOUT ME
      </h2>

      <div className='content text-center mt-8 flex flex-col items-center sm:px-24 lg:flex-row lg:justify-between lg:px-12'>
        <div className='image-holder mb-8 w-3/4 lg:w-1/3'>
          <img src={myPicture} alt='my-picture' />
        </div>

        <div className='info lg:w-2/4 lg:ml-auto'>
          <div className='about-text text-purple-100 opacity-70'>
            <p className='py-2'>
              I'm Progress Aienobe, a self taught Frontend Engineer specializing
              in building responsive websites and web applications.
            </p>
            <p className='py-2'>
              I'm passionate about building beautiful and functional
              applications. I build projects using HTML, CSS, JavaScript, React
              etc. I'm currently in a degree program studying Mathematics.
            </p>
            <p className='py-2'>
              I'm dilligent and always try my hardest to deliver on tasks.
            </p>
          </div>

          <div className='skills'>
            <h3 className='text-white font-bold text-lg opacity-100 underline underline-offset-4 decoration-purple-600 decoration-4 mt-4'>
              MY SKILLS
            </h3>
            <Zoom>
              <div className='skill-container my-4  flex flex-wrap justify-center sm:px-24 lg:px-4'>
                {skills.map((skill, index) => {
                  const { name, image } = skill
                  return (
                    <div
                      className='skill flex flex-col items-center my-2 mx-2'
                      key={index}
                    >
                      <img src={image} alt='html-logo' className='w-16' />
                      <p className='text-xs font-medium text-purple-100 opacity-70 uppercase'>
                        {name}
                      </p>
                    </div>
                  )
                })}
              </div>
            </Zoom>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
