import React, { useContext, useState } from 'react'
import { UserContext } from '../../Context/AuthContext'

const TaskNumbers = () => {

    const { saveUser } = useContext(UserContext)
    const { tasks } = saveUser

    // const [newTask, setNewTask] = useState(0)

    const newTaskCount = tasks.filter(task => task.newTask).length;
    const activeCount = tasks.filter(task => task.active).length;
    const completedCount = tasks.filter(task => task.completed).length;
    const failedCount = tasks.filter(task => task.failed).length;
    // tasks.forEach((task) => {
    //     if(task.newTask){
    //         setNewTask(newTask+1)
    //         return;
    //     }
    // });
  return (
    <div className='flex justify-between gap-5 screen overflow-auto whitespace-nowrap'>
        <div className='bg-red-400 mt-10 p-7 w-[45%] rounded-lg'>
            <h1 className='font-bold text-5xl text-gray-100'>{newTaskCount}</h1>
            <h3 className='text-3xl text-gray-100' >New Tasks</h3>
        </div>
        <div className='bg-yellow-400 mt-10 p-7 w-[45%] rounded-lg'>
            <h1 className='font-bold text-5xl text-gray-100'>{activeCount}</h1>
            <h3 className='text-3xl text-gray-100' >Active Tasks</h3>
        </div>
        <div className='bg-blue-400 mt-10 p-7 w-[45%] rounded-lg'>
            <h1 className='font-bold text-5xl text-gray-100'>{completedCount}</h1>
            <h3 className='text-3xl text-gray-100' >Completed Tasks</h3>
        </div>
        <div className='bg-emerald-400 mt-10 p-7 w-[45%] rounded-lg'>
            <h1 className='font-bold text-5xl text-gray-100'>{failedCount}</h1>
            <h3 className='text-3xl text-gray-100' >Failed Tasks</h3>
        </div> 
    </div>
  )
}

export default TaskNumbers