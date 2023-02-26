import { projectInterface, taskInterface } from "@/pages";
import { useState } from "react";

interface NewProjectModalProps {
  setNewProjectModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  addNewProject: (newProject: projectInterface) => void;
}

const NewProjectModal = ({
  setNewProjectModalOpen,
  addNewProject,
}: NewProjectModalProps) => {
  const handleCreate = () => {
    const projectName = document.getElementById(
      "projectName"
    ) as HTMLInputElement;
    const projectPriority = document.getElementById(
      "projectPriority"
    ) as HTMLInputElement;
    const newProject: projectInterface = {
      id: "",
      name: projectName.value,
      priority: projectPriority.value,
      created_at: new Date().toISOString(),
      tasks: projTasks,
    };
    addNewProject(newProject);
    setNewProjectModalOpen(false);
  };
  const newTask = () => {
    const taskTitle = document.getElementById("taskTitle") as HTMLInputElement;
    const taskState = document.getElementById("taskState") as HTMLInputElement;
    const newTask: taskInterface = {
      id: "",
      title: taskTitle.value,
      state: Number(taskState.value) as 0 | 1 | 2,
      is_archived: false,
      created_at: new Date().toISOString(),
      subtasks: [],
    };
    setProjTasks([...projTasks, newTask]);
  };

  const removeTask = (index: number) => {
    const newTasks = projTasks.filter((task, i) => i !== index);
    setProjTasks(newTasks);
  };
  const [projTasks, setProjTasks] = useState<taskInterface[]>([]);

  const displayState = (state: 0 | 1 | 2) => {
    switch (state) {
      case 0:
        return "To Do";
      case 1:
        return "In Progress";
      case 2:
        return "Completed";
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-lg overflow-hidden">
        <div className="px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Create New Project</h1>
            <button
              onClick={() => setNewProjectModalOpen(false)}
              className="text-xl"
            >
              &times;
            </button>
          </div>
          <form className="mt-4">
            <div className="mb-4">
              <label
                htmlFor="projectName"
                className="block text-gray-700 font-bold mb-2"
              >
                Project Name
              </label>
              <input
                type="text"
                name="projectName"
                id="projectName"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="projectPriority"
                className="block text-gray-700 font-bold mb-2"
              >
                Project Priority
              </label>
              <select
                name="projectPriority"
                id="projectPriority"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              >
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
            <div className="mb-4">
              <h2 className="text-gray-700 font-bold mb-2">Project Tasks</h2>
              {/* <div className="border border-gray-300 rounded-md p-3">
								{projTasks.map((task: taskInterface, index: number) => (
									<div key={index} className="flex items-center justify-between mb-2">
										<div className="flex-1">
											<div className="text-sm font-bold">{task.title}</div>
											<div className="text-sm">{task.description}</div>
											<div className="text-sm">{task.state}</div>
										</div>
										<button className="text-sm text-red-500" onClick={() => { removeTask(index) }}>Remove</button>
									</div>
								))}
								{projTasks.length === 0 && <div className="text-sm text-gray-600">No tasks yet</div>}
							</div> */}
              <div className="border border-gray-300 rounded-md p-3">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="w-10 text-left py-2">#</th>
                      <th className="w-30 text-left py-2">Title</th>
                      <th className="w-20 text-left py-2">State</th>
                      <th className="w-10 text-left py-2"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {projTasks.map((task: taskInterface, index: number) => (
                      <tr key={index}>
                        <td className="w-10 text-sm py-2 align-top">
                          {index + 1}
                        </td>
                        <td className="w-30 text-sm py-2 align-top">
                          {task.title}
                        </td>
                        <td className="w-20 text-sm py-2 align-top">
                          {displayState(task.state)}
                        </td>
                        <td
                          className="w-10 text-sm py-2 text-center
		"
                        >
                          <button
                            type="button"
                            className="text-lg text-red-500"
                            onClick={() => {
                              removeTask(index);
                            }}
                          >
                            &times;
                          </button>
                        </td>
                      </tr>
                    ))}
                    {projTasks.length === 0 && (
                      <tr>
                        <td
                          className="w-full text-sm py-2 text-gray-600"
                          colSpan={4}
                        >
                          No tasks yet
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              <div className="mt-4">
                <div className="flex items-center">
                  <input
                    type="text"
                    name="taskTitle"
                    id="taskTitle"
                    placeholder="Task Title"
                    className="border border-gray-300 rounded-md px-3 py-2 mr-2 w-full"
                  />
                  <select
                    name="taskState"
                    id="taskState"
                    className="border border-gray-300 rounded-md px-3 py-2 mr-2"
                  >
                    <option value="0">To Do</option>
                    <option value="1">In Progress</option>
                    <option value="2">Done</option>
                  </select>
                  <button
                    type="button"
                    onClick={newTask}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-2 rounded-full"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="flex justify-end items-center px-5 py-3">
          <button
            onClick={() => setNewProjectModalOpen(false)}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-md mr-2 transition-colors duration-300"
          >
            Cancel
          </button>
          <button
            onClick={handleCreate}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewProjectModal;
