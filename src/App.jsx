import { useState } from "react";

import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="to-do-app">
        <h2>to-do-list</h2>
        {/* input */}
        <div className="input-container">
          <input
            type="text"
            placeholder="enter your tasks"
          />
          <button>add</button>
        </div>
        {/* -- */}
        <ul className="tasks">
          <li>do homework</li>
          <li>do something else</li>
          <li>again...</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
