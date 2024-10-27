import { useState } from "react";
import "./App.css";

function App() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [taskComplete, setTaskComplete] = useState(false);

  const toggleTask = () => {
    setTaskComplete(!taskComplete);
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const addTask = (event) => {
    event.preventDefault();
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
    if (newTask.trim() == "") {
      alert("enter a task!");
    }
  };

  /* const checkedStyle = {
    color: "#555",
    textDecoration: "line-through"
  } */

  console.log(tasks);

  return (
    <div className="container">
      <div className="to-do-app">
        <h2>to-do-list</h2>
        {/* input */}
        <form className="input-container" onSubmit={addTask}>
          <input
            type="text"
            placeholder="enter your tasks"
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button type="submit">add</button>
        </form>
        {/* -- */}
        <ul className="tasks">
          {tasks.map((task, index) => (
            <li key={index}>
              <span
                className={!taskComplete? "unchecked" : "checked"}
                onClick={toggleTask}
              >
                {task}
              </span>{" "}
              <span onClick={() => removeTask(index)} className="delete">
                {"\u00d7"}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
