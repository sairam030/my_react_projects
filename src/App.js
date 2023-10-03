import "./App.css";
import birthday from "./images/birthday.png";
import React from "react";

function App() {
  return (
    <div className="App">
      <h1>React App</h1>
      <div className="projects-grid">
        <div className="project-card">
          <a href="https://sairam030.github.io/birthday_remainder/">
            <img className="project-image" src={birthday}></img>
            <h2>Project 1</h2>
          </a>
        </div>
        <div className="project-card">
          <a href="https://sairam030.github.io/birthday_remainder/">
            <img className="project-image" src={birthday}></img>
            <h2>Project 1</h2>
          </a>
        </div>
        <div className="project-card">
          <a href="https://sairam030.github.io/birthday_remainder/">
            <img className="project-image" src={birthday}></img>
            <h2>Project 1</h2>
          </a>
        </div>
        <div className="project-card">
          <a href="https://sairam030.github.io/birthday_remainder/">
            <img className="project-image" src={birthday}></img>
            <h2>Project 1</h2>
          </a>
        </div>
        <div className="project-card">
          <a href="https://sairam030.github.io/birthday_remainder/">
            <img className="project-image" src={birthday}></img>
            <h2>Project 1</h2>
          </a>
        </div>
      </div>
    </div>
  );
}
export default App;
