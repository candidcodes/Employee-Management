import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../Context/AuthContext";
import Loading from "../Components/others/Loading";

const EmployeeRouter = () => {
  const { user, isAuthLoading, isLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();
  console.log(user);

  useEffect(() => {
    if (!isAuthLoading && (!isLoggedIn || user !== "employee")) {
        navigate("/login");
      }
  }, [user, isLoggedIn, isAuthLoading]);

  return <>
    {isAuthLoading ? <Loading /> : <Outlet />}
  </>;
};

export default EmployeeRouter;
