import React from 'react'
import { useDispatch } from 'react-redux'
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice.js'

const UpdateItemQuantity = ({ itemId, quantity }) => {
  const dispatch = useDispatch()

  const handleDecrease = () => {
    dispatch(decreaseItemQuantity(itemId))
  }

  const handleIncrease = () => {
    dispatch(increaseItemQuantity(itemId))
  }

  return (
    <div className='flex gap-2 font-bold text-l items-center'>
      <button
        onClick={handleDecrease}
        className='w-8 h-8 bg-yellow-400 rounded-full'
      >
        -
      </button>
      <div>{quantity}</div>
      <button
        onClick={handleIncrease}
        className='w-8 h-8 bg-yellow-400 rounded-full'
      >
        +
      </button>
    </div>
  )
}

export default UpdateItemQuantity
