import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';


const HeaderComponent = () =>{
    return(
        <div>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/employees" >Employees</NavLink>
        </li>
        <li>
        <NavLink className="nav-link" to="/departments" >Departments</NavLink>
        </li>
        </ul>
        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
export default HeaderComponent