import React, { useContext, useState } from "react";
import { UserContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const login = () => {
      const { user, setUser, saveUser, setSaveUser, ad, emps, isLoggedIn, setIsLoggedIn } = useContext(UserContext);
      const navigate = useNavigate()

        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')

        const handleCred = (email, password) => {
          // Check for admin match
          for (const obj of ad) {
            if (email === obj.email && password === obj.password) {
              setUser('admin');
              setSaveUser(obj)
              localStorage.setItem('isLoggedIn', true)
              localStorage.setItem('role', 'admin')
              localStorage.setItem('user', JSON.stringify(obj))
              return 'admin'; // Exit once a match is found
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
              return 'employee'; // Exit once a match is found
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

        const handleSubmit = (e) => {
            e.preventDefault();


            const a = handleCred(email, password)

            setEmail('')
            setPassword('')

            if(a == 'employee'){
              setIsLoggedIn(true)
              navigate('/employee')
            }else if(a == 'admin'){
              setIsLoggedIn(true)
              navigate('/admin')
            }
            else{
              setIsLoggedIn(false)
            }

        };

  return (
    <>
      <div className="flex justify-center items-center h-screen w-screen">
        
        <div className="border-2 border-emerald-900 bg-emerald-100 rounded-md p-1 py-20" >
          <h1 className="text-center text-emerald-600 text-4xl font-bold">LogIn</h1>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
            className="flex flex-col p-7"
          >
            <input
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              value={email}
              required
              className="mb-3 rounded-full px-5 py-2 outline-none border border-emerald-900 bg-transparent text-gray-900 placeholder:text-gray-600 w-80"
              placeholder="Email"
              type="email"
            />
            <input
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              value={password}
              required
              className="mb-3 rounded-full px-5 py-2 outline-none border border-emerald-900 bg-transparent text-gray-900 placeholder:text-gray-600 w-80"
              placeholder="Password"
              type="password"
            />
            <button className="px-3 py-2 bg-emerald-900 rounded-full text-gray-200 mt-8">
              login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default login;
