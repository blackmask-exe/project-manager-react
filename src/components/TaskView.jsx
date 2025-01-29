import { useState } from "react";

const TaskView = () => {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([
    { id: 1, text: "Create project wireframes" },
    { id: 2, text: "Design database schema" },
    { id: 3, text: "Implement user authentication" },
  ]);

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask }]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <div className="mb-8">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAddTask();
            }
          }}
          placeholder="Add a new task..."
          className="w-full bg-gray-700 text-gray-200 placeholder-gray-400 px-4 py-3 rounded-lg border border-gray-600 focus:outline-none focus:border-gray-500"
        />
      </div>
      <div className="space-y-2">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex justify-between items-center text-gray-300"
          >
            {task.text}
            <button
              onClick={() => handleDeleteTask(task.id)}
              className="ml-4 px-2 py-1 text-sm text-gray-400 hover:text-red-400 transition-colors"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskView;
