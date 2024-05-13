import './App.css';
import { Link } from "react-router-dom";

function Resume() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/battletech">Battletech</Link>
      <h1>Welcome to my Resume</h1>
    </div>
  );
}

export default Resume;