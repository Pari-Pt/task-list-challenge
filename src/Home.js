import React from "react";
import "./App.css";

export default function Home(props) {
    let display = props.display;
    if (display === true) {
        return (
            <div className="Home">
            <section className="Home-section">
              <h2>Welcome to Home</h2>
            </section>
        
        </div>
        );
    } else {
        return null
    }

}