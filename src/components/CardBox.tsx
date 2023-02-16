import { taskInterface } from '@/pages'
import React from 'react'

interface CardBoxProps {
	title: string
	priority: string
	tasks: taskInterface[]
}
// give the card a background color based on the priority
const getPriorityColor = (priority: string) => {
	switch (priority) {
		case 'high':
			return 'bg-red-500'
		case 'medium':
			return 'bg-yellow-500'
		case 'low':
			return 'bg-green-500'
		default:
			return 'bg-gray-500'
	}
}
const CardBox = ({ title, priority, tasks }: CardBoxProps) => {
    return (
      <div className={`max-w-xs max-h-80 h-full w-full bg-gray-800 rounded-lg overflow-hidden shadow-lg my-5 mx-auto transform transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer ${getPriorityColor(priority)}`}>
        <div className="px-6 py-4 text-white">
          <div className="font-bold text-sm md:text-md lg:text-lg mb-2">{title}</div>
					{tasks.map((task: any, index: number) => (
						<div key={index} className="text-xs md:text-sm lg:text-base">
							{task.title}
						</div>
					))}
          {/* {children} */}
        </div>
      </div>
    )
  }
 

export default CardBox
