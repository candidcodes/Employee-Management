import React, { useContext, useEffect } from 'react'
import { UserContext } from '../Context/AuthContext';
import { Outlet, useNavigate } from 'react-router-dom';
import Loading from '../Components/others/Loading';

const AdminRouter = () => {
  const { user, isAuthLoading, isLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();
  console.log(user);

  useEffect(() => {
    if (!isAuthLoading && (!isLoggedIn || user !== "admin")) {
      navigate("/login");
    }
  }, [user, isLoggedIn, isAuthLoading]);

  return <>
    {isAuthLoading ? <Loading /> : <Outlet />}
  </>
};

export default AdminRouter