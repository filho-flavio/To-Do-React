import React, { useState } from "react";
import "./ToDoList.css";
import { Card } from "./components/Card"

export function ToDoList () {
  // task is a place where store the state and setTask is the method to set tasks
  const [tasks, setTask] = useState([]);

  function addTask() {
    const inTask = document.querySelector("#inTask").value;

    if (inTask === "") {
      alert("Please enter a task");
      return;
    }

    const newTask = {
      text: inTask,
    }

    setTask(prevState => [...prevState, newTask]);
    document.querySelector("#inTask").value = "";
  }

  return (
    <>
      <div className="container">
        <div className="header">
          <h1>To Do List</h1>
        </div>
        <div className="box-container">
          <input id="inTask" type="text" placeholder="Write your task" className="input" />
          <button className="button" onClick={addTask}>Add Task</button>
        </div>
        <div className="box-content">
          {tasks.map((item) => <Card text={item.text} />)}
        </div>
      </div>
    </>
  );
};