import React, { createContext, useContext, useEffect, useState } from "react";
import { getLocalStorage } from "../lib/LocalStorage";
import { UserContext } from "./AuthContext";

export const TaskListContext = createContext();

const TaskContext = ({ children }) => {
  const { emps } = useContext(UserContext);
  const [taskArray, setTaskArray] = useState([]);
  const [updateTrigger, setUpdateTrigger] = useState(false)
  

  useEffect(() => {
    const newTaskArray = emps.flatMap(emp => emp.tasks);
    setTaskArray(newTaskArray)
  }, [updateTrigger]);

  return(
    <TaskListContext.Provider value={{taskArray, updateTrigger, setUpdateTrigger}}>
        <div>{children}</div>
    </TaskListContext.Provider>
  )
};

export default TaskContext;