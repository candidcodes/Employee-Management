import React, { useContext } from 'react'
import { UserContext } from '../../Context/AuthContext'

const TaskList = () => {
    const { saveUser } = useContext(UserContext)

    const { tasks } = saveUser

  return (
    <div id='scroll-container' className="flex gap-2 mt-[13vh] pb-2 overflow-auto overflow-y-hidden whitespace-nowrap">
      {tasks.map((task, idx) => {
        return (
          <div key={idx} className={`${!task.active ? 'bg-red-500' : 'bg-teal-500'} select-none w-80 rounded-lg flex-shrink-0 p-5 flex flex-col justify-between relative h-auto`} >
            <div>
              <div className="flex justify-between">
                <h1 className="text-l text-gray-100 inline-block px-3 rounded bg-red-600">
                  {task.urgency}
                </h1>
                <h1 className="text-l text-gray-100 inline-block px-3 rounded">
                  {task.taskDate}
                </h1>
              </div>
              <h3 className="text-3xl text-gray-100 break-words whitespace-normal">
                {task.taskTitle}
              </h3>
              <h3 className="mt-3 text-sm text-gray-100 break-words whitespace-normal">
                {task.taskDescription}
              </h3>
            </div>

            {!task.active ? (
              <div className="flex justify-end space-x-3 mt-3">
                <button className="bg-green-500 text-white px-4 py-2 rounded">
                  Accept
                </button>
                <button className="bg-gray-500 text-white px-4 py-2 rounded">
                  Reject
                </button>
              </div>
            ) : (
              <div className="flex justify-end space-x-3 mt-3">
                <button className="bg-green-500 text-white px-4 py-2 rounded">
                  Completed
                </button>
                <button className="bg-gray-500 text-white px-4 py-2 rounded">
                  Failed
                </button>
              </div>
            )}
          </div>
          


        );
      })}
    </div>
  );
}

export default TaskList