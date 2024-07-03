import './Main/App.css';

function NavBar() {
  return (

<div>
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <div className="container-fluid">
            <ul className="navbar-nav">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown">Main</a>
                    <ul className='dropdown-menu'>
                        <li><a className='dropdown-item' href='/'>Home</a></li>
                        <li><a className='dropdown-item' href='/about'>About Me</a></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown">Programming</a>
                    <ul className='dropdown-menu'>
                        <li><a className='dropdown-item' href='/programming/'>Programming Home</a></li>
                        <li><a className='dropdown-item' href='/programming/oop'>Object Oriented Progamming</a></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown">BattleTech</a>
                    <ul className='dropdown-menu'>
                        <li><a className='dropdown-item' href='/battletech/'>Battletech Home</a></li>
                        <li><a className='dropdown-item' href='/battletech/helpers'>Helpers</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
</div>

);
}

export default NavBar;
