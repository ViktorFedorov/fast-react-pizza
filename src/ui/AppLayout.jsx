import React from 'react'
import Header from './Header.jsx'
import CartOverview from '../features/cart/CartOverview.jsx'
import { Outlet, useNavigation } from 'react-router-dom'
import Loader from './Loader.jsx'
import { useSelector } from 'react-redux'

const AppLayout = () => {
  const navigation = useNavigation()
  const isLoading = navigation.state === 'loading'
  const user = useSelector((store) => store.user)

  console.log(user)

  return (
    <div className='grid grid-rows-[auto_1fr_auto] h-screen font-mono'>
      {isLoading && <Loader />}
      <Header />

      <div>
        <main className='max-w-3xl mx-auto'>
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  )
}

export default AppLayout
