import React from 'react'
import Header from '../others/Header'
import Form from '../others/form'

const AdminDashboard = () => {
  return <div className='p-12 bg-[#1C1c1c] min-h-screen'>
    <Header/>
    <div className="w-full bg-[#0f0f0f] mt-10 px-12 py-10 rounded-lg">
      <h1 className="text-gray-100 text-3xl font-semibold">Task List</h1>
    </div>
  </div>
}

export default AdminDashboard