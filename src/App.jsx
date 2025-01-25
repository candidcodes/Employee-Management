import React, { useContext, useEffect, useState } from "react";
import Login from "./Components/Auth/Login";
import Dashboard from "./Components/EmployeeDashboard/Dashboard";
import AdminDashboard from "./Components/EmployeeDashboard/AddTask";
import { UserContext } from "./Context/AuthContext";
import { setLocalStorage } from "./lib/LocalStorage";
import AdminAppRouter from "./Routes/AdminAppRouter";

const App = () => {

  const { user, setUser, saveUser, setSaveUser, ad, emps, isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  useEffect(() => {

    const isLoggedIn = localStorage.getItem('isLoggedIn')
    const userRole = localStorage.getItem('role')
    const loggedUser = JSON.parse(localStorage.getItem('user'))

    if(isLoggedIn && userRole && loggedUser){
      setIsLoggedIn(true)
      setUser(userRole)
      setSaveUser(loggedUser)
    }
    
  }, [] )

  // setLocalStorage();

  


  return (
    <>
      <AdminAppRouter/>

    </>
  );
};

export default App;