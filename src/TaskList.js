import React, {useState, useEffect} from "react";
import "./App.css";

export default function TaskList() {
    const [result, setResult] = useState([]);
    const listLength = result.length;
    let status = "";

    useEffect(() => {
        fetch("http://localhost:3008/api/tasks/").then(response => response.json())
        .then(response => setResult(response))
        .catch(() => alert("An error occured and no tasks could be obtained"));
      }, []);



        return(
            <section className="Task-list-section">
                <h3 className="mt-4">Task List ({listLength} in total) </h3>
                <ul className="Task-list">
                    {result.map(function(task) {
                        if (task.completed === false) {
                        status = "Incomplete";
                        } else {
                        status = "Complete";
                        }
                    return (
                    <li key={task.id} >{task.text}<span className={task.completed === false ? "Task-list-status red" : "Task-list-status green"}>-----{status}</span></li>
                    
                    );
                    })}
                </ul>
            </section>
        );

}