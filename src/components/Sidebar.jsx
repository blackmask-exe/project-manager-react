import React from "react";

const Sidebar = ({ projects }) => {
  return (
    <aside className="w-64 min-h-screen bg-gray-900 border-r border-gray-700 p-6 fixed left-0 top-0 font-mono">
      <h1 className="text-2xl font-bold mb-6 text-white">Project Manager</h1>
      <button className="w-full my-4 bg-gray-800 text-gray-200 rounded-xl py-3 px-4 hover:bg-gray-700 active:bg-gray-600 transition-colors">
        + Add Project
      </button>
      <ul className="mt-6 space-y-2">
        {projects.map((project, index) => (
          <li
            key={index}
            className="p-3 bg-gray-800 rounded shadow text-gray-200 hover:bg-gray-700 cursor-pointer transition-colors"
          >
            {project.name}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
