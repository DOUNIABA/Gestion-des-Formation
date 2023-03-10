import {Link } from "react-router-dom";
import Logout from "./Logout";
import { useContext } from "react";
import { LoginContext } from "../Contexts/LoginContext";

import "../App.css";
// import SideBar from "./SideBar";

const Navbar = () => {
const {value,setValue}=useContext(LoginContext)
setValue(localStorage.getItem("name"))

  return (
    <div className="auth">
      <nav className="navbar navbar" >
        <div className="container-fluid d-flex align-items-center text-white">
          Formations Continues
        
          <div className="w-25 d-flex justify-content-around align-items-center">
            <Link to="" className="btn text-white hover">
            </Link>
            {value}
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
