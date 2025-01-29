import React from "react";

const Sidebar = ({ projects, setIsDialogOpen, setSelectedProject }) => {
  const handleProjectClick = (index) => {
    setSelectedProject(projects[index]);
  };
  // console.log(projects);
  return (
    <aside className="w-64 h-screen bg-gray-900 border-r border-gray-700 fixed left-0 top-0 font-mono flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6 text-white">Project Manager</h1>
        <button
          onClick={() => {
            setIsDialogOpen(true);
          }}
          className="w-full my-4 bg-gradient-to-r from-gray-700 to-gray-800 text-gray-200 rounded-lg border border-gray-600 py-3 px-4 hover:from-gray-600 hover:to-gray-700 focus:from-gray-600 focus:to-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 transition-all"
        >
          + Add Project
        </button>
      </div>
      <ul className="px-6 pb-6 space-y-3 overflow-y-auto flex-1">
        {projects.map((project, index) => (
          <li key={index}>
            <button
              onClick={() => {
                // console.log(index);
                handleProjectClick(index);
              }}
              className="w-full text-left p-3 bg-gray-800 rounded-lg border border-gray-700 text-gray-200 hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:border-gray-700 transition-colors"
            >
              {project.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
