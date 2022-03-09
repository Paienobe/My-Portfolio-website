import React from 'react'

const Form = () => {
  return (
    <form
      action='https://formsubmit.co/paienobe@gmail.com'
      method='POST'
      className='text-zinc-100 sm:w-2/3 m-auto lg:flex lg:flex-wrap lg:justify-between'
    >
      <input
        type='text'
        name='sender_name'
        placeholder='Full Name'
        className='p-2 bg-zinc-700 w-full my-2 rounded-xl border-2 border-zinc-600'
        required
      />
      <input
        type='email'
        name='sender_email'
        placeholder='Email'
        className='p-2 bg-zinc-700 w-full my-2 rounded-xl border-2 border-zinc-600 lg:w-7/12 '
        required
      />
      <input
        type='number'
        name='sender_number'
        placeholder='Phone Number'
        className='p-2 bg-zinc-700 w-full my-2 rounded-xl border-2 border-zinc-600 lg:w-2/5 '
        required
      />
      <textarea
        name='sender_message'
        cols='30'
        rows='10'
        placeholder='Message'
        className='p-2 bg-zinc-700 w-full my-2 rounded-xl border-2 border-zinc-600'
        required
      ></textarea>
      <button
        type='submit'
        className='bg-purple-600 w-full py-3 font-bold rounded-xl hover:bg-purple-700 lg:w-1/3'
      >
        SEND
      </button>
    </form>
  )
}

export default Form
