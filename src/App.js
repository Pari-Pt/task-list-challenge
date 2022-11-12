import React, { useState, useEffect } from "react";
import "./App.css";

export default function App() {

    const [result, setResult] = useState([]);
    const [fetched, setFetched] = useState(false);
    let status = "";
  

    useEffect(() => {
      fetch("http://localhost:3008/api/tasks/").then(response => response.json()).then(response => {
          console.log(response)
          
          if (response.length > 0) {
              setResult(response);
      } else {
          console.log("failed call");
      }
      }).then(setFetched(true))
    }, []);
    
    console.log(result);
    if (fetched) {
      return (
        <div className="App">
        <header className="App-header">
          <p>Test To-Do List</p>
          </header>
          <ul className="App-list">
          {result.map(function(task, index) {
            if (task.completed === false) {
              status = "Incomplete";
              //listItem.classList.add("red");
            } else {
              status = "Complete";
              
            }
            //console.log(task);
      return (
          <li key={index} id="listItem" className={task.completed === false ? "red" : "green"} >{task.text}---{status}</li>
      );
    })}
    </ul>
    </div>
    );
  }
}