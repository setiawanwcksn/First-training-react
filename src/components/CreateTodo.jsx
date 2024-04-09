import React, { useState } from "react";

const CreateTodo = () => {

  const [count, setCount] = useState(1);
  const [input, setInput] = useState("");
  const handleClick = () => {
    setCount(count + 1);
    console.log("add task", count);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const tasks = ["task1", "task2", "task3", "task4"];
  return (
    <>
      <h1>Task {count}</h1>
      <button onClick={handleClick}>Butt</button>
      <input onChange={handleChange} type="text" />
      <h1>Input: {input}</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </ul>
    </>
  );
};

export default CreateTodo;
