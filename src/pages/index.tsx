import NewProject from '@/components/NewProject'
import NewProjectModal from '@/components/NewProjectModal'
import Head from 'next/head'
import React from 'react'
import CardBox from '../components/CardBox'

// dummy data array for cards
// structure:
// Project
//  - id
//  - name
//  - priority
//  - scratchpad
//  - created_at

// Task
//  - id
//  - title
//  - description
//  - scratchpad
//  - state (0,1,2) 0 = backlog, 1 = in progress, 2 = done
//  - is_archived
//  - project_fk
//  - created_at

// Subtask
//  - id
//  - title
//  - description
//  - created_at
//  - task_fk
//  - state (0,1,2)
export interface subtaskInterface {
	id: string
	title: string
	description: string
	created_at: string
	state: 0 | 1 | 2
}
export interface taskInterface {
	id: string
	title: string
	description: string
	scratchpad: string
	state: 0 | 1 | 2
	is_archived: boolean
	created_at: string
	subtasks: subtaskInterface[]
}
export interface projectInterface {
	id: string
	name: string
	priority: string
	scratchpad: string
	created_at: string
	tasks: taskInterface[]
}

const cards: projectInterface[] = [
	{
		id: '1',
		name: 'Project 1',
		priority: 'high',
		scratchpad: 'This is a scratchpad',
		created_at: '2021-01-01:00:00:00',
		tasks: [
			{
				id: '1',
				title: 'Task 1',
				description: 'This is a task',
				scratchpad: 'This is a scratchpad',
				state: 0,
				is_archived: false,
				created_at: '2021-01-01:00:00:00',
				subtasks: [
					{
						id: '1',
						title: 'Subtask 1',
						description: 'This is a subtask',
						created_at: '2021-01-01:00:00:00',
						state: 0
					}
				]
			}
		]
	},
	{
		id: '2',
		name: 'Project 2',
		priority: 'low',
		scratchpad: 'This is a scratchpad',
		created_at: '2021-01-01:00:00:00',
		tasks: [
			{
				id: '1',
				title: 'Task 1',
				description: 'This is a task',
				scratchpad: 'This is a scratchpad',
				state: 0,
				is_archived: false,
				created_at: '2021-01-01:00:00:00',
				subtasks: []
			}
		]
	}
]


const addNewProject = (newProject: projectInterface) => {
	cards.push(newProject)
}

export default function Home() {
	const [newProjectModalOpen, setNewProjectModalOpen] = React.useState(false)
	
  return (
    <>
      <Head>
        <title>Memba</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
				<div className="grid grid-cols-3 gap-5 max-w-5xl mx-auto">
					{newProjectModalOpen && (
						<NewProjectModal addNewProject={addNewProject} setNewProjectModalOpen={setNewProjectModalOpen}/>
					)}
					{cards.map((card, index) => (
						<CardBox key={index} title={card.name} priority={card.priority} tasks={card.tasks} />
					))}
					<NewProject setModalOpen={setNewProjectModalOpen}/>
				</div>
      </main>
    </>
  )
}
