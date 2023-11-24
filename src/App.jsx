import React, { useState } from "react";
import "./App.css";
import { Card } from "./components/Card"

const App = () => {
  // task is a place where store the state and setTask is the method to set tasks
  const [task, setTask] = useState([]);

  function addTask() {
    const tasks = {
      text: task,
    }

    setTask(prevState => [...prevState, tasks])
  }

  return (
    <>
      <div className="container">
        <div className="header">
          <h1>To Do List</h1>
        </div>
        <div className="box-container line">
          <input type="text" placeholder="Write your task" className="input" />
          <button className="button" onClick={addTask}>Add Task</button>
        </div>
        <div className="box-content line">
          {task.map((item) => <Card text={task.text} />)}
        </div>
      </div>
    </>
  );
};

export default App;