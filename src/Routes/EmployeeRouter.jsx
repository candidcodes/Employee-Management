import React, { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/AuthContext';

const EmployeeRouter = () => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate()
    console.log(user)
    
    useEffect(() => {
        if(user != 'employee'){
            navigate('/login')
        }
    }, [user])

  return <Outlet />
}

export default EmployeeRouter