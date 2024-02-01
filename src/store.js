import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/user/userSlice.js'
import cartReduсer from './features/cart/cartSlice.js'

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReduсer
  }
})

export default store
