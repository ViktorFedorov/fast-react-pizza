import React from 'react'
import Button from '../../ui/Button.jsx'
import { useDispatch } from 'react-redux'
import { deleteItem } from './cartSlice.js'

const DeleteItem = (props) => {
  const dispatch = useDispatch()

  return (
    <Button type='small' onClick={() => dispatch(deleteItem(props.pizzaId))}>
      Delete
    </Button>
  )
}

export default DeleteItem
