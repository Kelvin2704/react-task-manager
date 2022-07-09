import React, { useContext, useState, useEffect } from "react";
import { TaskListContext } from "../context/TaskListContext";

const TaskForm = () => {
  const { addTask, clearList, editTask, editItem } = useContext(TaskListContext);

  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
    console.log(title);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editItem === null) {
      addTask(title);
      setTitle("");
    } else {
      editTask(title, editItem.id);
    }
  };
  useEffect(() => {
    if (editItem !== null) {
      setTitle(editItem.title);
      console.log(editItem);
    } else {
      setTitle("");
    }
  }, [editItem]);
  return (
    <form onSubmit={handleSubmit} className="form">
      <input value={title} onChange={handleChange} type="text" className="task-input" placeholder="Add task..." required />
      <div className="buttons">
        <button type="submit" className="btn add-task-btn">
          {editItem !== null ? "Edit Task" : "Add Task"}
        </button>
        <button onClick={clearList} type="submit" className="btn clear-btn">
          Clear
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
