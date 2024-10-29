import { useEffect, useState } from "react";
import "./App.css";
import toast from "react-hot-toast";

function App() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [loaded, setLoaded] = useState(false); // flag to track if tasks have loaded from local storage

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks-react")) || [];
    setTasks(savedTasks);
    setLoaded(true); // set loaded to true after loading tasks from local storage
  }, []);

  useEffect(() => {
    if (loaded) { // only save to localStorage if loaded is true
      localStorage.setItem("tasks-react", JSON.stringify(tasks));
    }
  }, [tasks, loaded]);

  // 1.
  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  // 2.
  const addTask = (event) => {
    event.preventDefault();
    if (newTask.trim() === "") {
      toast.error("Please enter a task!");
    } else {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  // 3.
  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // 4.
  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

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
            value={newTask}
            onChange={handleInputChange}
          />
          <button type="submit">add</button>
        </form>
        {/* -- */}
        <ul className="tasks">
          {tasks.map((task, index) => (
            <li key={index}>
              <span
                className={task.completed ? "checked" : "unchecked"}
                onClick={() => toggleTask(index)}
              >
                {task.text}
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
