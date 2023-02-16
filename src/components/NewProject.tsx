import React from 'react'
import { FaPlus } from 'react-icons/fa'

interface NewProjectProps {
	setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const NewProject = ({setModalOpen}: NewProjectProps) => {
		return (
			<div className="max-w-xs max-h-80 h-full w-full bg-gray-800 rounded-lg overflow-hidden shadow-lg my-5 mx-auto transform transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer" onClick={() => {setModalOpen(true)}}>
				<div className="px-6 py-4 text-white">
					<FaPlus className="font-bold text-sm md:text-md lg:text-lg mb-2"/>
				</div>
			</div>
		)
}



 


export default NewProject