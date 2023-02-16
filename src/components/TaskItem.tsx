import React from 'react'

const TaskItem = ({ title, children }: any) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg my-5 mx-auto">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        {children}
      </div>
    </div>
  )
}

export default TaskItem
