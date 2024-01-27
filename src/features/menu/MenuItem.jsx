import { formatCurrency } from '../../utils/helpers.js'
import Button from '../../ui/Button.jsx'

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza

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
              <Button type='small'>add to cart</Button>
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
