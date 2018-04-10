import React from 'react';
import "./style.css";
import CentredContainer from "../CentredContainer";
import {Link} from 'react-router-dom';

const SignIn = (props)=> {

	return (

		
			<div className = "mainDiv">
				<div className = "formDiv">
					<h1 className="signInHeading">Welcome Back</h1>
					<hr/>
					<h3 className="signInHeading">Log in to view your schedule</h3>
					
					<form>
						<div class="form-group">
							{/* <label htmlFor ='username'>Email</label> */}
							<input value = {props.username} onChange = {props.handleChange} className='form-control' name='username' type='email' placeholder = 'example@email.com'/>
						</div>
						<div class="form-group">
							{/* <label htmlFor= "password">Password</label> */}
							<input name='password' type='password' className='form-control' value = {props.password} onChange = {props.handleChange} placeholder = 'password' />
						</div>
						
						<button type = 'submit' name = "/auth/signin" onClick = {props.handleSubmit}>Sign In</button>
						<hr/>
						<p className="signInHeading"> or </p>
						
						<Link to = "/signup" ><h4 className ="signInHeading">Register here</h4></Link>
					</form>
				</div>
			</div>
		
	);

}

export default SignIn;