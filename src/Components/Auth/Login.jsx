import React, { useState } from "react";

const login = ({ handleCred, logged }) => {

        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')

        const handleSubmit = (e) => {
            e.preventDefault();


            const a = handleCred(email, password)

            setEmail('')
            setPassword('')

            if(a){
              logged(true)
            }else{
              logged(false)
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
