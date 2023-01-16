import {Link } from "react-router-dom";
import Logout from "./Logout";
import "../App.css";
// import SideBar from "./SideBar";

const Navbar = () => {

  return (
    <div className="auth">
      <nav className="navbar navbar" >
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <Link to="" className="btn navbar-brand hover">
          </Link>
          <div className="w-25 d-flex justify-content-around align-items-center">
            <Link to="" className="btn text-white hover">
            </Link>
          
            <Logout />
          </div>
        </div>
      </nav>
      <div className="d-flex justify-content-start">
      
      </div>
    </div>
  );
};

export default Navbar;
