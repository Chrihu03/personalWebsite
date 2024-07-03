import '../Main/App.css';
import { Outlet } from "react-router-dom";
import NavBar from '../NavBar';

function Battletech() {
  return (
    <div className='btDiv'>
      <NavBar />
      <div className='container'>
        <Outlet/>
      </div>
    </div>
  );
}

export default Battletech;