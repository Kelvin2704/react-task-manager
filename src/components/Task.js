import React, { useContext } from "react";
import { TaskListContext } from "../context/TaskListContext";

const Task = ({ task }) => {
  const { removeTask, findItem } = useContext(TaskListContext);
  return (
    <li className="list-item">
      <span>{task.title}</span>
      <div>
        <button onClick={() => removeTask(task.id)} className="btn-delete task-btn">
          <i className="fa-solid fa-trash"></i>
        </button>
        <button onClick={() => findItem(task.id)} className="btn-edit task-btn">
          <i className="fa-solid fa-pencil"></i>
        </button>
      </div>
    </li>
  );
};

export default Task;
