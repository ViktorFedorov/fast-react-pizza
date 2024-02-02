import { formatCurrency } from '../../utils/helpers.js'
import Button from '../../ui/Button.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, deleteItem } from '../cart/cartSlice.js'
import DeleteItem from '../cart/DeleteItem.jsx'
import UpdateItemQuantity from '../cart/UpdateItemQuantity.jsx'

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza
  const dispatch = useDispatch()
  const { cart } = useSelector((state) => state.cart)

  const isAddedToCart = cart.some((item) => item.pizzaId === id)
  const quantity = cart.find((item) => item.pizzaId === id)?.quantity ?? 0

  const handleAddToCart = () => {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1
    }
    dispatch(addItem(newItem))
  }

  return (
    <li className='h-24 flex gap-4 py-2'>
      <img src={imageUrl} alt={name} className={soldOut ? 'grayscale' : ''} />
      <div className='flex flex-col grow'>
        <p className='font-medium'>{name}</p>
        <p className='text-sm text-stone-500 capitalize'>
          {ingredients.join(', ')}
        </p>
        <div className='mt-auto'>
          {!soldOut ? (
            <div className='flex items-center justify-between'>
              <p className='text-sm font-bold'>{formatCurrency(unitPrice)}</p>
              {isAddedToCart ? (
                <div className='flex gap-10'>
                  <UpdateItemQuantity itemId={id} quantity={quantity} />
                  <DeleteItem pizzaId={id} />
                </div>
              ) : (
                <Button onClick={handleAddToCart} type='small'>
                  add to cart
                </Button>
              )}
            </div>
          ) : (
            <p className='text-sm font-bold text-stone-500'>Sold out</p>
          )}
        </div>
      </div>
    </li>
  )
}

export default MenuItem
