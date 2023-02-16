import { projectInterface, taskInterface } from "@/pages"
import { useState } from "react"

interface NewProjectModalProps {
	setNewProjectModalOpen: React.Dispatch<React.SetStateAction<boolean>>
	addNewProject: (newProject: projectInterface) => void
}


const NewProjectModal = ({setNewProjectModalOpen, addNewProject}: NewProjectModalProps) => {
	const handleCreate = () => {
		const projectName = document.getElementById('projectName') as HTMLInputElement
		const projectPriority = document.getElementById('projectPriority') as HTMLInputElement
		const newProject: projectInterface = {
			id: '',
			name: projectName.value,
			priority: projectPriority.value,
			scratchpad: '',
			created_at: new Date().toISOString(),
			tasks: projTasks
		}
		addNewProject(newProject)
		setNewProjectModalOpen(false)
	}
	const newTask = () => {
		const taskTitle = document.getElementById('taskTitle') as HTMLInputElement
		const taskDescription = document.getElementById('taskDescription') as HTMLInputElement
		const taskState = document.getElementById('taskState') as HTMLInputElement
		const newTask: taskInterface = {
			id: '',
			title: taskTitle.value,
			description: taskDescription.value,
			scratchpad: '',
			state: Number(taskState.value) as 0 | 1 | 2,
			is_archived: false,
			created_at: new Date().toISOString(),
			subtasks: []
		}
		setProjTasks([...projTasks, newTask])
	}

	const removeTask = (index: number) => {
		const newTasks = projTasks.filter((task, i) => i !== index)
		setProjTasks(newTasks)
	}
	const [projTasks, setProjTasks] = useState<taskInterface[]>([])
	return (
		<div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50">
		<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-white rounded-lg">
			<div className="flex flex-col h-full">
				<div className="flex justify-between items-center px-5 py-3">
					<h1 className="text-xl font-bold">New Project</h1>
					<button
						onClick={() => setNewProjectModalOpen(false)}
						className="text-2xl font-bold"
					>
						&times;
					</button>
				</div>
				<div className="flex flex-col px-5 py-3">
					<label htmlFor="projectName" className="text-sm font-bold">Project Name</label>
					<input type="text" name="projectName" id="projectName" className="border border-gray-300 rounded-md px-2 py-1" />
				</div>
				<div className="flex flex-col px-5 py-3">
					<label htmlFor="projectPriority" className="text-sm font-bold">Project Priority</label>
					<select name="projectPriority" id="projectPriority" className="border border-gray-300 rounded-md px-2 py-1">
						<option value="high">High</option>
						<option value="medium">Medium</option>
						<option value="low">Low</option>
					</select>
				</div>
				<div className="flex flex-col px-5 py-3">
					<label htmlFor="projectTasks" className="text-sm font-bold">Project Tasks</label>
					<div className="flex flex-col">
						{projTasks.map((task: taskInterface, index: number) => (
							// show task as a row with title, description, and state and a delete button at the end
							<div key={index} className="flex justify-between items-center">
								<div className="flex">
									<div className="text-sm font-bold">{task.title}</div>
									<div className="text-xs">{task.description}</div>
									<div className="text-xs">{task.state}</div>
								</div>
								<div className="flex">
									<button className="text-xs" onClick={() => {removeTask(index)}}>Delete</button>
								</div>
							</div>
						))}
					</div>
					<div className="flex justify-between items-center">
						<div className="flex">
							<input type="text" name="taskTitle" id="taskTitle" className="border border-gray-300 rounded-md px-2 py-1" />
							<input type="text" name="taskDescription" id="taskDescription" className="border border-gray-300 rounded-md px-2 py-1" />
							<select name="taskState" id="taskState" className="border border-gray-300 rounded-md px-2 py-1">
								<option label="todo" value="0">To Do</option>
								<option label="inprogress" value="1">In Progress</option>
								<option label="done" value="2">Done</option>
							</select>
						</div>
						<div className="flex">
							<button className="text-xs" onClick={newTask}>Add</button>
						</div>
					</div>
				</div>


				<div className="flex justify-end items-center px-5 py-3">
					<button
						onClick={() => setNewProjectModalOpen(false)}
						className="bg-gray-300 rounded-md px-2 py-1"
					>
						Cancel
					</button>
					<button
						onClick={handleCreate}
						className="bg-blue-500 rounded-md px-2 py-1 text-white"
					>
						Create
					</button>
				</div>
			</div>
		</div>
	</div>
	)
}

export default NewProjectModal