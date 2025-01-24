import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddEmployee from '../Components/EmployeeDashboard/AddEmployee'
import AdminDashboard from '../Components/EmployeeDashboard/AdminDashboard'
import AddTask from '../Components/EmployeeDashboard/AddTask'

const AdminAppRouter = ({ logged }) => {
    console.log(logged)
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<AdminDashboard logged={logged}/>}/>
            <Route path="/add-task" element={<AddTask logged={logged}/>}/>
            <Route path="/add-employee" element={<AddEmployee logged={logged}/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AdminAppRouter