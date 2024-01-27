import { useState } from 'react'
import {
  Form,
  Navigate,
  redirect,
  useActionData,
  useNavigation
} from 'react-router-dom'
import { createOrder } from '../../services/apiRestaurant.js'
import Button from '../../ui/Button.jsx'

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  )

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

function CreateOrder() {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  const formErrors = useActionData()

  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart

  return (
    <div className='py-6 px-4'>
      <h2 className='text-xl font-semibold mb-8'>Ready to order? Let's go!</h2>

      <Form method='POST'>
        <div className='group'>
          <label className='w-40'>First&nbsp;Name</label>
          <input type='text' name='customer' required className='input' />
        </div>

        <div className='group'>
          <label className='w-40'>Phone&nbsp;number</label>
          <input type='tel' name='phone' required className='input' />
          {/*{formErrors && <p>{formErrors.phone}</p>}*/}
          <p className='text-tomato bg-red-50 rounded-full px-3 text-xs'>
            error
          </p>
        </div>

        <div className='group'>
          <label className='w-40'>Address</label>
          <input type='text' name='address' required className='input' />
        </div>

        <div className='mb-12 space-x-2 flex'>
          <input
            type='checkbox'
            name='priority'
            id='priority'
            className='w-6 h-6 accent-yellow-400'
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor='priority'>Want to yo give your order priority?</label>
        </div>

        <div className='mt-6'>
          <input type='hidden' name='cart' value={JSON.stringify(cart)} />
          <Button disabled={isSubmitting} type='primary'>
            {isSubmitting ? 'Placing order' : 'Order now'}
          </Button>
        </div>
      </Form>
    </div>
  )
}

export const action = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)

  const order = {
    ...data,
    priority: !!data.priority,
    cart: JSON.parse(data.cart)
  }

  const errors = {}

  if (!isValidPhone(order.phone)) {
    errors.phone = 'Please give us your correct phone number'
  }

  if (Object.keys(errors).length > 0) return errors

  // const newOrder = await createOrder(order)
  // console.log(newOrder)
  //
  // return redirect(`/order/${newOrder.id}`)
}

export default CreateOrder
