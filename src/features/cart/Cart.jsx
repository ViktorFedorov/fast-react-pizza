import { Link } from 'react-router-dom'
import LinkButton from '../../ui/LinkButton.jsx'
import CartItem from './CartItem.jsx'
import { useSelector } from 'react-redux'

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15
  }
]

function Cart() {
  const cart = fakeCart
  const username = useSelector((state) => state.user.username)

  return (
    <div className='px-4 py-3'>
      <LinkButton to='/menu'>&larr; Back to menu</LinkButton>

      <h2 className='mt-7 font-semibold text-xl'>Your cart, {username}</h2>

      <ul className='divide-y divide-stone-200 border-b mt-3'>
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className='text-tomato font-bold mt-6 flex justify-between'>
        <Link
          to='/order/new'
          className='bg-yellow-400 px-4 py-3 md:px-6 rounded-full uppercase text-stone-800 hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring font-semibold'
        >
          Order pizzas
        </Link>
        <button type='primary'>Clear cart</button>
      </div>
    </div>
  )
}

export default Cart
