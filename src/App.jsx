import React, { useContext, useEffect, useState } from "react";
import Login from "./Components/Auth/Login";
import Dashboard from "./Components/EmployeeDashboard/Dashboard";
import AdminDashboard from "./Components/EmployeeDashboard/AddTask";
import { UserContext } from "./Context/AuthContext";
import { setLocalStorage } from "./lib/LocalStorage";
import AdminAppRouter from "./Routes/AdminAppRouter";

const App = () => {
  return (
    <>
      <AdminAppRouter/>

    </>
  );
};

export default App;