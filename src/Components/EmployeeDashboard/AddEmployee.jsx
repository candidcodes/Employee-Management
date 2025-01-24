import React from 'react'
import Header from '../others/Header'
import Form from '../others/form'
import EmployeeForm from '../others/EmployeeForm'

const AddEmployee = () => {
  return <div className='p-12 bg-[#1C1c1c] min-h-screen'>
    <Header/>
    <EmployeeForm />
  </div>
}

export default AddEmployee;