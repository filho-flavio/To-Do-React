import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { ToDoList } from "./ToDoList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // React Strict Mode alert me when have bugs
  <React.StrictMode>
    <ToDoList />
  </React.StrictMode>
);
