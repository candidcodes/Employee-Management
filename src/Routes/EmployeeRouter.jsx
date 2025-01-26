import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../Context/AuthContext';
import { Outlet, useNavigate } from 'react-router-dom';
import Loading from '../Components/others/Loading';

const EmployeeRouter = () => {
  const { user, isAuthLoading, isLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();
  const [isReady, setIsReady] = useState(false); // Add a state to track readiness for rendering the outlet

  useEffect(() => {
    if (!isAuthLoading) {
      if (!user || user !== "employee") {
        console.log('Redirecting to /');
        navigate("/");  // Redirect if not employee or not logged in
      } else {
        setIsReady(true);  // If conditions are met, mark the component as ready
      }
    }
  }, [user, isLoggedIn, isAuthLoading, navigate]);

  return <>
    {(isAuthLoading || !isReady) ? <Loading /> : <Outlet />}
  </>   
};

export default EmployeeRouter;
