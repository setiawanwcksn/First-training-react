import React, { useEffect, useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import todoIcon from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";

const oldTasks = localStorage.getItem("tasks");

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);
  console.log(tasks);

  const handleDeleteTask = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn
          title="To Do"
          icon={todoIcon}
          tasks={tasks}
          status="todo"
          handleDeleteTask={handleDeleteTask}
        />
        <TaskColumn
          title="Doing"
          icon={doingIcon}
          tasks={tasks}
          status="doing"
          handleDeleteTask={handleDeleteTask}
        />
        <TaskColumn
          title="Done"
          icon={doneIcon}
          tasks={tasks}
          status="done"
          handleDeleteTask={handleDeleteTask}
        />
      </main>
    </div>
  );
};

export default App;
