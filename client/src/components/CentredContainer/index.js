import React from 'react';
import "./style.css";


var styling = {
	display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
	minHeight: "100vh"
}

const CentredContainer = ({ children }) => {
	return(
		<div style={{ styling }} >
			<div class="container">
				{children}
			</div>
		</div>
	);
}

export default CentredContainer;

