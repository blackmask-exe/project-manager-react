import { useState } from "react";
import "./App.css";

// Component Imports
import Sidebar from "./components/Sidebar";
import MainPanel from "./components/MainPanel";

function App() {
  const [projects, setProjects] = useState([
    {
      name: "Aaltu Project",
      description: "This is a project",
      date: "2021-09-01",
    },
    {
      name: "Faltu Project",
      description: "This is another project",
      date: "2021-09-02",
    },
  ]);
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar projects={projects} />
      <MainPanel />
    </main>
  );
}

export default App;
