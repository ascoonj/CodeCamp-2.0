import React from "react";
import MiniLogo from "./images/codecampminilogo.jpg";

const Nav = () => (
  <nav className="navbar navbar-light navbar-top" style={{ backgroundColor: "#f5ee21", height: "65px", marginRight: "-15px" }}>
    <div className="container-fluid">
      <div className="navbar-header">
        <button name="/" className="navbar-brand">
          <img src = {MiniLogo} className="d-inline-block align-top" alt=""/>
          
        </button>
        
        <div className = "navbar-collapse" >
          <div className="navbar-nav" style={{ color: "black" }}>
            <p className="nav-item nav-link" href="#">Home </p>
            <a className="nav-item nav-link" href="#">Features</a>
            <a className="nav-item nav-link" href="#">Pricing</a>
            <a className="nav-item nav-link " href="#">Disabled</a>
          </div>
        </div>
     
      </div>
    </div>
  </nav>
);

export default Nav;
