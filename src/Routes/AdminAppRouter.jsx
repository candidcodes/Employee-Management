import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddEmployee from '../Components/EmployeeDashboard/AddEmployee'
import AdminDashboard from '../Components/EmployeeDashboard/AdminDashboard'
import AddTask from '../Components/EmployeeDashboard/AddTask'
import { UserContext } from '../Context/AuthContext'
import AdminRouter from './AdminRouter'

const AdminAppRouter = ({ logged }) => {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<AdminRouter element={<AdminDashboard logged={logged}/>}/>}/>
            <Route path="/add-task" element={<AddTask logged={logged}/>}/>
            <Route path="/add-employee" element={<AddEmployee logged={logged}/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AdminAppRouter