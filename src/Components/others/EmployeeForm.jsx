import React from 'react';

const EmployeeForm = () => {
    return (
        <div className="w-full bg-[#0f0f0f] mt-10 px-12 py-10 rounded-lg ">
            <h1 className="text-gray-100 text-3xl mb-8 font-semibold text-center">Add emloyee</h1>
          <form className="flex justify-center">
            <div className="text-gray-200 w-[45%]">
              <h1>Employee Name</h1>
              <input
                type="text"
                className="outline-none bg-transparent border-2 border-emerald-900 rounded-lg p-2 w-full mb-4 mt-1 placeholder:text-gray-500"
                placeholder="First name"
              />
              <h1>Add Date</h1>
              <input
                type="date"
                className="outline-none bg-transparent border-2 border-emerald-900 rounded-lg p-2 w-full mb-4 mt-1 text-gray-500"
              />
              <h1>Email</h1>
              <input
                type="text"
                className="outline-none bg-transparent border-2 border-emerald-900 rounded-lg p-2 w-full mb-4 mt-1 text-gray-500"
                placeholder="Enter Email"
              />
              <h1>Password</h1>
              <input
                type="text"
                className="outline-none bg-transparent border-2 border-emerald-900 rounded-lg p-2 w-full mb-4 mt-1 text-gray-500"
                placeholder="Create Password"
              />
              <button type="button" className="w-full bg-emerald-800 py-3 rounded-lg">
                Submit
              </button>
            </div>
          </form>
        </div>
      );
      
      
};

export default EmployeeForm;
