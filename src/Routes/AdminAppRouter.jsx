import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddEmployee from '../Components/EmployeeDashboard/AddEmployee'
import AdminDashboard from '../Components/EmployeeDashboard/AdminDashboard'
import AddTask from '../Components/EmployeeDashboard/AddTask'
import { UserContext } from '../Context/AuthContext'
import AdminRouter from './AdminRouter'

const AdminAppRouter = () => {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<AdminRouter element={<AdminDashboard/>}/>}/>
            <Route path="/add-task" element={<AddTask/>}/>
            <Route path="/add-employee" element={<AddEmployee/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AdminAppRouter