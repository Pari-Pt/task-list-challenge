import React, { useState } from "react";
import TaskList from "./TaskList.js";
import Home from "./Home.js";
import "./App.css";

export default function App() {
    const [homeDisplay, setHomeDisplay] = useState(true);
    const [taskDisplay, setTaskDisplay] = useState(false);


    function handleTasksClick(event) {
      event.preventDefault();
      if (taskDisplay === true) {
        window.scrollTo({top:0, behavior: "smooth"});  
      } else {
        setTaskDisplay(true);
        setHomeDisplay(false);
      }
      console.log("Tasks clicked")
    }


    function handleHomeClick(event) {
      event.preventDefault();
      console.log("Home clicked");
      setHomeDisplay(true);
      setTaskDisplay(false);
    }
   
    function backToTop(event) {
      event.preventDefault();
      window.scrollTo({top:0, behavior: "smooth"});
    }

 
      return (
        <div className="App">
          <header className="App-header">
            <h1>New App</h1>
          </header>

          <section className="App-sidebar">
            <menu className="App-menu">
              <li className="menu-item pt-4 pb-4" onClick={handleHomeClick}><span className="emoji">🏠</span><span className="menu-title">Home</span></li>
              <li className="menu-item pt-4 pb-4" onClick={handleTasksClick}><span className="emoji">🧾</span><span className="menu-title">Tasks</span></li>
              <li className="menu-item pt-4 pb-4" onClick={backToTop}><span className="emoji">🔝</span><span className="menu-title">Back to Top</span></li>
            </menu>
            <p className="author-para pt-5"><a href="https://pari-pt.github.io/task-list-challenge/">Coded</a> by Pari Nathali</p>
          </section>
          
          {homeDisplay && <Home display={homeDisplay}/>}    
          {taskDisplay && <TaskList />}
        </div>
      );
}