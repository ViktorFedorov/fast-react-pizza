import React from 'react'

const Button = ({ children, disabled }) => {
  return (
    <button
      disabled={disabled}
      className='bg-yellow-400 uppercase font-semibold text-stone-800 px-4
            py-3 rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring
            disabled:cursor-not-allowed md:px-6'
    >
      {children}
    </button>
  )
}

export default Button
