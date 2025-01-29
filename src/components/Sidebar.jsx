import React from "react";

const Sidebar = ({ projects, setIsDialogOpen }) => {
  return (
    <aside className="w-64 h-screen bg-gray-900 border-r border-gray-700 fixed left-0 top-0 font-mono flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6 text-white">Project Manager</h1>
        <button
          onClick={() => {
            setIsDialogOpen(true);
          }}
          className="w-full my-4 bg-gradient-to-r from-gray-800 to-gray-700 text-gray-200 rounded-lg border border-gray-600 py-3 px-4 hover:from-gray-700 hover:to-gray-600 active:from-gray-600 active:to-gray-500 transition-all"
        >
          + Add Project
        </button>
      </div>
      <ul className="px-6 pb-6 space-y-3 overflow-y-auto flex-1">
        {projects.map((project, index) => (
          <li
            key={index}
            className="p-3 bg-gray-800 rounded-lg border border-gray-700 text-gray-200 hover:bg-gray-700 cursor-pointer transition-colors"
          >
            {project.name}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
