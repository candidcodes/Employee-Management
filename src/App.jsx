import React, { useContext, useEffect, useState } from "react";
import Login from "./Components/Auth/Login";
import Dashboard from "./Components/EmployeeDashboard/Dashboard";
import AdminDashboard from "./Components/EmployeeDashboard/AddTask";
import { UserContext } from "./Context/AuthContext";
import { setLocalStorage } from "./lib/LocalStorage";
import AdminAppRouter from "./Routes/AdminAppRouter";

const App = () => {

  const { user, setUser, saveUser, setSaveUser, ad, emps } = useContext(UserContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  const handleCred = (email, password) => {
    // Check for admin match
    for (const obj of ad) {
      if (email === obj.email && password === obj.password) {
        setUser('admin');
        setSaveUser(obj)
        localStorage.setItem('isLoggedIn', true)
        localStorage.setItem('role', 'admin')
        localStorage.setItem('user', JSON.stringify(obj))
        return true; // Exit once a match is found
      }
    }

    // Check for employee match
    for (const emp of emps) {
      if (email === emp.email && password === emp.password) {
        setUser('employee');
        setSaveUser(emp)

        localStorage.setItem('isLoggedIn', true)
        localStorage.setItem('role', 'employee')
        localStorage.setItem('user', JSON.stringify(emp))

        return true; // Exit once a match is found
      }
    }

    // If no match is found, reset state
    setUser();
    alert("Invalid Credentials");
    localStorage.setItem('isLoggedIn', false)
    localStorage.removeItem('role')
    localStorage.removeItem('user')
    return false
  };


  return (
    <>
      
      {!isLoggedIn && <Login handleCred={handleCred} logged={setIsLoggedIn}/>}
      {isLoggedIn && user === 'admin' && <AdminAppRouter logged={setIsLoggedIn}/>}
      {isLoggedIn && user === 'employee' && <Dashboard logged={setIsLoggedIn}/>}
    </>
  );
};

export default App;