// imports that must to be made
import React, { useState } from "react";
import "./ToDoList.css";
import { Card } from "./components/Card"

// my ToDoList function to be exported to index.jsx
export function ToDoList() {
  // task is a place where store the state and setTask is the method to set tasks
  const [tasks, setTask] = useState([]);

  function addTask() {
    const inTask = document.querySelector("#inTask");
    const task = inTask.value;

    if (task === "") {
      alert("Please enter a task");
      inTask.focus();
      return;
    }

    const newTask = {
      id: 0,
      text: task,
    }

    setTask(prevState => [...prevState, newTask]);
    document.querySelector("#inTask").value = "";
  }

  function editTask() {
    console.log("Bt clicked");
  }

  function deleteTask() {
    console.log("Bt Delete clicked");
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
          {tasks.map((item, index) =>
            <Card
              id={index++}
              text={item.text}
              editTask={editTask}
              deleteTask={deleteTask}
            />
          )}
        </div>
      </div>
    </>
  );
};