import './App.css';
import { Link } from "react-router-dom";

function Battletech() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/resume">Resume</Link>
      <h1>Welcome to Battletech</h1>
    </div>
  );
}

export default Battletech;