import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function CartOverview() {
  const { cart } = useSelector((state) => state.cart)

  const totalQuantity = cart.reduce((acc, item) => {
    return acc + item.quantity
  }, 0)

  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.totalPrice
  }, 0)

  if (!totalQuantity) return null

  return (
    <div className='bg-stone-800 text-stone-200 uppercase px-4 py-4 sm:px-6 sm:py-6 flex justify-between'>
      <p className='font-semibold text-stone-300 space-x-4 sm:space-x-6 text-sm md:text-base'>
        <span>{totalQuantity} pizzas</span>
        <span>${totalPrice}</span>
      </p>
      <Link to='cart'>Open cart &rarr;</Link>
    </div>
  )
}

export default CartOverview
