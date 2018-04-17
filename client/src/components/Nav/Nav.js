import React from "react";
import "./style.css";
import MiniLogo from "./images/codecampminilogo.jpg";

const Nav = (props) => (

 <nav className="navbar navbar-expand-md"  style={{ backgroundColor: "#f5ee21"}}>
    
        <a name="/" className="navbar-brand">
          <img src = {MiniLogo} alt=""/>
        </a>
        
        <div className = "collapse navbar-collapse" >
          <div className="navbar-nav" style={{ backgroundColor: "#f5ee21", color: "black", zIndex: 5 }}>
            <h5 className="nav-item nav-link" href="#">About </h5>
            <h5 className="nav-item nav-link" href="#">Speakers </h5>
            <h5 className="nav-item nav-link" href="#">All Session Info</h5>
            <h5 className="nav-item nav-link " href="#">FAQs</h5>
          </div>
        </div>
       
        {props.auth.isAuthenticated ? <div> <p className="mr-sm-2">Logged in as {props.auth.username}</p> </div> : null}

        <form className="form-inline my-2 my-lg-0">
          <button className="btn btn-outline-info btn-sm my-2 my-sm-0" onClick = {props.handleLogout}>Log Out</button>
        </form>
     
    
  </nav>
);

export default Nav;
{/* <nav className="navbar" style={{ backgroundColor: "#f5ee21", height: "65px", marginRight: "-15px", zIndex: 1}}> */}