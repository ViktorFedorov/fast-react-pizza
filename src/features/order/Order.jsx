// Test ID: IIDSAT

import {
  calcMinutesLeft,
  formatCurrency,
  formatDate
} from '../../utils/helpers'
import { useLoaderData } from 'react-router-dom'
import { getOrder } from '../../services/apiRestaurant.js'
import OrderItem from './OrderItem.jsx'

function Order() {
  const order = useLoaderData()

  // console.log(order)

  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart
  } = order
  const deliveryIn = calcMinutesLeft(estimatedDelivery)

  return (
    <div className='px-3 py-6'>
      <div className='flex justify-between'>
        <h2 className='text-lg font-bold'>Order #{id} status</h2>

        <div className='space-x-2'>
          {priority && (
            <span className='bg-tomato text-stone-100 uppercase px-2 rounded-full text-sm'>
              Priority
            </span>
          )}
          <span className='bg-green-600 text-stone-100 uppercase px-2 rounded-full text-sm'>
            {' '}
            {status} order
          </span>
        </div>
      </div>

      <div className='px-6 py-8 mt-10 bg-stone-200 flex justify-between items-center'>
        <p className='font-bold'>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : 'Order should have arrived'}
        </p>
        <p className='text-xs font-semibold text-stone-500'>
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className='px-6 mt-6'>
        {cart.map((item) => (
          <OrderItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className='px-6 py-8 mt-10 bg-stone-200 flex flex-col gap-3'>
        <p className='text-xs font-semibold'>
          Price pizza: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className='text-xs font-semibold'>
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className='font-bold'>
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
    </div>
  )
}

export const loader = async ({ params }) => {
  const order = await getOrder(params.orderId)
  return order
}

export default Order
