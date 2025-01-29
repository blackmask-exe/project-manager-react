import { useState } from "react";
import Sidebar from "./components/Sidebar";
import MainPanel from "./components/MainPanel";

function App() {
  // assinging a project based on the following id: proj + the number obtained from Date.now()
  const [projects, setProjects] = useState([
    {
      id: "proj1",
      name: "Aaltu Project",
      description: "This is a project",
      date: "2021-09-01",
      tasks: ["Task 1", "Task 2", "Task 3"],
    },
    {
      id: "proj" + String(Date.now()),

      name: "Faltu Project",
      description: "This is another project",
      date: "2021-09-02",
      tasks: ["Task 1", "Task 2", "Task 3"],
    },
  ]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <main className="h-screen w-full flex">
      <Sidebar
        projects={projects}
        setIsDialogOpen={setIsDialogOpen}
        setSelectedProject={setSelectedProject}
      />
      <div className="flex-1">
        <MainPanel
          selectedProject={selectedProject}
          setProjects={setProjects}
          isDialogOpen={isDialogOpen}
          setIsDialogOpen={setIsDialogOpen}
          setSelectedProject={setSelectedProject}
          projects={projects}
        />
      </div>
    </main>
  );
}

export default App;

// to do:
// when i click on the "add project" button, it should open the dialogbox on the Main Panel component
// and when i hit save on the side of that shech, it adds that to the projects state variable ✅

// when i click on a project on the sidebar, it pulls out the info and shech of that project on the main panel inside
// the ProjectInfo component -> all I need to do is set the selectedProject to the one that I just clicked on

// add a "task adder" inside the TaskView component
