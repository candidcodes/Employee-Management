import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddEmployee from '../Components/EmployeeDashboard/AddEmployee'
import AdminDashboard from '../Components/EmployeeDashboard/AdminDashboard'
import Login from '../Components/Auth/Login'
import AddTask from '../Components/EmployeeDashboard/AddTask'
import { UserContext } from '../Context/AuthContext'
import AdminRouter from './AdminRouter'
import Dashboard from '../Components/EmployeeDashboard/Dashboard'
import EmployeeRouter from './EmployeeRouter'
import LoggedInRouter from './LoggedInRouter'
import AuthRouter from './AuthRouter'

const AdminAppRouter = () => {

  return (
    
    <BrowserRouter> 
        <Routes>
          <Route path='/' element={<AuthRouter/>} />
            <Route path="/admin" element={<AdminRouter />}>
              <Route index element={<AdminDashboard/>}/>
              <Route path="add-task" element={<AddTask/>}/>
              <Route path="add-employee" element={<AddEmployee/>}/>
            </Route>
            
            <Route path="/employee" element={<EmployeeRouter />}>
              <Route index element={<Dashboard/>}/>
            </Route>

            <Route path="/login" element={<LoggedInRouter element={<Login />}/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AdminAppRouter