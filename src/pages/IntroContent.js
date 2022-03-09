import React from 'react'

import illustration from '../assets/Programming-amico.png'

// reveal effects
import { Zoom } from 'react-awesome-reveal'

const IntroContent = () => {
  return (
    <div className='head-content lg:w-4/5 lg:ml-auto h-full'>
      <div className='text-4xl font-bold h-full px-4 flex flex-col justify-center items-center sm:px-24 lg:flex-row'>
        <div className='lg:w-1/2'>
          <Zoom>
            <h1 className=''>
              Hi, I'm <span className='text-purple-600'>Progress </span>
              <span className='text-purple-600'>Aienobe</span>.
            </h1>

            <h2 className='font-normal text-xl'>Frontend Web Developer</h2>
            <p className='font-normal text-base py-3 text-purple-100 opacity-70'>
              I'm a Frontend Engineer based in Delta State, Nigeria. I love
              programming & solving problems through code.
            </p>
            <a
              href='#contacts'
              className='duration-500 bg-purple-700 font-normal text-base px-2 py-3 rounded-full hover:bg-purple-900'
            >
              Contact Me
            </a>
          </Zoom>
        </div>

        <div className='hidden lg:block w-2/3 lg:w-1/2'>
          <img src={illustration} alt='coding-illustration' />
        </div>
      </div>
    </div>
  )
}

export default IntroContent
