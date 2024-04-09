import React, { useState } from "react";

import "./TaskForm.css";
import Tag from "./Tag";

const TaskForm = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  const selectTag = (tag) => {
    if (taskData.tags.some((item) => item === tag)) {
      const filterTask = taskData.tags.filter((item) => item !== tag);
      setTaskData((prev) => {
        return {
          ...prev,
          tags: filterTask,
        };
      });
    } else {
      setTaskData((prev) => {
        return {
          ...prev,
          tags: [...prev.tags, tag],
        };
      });
    }
  };

  const checkTag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTaskData({ ...taskData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
    setTasks((prev) => {
      return [...prev, taskData];
    });
    setTaskData({
      task: "",
      status: "todo",
      tags: [],
    });
  };
  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          name="task"
          type="text"
          value={taskData.task}
          className="task_input"
          placeholder="enter your task"
          onChange={handleChange}
        />

        <div className="task_form_bottom_line">
          <div>
            <Tag
              tagName="HTML"
              selectTag={selectTag}
              selected={checkTag("HTML")}
            />
            <Tag
              tagName="CSS"
              selectTag={selectTag}
              selected={checkTag("CSS")}
            />
            <Tag
              tagName="JavaScript"
              selectTag={selectTag}
              selected={checkTag("JavaScript")}
            />
            <Tag
              tagName="React"
              selectTag={selectTag}
              selected={checkTag("React")}
            />
          </div>

          <div>
            <select
              className="task_status"
              name="status"
              value={taskData.status}
              onChange={handleChange}
            >
              <option value="todo">To Do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
            <button className="task_submit" type="submit">
              Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
