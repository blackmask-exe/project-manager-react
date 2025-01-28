import React from "react";

const MainPanel = () => {
  return (
    <div className="main-panel font-mono">
      <h1>Welcome to Project Manager</h1>
      <div className="content-area">
        {/* Content will be dynamically rendered here */}
        <p>Select a project from the sidebar to get started</p>
      </div>
    </div>
  );
};

export default MainPanel;
