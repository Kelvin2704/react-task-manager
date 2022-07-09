import React, { createContext, useEffect, useState } from "react";

export const TaskListContext = createContext();
const TaskListContextProvider = (props) => {
  const initialState = JSON.parse(localStorage.getItem("tasks")) || [];

  const [tasks, setTasks] = useState([]);

  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  const addTask = (title) => {
    setTasks([...tasks, { title, id: Math.floor(Math.random() * 100) + 1 }]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const clearList = () => {
    setTasks([]);
  };

  const findItem = (id) => {
    const item = tasks.find((task) => task.id === id);

    setEditItem(item);
  };

  const editTask = (title, id) => {
    const newTasks = tasks.map((task) => (task.id === id ? { title, id } : task));
    setTasks(newTasks);
    setEditItem(null);
  };

  return <TaskListContext.Provider value={{ tasks, addTask, removeTask, clearList, findItem, editItem, editTask }}>{props.children}</TaskListContext.Provider>;
};

export default TaskListContextProvider;
