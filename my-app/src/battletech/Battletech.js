import '../App.css';
import { Link, Outlet } from "react-router-dom";

function Battletech() {
  return (
    <div className="container, btDiv">
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/resume">Resume</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/battletech">Battletech</a>
            </li>
          </ul>
        </div>
      </nav>
      <h1>Welcome to Battletech</h1>
      <Link to="/battletech/helpers">Helper Tools</Link>
      <Outlet/>
    </div>
  );
}

export default Battletech;