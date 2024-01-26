import React from 'react'

const Loader = () => {
  return (
    <div className='bg-stone-800/30 inset-0 opacity-6 z-10 absolute backdrop-blur-sm'>
      <div className='loader relative'></div>
    </div>
  )
}

export default Loader
