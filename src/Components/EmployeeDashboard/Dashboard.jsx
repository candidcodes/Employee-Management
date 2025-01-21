import React from 'react'
import Header from '../others/Header'
import TaskNumbers from '../others/TaskNumbers'
import TaskList from '../others/TaskList'

const Dashboard = ({ logged }) => {
  return <>
    <div className='p-12 bg-[#1C1c1c] min-h-screen'>
        <Header logged={logged}/>
        <TaskNumbers />
        <TaskList /> 
    </div>
  </>
}

export default Dashboard