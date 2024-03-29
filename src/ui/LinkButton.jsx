import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const LinkButton = ({ children, to }) => {
  const navigate = useNavigate()

  const classes = 'text-blue-500 hover:text-blue-700 hover:underline text-sm'

  if (to === '-1')
    return (
      <button onClick={() => navigate(-1)} className={classes}>
        {children}
      </button>
    )
  return (
    <Link to={to} className={classes}>
      {children}
    </Link>
  )
}

export default LinkButton
