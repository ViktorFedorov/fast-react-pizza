import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // payload = newItem

    addItem(state, action) {
      state.cart.push(action.payload)
    },
    deleteItem(state, action) {
      // payload = id

      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload)
    },
    increaseItemQuantity(state, action) {
      // payload = id

      state.cart = state.cart.map((item) => {
        if (item.pizzaId === action.payload) {
          item.quantity++
          item.totalPrice = item.unitPrice * item.quantity
          return item
        }
        return item
      })
    },
    decreaseItemQuantity(state, action) {
      // payload = id

      state.cart = state.cart.map((item) => {
        if (item.pizzaId === action.payload) {
          item.quantity--
          item.totalPrice = item.unitPrice * item.quantity
          return item
        }
        return item
      })
    },
    clearCart(state, action) {
      state.cart = []
    }
  }
})

export const {
  addItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart
} = cartSlice.actions

export default cartSlice.reducer
