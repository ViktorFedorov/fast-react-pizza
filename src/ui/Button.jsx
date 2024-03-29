import React from 'react'

const Button = (props) => {
  const { children, disabled, type, onClick } = props
  const styles = {
    base: 'bg-yellow-400 uppercase font-semibold text-stone-800 rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring disabled:cursor-not-allowed ',
    primary: 'px-4 py-2',
    small: 'px-6 py-1 text-xs'
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={
        type === 'primary'
          ? `${styles.base} ${styles.primary}`
          : `${styles.base} ${styles.small}`
      }
    >
      {children}
    </button>
  )
}

export default Button
