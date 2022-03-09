import React from 'react'
// projects
import { projectDetails } from '../data'
// reveal effects
import { Zoom } from 'react-awesome-reveal'

const ProjectsContainer = () => {
  return (
    <div id='projects' className='bg-zinc-800 px-4 py-8 lg:w-4/5 lg:ml-auto'>
      <h2 className='uppercase text-xl font-bold text-center underline underline-offset-4 decoration-purple-600 decoration-4'>
        projects
      </h2>
      <p className='text-center text-purple-100 opacity-70 py-4'>
        View some of my projects
      </p>
      <div className='projects-container my-8 flex flex-col items-center flex-wrap sm:flex-row sm:justify-around lg:justify-center lg:items-stretch'>
        <Zoom>
          {projectDetails.map((project, index) => {
            const { name, description, image, link, code } = project
            return (
              <div
                className='project-item bg-zinc-700 rounded-xl overflow-hidden my-6 w-80 lg:mx-3 hover:scale-105'
                key={index}
              >
                <div className='image-container'>
                  <img
                    src={image}
                    alt='project-screenshot'
                    className='w-full'
                  />
                </div>

                <div className='project-description p-4'>
                  <h3 className='text-purple-600 font-black text-xl'>{name}</h3>
                  <p className='text-purple-100 opacity-70'>{description}</p>

                  <div className='buttons my-3'>
                    <a
                      href={link}
                      target='_blank'
                      className='p-2 bg-purple-600 text-xs rounded-xl uppercase mr-2 hover:bg-purple-700'
                    >
                      view site
                    </a>
                    <a
                      href={code}
                      target='_blank'
                      className='p-2 bg-purple-600 text-xs rounded-xl uppercase mr-2 hover:bg-purple-700'
                    >
                      code
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </Zoom>
      </div>
    </div>
  )
}

export default ProjectsContainer
