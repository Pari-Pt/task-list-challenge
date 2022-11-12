import React from "react";
import "./App.css";

export default function TaskList(props) {
    let display = props.display;
    let listLength = props.result.length;
    let status = "";
    let result = props.result;

    if (display === true) {
        return(
            <section className="Task-list-section">
                <h3 className="mt-4">Task List ({listLength} in total) </h3>
                <ul className="Task-list">
                    {result.map(function(task, index) {
                        if (task.completed === false) {
                        status = "Incomplete";
                        } else {
                        status = "Complete";
                        }
                    return (
                    <li key={index} className={task.completed === false ? "red" : "green"} >{task.text}---{status}</li>
                    
                    );
                    })}
                </ul>
            </section>
        );
    } else {
        return null
    }
}