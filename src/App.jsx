import React, { useState } from "react";

import { Input } from "./components/input";
import { Button } from "./components/button"
import Tasks from "./components/Tasks";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Projeto de POO",
      completed: false,
    },
    {
      id: "2",
      title: "Estudar HTML e CSS",
      completed: true,
    },
  ]);

  return (
    <>
      <div className="container">
        <div className="box-container">
          <Input />
          <Button />
        </div>
      </div>
    </>
  );
};

export default App;