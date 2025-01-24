import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage, employee, admin } from '../lib/LocalStorage';

export const UserContext = createContext();

const AuthContext = ({children}) => {

  const[user, setUser] = useState(null)
  const[saveUser, setSaveUser] = useState(null)
  let { ad = [], emps = [] } = getLocalStorage();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if(!ad && !emps){
    ad = admin;
    emps = employee;
    setLocalStorage()
  }
  return (
    <UserContext.Provider value={{user, setUser, saveUser, setSaveUser, ad, emps, isLoggedIn, setIsLoggedIn}}>
      <div>{children}</div>
    </UserContext.Provider>
  )
}

export default AuthContext