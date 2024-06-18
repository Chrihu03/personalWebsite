import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (

<div>
  <nav class="navbar navbar-expand-sm bg-light navbar-light">
    <div class="container-fluid">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/resume">Resume</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/battletech">Battletech</a>
        </li>
      </ul>
    </div>
  </nav>
  <h1>Welcome to my Page.</h1>
</div>

  );
}

export default App;
