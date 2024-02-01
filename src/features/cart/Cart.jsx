import { Link } from 'react-router-dom'
import LinkButton from '../../ui/LinkButton.jsx'
import CartItem from './CartItem.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from './cartSlice.js'
import EmptyCart from './EmptyCart.jsx'

function Cart() {
  const cart = useSelector((state) => state.cart.cart)
  const username = useSelector((state) => state.user.username)
  const dispatch = useDispatch()

  const isEmpty = cart.length === 0

  const handleClearCart = () => dispatch(clearCart())

  if (isEmpty) return <EmptyCart />

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

        <button onClick={handleClearCart} type='primary'>
          Clear cart
        </button>
      </div>
    </div>
  )
}

export default Cart
