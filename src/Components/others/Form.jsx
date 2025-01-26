import React, { useContext, useState } from "react";
import { UserContext } from "../../Context/AuthContext";

const Form = () => {
const { emps } = useContext(UserContext);

  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [assign, setAssign] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("submitted");
    const kaam = {
      taskTitle: task,
      taskDescription: description,
      taskDate: date,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
      urgency: "medium",
    };
    // console.log(assign)

    console.log(e)

    const emp = emps.find(({ name }) => name === assign)
    if(emp){
        emp.tasks.push(kaam)
        console.log('new task added')
    }else{
        console.log('employee not found')
    }

    
    
    localStorage.setItem('employees', JSON.stringify(emps))

    setTask('')
    setDescription('')
    setCategory('')
    setDate('')
    setAssign('')
    
};

  return (
    <div className="w-full bg-[#0f0f0f] mt-10 px-12 py-10 rounded-lg">
      <h1 className="text-gray-100 text-3xl mb-10 font-semibold">Add Task</h1>
      <form
        className="flex justify-between"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="text-gray-200 w-[45%] ">
          <h1>Task Title</h1>
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            type="text"
            className="outline-none bg-transparent border-2 border-emerald-900 rounded-lg p-2 w-full mb-4 mt-1 placeholder:text-gray-500"
            placeholder="First name"
          />
          <h1>Add Date</h1>
          <input
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type="date"
            className="outline-none bg-transparent border-2 border-emerald-900 rounded-lg p-2 w-full mb-4 mt-1 text-gray-500"
          />
          <h1>Assign to</h1>
          <input
          value={assign}
            onChange={(e) => setAssign(e.target.value)}
            type="text"
            className="outline-none bg-transparent border-2 border-emerald-900 rounded-lg p-2 w-full mb-4 mt-1 text-gray-500"
            placeholder="employee name"
          />
          <h1>Category</h1>
          <input
          value={category}
            onChange={(e) => setCategory(e.target.value)}
            type="text"
            className="outline-none bg-transparent border-2 border-emerald-900 rounded-lg p-2 w-full mb-4 mt-1 text-gray-500"
            placeholder="design, dev, etc"
          />
        </div>
        <div className="text-gray-200 w-[45%] ">
          <h1>Description</h1>
          <textarea
          value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            placeholder="Enter your text here"
            className="outline-none bg-transparent border-2 border-emerald-900 rounded-lg p-2 mb-4 mt-1 text-gray-500 resize-none w-full"
          />
          <button className="w-full bg-emerald-800 py-3 rounded-lg">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
