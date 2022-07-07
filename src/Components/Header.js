import { Switch } from "@mui/material";
import {NavLink} from "react-router-dom";
const Header=({username,darkTheme,setDarkTheme}) =>{
    return <div>
   
   
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="">Navbar</a>
      <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
        
      <li className="nav-item">
      <NavLink className="nav-link" to="/loginpage">login</NavLink>
      </li>
      <li className="nav-item">
      <NavLink className="nav-link" to="/previewpage">preview</NavLink>
      </li>
      <li className="nav-item">
      <NavLink className="nav-link" to="/registerpage">register</NavLink>
      </li>
      <li className="nav-item">
      <NavLink className="nav-link" to="/homepage">Home</NavLink>
      </li>
    
      <li className="nav-item">
     <Switch
      checked={darkTheme}
     onChange={(e, v) =>{setDarkTheme(v);
     }} />
      </li>
      <li className="nav-item">
     {username}
      </li>
        </div>
      </div>
    </div>
  </nav>


    </div>
    
};
export default Header;