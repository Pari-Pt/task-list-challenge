import React from "react";
import "./App.css";

export default function Home(props) {
    let display = props.display;
    if (display === true) {
        return (
            <div className="Home">
                <main className="Home-main-area">
                <h2 className="pb-5">Home</h2>
                <h3 className="pb-5">Notices/Updates:</h3>
                <ol>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!</li>
                </ol>
            </main>        
        </div>
        );
    } else {
        return null;
    }
}