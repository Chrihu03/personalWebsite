import './App.css';
import { Link, Outlet } from "react-router-dom";

function Battletech() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/resume">Resume</Link>
      <h1>Welcome to Battletech</h1>
      <Link to="/battletech/clusterCalc">Cluster Calculator</Link>
      <Outlet/>
    </div>
  );
}

export default Battletech;