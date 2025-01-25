import React, { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/AuthContext';
import Loading from '../Components/others/Loading';

const AuthRouter = () => {
    const { user, isAuthLoading, isLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthLoading) {
        if(!isLoggedIn){
            navigate('/login')
        }else if(isLoggedIn && user == 'admin'){
            navigate('/admin')
        }else if(isLoggedIn && user == 'employee'){
            navigate('/employee')
        }
    }
  }, [user, isLoggedIn, isAuthLoading]);

  return <>
    {isAuthLoading ? <Loading /> : <Outlet />}
  </>
}

export default AuthRouter