import React, { useState } from "react";
import "./App.css";

function App() {
  const backgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/20944694)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="App">
      <h1>Berry Task Flow</h1>

      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new task"
        />
        <button
          className="AddTask-btn"
          onClick={() => {
            if (inputValue.trim() !== "") {
              setTasks([inputValue, ...tasks]); 
              setInputValue("");
            }
          }}
        >
          Add Task
        </button>
      </div>

      <ul className="Task-txt">
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button
              onClick={() => {
                const newTasks = tasks.filter((_, i) => i !== index); 
                setTasks(newTasks);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;