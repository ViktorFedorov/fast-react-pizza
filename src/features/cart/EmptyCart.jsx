import LinkButton from '../../ui/LinkButton.jsx'

function EmptyCart() {
  return (
    <div className='w-60 m-auto mt-40 items-center text-center'>
      <p className='font-bold mb-3 text-xl'>Cart is empty =(</p>
      <LinkButton to='/menu'>&larr; Back to menu</LinkButton>
    </div>
  )
}

export default EmptyCart
