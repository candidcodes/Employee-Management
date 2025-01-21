import React, { useState } from "react";

const login = ({ handleCred, logged }) => {

        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')

        const handleSubmit = (e) => {
            e.preventDefault();


            handleCred(email, password)

            setEmail('')
            setPassword('')

            logged(true)


        };

  return (
    <>
      <div className="flex justify-center items-center h-screen w-screen">
        <div className="border-2 border-emerald-900">
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
            className="flex flex-col p-20"
          >
            <input
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              value={email}
              required
              className="mb-3 rounded-full px-5 py-2 outline-none border-2 border-emerald-900 bg-transparent text-gray-100 placeholder:text-gray-600"
              placeholder="Email"
              type="email"
            />
            <input
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              value={password}
              required
              className="mb-3 rounded-full px-5 py-2 outline-none border-2 border-emerald-900 bg-transparent text-gray-100 placeholder:text-gray-600"
              placeholder="Password"
              type="password"
            />
            <button className="px-3 py-2 bg-emerald-900 rounded-full text-gray-200">
              login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default login;
