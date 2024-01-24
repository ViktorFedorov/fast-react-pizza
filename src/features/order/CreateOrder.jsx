import { useState } from 'react'
import {
  Form,
  Navigate,
  redirect,
  useActionData,
  useNavigation
} from 'react-router-dom'
import { createOrder } from '../../services/apiRestaurant.js'

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
    <div>
      <h2>Ready to order? Let's go!</h2>

      <Form method='POST'>
        <div>
          <label>First Name</label>
          <input type='text' name='customer' required />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input type='tel' name='phone' required />
          </div>
          {formErrors && <p>{formErrors.phone}</p>}
        </div>

        <div>
          <label>Address</label>
          <div>
            <input type='text' name='address' required />
          </div>
        </div>

        <div>
          <input
            type='checkbox'
            name='priority'
            id='priority'
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor='priority'>Want to yo give your order priority?</label>
        </div>

        <div>
          <input type='hidden' name='cart' value={JSON.stringify(cart)} />
          <button
            disabled={isSubmitting}
            className='bg-yellow-400 uppercase font-semibold text-stone-800 px-4
            py-3 rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring
            disabled:cursor-not-allowed'
          >
            {isSubmitting ? 'Placing order' : 'Order now'}
          </button>
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