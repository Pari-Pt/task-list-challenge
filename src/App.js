import React, { useState, useEffect } from "react";
import './App.css';

export default function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3008/api/tasks/").then(response => response.json()).then(response => setList(response));
  }, []);

   console.log(list);
  return (
    <div className="App">

      <header className="App-header">
      <p>Test To-Do List</p>
      </header>
        {list.map(function(task, index) {

      return (
        <ul key={index}>
          <li>{task.text} Hey</li>
        </ul>
      );
    })}
    </div>
  );
}

