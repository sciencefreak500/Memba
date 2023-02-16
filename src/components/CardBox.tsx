import React from 'react'

const CardBox = ({ title, children }: any) => {
    return (
      <div className="max-w-xs max-h-80 h-full w-full bg-gray-800 rounded-lg overflow-hidden shadow-lg my-5 mx-auto transform transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer">
        <div className="px-6 py-4 text-white">
          <div className="font-bold text-sm md:text-md lg:text-lg mb-2">{title}</div>
          {children}
        </div>
      </div>
    )
  }
 

export default CardBox
