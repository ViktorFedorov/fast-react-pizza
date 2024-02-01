import CreateUser from '../features/user/CreateUser.jsx'
import { useSelector } from 'react-redux'
import LinkButton from './LinkButton.jsx'

function Home() {
  const username = useSelector((state) => state.user.username)

  return (
    <div className='px-4 my-10 sm:my-16 text-center'>
      <h1 className='text-xl text-stone-700 font-semibold mb-8 md:text-3xl'>
        The best pizza.
        <br />
        <span className='text-yellow-500'>
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {username === '' ? (
        <CreateUser />
      ) : (
        <LinkButton to={'menu'}>Menu</LinkButton>
      )}
    </div>
  )
}

export default Home
