import React, { useContext, useEffect } from 'react'
import { UserContext } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

const AdminRouter = ({ element }) => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate()

    useEffect(() => {
        if(user != 'admin'){
            navigate('/')
        }
    }, [user])

  return element
}

export default AdminRouter