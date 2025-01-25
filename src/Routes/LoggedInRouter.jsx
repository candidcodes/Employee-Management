import React, { useContext, useEffect } from 'react'
import { UserContext } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoggedInRouter = ({ element }) => {
    const { isLoggedIn } = useContext(UserContext);
    const navigate = useNavigate()

    useEffect(() => {
        if(!isLoggedIn){
            navigate('/login')
        }else{
            navigate('/')
        }
    }, [isLoggedIn])

  return element
}

export default LoggedInRouter