import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchOrder = () => {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!query) return

    navigate(`order/${query}`)
    setQuery('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Search order #'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className='rounded-full px-4 py-2 text-sm bg-yellow-100 placeholder:text-stone-400
        w-40 sm:w-60 sm:focus:w-72 transition-all duration-300 focus:outline-none'
      />
    </form>
  )
}

export default SearchOrder
