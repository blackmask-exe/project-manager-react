import React from "react";

const ProjectInfo = ({ selectedProject }) => {
  return (
    <div className="w-full p-8 mt-4 bg-gray-900 rounded-lg">
      <h2 className="text-4xl font-bold text-gray-200 mb-8">
        {selectedProject.name}
      </h2>
      <p className="text-xl text-gray-300 mb-6">
        <span className="font-bold">Description: </span>
        {selectedProject.description}
      </p>
      <p className="text-lg text-gray-300">
        <span className="font-bold">Due Date: </span>
        {new Date(selectedProject.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
    </div>
  );
};

export default ProjectInfo;
