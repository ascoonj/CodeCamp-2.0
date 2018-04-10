import React from 'react';
import ReactDom from 'react-dom';
import Slider from 'react-slick'
import SessionCard from "../SessionCard";
import "./style.css";

// gather other componets
//import otherComponent from "../otherComponent";

class SessionCarousel extends React.Component {
		render() {
		var settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 5,
			slidesToScroll: 1
		};
		return(
			<div className="container">
				<Slider {...settings}>
					<SessionCard />		
				</Slider>
      </div>
		);
	}
}

export default SessionCarousel;