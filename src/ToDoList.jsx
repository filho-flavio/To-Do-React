// imports that must to be made
import React, { useState } from "react";
import "./ToDoList.css";
import { Card } from "./components/Card"
import { v4 as uuidv4 } from 'uuid'

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
      id: uuidv4(),
      text: task,
      completed: false,
    }

    setTask(prevState => [...prevState, newTask]);
    document.querySelector("#inTask").value = "";
  }

  const editTask = (taskId) => {
    const modal = document.querySelector("#modal");
    const closeModal = document.querySelector("#close-modal");
    const btEdit = document.querySelectorAll(".btEdit");

    Array.from(btEdit).forEach(edit => {
      edit.addEventListener("click", () => modal.style.display = "inline")
    })

    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    })
    const inTaskEdit = document.querySelector("#inTextEdit");
    const task = tasks.find(task => task.id === taskId);
    inTaskEdit.value = task.text;
  }

  function handleTask(taskId) {
    // const newTasks = tasks.map((task) => {
    //   if (task.id === taskId) {
    //     return { ...tasks, completed: !task.completed }
    //   }

    //   return task;
    // });
    // setTask(newTasks);
  }

  function deleteTask() {
    if (window.confirm("Are you sure to delete this task: ")) {
      console.log("Task deleted")
    };
  }

  return (
    <>
      <div className="container">
        <div className="header">
          <h1>To Do List</h1>
        </div>
        <div className="box-container">
          <input id="inTask" type="text" placeholder="Write your task" className="input" maxLength={60} />
          <button className="button" onClick={addTask}>Add Task</button>
        </div>
        <div className="modal" id="modal">
          <div className="box-modal">
            <div className="header-modal">
              <h1>Edit your task</h1>
              <img src={"x-white.png"} alt="" id="close-modal" onClick={editTask} />
            </div>
            <input type="text" id="inTextEdit" />
            <button className="button">Save</button>
          </div>
        </div>
        <div className="box-content">
          {tasks.map((item) =>
            <Card
              id={item.id}
              text={item.text}
              completed={item.completed}
              editTask={editTask}
              deleteTask={deleteTask}
              handleTask={handleTask}
            />
          )}
        </div>
      </div>

    </>
  );
};