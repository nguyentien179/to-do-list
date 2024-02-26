import React from "react";
import { useState } from "react";
function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  function handleInputChange(event) {
    setNewTask(event.target.value);
  }
  function handleAddTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }
  function handleDeketeTask(index) {
    const upDatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(upDatedTasks);
  }
  function moveUp(index) {
    if (index > 0) {
      const upDatedTasks = [...tasks];
      [upDatedTasks[index], upDatedTasks[index - 1]] = [
        upDatedTasks[index - 1],
        upDatedTasks[index],
      ];
      setTasks(upDatedTasks);
    }
  }
  function moveDown(index) {
    if (index < tasks.length - 1) {
      const upDatedTasks = [...tasks];
      [upDatedTasks[index], upDatedTasks[index + 1]] = [
        upDatedTasks[index + 1],
        upDatedTasks[index],
      ];
      setTasks(upDatedTasks);
    }
  }
  return (
    <>
      <div className="container">
        <h1>To do list</h1>
        <div>
          <input
            type="text"
            placeholder="Enter Task"
            value={newTask}
            onChange={handleInputChange}
          />
          <button className="addBtn" onClick={handleAddTask}>
            Add
          </button>
        </div>
        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <span className="text">{task}</span>
              <button
                className="delBtn"
                onClick={() => handleDeketeTask(index)}
              >
                Delete
              </button>
              <button className="moveBtn" onClick={() => moveUp(index)}>
                👆
              </button>
              <button className="moveBtn" onClick={() => moveDown(index)}>
                👇
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
export default ToDoList;
