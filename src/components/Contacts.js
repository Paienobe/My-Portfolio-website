import React from 'react'
import Form from '../components/Form'

const Contacts = () => {
  return (
    <div
      id='contacts'
      className='bg-zinc-900 border-t-2 border-t-black px-4  lg:w-4/5 lg:ml-auto text-center py-8'
    >
      <h1 className='uppercase font-bold text-lg opacity-100 underline underline-offset-4 decoration-purple-600 decoration-4'>
        contact me
      </h1>
      <p className='my-4 text-purple-100 opacity-70 sm:w-2/3 m-auto lg:w-1/3'>
        I'm available for full time jobs and freelance opportunities. Feel free
        to send me a message.
      </p>

      <Form />
    </div>
  )
}

export default Contacts
