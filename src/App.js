import React, { useState, useEffect } from "react";
import TaskList from "./TaskList.js";
import Home from "./Home.js";
import "./App.css";

export default function App() {

    const [result, setResult] = useState([]);
    const [fetched, setFetched] = useState(false);
    const [homeDisplay, setHomeDisplay] = useState(true);
    const [taskDisplay, setTaskDisplay] = useState(false);



    function handleTasksClick(event) {
      event.preventDefault();
      console.log("CLICK")
      setTaskDisplay(true);
      setHomeDisplay(false);
    }


    function handleHomeClick(event) {
      event.preventDefault();
      console.log("home click");
      setHomeDisplay(true);
      setTaskDisplay(false);
    }
   

      useEffect(() => {
      fetch("http://localhost:3008/api/tasks/").then(response => response.json()).then(response => {
          
          if (response.length > 0) {
              setResult(response);
      } else {
          console.log("failed call");
      }
      }).then(setFetched(true))
    }, []);
 
 
    if (fetched) {

      return (
        <div className="App">
          <header className="App-header">
            <h1>New App</h1>
          </header>
          <section className="App-sidebar">
            <menu className="App-menu">
              <li className="menu-item pt-4 pb-4" onClick={handleHomeClick}>Home</li>
              <li className="menu-item pt-4 pb-4" onClick={handleTasksClick}>Tasks</li>
              <li className="menu-item pt-4 pb-4">Back to Top</li>
            </menu>
          </section>
          <Home display={homeDisplay}/>        
          <TaskList result={result} display={taskDisplay}/>
        </div>
      );
    }
}