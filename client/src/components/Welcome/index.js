import React from "react";
import {Link} from 'react-router-dom';
import Logo from "./images/codecamplogo2.JPG";

import "./style.css";


var sectionStyle = {
	width: "100%",
	height: "1000px",
	backgroundImage: `url(${Logo})`,
	backgroundSize: 'cover'
  };
  
//   class Section extends Component {
// 	render() {
// 	  return (
// 		<section style={ sectionStyle }>
// 		</section>
// 	  );
// 	}
//   }

const Welcome = (props) =>{
	return (
		// <div className="cover-container text-center d-flex h-1000 p-3 mx-auto flex-column" style= { sectionStyle }>
			<div className= "main">
				<div className="centred">
					<img className="logoImg" src={ Logo }/>
					<h2 className= "dateHeading"> March 17th, 2018 | Seminole State College </h2>
					<span>
						<Link to = "/main"> <button type="button" className="button">Learn More</button></Link>
						<Link to = "/signup"><button type="button" className="button">Register</button></Link>
						<Link to = "/signin"><button type="button" className="button">Log In</button></Link>
					</span>
				</div>
				
			

			{/* <footer className="mastfoot mt-auto">
				<div className="inner">
				<p>Cover template .</p>
				</div>
			</footer> */}
		</div>
	);
}

export default Welcome;