import React, {useState, useEffect} from "react";
import "./App.css";

export default function TaskList() {
    const [result, setResult] = useState([]);
    const [success, setSuccess] = useState(true);
    const listLength = result.length;

    useEffect(() => {
        fetch("http://localhost:3008/api/tasks/").then(response => response.json())
        .then(response => setResult(response))
        .catch(() => setSuccess(false));
      }, []);

        return(
            <>
            <section hidden={success} className="Task-list-section mt-4">
                <ul className="Task-list">
                    <li>Error: There was an issue fetching tasks from the API</li>
                </ul>
            </section>

            <section hidden={!success} className="Task-list-section">
                <h3 className="mt-4">Task List ({listLength} in total) </h3>
                <ul className="Task-list">
                    {result.map(function(task) {
                    return (
                    <li key={task.id} >{task.text}<span className={task.completed === false ? "Task-list-status red" : "Task-list-status green"}>-----{task.completed ? "Completed" : "Incomplete"}</span></li>
                    );
                    })}
                </ul>
            </section>
            </>
        );
}