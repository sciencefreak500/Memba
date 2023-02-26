import { taskInterface } from "@/pages";
import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";

interface ProjectBoxProps {
  title?: string;
  priority?: number;
  tasks?: taskInterface[];
  isCreatorBox?: boolean;
  setModalOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProjectBox = ({
  title,
  priority = 0,
  tasks,
  isCreatorBox = false,
  setModalOpen = () => {},
}: ProjectBoxProps) => {
  const [bgColor, setBgColor] = useState("bg-gray-500");

  useEffect(() => {
    if (priority < 1 || priority > 10) {
      setBgColor("bg-gray-500");
      return;
    }
    setBgColor(`bg-priority-${priority}`);
  }, [priority]);

  return (
    <div
      onClick={() => {
        setModalOpen(true);
      }}
      className={`max-w-xs max-h-80 h-full w-full rounded-lg overflow-hidden shadow-lg my-5 mx-auto transform transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer ${bgColor}`}
    >
      {/* white text with black border so its readable on any color */}
      <div className="px-6 py-4 text-gray-800">
        {isCreatorBox ? (
          <FaPlus className="font-bold text-sm md:text-md lg:text-lg mb-2" />
        ) : (
          <>
            <div className="font-bold text-sm md:text-md lg:text-lg mb-2">
              {title}
            </div>
            {tasks?.map((task: any, index: number) => (
              <div key={index} className="text-xs md:text-sm lg:text-base">
                {task.title}
              </div>
            ))}
          </>
        )}
        {/* {children} */}
      </div>
    </div>
  );
};

export default ProjectBox;
