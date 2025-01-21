import React, { useContext } from 'react'
import { UserContext } from '../../Context/AuthContext'

const Header = ({ logged }) => {
  const { saveUser } = useContext(UserContext)

  const logout = () => {
    localStorage.setItem('isLoggedIn', false)
    localStorage.removeItem('role')
    localStorage.removeItem('user')
    logged(false)
  }

  return (<>
    <div className='flex justify-between items-end'>
        <h1 className='text-2xl font-bold text-red-100'>Hi, <br/><span className='text-4xl font-bold text-red-100'>{saveUser.name}</span></h1>
        <button onClick={logout} className='p-3 bg-red-600 text-gray-100 rounded-sm'>Log out</button>
    </div>
  </>
  )
}

export default Header