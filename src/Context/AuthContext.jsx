import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage, employee, admin } from '../lib/LocalStorage';

export const UserContext = createContext();

const AuthContext = ({children}) => {

  const[user, setUser] = useState(null)
  const[saveUser, setSaveUser] = useState(null)
  let { ad = [], emps = [] } = getLocalStorage();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  useEffect(() => {

    const isLoggedIn = localStorage.getItem('isLoggedIn')
    const userRole = localStorage.getItem('role')
    const loggedUser = JSON.parse(localStorage.getItem('user'))

    if(isLoggedIn && userRole && loggedUser){
      setIsLoggedIn(true)
      setUser(userRole)
      setSaveUser(loggedUser)
    }

    setIsAuthLoading(false)
    
  }, [] )

  if(!ad && !emps){
    ad = admin;
    emps = employee;
    setLocalStorage()
  }
  return (
    <UserContext.Provider value={{user, setUser, saveUser, setSaveUser, ad, emps, isLoggedIn, setIsLoggedIn, isAuthLoading}}>
      <div>{children}</div>
    </UserContext.Provider>
  )
}

export default AuthContext