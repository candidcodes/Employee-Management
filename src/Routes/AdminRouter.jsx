import React, { useContext, useEffect } from 'react'
import { UserContext } from '../Context/AuthContext';
import { Outlet, useNavigate } from 'react-router-dom';

const AdminRouter = () => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate()

    useEffect(() => {
        if(user != 'admin'){
            navigate('/login')
        }
    }, [user])

  return <Outlet />
}

export default AdminRouter