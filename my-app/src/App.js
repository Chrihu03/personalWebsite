import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Link to="/battletech">Battletech</Link>
      <Link to="/resume">Resume</Link>
      <h1>Welcome to my app</h1>
    </div>

  );
}

export default App;
