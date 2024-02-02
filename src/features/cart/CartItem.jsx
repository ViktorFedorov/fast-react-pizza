import { formatCurrency } from '../../utils/helpers.js'
import DeleteItem from './DeleteItem.jsx'
import UpdateItemQuantity from './UpdateItemQuantity.jsx'

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item

  return (
    <li className='py-3 flex items-center gap-10'>
      <p className='mb-2 grow'>
        {quantity}&times; {name}
      </p>
      <p className='text-sm font-bold'>{formatCurrency(totalPrice)}</p>
      <div className='flex justify-between items-center gap-10'>
        <UpdateItemQuantity itemId={pizzaId} quantity={quantity} />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  )
}

export default CartItem
