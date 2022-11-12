import React from "react";
import "./App.css";


export default function Tester(props) {
    let display = props.display;
    let result = props.result;
    let status = "";

    if (display === true) {
        return(
            <section className="App-list-section">
                <h3 className="mt-4">Task List:</h3>
                <ul className="App-list">
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
        return null;
    }
}