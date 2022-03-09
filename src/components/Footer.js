import React from 'react'
// react-icons
import { MdMarkEmailUnread, MdPhone } from 'react-icons/md'
import { FaMapMarkerAlt } from 'react-icons/fa'

import { useGlobalContext } from '../context'

const Footer = () => {
  const { currentYear } = useGlobalContext()
  return (
    <footer className='lg:w-4/5 lg:ml-auto relative border-t-2 border-t-black'>
      <div className='footer-content p-4 py-8 bg-zinc-800 '>
        <p className='logo text-2xl font-semibold  lg:top-0 mb-4'>
          <span className='text-purple-600 text-3xl'>P</span>aienobe
        </p>
        <div className='flex items-center mb-2 '>
          <FaMapMarkerAlt size={35} className='text-purple-600' />
          <p className='ml-3 text-purple-100 opacity-70'>
            Warri, Delta State, Nigeria.
          </p>
        </div>
        <div className='flex items-center mb-2 '>
          <MdMarkEmailUnread size={35} className='text-purple-600' />
          <p className='ml-3 text-purple-100 opacity-70'>paienobe@gmail.com</p>
        </div>
        <div className='flex items-center mb-2 '>
          <MdPhone size={35} className='text-purple-600' />
          <p className='ml-3 text-purple-100 opacity-70'>+234-703-507-6111</p>
        </div>
        <hr className='my-4 opacity-70 border-purple-100' />
        <p className='text-center'>Copyright &copy; {currentYear}</p>
      </div>
    </footer>
  )
}

export default Footer
