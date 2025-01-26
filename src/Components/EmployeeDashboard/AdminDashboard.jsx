import React, { useContext } from "react";
import Header from "../others/Header";
import Form from "../others/form";
import { TaskListContext } from "../../Context/TaskContext";

const AdminDashboard = () => {
  const { taskArray } = useContext(TaskListContext);

  console.log(taskArray);

  return (
    <div className="p-12 bg-[#1C1c1c] min-h-screen">
      <Header />
      <div className="w-full bg-[#0f0f0f] mt-10 px-12 py-10 rounded-lg">
        <h1 className="text-gray-100 text-3xl font-semibold">Task List</h1>
        <div className="mt-10">
        {taskArray.map((obj) => (
          <div className="w-full bg-emerald-400 my-3 p-3 rounded" key={obj.id}>
            <h1 className="text-gray-900 text-xl font-semibold">
            {obj.taskTitle}
          </h1>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
