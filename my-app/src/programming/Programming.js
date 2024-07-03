import '../Main/App.css';
import NavBar from '../NavBar';
import { Outlet } from "react-router-dom";


function Programming() {
  return (
    <div>
      <NavBar />
      <div className='container'>
      <Outlet/>
      </div>
    </div>
  );
}

export default Programming;