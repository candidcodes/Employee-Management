import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage, employee, admin } from '../lib/LocalStorage';

export const UserContext = createContext();

const AuthContext = ({children}) => {

  const[user, setUser] = useState(null)
  const[saveUser, setSaveUser] = useState(null)
  let { ad = [], emps = [] } = getLocalStorage();

  if(!ad && !emps){
    ad = admin;
    emps = employee;
    setLocalStorage()
  }
  return (
    <UserContext.Provider value={{user, setUser, saveUser, setSaveUser, ad, emps}}>
      <div>{children}</div>
    </UserContext.Provider>
  )
}

export default AuthContext