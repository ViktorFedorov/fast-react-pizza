import React from 'react'
import { Link } from 'react-router-dom'
import SearchOrder from '../features/order/SearchOrder.jsx'
import Username from './Username.jsx'

const Header = () => {
  return (
    <header className='flex justify-between bg-yellow-500 uppercase px-4 py-3 sm:px-6 border-b border-stone-200'>
      <Link className='tracking-widest' to='/'>
        Fast React Pizza Co.
      </Link>

      <SearchOrder />

      <Username />
    </header>
  )
}

export default Header
