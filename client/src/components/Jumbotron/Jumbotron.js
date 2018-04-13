import React from "react";

const Jumbotron = ({ children }) => (
  <div style={{  
    clear: "both", 
    backgroundColor: "rgb(195, 235, 229", 
    fontFamily: "'Kaushan Script', cursive", 
    padding: "30px 0px", 
    margin: "0" 
    }} className="jumbotron jumbotron-fluid">
    <div className="container">
      {children}
    </div>
  </div>
);

export default Jumbotron;
