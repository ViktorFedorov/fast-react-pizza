import { formatCurrency } from '../../utils/helpers.js'

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item

  return (
    <li className='border-b pb-2'>
      <div className='flex items-baseline justify-between space-y-5'>
        <p>
          <span className='font-bold'>{quantity}&times;</span> {name}
        </p>
        <p className='font-bold'> {formatCurrency(totalPrice)}</p>
      </div>
    </li>
  )
}

export default OrderItem
