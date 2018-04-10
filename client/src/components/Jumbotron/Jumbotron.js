import React from "react";

const Jumbotron = ({ children }) => (
  <div style={{ height: 300, clear: "both" }} className="jumbotron jumbotron-fluid">
    <div class="container">
      {children}
    </div>
  </div>
);

export default Jumbotron;
