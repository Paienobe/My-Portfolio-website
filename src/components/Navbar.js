import React from 'react'
import menuIcon from '../assets/menu-bars.png'
import closeIcon from '../assets/icons8-close.svg'
import { useGlobalContext } from '../context'
import { FaLinkedin, FaGithub, FaTwitter, FaWhatsapp } from 'react-icons/fa'

const Navbar = () => {
  const { showMenu, openMenu, closeMenu } = useGlobalContext()
  return (
    <nav className='navbar p-4 flex items-center justify-between text-white font-Spart absolute left-0 right-0 sm:px-24 lg:fixed lg:bg-zinc-700 lg:w-1/5 lg:px-4 lg:h-screen'>
      <p className='logo text-2xl font-semibold lg:absolute lg:top-0'>
        <span className='text-purple-600 text-3xl'>P</span>aienobe
      </p>

      {showMenu ? (
        <div className='menu-items absolute w-full bg-zinc-500 p-4 left-0 right-0 top-0 backdrop-blur-sm bg-opacity-30 h-screen z-10 flex flex-col justify-center items-center lg:backdrop-blur-0 lg:h-auto lg:static lg:bg-transparent '>
          <button className='close-btn' onClick={closeMenu}>
            <img
              src={closeIcon}
              alt='close-btn'
              className='absolute right-2 top-2 w-8 hover:scale-125 sm:right-24 sm:top-4 lg:hidden'
            />
          </button>

          <a
            href='#intro'
            className='font-semibold text-xl py-6 hover:text-purple-500 hover:scale-125'
            onClick={closeMenu}
          >
            Intro
          </a>
          <a
            href='#about'
            className='font-semibold text-xl py-6 hover:text-purple-500 hover:scale-125'
            onClick={closeMenu}
          >
            About
          </a>
          <a
            href='#projects'
            className='font-semibold text-xl py-6 hover:text-purple-500 hover:scale-125'
            onClick={closeMenu}
          >
            Projects
          </a>
          <a
            href='#contacts'
            className='font-semibold text-xl py-6 hover:text-purple-500 hover:scale-125'
            onClick={closeMenu}
          >
            Contacts
          </a>
          <div className='socials flex items-center mt-20'>
            <a href='https://github.com/Paienobe' target='_blank'>
              <FaGithub size={30} className='mx-2 hover:text-purple-500' />
            </a>
            <a
              href='linkedin.com/in/progress-aienobe-a93ba3221/'
              target='_blank'
            >
              <FaLinkedin size={30} className='mx-2 hover:text-purple-500' />
            </a>
            <a href='https://twitter.com/paienobe' target='_blank'>
              <FaTwitter size={30} className='mx-2 hover:text-purple-500' />
            </a>
            <a href='https://wa.link/ub6ld2' target='_blank'>
              <FaWhatsapp size={30} className='mx-2 hover:text-purple-500' />
            </a>
          </div>
        </div>
      ) : (
        ''
      )}

      <button className='menu' onClick={openMenu}>
        <img
          src={menuIcon}
          alt='menu-icon'
          className='w-7 hover:scale-125 lg:hidden '
        />
      </button>
    </nav>
  )
}

export default Navbar
