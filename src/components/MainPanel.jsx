import { useState } from "react";
import ProjectInfo from "./ProjectInfo";
import TaskView from "./TaskView";
import AddProjectModal from "./AddProjectModal";

export default function MainPanel({
  selectedProject,
  setProjects,
  isDialogOpen,
  setIsDialogOpen,
  setSelectedProject,
  projects,
}) {
  return (
    <div className="p-8 ml-64 bg-gray-900 font-mono w-[calc(100vw-16rem)] h-screen">
      <div className="w-full h-full flex flex-col gap-8">
        {isDialogOpen ? (
          <AddProjectModal
            setIsDialogOpen={setIsDialogOpen}
            setProjects={setProjects}
            setSelectedProject={setSelectedProject}
            projects={projects}
          />
        ) : selectedProject ? (
          <>
            <ProjectInfo selectedProject={selectedProject} />
            <TaskView tasks={selectedProject.tasks} />
          </>
        ) : (
          <div className="flex items-center justify-center h-full">
            <h2 className="text-2xl font-bold text-gray-200">
              Add or Select a Project
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}
