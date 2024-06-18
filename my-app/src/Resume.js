import './App.css';
import { Link } from "react-router-dom";

function Resume() {
  return (
    <div>
      <nav class="navbar navbar-expand-sm bg-light navbar-light">
        <div class="container-fluid">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/resume">Resume</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/battletech">Battletech</a>
            </li>
          </ul>
        </div>
      </nav>
      
      <h1>Welcome to my Resume</h1>
    </div>
  );
}

export default Resume;