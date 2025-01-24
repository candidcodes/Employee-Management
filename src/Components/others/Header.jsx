import React, { useContext } from 'react'
import { UserContext } from '../../Context/AuthContext'
import { NavLink } from 'react-router-dom'

const Header = ({ logged }) => {
  const { saveUser, user } = useContext(UserContext)
  console.log(saveUser)
  const logout = () => {
    localStorage.setItem('isLoggedIn', false)
    localStorage.removeItem('role')
    localStorage.removeItem('user')
    logged(false)
  }
  return (<>
    <div className='flex justify-between items-end'>
        <h1 className='text-2xl font-bold text-red-100'>Hi, <br/><span className='text-4xl font-bold text-red-100'>{saveUser.name}</span></h1>
        <div className='flex gap-5'>
          {
            user == 'admin' && 
            <div className='flex gap-8'>
              <NavLink to="/" className={({isActive}) =>  isActive ? `text-orange-400 py-3` : `text-gray-200 py-3` }>Task List</NavLink>
              <NavLink to="/add-task" className={({isActive}) =>  isActive ? `text-orange-400 py-3` : `text-gray-200 py-3` }>Add task</NavLink>
              <NavLink to="/add-employee" className={({isActive}) =>  isActive ? `text-orange-400 py-3` : `text-gray-200 py-3` }>Add Employee</NavLink>
            </div>
          }
          <button onClick={logout} className='p-3 bg-red-600 text-gray-100 rounded-sm'>Log out</button>
        </div>
    </div>
  </>
  )
}

export default Header