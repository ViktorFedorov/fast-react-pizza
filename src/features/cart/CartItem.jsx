import { formatCurrency } from '../../utils/helpers.js'
import Button from '../../ui/Button.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseItemQuantity } from './cartSlice'

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item
  // const dispatch = useDispatch()
  // const cart = useSelector((state) => state.cart.cart)
  //
  // console.log(cart)

  return (
    <li className='py-3'>
      <p className='mb-2'>
        {quantity}&times; {name}
      </p>
      <div className='flex justify-between items-center'>
        <p className='text-sm font-bold'>{formatCurrency(totalPrice)}</p>
        <Button
          onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
          type='small'
        >
          Delete
        </Button>
      </div>
    </li>
  )
}

export default CartItem
